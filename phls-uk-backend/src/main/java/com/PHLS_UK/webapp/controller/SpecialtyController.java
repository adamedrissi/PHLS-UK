package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.SpecialtyOptionResponse;
import com.PHLS_UK.webapp.repository.SpecialtyRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins  = {
    "http://localhost:3000",
    "https://phlsuk.netlify.app"
})
@RequestMapping("/api/specialties")
public class SpecialtyController {

    private final SpecialtyRepository specialtyRepository;

    public SpecialtyController(SpecialtyRepository specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }

    @GetMapping
    public List<SpecialtyOptionResponse> getAllSpecialties() {
        return specialtyRepository.findAll()
                .stream()
                .sorted((a, b) -> a.getName().compareToIgnoreCase(b.getName()))
                .map(specialty -> new SpecialtyOptionResponse(
                        specialty.getId(),
                        specialty.getName()
                ))
                .toList();
    }
}