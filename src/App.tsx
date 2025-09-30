import React, { useEffect } from 'react';
import VoiceCard from './components/VoiceCard';
import ConversationHistory from './components/ConversationHistory';
import ParticleBackground from './components/ParticleBackground';
import FloatingElements from './components/FloatingElements';
import { useVoiceAssistant } from './hooks/useVoiceAssistant';
import styled, { keyframes } from 'styled-components';

const App: React.FC = () => {
  const {
    isListening,
    isProcessing,
    isSpeaking,
    currentTranscript,
    messages,
    error,
    toggleListening,
    clearError,
  } = useVoiceAssistant();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  return (
    <AppContainer>
      <ParticleBackground />
      <FloatingElements />
      
      <MainContent>
        <VoiceCard
          isListening={isListening}
          isProcessing={isProcessing}
          isSpeaking={isSpeaking}
          currentTranscript={currentTranscript}
          onToggleListening={toggleListening}
        />
        
        {error && (
          <ErrorMessage onClick={clearError}>
            {error}
            <CloseButton>×</CloseButton>
          </ErrorMessage>
        )}
      </MainContent>
      
      <ConversationHistory messages={messages} />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 50%,
    #667eea 100%
  );
  background-size: 400% 400%;
  animation: ${keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `} 15s ease infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`;

const MainContent = styled.div`
  width: calc(100vw - 400px);
  height: 100vh;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100vw;
    height: 50vh;
  }
`;

const ErrorMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 59, 48, 0.9);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 1001;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.3s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 768px) {
    left: 20px;
    right: 20px;
    transform: none;
    width: auto;
  }
`;

const CloseButton = styled.span`
  font-size: 18px;
  font-weight: bold;
  opacity: 0.8;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export default App;