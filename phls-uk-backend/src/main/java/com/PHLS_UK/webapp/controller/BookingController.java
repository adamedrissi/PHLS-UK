package com.PHLS_UK.webapp.controller;

import com.PHLS_UK.webapp.dto.BookingResponse;
import com.PHLS_UK.webapp.dto.CreateBookingRequest;
import com.PHLS_UK.webapp.dto.RescheduleBookingRequest;
import com.PHLS_UK.webapp.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins  = {
    "http://localhost:3000",
    "https://phlsuk.netlify.app"
})
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public BookingResponse createBooking(@RequestBody CreateBookingRequest request) {
        return bookingService.createBooking(request);
    }

    @GetMapping("/my")
    public List<BookingResponse> getMyBookings(@RequestParam Long userId) {
        return bookingService.getMyBookings(userId);
    }

    @PutMapping("/{bookingId}/cancel")
    public BookingResponse cancelBooking(@PathVariable Long bookingId,
                                         @RequestParam Long userId) {
        return bookingService.cancelBooking(bookingId, userId);
    }

    @PutMapping("/{bookingId}/reschedule")
    public BookingResponse rescheduleBooking(@PathVariable Long bookingId,
                                             @RequestBody RescheduleBookingRequest request) {
        return bookingService.rescheduleBooking(bookingId, request);
    }

    @GetMapping("/provider")
    public List<BookingResponse> getProviderBookings(@RequestParam Long userId) {
        return bookingService.getProviderBookings(userId);
    }

    @PutMapping("/{bookingId}/provider-cancel")
    public BookingResponse cancelBookingAsProvider(@PathVariable Long bookingId,
                                               @RequestParam Long userId) {
        return bookingService.cancelBookingAsProvider(bookingId, userId);
    }
}