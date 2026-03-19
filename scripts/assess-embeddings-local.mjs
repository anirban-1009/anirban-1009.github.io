import { pipeline, env } from '@xenova/transformers';

// Only load models from local or download to local memory
// We disable telemtry to show true offline power
env.allowLocalModels = true;

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

async function runLocalAssessment() {
    console.log('============================================');
    console.log('   Local Embeddings Assessment Script       ');
    console.log('============================================\n');
    console.log('Downloading model (first time only) and loading entirely locally in RAM - no cloud APIs involved!\n');

    const startTime = Date.now();
    
    try {
        // Load the feature extraction pipeline
        const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

        const embeddingsResult = await extractor(TEST_TEXTS, { pooling: 'mean', normalize: true });
        const queryResult = await extractor(QUERY, { pooling: 'mean', normalize: true });

        // Extract raw arrays from the Tensor returned by transformers.js
        const vectors = embeddingsResult.tolist();
        const queryVector = queryResult.tolist()[0];

        const embeddingSize = vectors[0].length;
        const latency = Date.now() - startTime;
        
        console.log(`- Provider: TRANSFORMERS.JS (LOCAL COMPUTE)`);
        console.log(`- Dimensions: ${embeddingSize}`);
        console.log(`- Time (including model boot): ${latency}ms`);
        console.log(`- Similarity Scores (Query: "${QUERY}"):`);
        
        TEST_TEXTS.forEach((text, i) => {
            const similarity = cosineSimilarity(queryVector, vectors[i]);
            console.log(`  -> Text ${i + 1}: ${(similarity * 100).toFixed(2)}% | "${text.substring(0, 30)}..."`);
        });

    } catch (error) {
        console.error('Failed due to error:', error);
    }
}

runLocalAssessment().catch(console.error);
