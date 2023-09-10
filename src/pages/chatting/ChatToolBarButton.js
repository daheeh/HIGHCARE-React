import React from 'react';
import '../chatting/ChatToolBarButton.css';

export default function ChatToolbarButton(props) {
    const { icon, action } = props;
    return (
      <i onClick={action} className={`toolbar-button ${icon}`} />
    );
}