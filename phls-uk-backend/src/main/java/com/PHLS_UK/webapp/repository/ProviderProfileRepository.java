package com.PHLS_UK.webapp.repository;

import com.PHLS_UK.webapp.entity.ProviderProfile;
import com.PHLS_UK.webapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface ProviderProfileRepository extends JpaRepository<ProviderProfile, Long> {

    Optional<ProviderProfile> findByUser(User user);

    @Query("""
        SELECT DISTINCT p
        FROM ProviderProfile p
        LEFT JOIN p.specialties s
        WHERE (:city IS NULL OR LOWER(p.clinic.city) = LOWER(:city))
            AND (:specialty IS NULL OR LOWER(s.name) = LOWER(:specialty))
            AND (:maxPrice IS NULL OR p.consultationPriceFrom <= :maxPrice)
    """)
    List<ProviderProfile> searchProviders(
        @Param("city") String city,
        @Param("specialty") String specialty,
        @Param("maxPrice") BigDecimal maxPrice
    );
}