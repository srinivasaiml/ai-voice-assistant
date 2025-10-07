import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Message } from '../types';

interface ConversationHistoryProps {
  messages: Message[];
}

const ConversationHistory: React.FC<ConversationHistoryProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (timestamp: Date | string) => {
    const t = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
    return t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <Sidebar>
      <Header>
        <h2>Conversation</h2>
        <span>{messages.length} messages</span>
      </Header>
      <MsgList>
        {messages.length === 0 ? (
          <EmptyMsg>
            <strong>No conversation yet</strong>
            <span>Start by typing or speaking!</span>
          </EmptyMsg>
        ) : (
          messages.map(msg => (
            <MsgRow key={msg.id} $from={msg.sender}>
              <Avatar $from={msg.sender}>
                {msg.sender === "user" ? "🧑" : "🤖"}
              </Avatar>
              <Bubble $from={msg.sender}>
                <p>{msg.text}</p>
                <MsgMeta>{formatTime(msg.timestamp)}</MsgMeta>
              </Bubble>
            </MsgRow>
          ))
        )}
        <div ref={messagesEndRef} />
      </MsgList>
    </Sidebar>
  );
};

const Sidebar = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  width: 420px;
  height: 100vh;
  background: #fafbfc;
  border-left: 1.5px solid #ececec;
  box-shadow: -8px 0 24px -8px rgba(41,59,74,0.11);
  display: flex;
  flex-direction: column;
  z-index: 200;

  @media (max-width: 600px) {
    width: 100vw;
    border-left: none;
    border-top: 1.5px solid #ececec;
    top: auto;
    bottom: 0;
    height: 50vh;
  }
`;

const Header = styled.header`
  padding: 20px 24px 14px 24px;
  background: #fff6fb;
  border-bottom: 1.5px solid #f0e8f4;
  display: flex;
  align-items: end;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    color: #383655;
    letter-spacing: 0.4px;
  }

  span {
    margin-left: auto;
    color: #b1aac7;
    font-size: 13px;
    font-weight: 500;
  }
`;

const MsgList = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 28px 18px 16px 18px;
  margin: 0;
  list-style: none;
  background: linear-gradient(155deg, #eef2fb 0%, #f6f9fc 100%);
`;

const EmptyMsg = styled.li`
  margin: 12vh 0 0 0;
  text-align: center;
  color: #bbb;

  strong {
    font-size: 17px;
    color: #757197;
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: #9d97b5;
  }
`;

const MsgRow = styled.li<{ $from: "user" | "assistant" }>`
  display: flex;
  align-items: flex-end;
  margin-bottom: 22px;
  flex-direction: ${(p) => (p.$from === "user" ? "row-reverse" : "row")};
`;

const Avatar = styled.div<{ $from: "user" | "assistant" }>`
  width: 40px;
  height: 40px;
  background: ${(p) => (p.$from === "user" ? "#dedcfc" : "#f6effd")};
  border: 2.5px solid ${(p) => (p.$from === "user" ? "#7e85f5" : "#c9aad6")};
  color: #5f5db6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  font-weight: bold;
  margin: ${(p) => (p.$from === "user" ? "0 0 0 10px" : "0 10px 0 0")};
  box-shadow: 0 2px 14px 0 rgba(140, 120, 220, 0.07);
`;

const Bubble = styled.div<{ $from: "user" | "assistant" }>`
  max-width: 73%;
  padding: 13px 18px 11px 18px;
  background: ${(p) =>
    p.$from === "user"
      ? "linear-gradient(108deg, #798afc 0%, #7042dd 100%)"
      : "#ffffff"};
  color: ${(p) => (p.$from === "user" ? "#fff" : "#392f41")};
  border-radius: 16px;
  box-shadow: 0 4px 15px 0 rgba(124, 78, 230, 0.07);
  font-size: 15px;
  display: flex;
  flex-direction: column;

  p {
    margin: 0 0 4px 0;
    word-break: break-word;
  }
`;

const MsgMeta = styled.span`
  font-size: 11px;
  opacity: 0.64;
  text-align: right;
  margin-left: auto;
`;

export default ConversationHistory;