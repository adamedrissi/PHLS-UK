package com.PHLS_UK.webapp.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class CreateAvailabilitySlotRequest {

    private Long userId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private BigDecimal price;

    public CreateAvailabilitySlotRequest() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}