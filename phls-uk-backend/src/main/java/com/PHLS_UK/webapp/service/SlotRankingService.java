package com.PHLS_UK.webapp.service;

import com.PHLS_UK.webapp.dto.RankedSlotSearchRequest;
import com.PHLS_UK.webapp.dto.RankedSlotSearchResponse;
import com.PHLS_UK.webapp.entity.AvailabilitySlot;
import com.PHLS_UK.webapp.enums.SlotStatus;
import com.PHLS_UK.webapp.repository.AvailabilitySlotRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;

@Service
public class SlotRankingService {

    private final AvailabilitySlotRepository availabilitySlotRepository;

    public SlotRankingService(AvailabilitySlotRepository availabilitySlotRepository) {
        this.availabilitySlotRepository = availabilitySlotRepository;
    }

    @Transactional(readOnly = true)
    public List<RankedSlotSearchResponse> searchAndRank(RankedSlotSearchRequest request) {
        List<AvailabilitySlot> candidates = availabilitySlotRepository
                .findByStatusAndStartTimeAfterOrderByStartTimeAsc(
                        SlotStatus.AVAILABLE,
                        LocalDateTime.now()
                );

        return candidates.stream()
                .filter(slot -> preFilter(slot, request))
                .map(slot -> mapRanked(slot, request))
                .sorted(Comparator.comparing(RankedSlotSearchResponse::getRankingScore).reversed())
                .limit(request.getLimit() == null ? 10 : request.getLimit())
                .toList();
    }

    private boolean preFilter(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        boolean cityOk = request.getCity() == null || request.getCity().isBlank()
            || slot.getClinic().getCity().equalsIgnoreCase(request.getCity().trim());
        boolean specialtyOk = request.getSpecialty() == null || request.getSpecialty().isBlank()
            || slot.getProvider().getSpecialties().stream()
            .anyMatch(s -> s.getName().equalsIgnoreCase(request.getSpecialty().trim()));
        boolean priceOk = request.getMaxPrice() == null
            || (slot.getPrice() != null && slot.getPrice().compareTo(request.getMaxPrice()) <= 0);
        boolean dateOk = true;
        if (request.getPreferredDate() != null) {
            long daysDiff = Math.abs(
                slot.getStartTime().toLocalDate().toEpochDay()
                - request.getPreferredDate().toEpochDay()
        );
        dateOk = daysDiff <= 7; // allow ±7 days instead of exact match
        }
        return cityOk && specialtyOk && priceOk && dateOk;
    }

    private RankedSlotSearchResponse mapRanked(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        double score = switch (request.getRankingModel()) {
            case CONTENT -> computeContentScore(slot, request);
            case BASELINE -> computeBaselineScore(slot, request);
        };

        return new RankedSlotSearchResponse(
                slot.getId(),
                slot.getProvider().getId(),
                slot.getProvider().getFullName(),
                slot.getClinic().getClinicName(),
                slot.getClinic().getCity(),
                slot.getClinic().getPostcode(),
                slot.getPrice(),
                slot.getClinic().getRatingAverage(),
                slot.getStartTime(),
                slot.getEndTime(),
                slot.getProvider().getSpecialties().stream()
                        .map(s -> s.getName())
                        .sorted()
                        .toList(),
                score,
                request.getRankingModel().name()
        );
    }

    private double computeBaselineScore(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        double specialtyMatch = computeSpecialtyMatch(slot, request);
        double priceScore = computePriceScore(slot.getPrice(), request.getMaxPrice());
        double dateScore = computeDateScore(slot, request);
        double timeBucketScore = computeTimeBucketScore(slot, request);
        double ratingScore = normalizeRating(slot.getClinic().getRatingAverage());
        double insuranceScore = computeInsuranceScore(slot, request);

        return 0.30 * specialtyMatch
                + 0.15 * priceScore
                + 0.20 * dateScore
                + 0.10 * timeBucketScore
                + 0.20 * ratingScore
                + 0.05 * insuranceScore;
    }

    private double computeContentScore(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        double[] queryVector = buildQueryVector(request);
        double[] itemVector = buildItemVector(slot);
        return cosineSimilarity(queryVector, itemVector);
    }

    private double computeSpecialtyMatch(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        if (request.getSpecialty() == null || request.getSpecialty().isBlank()) {
            return 0.5;
        }

        return slot.getProvider().getSpecialties().stream()
                .anyMatch(s -> s.getName().equalsIgnoreCase(request.getSpecialty().trim()))
                ? 1.0 : 0.0;
    }

    private double computePriceScore(BigDecimal slotPrice, BigDecimal maxPrice) {
        if (slotPrice == null) {
            return 0.0;
        }
        if (maxPrice == null || maxPrice.compareTo(BigDecimal.ZERO) <= 0) {
            return 0.5;
        }
        if (slotPrice.compareTo(maxPrice) > 0) {
            return 0.0;
        }

        double p = slotPrice.doubleValue();
        double b = maxPrice.doubleValue();
        return Math.max(0.0, 1.0 - (p / b));
    }

