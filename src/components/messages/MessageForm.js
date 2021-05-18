import React, { useState } from 'react';
import { addMessage } from '../../modules/MessagesManager';
import './Messages.css';

export const MessageForm = ({getMessages}) => {
  const [message, setMessage] = useState({
    message: ''
  });

  const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newMessage = { ...message}
		let selectedVal = event.target.value

		newMessage[event.target.id] = selectedVal
		// update state
		setMessage(newMessage)
	}
  
  const handleClickSaveMessage = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form
    let newMessage = {
      sendingUserId: parseInt(sessionStorage.getItem("metroid_user")),
      receivingUserId: 0,
      message: message.message,
      timestamp: `${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`
    }

		addMessage(newMessage)
			.then(() => {
        getMessages()
        setMessage({
          message: ''
        })
      });
    
	}

	return (
    <form className="messageBox">
      <hr></hr>
    	<h2 className="message__title">Messages</h2>
    	<fieldset className='form'>
    		<div className="form-group">
    			<label htmlFor="name">Message Text Here:</label>
    			<input type="text" id="message" 
          onChange={handleControlledInputChange} required autoFocus 
          className="form-control" placeholder="message text" 
          value={message.message} />
    		</div>
    	</fieldset>
    	<button className="save-message"
    		onClick={handleClickSaveMessage}>
    		Save message
      </button>
    </form>
	)
}