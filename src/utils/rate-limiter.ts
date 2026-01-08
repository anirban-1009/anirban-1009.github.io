/**
 * Simple in-memory rate limiter for API endpoints
 * Tracks requests by IP address with sliding window
 */

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

class RateLimiter {
    private store: Map<string, RateLimitEntry> = new Map();
    private readonly maxRequests: number;
    private readonly windowMs: number;

    constructor(maxRequests: number = 10, windowMinutes: number = 1) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMinutes * 60 * 1000;

        // Cleanup old entries every 5 minutes
        setInterval(() => this.cleanup(), 5 * 60 * 1000);
    }

    check(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
        const now = Date.now();
        const entry = this.store.get(identifier);

        if (!entry || now > entry.resetTime) {
            // Create new window
            this.store.set(identifier, {
                count: 1,
                resetTime: now + this.windowMs
            });
            return {
                allowed: true,
                remaining: this.maxRequests - 1,
                resetTime: now + this.windowMs
            };
        }

        if (entry.count >= this.maxRequests) {
            return {
                allowed: false,
                remaining: 0,
                resetTime: entry.resetTime
            };
        }

        // Increment counter
        entry.count += 1;
        this.store.set(identifier, entry);

        return {
            allowed: true,
            remaining: this.maxRequests - entry.count,
            resetTime: entry.resetTime
        };
    }

    private cleanup() {
        const now = Date.now();
        for (const [key, entry] of this.store.entries()) {
            if (now > entry.resetTime) {
                this.store.delete(key);
            }
        }
    }
}

// Rate limiter instances
export const chatRateLimiter = new RateLimiter(10, 1); // 10 requests per minute
export const ipRateLimiter = new RateLimiter(50, 60); // 50 requests per hour
