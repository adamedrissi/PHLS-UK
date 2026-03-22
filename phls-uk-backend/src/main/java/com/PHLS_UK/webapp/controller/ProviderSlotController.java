package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.CreateAvailabilitySlotRequest;
import com.PHLS_UK.webapp.dto.ProviderSlotResponse;
import com.PHLS_UK.webapp.service.ProviderSlotService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/provider/slots")
public class ProviderSlotController {

    private final ProviderSlotService providerSlotService;

    public ProviderSlotController(ProviderSlotService providerSlotService) {
        this.providerSlotService = providerSlotService;
    }

    @GetMapping
    public List<ProviderSlotResponse> getProviderSlots(@RequestParam Long userId) {
        return providerSlotService.getProviderSlots(userId);
    }

    @PostMapping
    public ProviderSlotResponse createSlot(@RequestBody CreateAvailabilitySlotRequest request) {
        return providerSlotService.createSlot(request);
    }

    @DeleteMapping("/{slotId}")
    public Map<String, String> deleteSlot(@PathVariable Long slotId,
                                          @RequestParam Long userId) {
        String message = providerSlotService.deleteSlot(slotId, userId);
        return Map.of("message", message);
    }
}