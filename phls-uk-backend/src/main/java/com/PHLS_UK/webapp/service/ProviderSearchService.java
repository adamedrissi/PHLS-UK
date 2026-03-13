package com.PHLS_UK.webapp.service;

import com.PHLS_UK.webapp.dto.ProviderSearchResponse;
import com.PHLS_UK.webapp.entity.ProviderProfile;
import com.PHLS_UK.webapp.enums.SlotStatus;
import com.PHLS_UK.webapp.repository.AvailabilitySlotRepository;
import com.PHLS_UK.webapp.repository.ProviderProfileRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProviderSearchService {

    private final ProviderProfileRepository providerProfileRepository;
    private final AvailabilitySlotRepository availabilitySlotRepository;

    public ProviderSearchService(
            ProviderProfileRepository providerProfileRepository,
            AvailabilitySlotRepository availabilitySlotRepository
    ) {
        this.providerProfileRepository = providerProfileRepository;
        this.availabilitySlotRepository = availabilitySlotRepository;
    }

    @Transactional(readOnly = true)
    public List<ProviderSearchResponse> getAllProviders() {
        return providerProfileRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<ProviderSearchResponse> searchProviders(
            String city,
            String specialty,
            BigDecimal maxPrice,
            Boolean availableOnly
    ) {
        return providerProfileRepository.findAll()
                .stream()
                .filter(provider -> city == null || city.isBlank()
                        || provider.getClinic().getCity().equalsIgnoreCase(city.trim()))
                .filter(provider -> specialty == null || specialty.isBlank()
                        || provider.getSpecialties().stream()
                            .anyMatch(s -> s.getName().equalsIgnoreCase(specialty.trim())))
                .filter(provider -> maxPrice == null
                        || (provider.getConsultationPriceFrom() != null
                        && provider.getConsultationPriceFrom().compareTo(maxPrice) <= 0))
                .filter(provider -> !Boolean.TRUE.equals(availableOnly)
                        || availabilitySlotRepository.existsByProvider_IdAndStatusAndStartTimeAfter(
                                provider.getId(),
                                SlotStatus.AVAILABLE,
                                LocalDateTime.now()
                        ))
                .map(this::mapToResponse)
                .toList();
    }

    private ProviderSearchResponse mapToResponse(ProviderProfile provider) {
        return new ProviderSearchResponse(
                provider.getId(),
                provider.getFullName(),
                provider.getClinic().getClinicName(),
                provider.getClinic().getCity(),
                provider.getClinic().getPostcode(),
                provider.getConsultationPriceFrom(),
                provider.getClinic().getRatingAverage(),
                provider.getSpecialties()
                        .stream()
                        .map(s -> s.getName())
                        .sorted()
                        .toList()
        );
    }
}