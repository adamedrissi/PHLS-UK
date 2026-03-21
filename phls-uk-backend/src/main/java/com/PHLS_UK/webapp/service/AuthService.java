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

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PatientProfileRepository patientRepo;
    private final ProviderProfileRepository providerRepo;
    private final ClinicRepository clinicRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,
                       PatientProfileRepository patientRepo,
                       ProviderProfileRepository providerRepo,
                       ClinicRepository clinicRepo,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.patientRepo = patientRepo;
        this.providerRepo = providerRepo;
        this.clinicRepo = clinicRepo;
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

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.PROVIDER);
        user.setIsActive(true);

        userRepository.save(user);

        ProviderProfile profile = new ProviderProfile();
        profile.setUser(user);
        profile.setFullName(request.getFullName());
        profile.setClinic(clinicRepo.findById(request.getClinicId()).orElseThrow());

        providerRepo.save(profile);
    }

    public LoginResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(token, user.getRole().name(), user.getId());
    }
}