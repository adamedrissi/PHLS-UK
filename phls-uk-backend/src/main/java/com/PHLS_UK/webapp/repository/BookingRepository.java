package com.PHLS_UK.webapp.repository;

import com.PHLS_UK.webapp.entity.Booking;
import com.PHLS_UK.webapp.enums.BookingStatus;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByPatient_User_IdOrderByBookedAtDesc(Long userId);
    Optional<Booking> findByIdAndPatient_User_Id(Long bookingId, Long userId);
    List<Booking> findByProvider_User_IdOrderByBookedAtDesc(Long userId);
    Optional<Booking> findByIdAndProvider_User_Id(Long bookingId, Long userId);
    void deleteByIdAndPatient_User_Id(Long bookingId, Long userId);
    void deleteByIdAndProvider_User_Id(Long bookingId, Long userId);
    long countByPatient_User_IdAndBookingStatusIn(Long userId, List<BookingStatus> statuses);
}