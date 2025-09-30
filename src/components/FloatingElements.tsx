import React from 'react';
import styled, { keyframes } from 'styled-components';

const FloatingElements: React.FC = () => {
  return (
    <Container>
      {Array.from({ length: 8 }, (_, i) => (
        <FloatingElement key={i} delay={i * 0.5} size={Math.random() * 60 + 20}>
          <div className="inner" />
        </FloatingElement>
      ))}
    </Container>
  );
};

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-40px) rotate(180deg);
  }
  75% {
    transform: translateY(-20px) rotate(270deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const FloatingElement = styled.div<{ delay: number; size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${() => Math.random() * 100}%;
  top: ${() => Math.random() * 100}%;
  animation: ${float} ${() => Math.random() * 10 + 15}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  .inner {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.3), 
      rgba(118, 75, 162, 0.3),
      rgba(255, 0, 115, 0.2)
    );
    border-radius: 50%;
    animation: ${pulse} ${() => Math.random() * 3 + 2}s ease-in-out infinite;
    filter: blur(2px);
    backdrop-filter: blur(5px);
  }
`;

export default FloatingElements;