import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { embed, streamText } from 'ai';
import fs from 'fs';
import path from 'path';


const apiKey = import.meta.env.GOOGLE_GENERATIVE_AI_API_KEY || import.meta.env.GEMINI_API_KEY || import.meta.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

console.log('API Key loaded:', apiKey ? 'YES (' + apiKey.slice(0, 4) + '...)' : 'NO');


const google = createGoogleGenerativeAI({
    apiKey,
});

export const POST = async ({ request }: { request: Request }) => {
    try {
        const { messages } = await request.json();
        const lastUserMessage = messages[messages.length - 1];

        if (!lastUserMessage) {
            return new Response(JSON.stringify({ error: 'No message found' }), { status: 400 });
        }

        // 1. Generate embedding for the user question
        const lastUserMessageContent = typeof lastUserMessage.content === 'string'
            ? lastUserMessage.content
            : lastUserMessage.parts?.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('') || '';

        const { embedding } = await embed({
            model: google.textEmbeddingModel('text-embedding-004'),
            value: lastUserMessageContent,
        });

        const userVector = embedding;

        const vectorStorePath = path.resolve('src/lib/vector-store.json');

        let vectors = [];
        if (fs.existsSync(vectorStorePath)) {
            const fileContent = fs.readFileSync(vectorStorePath, 'utf-8');
            vectors = JSON.parse(fileContent);
        } else {
            console.warn('Vector store not found. Run npm run generate-embeddings');
            // Fallback or empty context
        }

        const contextChunks = vectors
            .map((vec: any) => ({
                ...vec,
                similarity: cosineSimilarity(userVector, vec.values)
            }))
            .sort((a: any, b: any) => b.similarity - a.similarity)
            .slice(0, 5);

        const contextText = contextChunks
            .map((chunk: any) => `Source: ${chunk.metadata.title} (${chunk.metadata.url})\nContent: ${chunk.content}`)
            .join('\n\n---\n\n');

        const systemPrompt = `You are a helpful AI assistant for Anirban's personal portfolio website. 
    You have access to the following context from his blog posts and work pages.
    
    Rules:
    - Answer questions based ONLY on the provided context.
    - If the answer is not in the context, say "I don't have information about that in Anirban's portfolio."
    - Be friendly, professional, and concise.
    - You can use markdown in your response.
    
    Context:
    ${contextText}`;

        const result = await streamText({
            model: google('gemini-2.5-flash'),
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages.map((m: any) => ({
                    role: m.role,
                    content: m.content || m.parts?.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('') || ''
                }))
            ],
        });

        return result.toTextStreamResponse();

    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
};

function cosineSimilarity(A: number[], B: number[]) {
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
