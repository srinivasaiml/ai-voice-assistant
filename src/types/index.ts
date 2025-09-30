export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface VoiceAssistantState {
  isListening: boolean;
  isProcessing: boolean;
  isSpeaking: boolean;
  currentTranscript: string;
  messages: Message[];
  error: string | null;
}

export interface GroqResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}