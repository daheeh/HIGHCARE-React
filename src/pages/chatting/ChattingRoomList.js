import React, { useEffect, useState } from "react";
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import ChattingHeader from "../../component/ChattingHeader";
import ChattingFooter from "../../component/ChattingFooter";
import ChattingMainCSS from "../chatting/ChattingMain.module.css"
import "../chatting/ChattingRoomList.css";
import axios from 'axios'; 


function ChattingRoomList({ onClose }) {

    const [chatrooms, setChatrooms] = useState([]);

    useEffect(() => {
        // Redis에 저장된 채팅방 리스트를 가져오는 API호출
        axios.get('/api/chat/rooms')
            .then(response => {
                setChatrooms(response.data);
            })
            .catch(error => {
                console.error('채팅방리스트 fetch실패', error);
            });
    }, []);

    return (
        <>
            <Draggable 
                handle={`.${ChattingMainCSS.chattingHeader}`}
                bounds="body"
            >
            <div className={ChattingMainCSS.chattingMain}>
                <ChattingHeader onClose={onClose} /> 
                    <div className="chattingRoomListMain">
                        <div className="chattingRoomLists" id="chattingList1">
                            <div className="profile-icon">
                                <FontAwesomeIcon icon={faCircleUser} style={{ color: '#CBDDFF', fontSize: '70px'}}/>
                            </div>
                            <div className="chattingRoomInfo">
                                {chatrooms.map(chatroom => (
                                    <div key={chatroom.roomId}>{chatroom.name}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                <ChattingFooter/>
            </div>
            </Draggable>
        </>
    );
    
}

export default ChattingRoomList;



