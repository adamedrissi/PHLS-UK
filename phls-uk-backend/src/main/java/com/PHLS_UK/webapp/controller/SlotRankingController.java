package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.RankedSlotSearchRequest;
import com.PHLS_UK.webapp.dto.RankedSlotSearchResponse;
import com.PHLS_UK.webapp.service.SlotRankingService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/ranking")
public class SlotRankingController {

    private final SlotRankingService slotRankingService;

    public SlotRankingController(SlotRankingService slotRankingService) {
        this.slotRankingService = slotRankingService;
    }

    @GetMapping("/slots")
    public List<RankedSlotSearchResponse> rankSlots(@ModelAttribute RankedSlotSearchRequest request) {
        return slotRankingService.searchAndRank(request);
    }
}