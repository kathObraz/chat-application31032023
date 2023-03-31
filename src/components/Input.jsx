import React, { useLayoutEffect, useState } from 'react';


const Input = (props) => {
  const [text, setText] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSendMessage(text);
    setText('')
  }

  return (
    <div className="Input">
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="Type here, dummy"
        autoFocus
      />
    </form>
  </div>
  );
};

export default Input