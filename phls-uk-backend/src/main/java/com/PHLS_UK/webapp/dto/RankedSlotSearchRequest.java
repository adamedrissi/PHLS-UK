package com.PHLS_UK.webapp.dto;

import com.PHLS_UK.webapp.enums.RankingModel;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.time.LocalDate;

public class RankedSlotSearchRequest {

    private String specialty;
    private String city;
    private BigDecimal maxPrice;
    private BigDecimal minRating;

    private Double userLatitude;
    private Double userLongitude;
    private Double radiusMiles;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate preferredDate;

    private String preferredTimeBucket; // MORNING, AFTERNOON, EVENING

    private RankingModel rankingModel = RankingModel.BASELINE;

    private Integer limit = 10;

    private Boolean evaluationMode = false;

    public Boolean getEvaluationMode() {
        return evaluationMode;
    }

    public void setEvaluationMode(Boolean evaluationMode) {
        this.evaluationMode = evaluationMode;
    }

    public RankedSlotSearchRequest() {
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public BigDecimal getMaxPrice() {
        return maxPrice;
    }

    public BigDecimal getMinRating() {
        return minRating;
    }

    public void setMinRating(BigDecimal minRating) {
        this.minRating = minRating;
    }

    public void setMaxPrice(BigDecimal maxPrice) {
        this.maxPrice = maxPrice;
    }

    public Double getUserLatitude() {
        return userLatitude;
    }

    public void setUserLatitude(Double userLatitude) {
        this.userLatitude = userLatitude;
    }

    public Double getUserLongitude() {
        return userLongitude;
    }

    public void setUserLongitude(Double userLongitude) {
        this.userLongitude = userLongitude;
    }

    public Double getRadiusMiles() {
        return radiusMiles;
    }

    public void setRadiusMiles(Double radiusMiles) {
        this.radiusMiles = radiusMiles;
    }

    public LocalDate getPreferredDate() {
        return preferredDate;
    }

    public void setPreferredDate(LocalDate preferredDate) {
        this.preferredDate = preferredDate;
    }

    public String getPreferredTimeBucket() {
        return preferredTimeBucket;
    }

    public void setPreferredTimeBucket(String preferredTimeBucket) {
        this.preferredTimeBucket = preferredTimeBucket;
    }

    public RankingModel getRankingModel() {
        return rankingModel;
    }

    public void setRankingModel(RankingModel rankingModel) {
        this.rankingModel = rankingModel;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }
}