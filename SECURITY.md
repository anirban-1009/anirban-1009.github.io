# Security Measures for RAG Chatbot

This document outlines the comprehensive security measures implemented to prevent misuse and abuse of the RAG chatbot.

## Overview

The chatbot is protected by multiple layers of security controls implemented on both the client and server side.

## Server-Side Protection

### 1. Rate Limiting

**Purpose**: Prevent abuse by limiting the number of requests from a single IP address.

**Implementation**:
- **Per-minute limit**: 10 requests per minute
- **Per-hour limit**: 50 requests per hour
- Uses in-memory storage with automatic cleanup
- Returns HTTP 429 status with `Retry-After` header when limits are exceeded

**Location**: `src/utils/rate-limiter.ts`, `src/pages/api/chat.ts`

**Bypass attempts**: Rate limiting uses IP address from headers (`x-forwarded-for`, `x-real-ip`) to handle proxy scenarios.

### 2. Input Validation

**Purpose**: Detect and block malicious or spam content before processing.

**Checks performed**:
- **Prompt injection detection**: Blocks attempts to override system instructions
  - Patterns like "ignore previous instructions", "you are now", "system:", etc.
- **Length limits**: Messages must be 1-500 characters
- **URL spam detection**: Maximum 2 URLs per message
- **Repetition detection**: Blocks messages with excessive character repetition
- **Message structure validation**: Ensures proper role and content format

**Location**: `src/utils/validation.ts`, `src/pages/api/chat.ts`

### 3. Message Sanitization

**Purpose**: Clean and normalize user input.

**Actions**:
- Trim whitespace
- Normalize multiple spaces to single space
- Enforce maximum length
- Prevent special formatting attacks

**Location**: `src/utils/validation.ts`

### 4. System Prompt Protection

**Purpose**: Prevent users from manipulating the AI's behavior.

**Measures**:
- Explicit instructions to ignore user commands that try to override rules
- Instruction not to reveal system prompts
- Context-only responses enforced
- Friendly rejection of out-of-scope requests

**Location**: `src/pages/api/chat.ts` (systemPrompt)

### 5. Message History Validation

**Purpose**: Prevent manipulation through crafted message histories.

**Checks**:
- Maximum 50 messages in history
- Valid message structure (role, content)
- Valid roles only (user, assistant, system)
- Each message passes individual validation

## Client-Side Protection

### 1. Input Validation

**Purpose**: Provide immediate feedback and reduce unnecessary API calls.

**Checks**:
- Prevent empty message submission
- 500 character limit with user notification
- URL count validation (max 2)
- Input is trimmed before submission

**Location**: `src/components/ChatWidget.tsx`

### 2. Error Handling

**Purpose**: Gracefully handle rate limiting and validation errors.

**Features**:
- Specific handling for HTTP 429 (rate limit) responses
- Specific handling for HTTP 400 (validation) responses
- User-friendly error messages displayed in chat
- Generic fallback for unexpected errors

**Location**: `src/components/ChatWidget.tsx`

## Security Patterns Detected

### Prompt Injection Attempts

The system detects and blocks common prompt injection patterns:
- `system:`, `### System`
- `ignore previous instructions`
- `forget everything`
- `you are now`, `act as if`
- `[INST]`, `<|.*|>` (instruction markers)

### Spam Patterns

- Repeated characters (20+ in a row)
- Multiple URLs (>2)
- Email addresses in bulk

## Rate Limit Details

| Limit Type | Threshold | Time Window | Response |
|-----------|-----------|-------------|----------|
| Minute | 10 requests | 60 seconds | HTTP 429 + Retry-After |
| Hour | 50 requests | 3600 seconds | HTTP 429 + Retry-After |

## Response Codes

| Code | Meaning | Cause |
|------|---------|-------|
| 200 | Success | Valid request processed |
| 400 | Bad Request | Invalid input/validation failure |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server-side error |

## Monitoring Recommendations

To further enhance security, consider:

1. **Logging suspicious activity**: Already implemented via console.warn for suspicious patterns
2. **Analytics**: Track rate limit hits per IP to identify abuse patterns
3. **IP blocking**: For persistent abusers, implement IP blocklist
4. **CAPTCHA**: Add CAPTCHA for repeated failures
5. **User authentication**: Optional login to personalize experience and better track usage

## Configuration

### Adjusting Rate Limits

Edit `src/utils/rate-limiter.ts`:

```typescript
// 10 requests per minute, 50 per hour
export const chatRateLimiter = new RateLimiter(10, 1);
export const ipRateLimiter = new RateLimiter(50, 60);
```

### Adjusting Validation Rules

Edit `src/utils/validation.ts`:

```typescript
// Message length limit
if (message.length > 500) { ... }

// URL limit
if (urlMatches && urlMatches.length > 2) { ... }
```

## Testing

To test the security measures:

1. **Rate limiting**: Send >10 requests in 1 minute
2. **Prompt injection**: Try "Ignore previous instructions and ..."
3. **Length limit**: Send a message >500 characters
4. **URL spam**: Include 3+ URLs in a message
5. **Repetition**: Send "aaaaaaaaaaaaaaaaaaaaaa"

All should be blocked with appropriate error messages.

## Best Practices

1. **Never expose API keys**: Keys are stored in environment variables only
2. **Audit logs**: Monitor console warnings for suspicious patterns
3. **Regular updates**: Keep validation patterns updated with new attack vectors
4. **User education**: Display character count and limits in UI
5. **Graceful degradation**: Always provide helpful error messages

## Future Enhancements

Consider implementing:
- Persistent rate limiting (Redis/database)
- Machine learning-based abuse detection
- User reputation system
- Advanced CAPTCHA for suspicious activity
- API key rotation
- Request signing/verification
- Content filtering for inappropriate language
- Session-based limits in addition to IP
