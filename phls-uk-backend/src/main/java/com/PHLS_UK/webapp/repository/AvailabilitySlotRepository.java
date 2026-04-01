package com.PHLS_UK.webapp.repository;

import com.PHLS_UK.webapp.entity.AvailabilitySlot;
import com.PHLS_UK.webapp.enums.SlotStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface AvailabilitySlotRepository extends JpaRepository<AvailabilitySlot, Long> {

    List<AvailabilitySlot> findByStatusAndStartTimeAfterOrderByStartTimeAsc(
            SlotStatus status,
            LocalDateTime startTime
    );

    boolean existsByProvider_IdAndStatusAndStartTimeAfter(
            Long providerId,
            SlotStatus status,
            LocalDateTime startTime
    );

    List<AvailabilitySlot> findByProvider_User_IdOrderByStartTimeAsc(Long userId);

    java.util.Optional<AvailabilitySlot> findByIdAndProvider_User_Id(Long slotId, Long userId);

    boolean existsByProvider_IdAndStartTimeLessThanAndEndTimeGreaterThan(
            Long providerId,
            LocalDateTime endTime,
            LocalDateTime startTime
    );

    long countByProvider_User_IdAndStatusAndStartTimeAfter(Long userId, SlotStatus status, LocalDateTime startTime);
}