package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.ProviderSearchResponse;
import com.PHLS_UK.webapp.service.ProviderSearchService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/providers")
public class ProviderSearchController {

    private final ProviderSearchService providerSearchService;

    public ProviderSearchController(ProviderSearchService providerSearchService) {
        this.providerSearchService = providerSearchService;
    }

    @GetMapping("/search")
    @Transactional(readOnly = true)
    public List<ProviderSearchResponse> searchProviders(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String specialty,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false, defaultValue = "false") Boolean availableOnly
    ) {
        return providerSearchService.searchProviders(city, specialty, maxPrice, availableOnly);
    }

    @GetMapping
    public List<ProviderSearchResponse> getAllProviders() {
        return providerSearchService.getAllProviders();
    }
}