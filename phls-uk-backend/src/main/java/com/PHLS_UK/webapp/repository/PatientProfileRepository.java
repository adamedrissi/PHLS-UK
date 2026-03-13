package com.PHLS_UK.webapp.repository;

import com.PHLS_UK.webapp.entity.PatientProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientProfileRepository extends JpaRepository<PatientProfile, Long> {
}