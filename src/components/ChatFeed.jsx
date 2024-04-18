import React, { useEffect, useState } from 'react';
import Bot from '../assets/Bot.jpg';
import FileInfo from './FileInfo';

const ChatFeed = ({ question, answer, name, size }) => {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    if (question || answer) {
      setConversation((prevConversation) => [...prevConversation, { question, answer }]);
    }
  }, [question, answer]);

  useEffect(() => {
    if (name && size) {
      setConversation((prevConversation) => [...prevConversation, { name, size }]);
    }
  }, [name, size]);

  return (
    <div>
      {conversation.map((chat, index) => (
        <div key={index}>
          {chat.name && chat.size && (
            <div className='chat chat-end'>
              <div className='chat-bubble w-[300px]'><FileInfo name={chat.name} size={chat.size}/></div>
            </div>
          )}
          {chat.question && (
            <div className='chat chat-end'>
              <div className='chat-bubble'>{chat.question}</div>
            </div>
          )}
          {chat.answer && (
            <div className='chat chat-start'>
              <div className='chat-bubble bg-white text-black overflow-auto' style={{ width: '900px', wordWrap: 'break-word' }}>{chat.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatFeed;
