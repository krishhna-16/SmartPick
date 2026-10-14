package com.smartpick.backend;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordUtil {

    private static final BCryptPasswordEncoder ENCODER = new BCryptPasswordEncoder(12);

    /**
     * Hashes a plaintext password using standard BCrypt algorithm (12 rounds).
     * Never stores plaintext passwords.
     */
    public static String hashPassword(String plaintext) {
        if (plaintext == null || plaintext.isBlank()) {
            throw new IllegalArgumentException("Password must not be null or blank");
        }
        return ENCODER.encode(plaintext);
    }

    /**
     * Verifies whether the raw plaintext password matches the stored BCrypt hash.
     */
    public static boolean verifyPassword(String rawPassword, String encodedHash) {
        if (rawPassword == null || encodedHash == null || rawPassword.isBlank() || encodedHash.isBlank()) {
            return false;
        }
        try {
            return ENCODER.matches(rawPassword, encodedHash);
        } catch (Exception e) {
            return false;
        }
    }
}
