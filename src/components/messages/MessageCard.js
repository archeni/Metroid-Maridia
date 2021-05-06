import React from 'react';

export const MessageCard = ({cardMessage}) => {
  return (
    <div className='messageCard'>
      <p className='message'>{cardMessage.message}</p>
      <hr></hr>
      <div className='timestamp'>Date: {cardMessage.timestamp}</div>
    </div>
  );
}