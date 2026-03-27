package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.entity.Specialty;
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
    public List<String> getAllSpecialties() {
        return specialtyRepository.findAll()
                .stream()
                .map(Specialty::getName)
                .sorted(String.CASE_INSENSITIVE_ORDER)
                .toList();
    }
}