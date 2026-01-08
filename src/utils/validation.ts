/**
 * Input validation and sanitization utilities
 */

const SUSPICIOUS_PATTERNS = [
    /system\s*:/i,
    /ignore\s+previous\s+instructions/i,
    /forget\s+everything/i,
    /you\s+are\s+now/i,
    /act\s+as\s+if/i,
    /\[INST\]/i,
    /<\|.*?\|>/,
    /###\s*System/i,
];

const SPAM_PATTERNS = [
    /(.)\1{10,}/, // Repeated characters
    /https?:\/\//gi, // URLs (multiple)
    /@\w+/g, // Email addresses
];

export interface ValidationResult {
    isValid: boolean;
    reason?: string;
}

/**
 * Validates user input for security and quality
 */
export function validateMessage(message: string): ValidationResult {
    // Length checks
    if (!message || message.trim().length === 0) {
        return { isValid: false, reason: 'Message cannot be empty' };
    }

    if (message.length > 500) {
        return { isValid: false, reason: 'Message too long (max 500 characters)' };
    }

    // Check for prompt injection attempts
    for (const pattern of SUSPICIOUS_PATTERNS) {
        if (pattern.test(message)) {
            console.warn('Suspicious pattern detected:', message.substring(0, 50));
            return { isValid: false, reason: 'Invalid message content' };
        }
    }

    // Check for spam patterns
    const urlMatches = message.match(/https?:\/\//gi);
    if (urlMatches && urlMatches.length > 2) {
        return { isValid: false, reason: 'Too many URLs in message' };
    }

    // Check for excessive repetition
    if (/(.)\1{20,}/.test(message)) {
        return { isValid: false, reason: 'Excessive character repetition' };
    }

    return { isValid: true };
}

/**
 * Sanitize message content
 */
export function sanitizeMessage(message: string): string {
    return message
        .trim()
        .replace(/\s+/g, ' ') // Normalize whitespace
        .substring(0, 500); // Enforce max length
}

/**
 * Validate message history
 */
export function validateMessageHistory(messages: any[]): ValidationResult {
    if (!Array.isArray(messages)) {
        return { isValid: false, reason: 'Invalid messages format' };
    }

    if (messages.length > 50) {
        return { isValid: false, reason: 'Too many messages in history' };
    }

    // Validate each message
    for (const msg of messages) {
        if (!msg.role || !msg.content) {
            return { isValid: false, reason: 'Invalid message structure' };
        }

        if (!['user', 'assistant', 'system'].includes(msg.role)) {
            return { isValid: false, reason: 'Invalid message role' };
        }

        const validation = validateMessage(msg.content);
        if (!validation.isValid) {
            return validation;
        }
    }

    return { isValid: true };
}
