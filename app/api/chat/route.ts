import OpenAI from 'openai';
import { generateSystemPrompt } from '../../../src/config/systemPrompt';

// Check for API key at startup
if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not set in environment variables');
  throw new Error('OPENAI_API_KEY is not set in environment variables');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  maxRetries: 3,
  timeout: 30000, // 30 seconds
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      console.error('Invalid messages format:', messages);
      return Response.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    console.log('Processing chat request with messages:', messages.length);
    console.log('Using OpenAI API key:', process.env.OPENAI_API_KEY ? 'Present' : 'Missing');
    
    const systemPrompt = generateSystemPrompt();
    console.log('Generated system prompt length:', systemPrompt.length);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      if (!completion.choices[0]?.message?.content) {
        console.error('No response from OpenAI:', completion);
        return Response.json(
          { error: 'No response from OpenAI' },
          { status: 500 }
        );
      }

      return Response.json({ 
        message: completion.choices[0].message.content 
      });
    } catch (apiError) {
      console.error('OpenAI API Error:', apiError);
      if (apiError instanceof Error) {
        console.error('API Error details:', {
          message: apiError.message,
          stack: apiError.stack,
          name: apiError.name
        });
      }
      return Response.json(
        { 
          error: 'Failed to get response from OpenAI', 
          details: apiError instanceof Error ? apiError.message : 'Unknown error',
          type: apiError instanceof Error ? apiError.name : 'Unknown'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Request processing error:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    return Response.json(
      { 
        error: 'Failed to process request', 
        details: error instanceof Error ? error.message : 'Unknown error',
        type: error instanceof Error ? error.name : 'Unknown'
      },
      { status: 500 }
    );
  }
} 