import React, { useState, useEffect, useRef } from 'react';
import { getAllMessages } from '../../modules/MessagesManager';
import './Messages.css';
import { MessageCard } from './MessageCard';
import { MessageForm } from './MessageForm';

export const MessageList = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    return getAllMessages().then(APImessages => {
      setMessages(APImessages)
    })
  }

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({behavior: "smooth"})
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  useEffect(() => {
    getMessages();
    scrollToBottom()
  }, []);
  
	return (
    <section>
      <h1 className="message-title">Message Board</h1>
      <div className='allMessages'>
        <div className='messageList'>
          {messages.map(singleMessage => 
            <MessageCard key={singleMessage.id} cardMessage={singleMessage}/>
          )}
        </div>
        <div ref={messagesEndRef} />
        <div>
          <MessageForm getMessages={getMessages}/>
        </div>
      </div>
    </section>
	)
}