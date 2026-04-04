package com.PHLS_UK.webapp.service;

import com.PHLS_UK.webapp.dto.LoginRequest;
import com.PHLS_UK.webapp.dto.LoginResponse;
import com.PHLS_UK.webapp.dto.PatientRegisterRequest;
import com.PHLS_UK.webapp.dto.ProviderRegisterRequest;
import com.PHLS_UK.webapp.entity.PatientProfile;
import com.PHLS_UK.webapp.entity.ProviderProfile;
import com.PHLS_UK.webapp.entity.User;
import com.PHLS_UK.webapp.enums.Role;
import com.PHLS_UK.webapp.repository.ClinicRepository;
import com.PHLS_UK.webapp.repository.PatientProfileRepository;
import com.PHLS_UK.webapp.repository.ProviderProfileRepository;
import com.PHLS_UK.webapp.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.PHLS_UK.webapp.entity.Specialty;
import com.PHLS_UK.webapp.repository.SpecialtyRepository;
import com.PHLS_UK.webapp.dto.ChangePasswordRequest;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PatientProfileRepository patientRepo;
    private final ProviderProfileRepository providerRepo;
    private final ClinicRepository clinicRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final SpecialtyRepository specialtyRepo;

    public AuthService(UserRepository userRepository,
                       PatientProfileRepository patientRepo,
                       ProviderProfileRepository providerRepo,
                       ClinicRepository clinicRepo,
                       SpecialtyRepository specialtyRepo,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.patientRepo = patientRepo;
        this.providerRepo = providerRepo;
        this.clinicRepo = clinicRepo;
        this.specialtyRepo = specialtyRepo;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public void registerPatient(PatientRegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.PATIENT);
        user.setIsActive(true);

        userRepository.save(user);

        PatientProfile profile = new PatientProfile();
        profile.setUser(user);
        profile.setFullName(request.getFullName());
        profile.setPhoneNumber(request.getPhoneNumber());

        patientRepo.save(profile);
    }

    public void registerProvider(ProviderRegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        if (request.getSpecialtyIds() == null || request.getSpecialtyIds().isEmpty()) {
            throw new RuntimeException("At least one specialty must be selected");
        }

        if (request.getSpecialtyIds().size() > 3) {
            throw new RuntimeException("A provider can select up to 3 specialties");
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.PROVIDER);
        user.setIsActive(true);

        userRepository.save(user);

        ProviderProfile profile = new ProviderProfile();
        profile.setUser(user);
        profile.setFullName(request.getFullName());
        profile.setClinic(
            clinicRepo.findById(request.getClinicId())
                .orElseThrow(() -> new RuntimeException("Selected clinic was not found"))
        );

        Set<Specialty> specialties = new HashSet<>(specialtyRepo.findAllById(request.getSpecialtyIds()));

        if (specialties.size() != request.getSpecialtyIds().size()) {
            throw new RuntimeException("One or more selected specialties were not found");
        }

        profile.setSpecialties(specialties);

        providerRepo.save(profile);
    }

    public LoginResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());

        String fullName;

        if (user.getRole() == Role.PATIENT) {
            PatientProfile patientProfile = patientRepo.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Patient profile not found"));
            fullName = patientProfile.getFullName();
        } else if (user.getRole() == Role.PROVIDER) {
            ProviderProfile providerProfile = providerRepo.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Provider profile not found"));
            fullName = providerProfile.getFullName();
        } else {
            fullName = "";
        }

        return new LoginResponse(
            token,
            user.getRole().name(),
            user.getId(),
            fullName,
            user.getEmail()
        );
    }

    public void changePassword(ChangePasswordRequest request) {
        if (request.getEmail() == null || request.getEmail().isBlank()) {
            throw new RuntimeException("User email is required");
        }

        if (request.getCurrentPassword() == null || request.getCurrentPassword().isBlank()
            || request.getNewPassword() == null || request.getNewPassword().isBlank()
            || request.getConfirmNewPassword() == null || request.getConfirmNewPassword().isBlank()) {
            throw new RuntimeException("All password fields are required");
        }

        if (!request.getNewPassword().equals(request.getConfirmNewPassword())) {
            throw new RuntimeException("New passwords do not match");
        }

        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPasswordHash())) {
            throw new RuntimeException("Current password is incorrect");
        }

        user.setPasswordHash(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
    }
}