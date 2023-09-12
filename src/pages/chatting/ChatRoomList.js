import React, {useState, useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ChattingMainCSS from './ChattingMain.module.css';
import ChattingRoomListCSS from "../chatting/ChattingRoomList.module.css";
import axios from 'axios';
import { insertPartner, insertMessage, receive } from '../../modules/ConversationList'
import ConversationListItem from "./ConversationListItem";
import SockJsClient from 'react-stomp';
import '../login/login.css';



function ChatRoomList({userId, empName, selectedEmployee}, ref) {

    // Redux 상태에서 conversationlist 가져오기
    const conversationList = useSelector(state => state.conversationlist);
    console.log("conversationList =========> " + conversationList);
    const $websocket = useRef(null); 
    let topics = [`/topic/${userId}`];
    const dispatch = useDispatch();
    

    useEffect(() => {
        getConversations()
      },[]);


    useEffect(() => {
      if (selectedEmployee) {
        handleAddPartner(selectedEmployee.empName);
      }
    }, [selectedEmployee]);


    // 대화상대 목록을 가져오는 API 호출(사용자의 대화 상대 목록 관리)
    const getConversations = () => {
        axios({
          method:"get",
          url: 'http://localhost:8080/user/fetchAllUsers/'+ userId
        })
        .then((response) => {
          for (const key in response.data) {
            dispatch(insertPartner(
              {
                photo:process.env.REACT_APP_USER_BASE_IMAGE,
                partner: response.data[key].partner,
                list:[...response.data[key].messageList]
              }
            ))
          }           
        })
        .catch((error) => {
          
        })    
      }

      const sendToMessage = (from, to, msg) =>{
        const m = {message:msg, author:from, to:to, timestamp: new Date().getTime()};
        $websocket.current.sendMessage("/app/send", JSON.stringify(m));
        dispatch(insertMessage(m));
      }
    
      const recevieMessage = (msg) => {
        console.log('ChatroomList receiveMessage ===============>', recevieMessage);
        dispatch(receive(msg));    
      }


        

      const handleAddPartner = (name)=> {

        // 이미 대화상대 있는 지 확인
        const existingPartner = conversationList[name];
        if(existingPartner) {
        // 이미 대화상대랑 채팅방 있으면 업데이트
            dispatch(insertPartner({
              // photo:process.env.REACT_APP_USER_BASE_IMAGE,
              partner:name,
              list: existingPartner.list, // 기존 대화 기록 유지
            })
          );
        } else {
          // 상대랑 채팅방 없을 경우 추가
            dispatch(insertPartner({
              // photo:process.env.REACT_APP_USER_BASE_IMAGE,
              partner:name,
              list: [], // 기존 대화 기록 유지
            })
          );
        }
      };

      
      useImperativeHandle(ref, () => ({
        handleAddPartner
      }),[]);

        

      return (
        <>
            {/* <div className={ChattingMainCSS.chattingMain}> */}
                <div className={ChattingRoomListCSS.chattingRoomListMain}>
                <div className={ChattingMainCSS.searchHeader}>
                    <div className={ChattingMainCSS.searchMember}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{cursor: 'pointer'}} />
                        <input type="search" className={ChattingMainCSS.searchBox} placeholder="이름, 부서명, 전화번호 검색"/>
                    </div>
                </div>                
                    <div className={ChattingRoomListCSS.chattingRoomLists} id="chattingList1">
                        <div className={ChattingRoomListCSS.profileIcon} style={{width: '70px'}}>
                            
                        </div>
                        <div className={ChattingRoomListCSS.chattingRoomInfo}>
                            {/* <div className={ChattingRoomListCSS.roomInfoText}> */}

                        { 
                            Object.keys(conversationList).map((key) => 
                            <ConversationListItem             
                                key={key}
                                partner={key}
                                host={userId}
                                sendToMessage={sendToMessage}
                            />
                            )
                        }

                        <SockJsClient
                        url={process.env.REACT_APP_CHAT_BASE_URL}
                        topics={topics} // WebSocket 주제 설정 => WebSocket 연결 시 해당 주제 구독
                        onMessage={msg => {
                            console.log('[SocketJsClientf rendering...] Received message ==============> ', msg);
                            recevieMessage(msg);
                        }}
                        ref={$websocket}
                        />

                               
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </>
    );


}

export default forwardRef(ChatRoomList);