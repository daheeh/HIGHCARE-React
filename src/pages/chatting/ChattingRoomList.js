import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import ChattingRoomListCSS from "../chatting/ChattingRoomList.module.css";
// import ChattingMainCSS from "../chatting/ChattingMain.module.css";
import axios from 'axios'; 


function ChattingRoomList({ onClose }) {


    // useEffect(() => {
    //     // Redis에 저장된 채팅방 리스트를 가져오는 API호출
    //     axios.get('/api/chat/rooms')
    //         .then(response => {
    //             setChatrooms(response.data);
    //         })
    //         .catch(error => {
    //             console.error('채팅방리스트 fetch실패', error);
    //         });
    // }, []);

    return (
        <>
            {/* <div className={ChattingMainCSS.chattingMain}> */}
                <div className={ChattingRoomListCSS.chattingRoomListMain}>
                    <div className={ChattingRoomListCSS.chattingRoomLists} id="chattingList1">
                        <div className={ChattingRoomListCSS.profileIcon} style={{width: '70px'}}>
                            <FontAwesomeIcon icon={faCircleUser} style={{ color: '#CBDDFF', fontSize: '70px'}}/>
                        </div>
                        <div className={ChattingRoomListCSS.chattingRoomInfo}>
                            <div className={ChattingRoomListCSS.roomInfoText}>
                             {/* {chatrooms.map(chatroom => (
                                <div key={chatroom.roomId}>{chatroom.name}</div>
                            ))} */}
                                <p> 영업 1팀</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
    
}

export default ChattingRoomList;



