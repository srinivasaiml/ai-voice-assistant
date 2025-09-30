import { useState, useCallback, useRef } from 'react';
import { Message, VoiceAssistantState } from '../types';
import { GroqService } from '../services/groqService';
import { SpeechService } from '../services/speechService';

export const useVoiceAssistant = () => {
  const [state, setState] = useState<VoiceAssistantState>({
    isListening: false,
    isProcessing: false,
    isSpeaking: false,
    currentTranscript: '',
    messages: [],
    error: null,
  });

  const groqService = useRef(new GroqService());
  const speechService = useRef(new SpeechService());

  const addMessage = useCallback((text: string, sender: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    return newMessage;
  }, []);

  const handleWebsiteCommand = useCallback((response: string) => {
    const websiteMatch = response.match(/OPEN_WEBSITE:(.+)$/);
    if (websiteMatch) {
      const url = websiteMatch[1].trim();
      const fullUrl = url.startsWith('http') ? url : `https://${url}`;
      
      // Open website in new tab
      window.open(fullUrl, '_blank');
      
      // Remove the command from the response
      return response.replace(/OPEN_WEBSITE:.*$/, '').trim();
    }
    return response;
  }, []);

  const processVoiceInput = useCallback(async (transcript: string) => {
    if (!transcript.trim()) return;

    setState(prev => ({ ...prev, isProcessing: true, currentTranscript: '' }));

    // Add user message
    addMessage(transcript, 'user');

    try {
      // Get conversation history for context
      const conversationHistory = state.messages.slice(-10).map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      // Get AI response
      const response = await groqService.current.getResponse(transcript, conversationHistory);
      
      // Handle website commands
      const cleanResponse = handleWebsiteCommand(response);
      
      // Add assistant message
      addMessage(cleanResponse, 'assistant');

      // Speak the response
      setState(prev => ({ ...prev, isProcessing: false, isSpeaking: true }));
      
      speechService.current.speak(cleanResponse, () => {
        setState(prev => ({ ...prev, isSpeaking: false }));
      });

    } catch (error) {
      console.error('Error processing voice input:', error);
      setState(prev => ({
        ...prev,
        isProcessing: false,
        error: 'Failed to process your request. Please try again.',
      }));
    }
  }, [state.messages, addMessage, handleWebsiteCommand]);

  const startListening = useCallback(() => {
    if (!speechService.current.isSpeechSupported()) {
      setState(prev => ({
        ...prev,
        error: 'Speech recognition is not supported in this browser. Please use Chrome or Edge.',
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      isListening: true,
      error: null,
      currentTranscript: '',
    }));

    const success = speechService.current.startListening(
      (transcript, isFinal) => {
        setState(prev => ({
          ...prev,
          currentTranscript: transcript,
        }));

        if (isFinal && transcript.trim()) {
          processVoiceInput(transcript);
        }
      },
      (error) => {
        setState(prev => ({
          ...prev,
          isListening: false,
          error: `Speech recognition error: ${error}`,
        }));
      },
      () => {
        setState(prev => ({
          ...prev,
          isListening: false,
        }));
      }
    );

    if (!success) {
      setState(prev => ({
        ...prev,
        isListening: false,
        error: 'Failed to start speech recognition',
      }));
    }
  }, [processVoiceInput]);

  const stopListening = useCallback(() => {
    speechService.current.stopListening();
    setState(prev => ({
      ...prev,
      isListening: false,
    }));
  }, []);

  const toggleListening = useCallback(() => {
    if (state.isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [state.isListening, startListening, stopListening]);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const clearMessages = useCallback(() => {
    setState(prev => ({ ...prev, messages: [] }));
  }, []);

  return {
    ...state,
    toggleListening,
    clearError,
    clearMessages,
  };
};