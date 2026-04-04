package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.*;
import com.PHLS_UK.webapp.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {
    "http://localhost:3000",
    "https://phlsuk.netlify.app"
})
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register/patient")
    public void registerPatient(@RequestBody PatientRegisterRequest request) {
        authService.registerPatient(request);
    }

    @PostMapping("/register/provider")
    public void registerProvider(@RequestBody ProviderRegisterRequest request) {
        authService.registerProvider(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @PostMapping("/change-password")
        public void changePassword(@RequestBody ChangePasswordRequest request) {
        authService.changePassword(request);
    }
}