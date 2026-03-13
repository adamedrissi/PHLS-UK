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
}