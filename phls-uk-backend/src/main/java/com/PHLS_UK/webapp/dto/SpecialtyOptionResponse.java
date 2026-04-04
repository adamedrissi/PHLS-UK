package com.PHLS_UK.webapp.dto;

public class SpecialtyOptionResponse {
    private Long id;
    private String name;

    public SpecialtyOptionResponse(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}