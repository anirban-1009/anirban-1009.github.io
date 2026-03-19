import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { embedMany, embed } from 'ai';
import { HfInference } from '@huggingface/inference';
import dotenv from 'dotenv';

dotenv.config();

const googleApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const hfApiKey = process.env.HUGGINGFACE_API_KEY;

if (!googleApiKey) {
    console.warn('⚠️ Google API Key not found. Google models will fail.');
}

const google = createGoogleGenerativeAI({
    apiKey: googleApiKey,
});

const hf = hfApiKey ? new HfInference(hfApiKey) : new HfInference(); // Anonymous HF inference could work for small limits

const MODELS = [
    // { id: 'gemini-embedding-001', provider: 'google', name: 'Legacy Gemini Embedding' },
    // Google's newer model isn't fully enabled in this @ai-sdk/google version without the right project bindings, 
    // but you can uncomment this if it works for your project:
    // { id: 'text-embedding-004', provider: 'google', name: 'Latest Google Text Embedding' },

    // Hugging Face Open Source Models (Great alternatives for Gemma integrations)
    // MiniLM is tiny, fast, and excellent for basic RAG
    { id: 'sentence-transformers/all-MiniLM-L6-v2', provider: 'huggingface', name: 'HF all-MiniLM-L6-v2' },
    // BGE-small is highly rated on MTEB standard leaderboard for small embeddings
    { id: 'BAAI/bge-small-en-v1.5', provider: 'huggingface', name: 'HF bge-small-en-v1.5' }
];

const TEST_TEXTS = [
    "I am a software engineer working with Node.js and React.",
    "Web development using Astro and Tailwind CSS is very efficient.",
    "A completely unrelated sentence about baking chocolate chip cookies."
];

// Query: "Tell me about your coding experience"
const QUERY = "Tell me about your coding experience.";

function cosineSimilarity(A, B) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < A.length; i++) {
        dotProduct += A[i] * B[i];
        normA += A[i] * A[i];
        normB += B[i] * B[i];
    }
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

async function evaluateOption(modelInfo) {
    console.log(`\nEvaluating: ${modelInfo.id} (${modelInfo.name})`);

    const startTime = Date.now();
    let embeddingSize = 0;
    let vectors = [];
    let queryEmbedding = [];

    try {
        if (modelInfo.provider === 'google') {
            const { embeddings } = await embedMany({
                model: google.embeddingModel(modelInfo.id),
                values: TEST_TEXTS,
            });
            const { embedding } = await embed({
                model: google.embeddingModel(modelInfo.id),
                value: QUERY
            });
            vectors = embeddings;
            queryEmbedding = embedding;

        } else if (modelInfo.provider === 'huggingface') {
            const hfEmbeddings = await hf.featureExtraction({
                model: modelInfo.id,
                inputs: TEST_TEXTS,
            });
            const hfQuery = await hf.featureExtraction({
                model: modelInfo.id,
                inputs: [QUERY],
            });

            // HF returns nested arrays for some models, flat for others. Handle both.
            vectors = Array.isArray(hfEmbeddings[0]) ? hfEmbeddings : [hfEmbeddings];
            queryEmbedding = Array.isArray(hfQuery[0]) ? hfQuery[0] : hfQuery;
        }

        embeddingSize = vectors[0].length;
        const latency = Date.now() - startTime;

        console.log(`- Provider: ${modelInfo.provider.toUpperCase()}`);
        console.log(`- Dimensions: ${embeddingSize}`);
        console.log(`- Latency: ${latency}ms for ${TEST_TEXTS.length + 1} requests`);

        console.log(`- Similarity Scores (Query: "${QUERY}"):`);
        TEST_TEXTS.forEach((text, i) => {
            const similarity = cosineSimilarity(queryEmbedding, vectors[i]);
            console.log(`  -> Text ${i + 1}: ${(similarity * 100).toFixed(2)}% | "${text.substring(0, 30)}..."`);
        });

        return {
            id: modelInfo.id,
            dimensions: embeddingSize,
            latency,
            success: true
        };
    } catch (error) {
        console.error(`- Failed to evaluate ${modelInfo.id}: ${error.message}`);
        return { id: modelInfo.id, success: false, error: error.message };
    }
}

async function runAssessment() {
    console.log('============================================');
    console.log('   Embedding Models Assessment Script       ');
    console.log('============================================\n');

    const results = [];

    for (const model of MODELS) {
        const result = await evaluateOption(model);
        results.push(result);
    }

    console.log('\n============================================');
    console.log('   Assessment Summary                       ');
    console.log('============================================');
    results.forEach(r => {
        if (r.success) {
            console.log(`✅ [${r.id}] -> ${r.dimensions} dims | Latency: ${r.latency}ms`);
        } else {
            console.log(`❌ [${r.id}] -> FAILED: ${r.error}`);
        }
    });
}

runAssessment().catch(console.error);
