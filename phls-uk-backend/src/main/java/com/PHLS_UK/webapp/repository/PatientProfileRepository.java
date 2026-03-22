package com.PHLS_UK.webapp.repository;

import com.PHLS_UK.webapp.entity.PatientProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientProfileRepository extends JpaRepository<PatientProfile, Long> {
    Optional<PatientProfile> findByUser_Id(Long userId);
}