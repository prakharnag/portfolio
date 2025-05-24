import OpenAI from 'openai';
import { generateSystemPrompt } from '../../../config/systemPrompt';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: generateSystemPrompt() },
        ...messages
      ],
    });

    return Response.json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return Response.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
} 