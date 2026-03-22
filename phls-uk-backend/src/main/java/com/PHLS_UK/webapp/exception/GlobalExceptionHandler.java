package com.PHLS_UK.webapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, String>> handleRuntimeException(RuntimeException ex) {
        String message = ex.getMessage();

        if ("Invalid email or password".equals(message)) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", message));
        }

        if ("Email already exists".equals(message)) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", message));
        }
        
        if ("Only patients can create bookings".equals(message)
            || "This slot is no longer available".equals(message)
            || "Booking not found".equals(message)
            || "Selected new slot is not available".equals(message)
            || "Booking is already cancelled".equals(message)) {
            return ResponseEntity
                .badRequest()
                .body(Map.of("message", message));
        }

        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("message", "Something went wrong"));
    }
}