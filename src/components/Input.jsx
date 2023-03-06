import React, { useLayoutEffect, useState } from 'react';
import send from '../images/send.png'

const Input = (props) => {
  const [text, setText] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSendMessage(text);
  }


  return (
    <div className="Input">
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="Start a new message"
        autoFocus
      />
      <button><img src={send} alt="send" /></button>
    </form>
  </div>
  );
};

export default Input