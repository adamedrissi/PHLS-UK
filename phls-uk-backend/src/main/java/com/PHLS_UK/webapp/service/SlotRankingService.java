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
                .filter(slot -> shouldIncludeCandidate(slot, request))
                .map(slot -> mapRanked(slot, request))
                .sorted(Comparator.comparing(RankedSlotSearchResponse::getRankingScore).reversed())
                .limit(request.getLimit() == null ? 10 : request.getLimit())
                .toList();
    }

    private boolean shouldIncludeCandidate(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        boolean evaluationMode = Boolean.TRUE.equals(request.getEvaluationMode());

        if (evaluationMode) {
            return evaluationPreFilter(slot, request);
        }

        return appPreFilter(slot, request);
    }

    //Production/app filtering
    private boolean appPreFilter(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        boolean specialtyOk = request.getSpecialty() == null || request.getSpecialty().isBlank()
                || slot.getProvider().getSpecialties().stream()
                .anyMatch(s -> s.getName().equalsIgnoreCase(request.getSpecialty().trim()));

        boolean priceOk = request.getMaxPrice() == null
                || (slot.getPrice() != null && slot.getPrice().compareTo(request.getMaxPrice()) <= 0);

        boolean ratingOk = request.getMinRating() == null
                || (slot.getClinic().getRatingAverage() != null
                && slot.getClinic().getRatingAverage().compareTo(request.getMinRating()) >= 0);

        boolean dateOk = true;
        if (request.getPreferredDate() != null) {
            long daysDiff = Math.abs(
                    slot.getStartTime().toLocalDate().toEpochDay()
                            - request.getPreferredDate().toEpochDay()
            );
            dateOk = daysDiff <= 7;
        }

        boolean radiusOk = true;
        if (request.getUserLatitude() != null
                && request.getUserLongitude() != null
                && request.getRadiusMiles() != null
                && slot.getClinic().getLatitude() != null
                && slot.getClinic().getLongitude() != null) {

            double distanceMiles = haversineMiles(
                    request.getUserLatitude(),
                    request.getUserLongitude(),
                    slot.getClinic().getLatitude().doubleValue(),
                    slot.getClinic().getLongitude().doubleValue()
            );

            radiusOk = distanceMiles <= request.getRadiusMiles();
        }

        return specialtyOk && priceOk && ratingOk && dateOk && radiusOk;
    }

    //Evaluation filtering: specialty - hard candidate filter, price, rating, date, time, and distance - soft scoring factors
    private boolean evaluationPreFilter(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        boolean specialtyOk = request.getSpecialty() == null || request.getSpecialty().isBlank()
                || slot.getProvider().getSpecialties().stream()
                .anyMatch(s -> s.getName().equalsIgnoreCase(request.getSpecialty().trim()));

        return specialtyOk;
    }

    private double haversineMiles(double lat1, double lon1, double lat2, double lon2) {
        final double earthRadiusMiles = 3958.8;

        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);

        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(Math.toRadians(lat1))
                * Math.cos(Math.toRadians(lat2))
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusMiles * c;
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
                slot.getClinic().getLatitude(),
                slot.getClinic().getLongitude(),
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
        double distanceScore = computeDistanceScore(slot, request);

        return 0.30 * specialtyMatch
                + 0.15 * priceScore
                + 0.15 * dateScore
                + 0.10 * timeBucketScore
                + 0.15 * ratingScore
                + 0.15 * distanceScore;
    }

    private double computeContentScore(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        double totalScore = 0.0;
        int activeFeatures = 0;

        if (request.getSpecialty() != null && !request.getSpecialty().isBlank()) {
            totalScore += computeSpecialtyMatch(slot, request);
            activeFeatures++;
        }

        if (request.getMaxPrice() != null) {
            totalScore += computePriceScore(slot.getPrice(), request.getMaxPrice());
            activeFeatures++;
        }

        if (request.getMinRating() != null) {
            totalScore += computeRatingPreferenceScore(slot, request);
            activeFeatures++;
        }

        if (request.getPreferredDate() != null) {
            totalScore += computeDateScore(slot, request);
            activeFeatures++;
        }

        if (request.getPreferredTimeBucket() != null && !request.getPreferredTimeBucket().isBlank()) {
            totalScore += computeTimeBucketScore(slot, request);
            activeFeatures++;
        }

        if (request.getUserLatitude() != null
                && request.getUserLongitude() != null
                && request.getRadiusMiles() != null) {
            totalScore += computeDistanceScore(slot, request);
            activeFeatures++;
        }

        if (activeFeatures == 0) {
            return normalizeRating(slot.getClinic().getRatingAverage());
        }

        return totalScore / activeFeatures;
    }

    private double computeRatingPreferenceScore(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        BigDecimal clinicRating = slot.getClinic().getRatingAverage();
        BigDecimal minRating = request.getMinRating();

        if (clinicRating == null) {
            return 0.0;
        }

        if (minRating == null) {
            return normalizeRating(clinicRating);
        }

        if (clinicRating.compareTo(minRating) >= 0) {
            return 1.0;
        }

        double gap = minRating.subtract(clinicRating).doubleValue();
        return Math.max(0.0, 1.0 - gap);
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
                slot.getStartTime().toLocalDate().toEpochDay()
                        - request.getPreferredDate().toEpochDay()
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

    private double computeDistanceScore(AvailabilitySlot slot, RankedSlotSearchRequest request) {
        if (request.getUserLatitude() == null
                || request.getUserLongitude() == null
                || request.getRadiusMiles() == null
                || slot.getClinic().getLatitude() == null
                || slot.getClinic().getLongitude() == null) {
            return 0.5;
        }

        double distanceMiles = haversineMiles(
                request.getUserLatitude(),
                request.getUserLongitude(),
                slot.getClinic().getLatitude().doubleValue(),
                slot.getClinic().getLongitude().doubleValue()
        );

        double radius = request.getRadiusMiles();
        if (radius <= 0) {
            return 0.0;
        }

        return Math.max(0.0, 1.0 - (distanceMiles / radius));
    }

    private String getTimeBucket(int hour) {
        if (hour < 12) return "MORNING";
        if (hour < 17) return "AFTERNOON";
        return "EVENING";
    }
}