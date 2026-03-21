package com.PHLS_UK.webapp.dto;

public class SearchResultWithRelevance {

    private Long slotId;
    private Double rankingScore;
    private Integer relevanceLabel; // 0,1,2,3

    public SearchResultWithRelevance() {
    }

    public SearchResultWithRelevance(Long slotId, Double rankingScore, Integer relevanceLabel) {
        this.slotId = slotId;
        this.rankingScore = rankingScore;
        this.relevanceLabel = relevanceLabel;
    }

    public Long getSlotId() {
        return slotId;
    }

    public void setSlotId(Long slotId) {
        this.slotId = slotId;
    }

    public Double getRankingScore() {
        return rankingScore;
    }

    public void setRankingScore(Double rankingScore) {
        this.rankingScore = rankingScore;
    }

    public Integer getRelevanceLabel() {
        return relevanceLabel;
    }

    public void setRelevanceLabel(Integer relevanceLabel) {
        this.relevanceLabel = relevanceLabel;
    }
}