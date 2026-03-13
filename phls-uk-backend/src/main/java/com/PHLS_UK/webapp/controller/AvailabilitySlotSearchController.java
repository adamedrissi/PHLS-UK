package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.AvailableSlotSearchResponse;
import com.PHLS_UK.webapp.service.AvailabilitySlotSearchService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/slots")
public class AvailabilitySlotSearchController {

    private final AvailabilitySlotSearchService availabilitySlotSearchService;

    public AvailabilitySlotSearchController(AvailabilitySlotSearchService availabilitySlotSearchService) {
        this.availabilitySlotSearchService = availabilitySlotSearchService;
    }

    @GetMapping("/search")
    public List<AvailableSlotSearchResponse> searchAvailableSlots(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String specialty,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        return availabilitySlotSearchService.searchAvailableSlots(city, specialty, maxPrice, date);
    }
}