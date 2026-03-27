package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.LocationSearchResponse;
import com.PHLS_UK.webapp.service.LocationSearchService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins  = {
    "http://localhost:3000",
    "https://phlsuk.netlify.app"
})
@RequestMapping("/api/locations")
public class LocationSearchController {

    private final LocationSearchService locationSearchService;

    public LocationSearchController(LocationSearchService locationSearchService) {
        this.locationSearchService = locationSearchService;
    }

    @GetMapping("/search")
    public List<LocationSearchResponse> search(@RequestParam String q) {
        return locationSearchService.searchUkLocations(q);
    }
}