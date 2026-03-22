package com.PHLS_UK.webapp.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class ProviderSlotResponse {

    private Long slotId;
    private String clinicName;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private BigDecimal price;
    private String status;

    public ProviderSlotResponse() {
    }

    public ProviderSlotResponse(Long slotId, String clinicName, LocalDateTime startTime,
                                LocalDateTime endTime, BigDecimal price, String status) {
        this.slotId = slotId;
        this.clinicName = clinicName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.price = price;
        this.status = status;
    }

    public Long getSlotId() {
        return slotId;
    }

    public String getClinicName() {
        return clinicName;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getStatus() {
        return status;
    }
}