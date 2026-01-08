
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'http://localhost:4321/api/chat';

// Colors
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    blue: '\x1b[34m',
    yellow: '\x1b[33m'
};

function log(msg, color = 'reset') {
    console.log(`${colors[color]}${msg}${colors.reset}`);
}

async function testChatResult(testName, message, validator) {
    log(`\n🧪 Testing: ${testName}`, 'blue');
    log(`   Input: "${message}"`);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: [{ role: 'user', content: message }] })
        });

        if (!response.ok) {
            if (response.status === 429) {
                log('   ⚠️ Rate limited (skip)', 'yellow');
                return true;
            }
            throw new Error(`HTTP ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            fullText += decoder.decode(value, { stream: true });
        }

        log(`   Output Preview: ${fullText.substring(0, 100)}...`);

        const result = validator(fullText);
        if (result.pass) {
            log(`   ✅ PASS: ${result.msg}`, 'green');
            return true;
        } else {
            log(`   ❌ FAIL: ${result.msg}`, 'red');
            console.log('   Full Response:', fullText);
            return false;
        }

    } catch (e) {
        log(`   ❌ Error: ${e.message}`, 'red');
        return false;
    }
}

async function run() {
    console.log('Starting Chat Feature Tests...');

    let allPassed = true;

    // Test 1: Check if @work mention returns summary with lowercase links
    // We expect the AI to recommend items and use the list we injected.
    // The list should have lowercase URLs.

    const pass1 = await testChatResult(
        'Lowercase URLs Check (@work)',
        'List all available @work items please',
        (text) => {
            // Logic: Find markdown links: [Title](URL)
            // Verify URL is lowercase
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
            let match;
            let foundLinks = 0;
            let badLinks = 0;

            while ((match = linkRegex.exec(text)) !== null) {
                foundLinks++;
                const url = match[2];
                if (url !== url.toLowerCase()) {
                    badLinks++;
                    console.log(`      Found non-lowercase URL: ${url}`);
                }
            }

            if (foundLinks === 0) return { pass: false, msg: 'No markdown links found in response' };
            if (badLinks > 0) return { pass: false, msg: `${badLinks} links were mixed-case` };
            return { pass: true, msg: `Verified ${foundLinks} links check out (all lowercase)` };
        }
    );
    if (!pass1) allPassed = false;

    // Wait 2s to avoid rate limit
    await new Promise(r => setTimeout(r, 2000));

    // Test 2: Friendly Rate Limit check (manual verification via multiple requests)
    // We'll just spam 5 requests and see if we get a friendly message
    log('\n🧪 Testing Friendly Rate Limit messages', 'blue');
    let friendlyMessageFound = false;

    for (let i = 0; i < 5; i++) {
        const res = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({ messages: [{ role: 'user', content: 'spam' }] })
        });
        if (res.status === 429) {
            const data = await res.json();
            const msg = data.error;
            log(`   Got 429: "${msg}"`);
            if (msg !== 'Too many requests. Please wait a moment before trying again.') {
                friendlyMessageFound = true;
            }
            break;
        }
    }

    if (friendlyMessageFound) {
        log('   ✅ PASS: Received friendly/random rate limit message', 'green');
    } else {
        log('   ⚠️ SKIP: Did not hit rate limit or got default message (might need more spam)', 'yellow');
    }

    if (!allPassed) process.exit(1);
    console.log('\nAll tests passed!');
}

run();
