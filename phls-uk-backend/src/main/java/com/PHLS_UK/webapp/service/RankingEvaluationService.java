package com.PHLS_UK.webapp.service;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RankingEvaluationService {

    public double dcgAtK(List<Integer> relevances, int k) {
        double dcg = 0.0;
        for (int i = 0; i < Math.min(k, relevances.size()); i++) {
            int rel = relevances.get(i);
            dcg += (Math.pow(2, rel) - 1) / log2(i + 2);
        }
        return dcg;
    }

    public double ndcgAtK(List<Integer> predictedOrderRelevances, List<Integer> idealOrderRelevances, int k) {
        double dcg = dcgAtK(predictedOrderRelevances, k);
        double idcg = dcgAtK(idealOrderRelevances, k);
        if (idcg == 0.0) {
            return 0.0;
        }
        return dcg / idcg;
    }

    private double log2(int value) {
        return Math.log(value) / Math.log(2);
    }
}