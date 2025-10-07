import { Groq } from 'groq-sdk';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export class GroqService {
  private groq: Groq;

  constructor() {
    if (!GROQ_API_KEY) {
      throw new Error('Groq API key is not configured. Please add VITE_GROQ_API_KEY to your .env file.');
    }

    if (!GROQ_API_KEY.startsWith('gsk_')) {
      throw new Error('Invalid Groq API key format. API key should start with "gsk_".');
    }

    this.groq = new Groq({
      apiKey: GROQ_API_KEY,
      dangerouslyAllowBrowser: true
    });
  }

  private async makeRequest(messages: Array<{ role: string; content: string }>): Promise<string> {
    try {
      const chatCompletion = await this.groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are a helpful voice assistant like Alexa. Keep responses concise and conversational.
             If the user asks to open a website, respond with "Opening [website name]" and include the command "OPEN_WEBSITE:[url]" at the end.
             Supported websites:
             - Google: google.com
             - YouTube: youtube.com
             - Facebook: facebook.com
             - Twitter: twitter.com
             - Instagram: instagram.com
             - LinkedIn: linkedin.com
             - Amazon: amazon.com
             - Netflix: netflix.com
             - Wikipedia: wikipedia.org
             - GitHub: github.com
             - Stack Overflow: stackoverflow.com
             - Reddit: reddit.com`
          },
          ...messages.map(msg => ({
            role: msg.role as 'user' | 'assistant',
            content: msg.content
          }))
        ],
        model: 'gemma2-9b-it',
        temperature: 0.7,
        max_tokens: 150,
        top_p: 1,
        stream: false
      });

      return chatCompletion.choices[0]?.message?.content || 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('Groq API error:', error);
      return 'Sorry, I encountered an error while processing your request.';
    }
  }

  async getResponse(userMessage: string, conversationHistory: Array<{ role: string; content: string }> = []): Promise<string> {
    const messages = [
      ...conversationHistory,
      { role: 'user', content: userMessage }
    ];

    return this.makeRequest(messages);
  }
}