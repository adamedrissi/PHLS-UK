package com.PHLS_UK.webapp.repository;

import com.PHLS_UK.webapp.entity.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicRepository extends JpaRepository<Clinic, Long> {
}