package com.PHLS_UK.webapp.service;

import com.PHLS_UK.webapp.dto.BookingResponse;
import com.PHLS_UK.webapp.dto.CreateBookingRequest;
import com.PHLS_UK.webapp.dto.RescheduleBookingRequest;
import com.PHLS_UK.webapp.entity.AvailabilitySlot;
import com.PHLS_UK.webapp.entity.Booking;
import com.PHLS_UK.webapp.entity.PatientProfile;
import com.PHLS_UK.webapp.entity.User;
import com.PHLS_UK.webapp.enums.BookingStatus;
import com.PHLS_UK.webapp.enums.Role;
import com.PHLS_UK.webapp.enums.SlotStatus;
import com.PHLS_UK.webapp.repository.AvailabilitySlotRepository;
import com.PHLS_UK.webapp.repository.BookingRepository;
import com.PHLS_UK.webapp.repository.PatientProfileRepository;
import com.PHLS_UK.webapp.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final AvailabilitySlotRepository availabilitySlotRepository;
    private final PatientProfileRepository patientProfileRepository;
    private final UserRepository userRepository;

    public BookingService(BookingRepository bookingRepository,
                          AvailabilitySlotRepository availabilitySlotRepository,
                          PatientProfileRepository patientProfileRepository,
                          UserRepository userRepository) {
        this.bookingRepository = bookingRepository;
        this.availabilitySlotRepository = availabilitySlotRepository;
        this.patientProfileRepository = patientProfileRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public BookingResponse createBooking(CreateBookingRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getRole() != Role.PATIENT) {
            throw new RuntimeException("Only patients can create bookings");
        }

        PatientProfile patient = patientProfileRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Patient profile not found"));

        AvailabilitySlot slot = availabilitySlotRepository.findById(request.getSlotId())
                .orElseThrow(() -> new RuntimeException("Slot not found"));

        if (slot.getStatus() != SlotStatus.AVAILABLE) {
            throw new RuntimeException("This slot is no longer available");
        }

        Booking booking = new Booking();
        booking.setPatient(patient);
        booking.setProvider(slot.getProvider());
        booking.setClinic(slot.getClinic());
        booking.setSlot(slot);
        booking.setBookingStatus(BookingStatus.CONFIRMED);
        booking.setNotes(request.getNotes());

        slot.setStatus(SlotStatus.BOOKED);

        availabilitySlotRepository.save(slot);
        Booking saved = bookingRepository.save(booking);

        return new BookingResponse(
                saved.getId(),
                slot.getId(),
                slot.getProvider().getFullName(),
                slot.getClinic().getClinicName(),
                saved.getBookingStatus().name(),
                slot.getStartTime(),
                slot.getEndTime(),
                buildConfirmationMessage(user, patient, slot)
        );
    }

    @Transactional(readOnly = true)
    public List<BookingResponse> getMyBookings(Long userId) {
        return bookingRepository.findByPatient_User_IdOrderByBookedAtDesc(userId)
                .stream()
                .map(this::mapBookingResponse)
                .toList();
    }

    @Transactional
    public BookingResponse cancelBooking(Long bookingId, Long userId) {
        Booking booking = bookingRepository.findByIdAndPatient_User_Id(bookingId, userId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        if (booking.getBookingStatus() == BookingStatus.CANCELLED) {
            throw new RuntimeException("Booking is already cancelled");
        }

        booking.setBookingStatus(BookingStatus.CANCELLED);
        booking.getSlot().setStatus(SlotStatus.AVAILABLE);

        availabilitySlotRepository.save(booking.getSlot());
        Booking saved = bookingRepository.save(booking);

        return new BookingResponse(
                saved.getId(),
                saved.getSlot().getId(),
                saved.getProvider().getFullName(),
                saved.getClinic().getClinicName(),
                saved.getBookingStatus().name(),
                saved.getSlot().getStartTime(),
                saved.getSlot().getEndTime(),
                "Booking cancelled successfully"
        );
    }

    @Transactional
    public BookingResponse rescheduleBooking(Long bookingId, RescheduleBookingRequest request) {
        Booking booking = bookingRepository.findByIdAndPatient_User_Id(bookingId, request.getUserId())
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        AvailabilitySlot newSlot = availabilitySlotRepository.findById(request.getNewSlotId())
                .orElseThrow(() -> new RuntimeException("New slot not found"));

        if (newSlot.getStatus() != SlotStatus.AVAILABLE) {
            throw new RuntimeException("Selected new slot is not available");
        }

        AvailabilitySlot oldSlot = booking.getSlot();
        oldSlot.setStatus(SlotStatus.AVAILABLE);

        newSlot.setStatus(SlotStatus.BOOKED);

        booking.setSlot(newSlot);
        booking.setProvider(newSlot.getProvider());
        booking.setClinic(newSlot.getClinic());
        booking.setBookingStatus(BookingStatus.RESCHEDULED);

        availabilitySlotRepository.save(oldSlot);
        availabilitySlotRepository.save(newSlot);

        Booking saved = bookingRepository.save(booking);

        return new BookingResponse(
                saved.getId(),
                newSlot.getId(),
                newSlot.getProvider().getFullName(),
                newSlot.getClinic().getClinicName(),
                saved.getBookingStatus().name(),
                newSlot.getStartTime(),
                newSlot.getEndTime(),
                "Booking rescheduled successfully"
        );
    }

        @Transactional(readOnly = true)
        public List<BookingResponse> getProviderBookings(Long userId) {
                User user = userRepository.findById(userId)
                        .orElseThrow(() -> new RuntimeException("User not found"));

                if (user.getRole() != Role.PROVIDER) {
                        throw new RuntimeException("Only providers can view provider bookings");
                }

                return bookingRepository.findByProvider_User_IdOrderByBookedAtDesc(userId)
                        .stream()
                        .map(this::mapBookingResponse)
                        .toList();
        }

        private BookingResponse mapBookingResponse(Booking booking) {
                return new BookingResponse(
                        booking.getId(),
                        booking.getSlot().getId(),
                        booking.getProvider().getFullName(),
                        booking.getClinic().getClinicName(),
                        booking.getBookingStatus().name(),
                        booking.getSlot().getStartTime(),
                        booking.getSlot().getEndTime(),
                        null
                );
        }

        @Transactional
        public BookingResponse cancelBookingAsProvider(Long bookingId, Long userId) {
        Booking booking = bookingRepository.findByIdAndProvider_User_Id(bookingId, userId)
            .orElseThrow(() -> new RuntimeException("Booking not found"));

        if (booking.getBookingStatus() == BookingStatus.CANCELLED) {
                throw new RuntimeException("Booking is already cancelled");
        }

        booking.setBookingStatus(BookingStatus.CANCELLED);
        booking.getSlot().setStatus(SlotStatus.AVAILABLE);

        availabilitySlotRepository.save(booking.getSlot());
        Booking saved = bookingRepository.save(booking);

        return new BookingResponse(
            saved.getId(),
            saved.getSlot().getId(),
            saved.getProvider().getFullName(),
            saved.getClinic().getClinicName(),
            saved.getBookingStatus().name(),
            saved.getSlot().getStartTime(),
            saved.getSlot().getEndTime(),
            "Booking cancelled by provider"
        );
        }

    private String buildConfirmationMessage(User user, PatientProfile patient, AvailabilitySlot slot) {
        String preference = user.getNotificationPreference().name();
        String phone = patient.getPhoneNumber() == null ? "No phone number on file" : patient.getPhoneNumber();

        return "Booking confirmed for " + slot.getStartTime()
                + " with " + slot.getProvider().getFullName()
                + " at " + slot.getClinic().getClinicName()
                + ". Notification preference: " + preference
                + ". Confirmation email will use: " + user.getEmail()
                + ". Phone contact: " + phone + ".";
    }
}