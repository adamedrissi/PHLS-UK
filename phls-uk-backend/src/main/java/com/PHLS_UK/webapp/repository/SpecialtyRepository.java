package com.PHLS_UK.webapp.repository;

import com.PHLS_UK.webapp.entity.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface SpecialtyRepository extends JpaRepository<Specialty, Long> {
    Optional<Specialty> findByNameIgnoreCase(String name);
}