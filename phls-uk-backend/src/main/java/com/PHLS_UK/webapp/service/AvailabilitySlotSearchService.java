package com.PHLS_UK.webapp.service;

import com.PHLS_UK.webapp.dto.AvailableSlotSearchResponse;
import com.PHLS_UK.webapp.entity.AvailabilitySlot;
import com.PHLS_UK.webapp.enums.SlotStatus;
import com.PHLS_UK.webapp.repository.AvailabilitySlotRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AvailabilitySlotSearchService {

    private final AvailabilitySlotRepository availabilitySlotRepository;

    public AvailabilitySlotSearchService(AvailabilitySlotRepository availabilitySlotRepository) {
        this.availabilitySlotRepository = availabilitySlotRepository;
    }

    @Transactional(readOnly = true)
    public List<AvailableSlotSearchResponse> searchAvailableSlots(
            String city,
            String specialty,
            BigDecimal maxPrice,
            LocalDate date
    ) {
        List<AvailabilitySlot> slots = availabilitySlotRepository
                .findByStatusAndStartTimeAfterOrderByStartTimeAsc(
                        SlotStatus.AVAILABLE,
                        LocalDateTime.now()
                );

        return slots.stream()
                .filter(slot -> city == null || city.isBlank()
                        || slot.getClinic().getCity().equalsIgnoreCase(city.trim()))
                .filter(slot -> specialty == null || specialty.isBlank()
                        || slot.getProvider().getSpecialties().stream()
                            .anyMatch(s -> s.getName().equalsIgnoreCase(specialty.trim())))
                .filter(slot -> maxPrice == null
                        || (slot.getPrice() != null && slot.getPrice().compareTo(maxPrice) <= 0))
                .filter(slot -> date == null
                        || slot.getStartTime().toLocalDate().equals(date))
                .map(this::mapToResponse)
                .toList();
    }
    
    private AvailableSlotSearchResponse mapToResponse(AvailabilitySlot slot) {
        return new AvailableSlotSearchResponse(
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
                slot.getProvider().getSpecialties()
                        .stream()
                        .map(s -> s.getName())
                        .sorted()
                        .toList()
        );
    }
}