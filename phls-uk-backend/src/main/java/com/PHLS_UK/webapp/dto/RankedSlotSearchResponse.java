package com.PHLS_UK.webapp.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class RankedSlotSearchResponse {

    private Long slotId;
    private Long providerId;
    private String providerName;
    private String clinicName;
    private String city;
    private String postcode;

    private BigDecimal clinicLatitude;
    private BigDecimal clinicLongitude;
    private BigDecimal price;
    private BigDecimal clinicRatingAverage;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    private List<String> specialties;

    private Double rankingScore;
    private String rankingModel;

    public RankedSlotSearchResponse() {
    }

    public RankedSlotSearchResponse(
            Long slotId,
            Long providerId,
            String providerName,
            String clinicName,
            String city,
            String postcode,
            BigDecimal price,
            BigDecimal clinicRatingAverage,
            BigDecimal clinicLatitude,
            BigDecimal clinicLongitude,
            LocalDateTime startTime,
            LocalDateTime endTime,
            List<String> specialties,
            Double rankingScore,
            String rankingModel
    ) {
        this.slotId = slotId;
        this.providerId = providerId;
        this.providerName = providerName;
        this.clinicName = clinicName;
        this.city = city;
        this.postcode = postcode;
        this.price = price;
        this.clinicLatitude = clinicLatitude;
        this.clinicLongitude = clinicLongitude;
        this.clinicRatingAverage = clinicRatingAverage;
        this.startTime = startTime;
        this.endTime = endTime;
        this.specialties = specialties;
        this.rankingScore = rankingScore;
        this.rankingModel = rankingModel;
    }

    public Long getSlotId() {
        return slotId;
    }

    public void setSlotId(Long slotId) {
        this.slotId = slotId;
    }

    public Long getProviderId() {
        return providerId;
    }

    public void setProviderId(Long providerId) {
        this.providerId = providerId;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getClinicName() {
        return clinicName;
    }

    public void setClinicName(String clinicName) {
        this.clinicName = clinicName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public BigDecimal getClinicLatitude() {
        return clinicLatitude;
    }

    public void setClinicLatitude(BigDecimal clinicLatitude) {
        this.clinicLatitude = clinicLatitude;
    }

    public BigDecimal getClinicLongitude() {
        return clinicLongitude;
    }

    public void setClinicLongitude(BigDecimal clinicLongitude) {
        this.clinicLongitude = clinicLongitude;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getClinicRatingAverage() {
        return clinicRatingAverage;
    }

    public void setClinicRatingAverage(BigDecimal clinicRatingAverage) {
        this.clinicRatingAverage = clinicRatingAverage;
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

    public List<String> getSpecialties() {
        return specialties;
    }

    public void setSpecialties(List<String> specialties) {
        this.specialties = specialties;
    }

    public Double getRankingScore() {
        return rankingScore;
    }

    public void setRankingScore(Double rankingScore) {
        this.rankingScore = rankingScore;
    }

    public String getRankingModel() {
        return rankingModel;
    }

    public void setRankingModel(String rankingModel) {
        this.rankingModel = rankingModel;
    }
}