    private double computeDateScore(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        if (request.getPreferredDate() == null) {
            return 0.5;
        }

        if (slot.getStartTime().toLocalDate().equals(request.getPreferredDate())) {
            return 1.0;
        }

        long daysDiff = Math.abs(
                slot.getStartTime().toLocalDate().toEpochDay() - request.getPreferredDate().toEpochDay()
        );

        if (daysDiff <= 3) {
            return 0.6;
        }
        if (daysDiff <= 7) {
            return 0.3;
        }
        return 0.0;
    }

    private double computeTimeBucketScore(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        if (request.getPreferredTimeBucket() == null || request.getPreferredTimeBucket().isBlank()) {
            return 0.5;
        }

        String slotBucket = getTimeBucket(slot.getStartTime().getHour());
        return slotBucket.equalsIgnoreCase(request.getPreferredTimeBucket().trim()) ? 1.0 : 0.0;
    }

    private double normalizeRating(BigDecimal rating) {
        if (rating == null) {
            return 0.0;
        }
        return Math.max(0.0, Math.min(1.0, rating.doubleValue() / 5.0));
    }

    private double computeInsuranceScore(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        if (request.getInsuranceProviderName() == null || request.getInsuranceProviderName().isBlank()) {
            return 0.5;
        }

        // Placeholder until clinic insurance mapping is exposed in entity layer
        return 0.0;
    }

    private String getTimeBucket(int hour) {
        if (hour < 12) return "MORNING";
        if (hour < 17) return "AFTERNOON";
        return "EVENING";
    }

    private double[] buildQueryVector(RankedSlotSearchRequest request) {
        return new double[] {
                textMatchFeature(request.getSpecialty(), "Physiotherapy"),
                textMatchFeature(request.getSpecialty(), "Cardiology"),
                textMatchFeature(request.getSpecialty(), "Dermatology"),
                textMatchFeature(request.getCity(), "London"),
                textMatchFeature(request.getCity(), "Manchester"),
                normalizeBudget(request.getMaxPrice()),
                timeBucketFeature(request.getPreferredTimeBucket(), "MORNING"),
                timeBucketFeature(request.getPreferredTimeBucket(), "AFTERNOON"),
                timeBucketFeature(request.getPreferredTimeBucket(), "EVENING")
        };
    }

    private double[] buildItemVector(AvailabilitySlot slot) {
        boolean hasPhysio = slot.getProvider().getSpecialties().stream()
                .anyMatch(s -> s.getName().equalsIgnoreCase("Physiotherapy"));
        boolean hasCardiology = slot.getProvider().getSpecialties().stream()
                .anyMatch(s -> s.getName().equalsIgnoreCase("Cardiology"));
        boolean hasDermatology = slot.getProvider().getSpecialties().stream()
                .anyMatch(s -> s.getName().equalsIgnoreCase("Dermatology"));

        return new double[] {
                hasPhysio ? 1.0 : 0.0,
                hasCardiology ? 1.0 : 0.0,
                hasDermatology ? 1.0 : 0.0,
                "London".equalsIgnoreCase(slot.getClinic().getCity()) ? 1.0 : 0.0,
                "Manchester".equalsIgnoreCase(slot.getClinic().getCity()) ? 1.0 : 0.0,
                normalizeBudget(slot.getPrice()),
                timeBucketFeature(getTimeBucket(slot.getStartTime().getHour()), "MORNING"),
                timeBucketFeature(getTimeBucket(slot.getStartTime().getHour()), "AFTERNOON"),
                timeBucketFeature(getTimeBucket(slot.getStartTime().getHour()), "EVENING")
        };
    }

    private double textMatchFeature(String actual, String target) {
        if (actual == null || actual.isBlank()) {
            return 0.0;
        }
        return actual.equalsIgnoreCase(target) ? 1.0 : 0.0;
    }

    private double timeBucketFeature(String actual, String target) {
        if (actual == null || actual.isBlank()) {
            return 0.0;
        }
        return actual.equalsIgnoreCase(target) ? 1.0 : 0.0;
    }

    private double normalizeBudget(BigDecimal value) {
        if (value == null) {
            return 0.0;
        }
        double v = value.doubleValue();
        return Math.min(v / 200.0, 1.0);
    }

    private double cosineSimilarity(double[] a, double[] b) {
        if (a.length != b.length) {
            throw new IllegalArgumentException("Vector lengths must match");
        }

        double dot = 0.0;
        double normA = 0.0;
        double normB = 0.0;

        for (int i = 0; i < a.length; i++) {
            dot += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }

        if (normA == 0.0 || normB == 0.0) {
            return 0.0;
        }

        return dot / (Math.sqrt(normA) * Math.sqrt(normB));
    }
}