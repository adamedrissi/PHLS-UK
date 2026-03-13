package com.PHLS_UK.webapp.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "provider_profiles")
public class ProviderProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "clinic_id", nullable = false)
    private Clinic clinic;

    @Column(name = "full_name", nullable = false, length = 150)
    private String fullName;

    @Column(name = "year_licensed")
    private Integer yearLicensed;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(length = 20)
    private String sex;

    @Column(name = "phone_number", length = 30)
    private String phoneNumber;

    @Column(columnDefinition = "TEXT")
    private String bio;

    @Column(name = "consultation_price_from", precision = 10, scale = 2)
    private BigDecimal consultationPriceFrom;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    public void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }

    @PreUpdate
    public void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public ProviderProfile() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Clinic getClinic() { return clinic; }
    public void setClinic(Clinic clinic) { this.clinic = clinic; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public Integer getYearLicensed() { return yearLicensed; }
    public void setYearLicensed(Integer yearLicensed) { this.yearLicensed = yearLicensed; }

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getSex() { return sex; }
    public void setSex(String sex) { this.sex = sex; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public BigDecimal getConsultationPriceFrom() { return consultationPriceFrom; }
    public void setConsultationPriceFrom(BigDecimal consultationPriceFrom) {
        this.consultationPriceFrom = consultationPriceFrom;
    }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }

    @ManyToMany
    @JoinTable(
        name = "provider_specialties",
        joinColumns = @JoinColumn(name = "provider_id"),
        inverseJoinColumns = @JoinColumn(name = "specialty_id")
    )
    private java.util.Set<Specialty> specialties = new java.util.HashSet<>();

    public java.util.Set<Specialty> getSpecialties() {
        return specialties;
    }

    public void setSpecialties(java.util.Set<Specialty> specialties) {
        this.specialties = specialties;
    }
}