package com.PHLS_UK.webapp.dto;

public class RescheduleBookingRequest {

    private Long userId;
    private Long newSlotId;

    public RescheduleBookingRequest() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getNewSlotId() {
        return newSlotId;
    }

    public void setNewSlotId(Long newSlotId) {
        this.newSlotId = newSlotId;
    }
}