package com.PHLS_UK.webapp.dto;

public class ClinicOptionResponse {
    private Long id;
    private String clinicName;
    private String city;

    public ClinicOptionResponse(Long id, String clinicName, String city) {
        this.id = id;
        this.clinicName = clinicName;
        this.city = city;
    }

    public Long getId() {
        return id;
    }

    public String getClinicName() {
        return clinicName;
    }

    public String getCity() {
        return city;
    }
}