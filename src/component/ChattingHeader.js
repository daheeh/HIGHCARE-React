import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import ChattingMainCSS from '../pages/chatting/ChattingMain.module.css';

function ChattingHeader({ onClose }){
    return (
        <>
            <div className={ChattingMainCSS.chattingHeader}>
                <div className={ChattingMainCSS.chattingLogo}>
                    <img className={ChattingMainCSS.logoImg} src='images/HIGHCARE-logo.png' alt='logo' />
                    <button className={ChattingMainCSS.chattingCloseButton} onClick={ onClose }>X</button>
                </div>
                <div className={ChattingMainCSS.chattingIcon}>
                    <Link to="/chatting-main">
                        <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '24px', marginRight: '10px'}}/>
                    </Link>
                    <Link to="/chattingroom-list">    
                        <FontAwesomeIcon icon={faComment} style={{ color: 'white', fontSize: '24px', marginRight: '10px'}}/>
                    </Link>    
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', fontSize: '24px'}}/>
                </div>
            </div>
        </>
    )
}

export default ChattingHeader;