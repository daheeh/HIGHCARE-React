import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../chatting/ChatToolBarButton.css';
import '../login/login.css';

export default function ChatToolbarButton(props) {
    const { icon, action } = props;
    return (
      <button onClick={action} className="toolbar-button">
      <FontAwesomeIcon icon={icon} />
    </button>
    );
}