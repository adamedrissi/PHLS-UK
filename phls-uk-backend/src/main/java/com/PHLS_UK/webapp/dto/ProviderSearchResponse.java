package com.PHLS_UK.webapp.dto;

import java.math.BigDecimal;
import java.util.List;

public class ProviderSearchResponse {

    private Long providerId;
    private String providerName;
    private String clinicName;
    private String city;
    private String postcode;
    private BigDecimal consultationPriceFrom;
    private BigDecimal clinicRatingAverage;
    private List<String> specialties;

    public ProviderSearchResponse() {
    }

    public ProviderSearchResponse(
            Long providerId,
            String providerName,
            String clinicName,
            String city,
            String postcode,
            BigDecimal consultationPriceFrom,
            BigDecimal clinicRatingAverage,
            List<String> specialties
    ) {
        this.providerId = providerId;
        this.providerName = providerName;
        this.clinicName = clinicName;
        this.city = city;
        this.postcode = postcode;
        this.consultationPriceFrom = consultationPriceFrom;
        this.clinicRatingAverage = clinicRatingAverage;
        this.specialties = specialties;
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

    public BigDecimal getConsultationPriceFrom() {
        return consultationPriceFrom;
    }

    public void setConsultationPriceFrom(BigDecimal consultationPriceFrom) {
        this.consultationPriceFrom = consultationPriceFrom;
    }

    public BigDecimal getClinicRatingAverage() {
        return clinicRatingAverage;
    }

    public void setClinicRatingAverage(BigDecimal clinicRatingAverage) {
        this.clinicRatingAverage = clinicRatingAverage;
    }

    public List<String> getSpecialties() {
        return specialties;
    }

    public void setSpecialties(List<String> specialties) {
        this.specialties = specialties;
    }
}