import React from 'react';

export default function SendMessageArea(props) {
  const {setInputMessage, sendMessages, inputMessage} = props;

  

  const onChange = (e) => {
    setInputMessage(e.target.value);
  }
  
  const handleKeyPress = (e) => {
    if(inputMessage.length===0 || inputMessage===undefined)return;
    if(e.key === 'Enter'){
      sendMessages();
    }
  }
    return (
      <div className="sendMessageArea">
        <input
          type="text"
          value={inputMessage||''}
          className="send-input"
          placeholder="Type a message"
          onChange={onChange}
          onKeyPress={handleKeyPress}
        />

        {
          props.rightItems
        }
      </div>
    );
}