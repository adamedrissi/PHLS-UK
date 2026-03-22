package com.PHLS_UK.webapp.dto;

import java.time.LocalDateTime;

public class BookingResponse {

    private Long bookingId;
    private Long slotId;
    private String providerName;
    private String clinicName;
    private String bookingStatus;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String message;

    public BookingResponse() {
    }

    public BookingResponse(Long bookingId, Long slotId, String providerName, String clinicName,
                           String bookingStatus, LocalDateTime startTime, LocalDateTime endTime,
                           String message) {
        this.bookingId = bookingId;
        this.slotId = slotId;
        this.providerName = providerName;
        this.clinicName = clinicName;
        this.bookingStatus = bookingStatus;
        this.startTime = startTime;
        this.endTime = endTime;
        this.message = message;
    }

    public Long getBookingId() {
        return bookingId;
    }

    public Long getSlotId() {
        return slotId;
    }

    public String getProviderName() {
        return providerName;
    }

    public String getClinicName() {
        return clinicName;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public String getMessage() {
        return message;
    }
}