package com.PHLS_UK.webapp.repository;

import com.PHLS_UK.webapp.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}