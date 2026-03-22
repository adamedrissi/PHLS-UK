package com.PHLS_UK.webapp.service;

import com.PHLS_UK.webapp.dto.CreateAvailabilitySlotRequest;
import com.PHLS_UK.webapp.dto.ProviderSlotResponse;
import com.PHLS_UK.webapp.entity.AvailabilitySlot;
import com.PHLS_UK.webapp.entity.ProviderProfile;
import com.PHLS_UK.webapp.entity.User;
import com.PHLS_UK.webapp.enums.Role;
import com.PHLS_UK.webapp.enums.SlotStatus;
import com.PHLS_UK.webapp.repository.AvailabilitySlotRepository;
import com.PHLS_UK.webapp.repository.ProviderProfileRepository;
import com.PHLS_UK.webapp.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProviderSlotService {

    private final AvailabilitySlotRepository availabilitySlotRepository;
    private final ProviderProfileRepository providerProfileRepository;
    private final UserRepository userRepository;

    public ProviderSlotService(AvailabilitySlotRepository availabilitySlotRepository,
                               ProviderProfileRepository providerProfileRepository,
                               UserRepository userRepository) {
        this.availabilitySlotRepository = availabilitySlotRepository;
        this.providerProfileRepository = providerProfileRepository;
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    public List<ProviderSlotResponse> getProviderSlots(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getRole() != Role.PROVIDER) {
            throw new RuntimeException("Only providers can manage slots");
        }

        return availabilitySlotRepository.findByProvider_User_IdOrderByStartTimeAsc(userId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Transactional
    public ProviderSlotResponse createSlot(CreateAvailabilitySlotRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getRole() != Role.PROVIDER) {
            throw new RuntimeException("Only providers can create slots");
        }

        ProviderProfile provider = providerProfileRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Provider profile not found"));

        if (request.getStartTime() == null || request.getEndTime() == null) {
            throw new RuntimeException("Start time and end time are required");
        }

        if (!request.getEndTime().isAfter(request.getStartTime())) {
            throw new RuntimeException("End time must be after start time");
        }

        if (!request.getStartTime().isAfter(LocalDateTime.now())) {
            throw new RuntimeException("Slot must be in the future");
        }

        if (request.getPrice() == null || request.getPrice().signum() < 0) {
            throw new RuntimeException("Price must be zero or greater");
        }

        boolean overlaps = availabilitySlotRepository.existsByProvider_IdAndStartTimeLessThanAndEndTimeGreaterThan(
                provider.getId(),
                request.getEndTime(),
                request.getStartTime()
        );

        if (overlaps) {
            throw new RuntimeException("This slot overlaps with an existing slot");
        }

        AvailabilitySlot slot = new AvailabilitySlot();
        slot.setProvider(provider);
        slot.setClinic(provider.getClinic());
        slot.setStartTime(request.getStartTime());
        slot.setEndTime(request.getEndTime());
        slot.setPrice(request.getPrice());
        slot.setStatus(SlotStatus.AVAILABLE);

        AvailabilitySlot saved = availabilitySlotRepository.save(slot);
        return mapToResponse(saved);
    }

    @Transactional
    public String deleteSlot(Long slotId, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getRole() != Role.PROVIDER) {
            throw new RuntimeException("Only providers can delete slots");
        }

        AvailabilitySlot slot = availabilitySlotRepository.findByIdAndProvider_User_Id(slotId, userId)
                .orElseThrow(() -> new RuntimeException("Slot not found"));

        if (slot.getStatus() == SlotStatus.BOOKED) {
            throw new RuntimeException("Booked slots cannot be deleted");
        }

        availabilitySlotRepository.delete(slot);
        return "Slot deleted successfully";
    }

    private ProviderSlotResponse mapToResponse(AvailabilitySlot slot) {
        return new ProviderSlotResponse(
                slot.getId(),
                slot.getClinic().getClinicName(),
                slot.getStartTime(),
                slot.getEndTime(),
                slot.getPrice(),
                slot.getStatus().name()
        );
    }
}