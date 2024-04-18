import React, { useEffect, useState } from 'react';
import Bot from '../assets/Bot.jpg';

const ChatFeed = ({ question, answer }) => {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    if (question || answer) {
      setConversation((prevConversation) => [...prevConversation, { question, answer }]);
    }
  }, [question, answer]);

  return (
    <div>
      {conversation.map((chat) => (
        <div key={chat.question}>
          {chat.question && (
            <div className='chat chat-end'>
              <div className='chat-bubble'>{chat.question}</div>
            </div>
          )}
          {chat.answer && (
            <div className='chat chat-start'>
              <div className='chat-bubble bg-white text-black overflow-auto' style={{width: '900px', wordWrap: 'break-word'}}>{chat.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatFeed;
