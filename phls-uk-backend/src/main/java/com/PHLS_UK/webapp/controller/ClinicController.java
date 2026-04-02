package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.ClinicOptionResponse;
import com.PHLS_UK.webapp.repository.ClinicRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/api/clinics")
@CrossOrigin(origins = {
    "http://localhost:3000",
    "https://phlsuk.netlify.app"
})
public class ClinicController {

    private final ClinicRepository clinicRepository;

    public ClinicController(ClinicRepository clinicRepository) {
        this.clinicRepository = clinicRepository;
    }

    @GetMapping
    public List<ClinicOptionResponse> getClinics() {
        return clinicRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(clinic -> clinic.getClinicName().toLowerCase()))
                .map(clinic -> new ClinicOptionResponse(
                        clinic.getId(),
                        clinic.getClinicName(),
                        clinic.getCity()
                ))
                .toList();
    }
}