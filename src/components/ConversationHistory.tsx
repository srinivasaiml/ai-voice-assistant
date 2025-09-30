import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Message } from '../types';

interface ConversationHistoryProps {
  messages: Message[];
}

const ConversationHistory: React.FC<ConversationHistoryProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <HistoryContainer>
      <Header>
        <h3>Conversation History</h3>
        <MessageCount>{messages.length} messages</MessageCount>
      </Header>
      
      <MessagesContainer>
        {messages.length === 0 ? (
          <EmptyState>
            <p>No conversations yet</p>
            <p>Click the voice card to start talking!</p>
          </EmptyState>
        ) : (
          messages.map((message) => (
            <MessageBubble key={message.id} $sender={message.sender}>
              <MessageContent>
                <MessageText>{message.text}</MessageText>
                <MessageTime>{formatTime(message.timestamp)}</MessageTime>
              </MessageContent>
            </MessageBubble>
          ))
        )}
        <div ref={messagesEndRef} />
      </MessagesContainer>
    </HistoryContainer>
  );
};

const HistoryContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.05) 0%,
      rgba(118, 75, 162, 0.05) 100%
    );
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: auto;
    bottom: 0;
    height: 50vh;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(102, 126, 234, 0.5) 50%, 
      transparent 100%
    );
  }

  h3 {
    margin: 0 0 5px 0;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const MessageCount = styled.div`
  color: #666;
  font-size: 12px;
  animation: ${keyframes`
    0% { opacity: 0.6; }
    100% { opacity: 1; }
  `} 1s ease-in-out infinite alternate;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    transition: background 0.3s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  text-align: center;
  position: relative;
  z-index: 1;

  p {
    margin: 5px 0;
  }

  p:first-child {
    font-weight: 600;
    font-size: 16px;
    animation: ${keyframes`
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    `} 2s ease-in-out infinite;
  }

  p:last-child {
    font-size: 14px;
    opacity: 0.8;
  }
`;

const MessageBubble = styled.div<{ $sender: 'user' | 'assistant' }>`
  display: flex;
  justify-content: ${props => props.$sender === 'user' ? 'flex-end' : 'flex-start'};
  animation: slideIn 0.3s ease-out;
  position: relative;
  z-index: 1;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const MessageContent = styled.div<{ $sender?: 'user' | 'assistant' }>`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  background: ${props => props.$sender === 'user' 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'rgba(0, 0, 0, 0.05)'};
  backdrop-filter: blur(10px);
  color: ${props => props.$sender === 'user' ? 'white' : '#333'};
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    ${props => props.$sender === 'user' 
      ? '0 0 20px rgba(102, 126, 234, 0.3)' 
      : '0 0 10px rgba(0, 0, 0, 0.05)'};
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: ${props => props.$sender === 'user' 
      ? 'linear-gradient(135deg, rgba(255,255,255,0.3), transparent)' 
      : 'linear-gradient(135deg, rgba(0,0,0,0.1), transparent)'};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 
      0 6px 16px rgba(0, 0, 0, 0.15),
      ${props => props.$sender === 'user' 
        ? '0 0 30px rgba(102, 126, 234, 0.4)' 
        : '0 0 15px rgba(0, 0, 0, 0.1)'};
  }
`;

const MessageText = styled.p`
  margin: 0 0 5px 0;
  line-height: 1.4;
  font-size: 14px;
  word-wrap: break-word;
  text-shadow: ${props => props.theme?.sender === 'user' 
    ? '0 1px 2px rgba(0,0,0,0.2)' 
    : '0 1px 1px rgba(255,255,255,0.8)'};
  position: relative;
`;

const MessageTime = styled.div`
  font-size: 11px;
  opacity: 0.7;
  text-align: right;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export default ConversationHistory;