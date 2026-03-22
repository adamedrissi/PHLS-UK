package com.PHLS_UK.webapp.service;

import com.PHLS_UK.webapp.dto.LocationSearchResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

@Service
public class LocationSearchService {

    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${location.search.base-url:https://nominatim.openstreetmap.org}")
    private String baseUrl;

    public List<LocationSearchResponse> searchUkLocations(String query) {
        URI uri = UriComponentsBuilder
            .fromUriString(baseUrl)
            .path("/search")
            .queryParam("format", "jsonv2")
            .queryParam("q", query)
            .queryParam("countrycodes", "gb")
            .queryParam("limit", 5)
            .build()
            .toUri();
        RequestEntity<Void> request = RequestEntity
                .get(uri)
                .header("User-Agent", "PHLS-UK/1.0")
                .build();

        List<Map<String, Object>> results = restTemplate.exchange(
                request,
                new ParameterizedTypeReference<List<Map<String, Object>>>() {}
        ).getBody();

        if (results == null) {
            return List.of();
        }

        return results.stream()
                .map(item -> new LocationSearchResponse(
                        (String) item.get("display_name"),
                        item.get("lat") == null ? null : Double.valueOf(item.get("lat").toString()),
                        item.get("lon") == null ? null : Double.valueOf(item.get("lon").toString())
                ))
                .toList();
    }
}