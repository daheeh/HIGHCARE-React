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
import { getChatRoomId } from './CreateChatRoom';
import { resetChat } from '../../modules/ConversationList';



function ChatRoomList({userId, empName, selectedEmployee}, ref) {

    // Redux 상태에서 conversationlist 가져오기
    const conversationList = useSelector(state => state.conversationlist);
    console.log("conversationList =========> " + conversationList);
    const $websocket = useRef(null); 
    let topics = [`/topic/${empName}`];  // 로그인된 회원의 이름이면 
    const dispatch = useDispatch();
    dispatch(resetChat);

    

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
<<<<<<< HEAD
      axios({
          method: "get",
          url: `${process.env.REACT_APP_BASIC_URL}/user/fetchAllUsers/` + empName  // userid: 로그인된 회원의 아이디
      })
      .then((response) => {
          // 현재 로그인한 사용자와 관련된 채팅방만 필터링하여 저장
          console.log(response);
          const filteredConversations = response.data.filter(conversation => conversation.startsWith(userId + ":"));
          for (const key in filteredConversations) {
              dispatch(insertPartner(
                  {
                      partner: filteredConversations[key].partner,
                      list: [...filteredConversations[key].messageList]
                  }
              ))
          }
          console.log('response =========> ' , response);
      })
      .catch((error) => {
        console.log("사용자 채팅방 로딩 실패");
      })    
  }


=======
        axios({
          method:"get",
          url: 'http://localhost:8080/user/fetchAllUsers/'+ empName  // userid: 로그인된 회원의 아이디
        })
        .then((response) => {
                    console.log(response);
>>>>>>> hdhye

          for (const key in response.data) {
            dispatch(insertPartner(
              {
                partner: response.data[key].partner,
                list:[...response.data[key].messageList]
              }
            ))
          }           
        })
        .catch((error) => {
          console.log("사용자 채팅방 로딩 실패");
        })    
      }


      const sendToMessage = (from, to, msg) =>{
        const m = { message:msg, 
                    author:from, 
                    to:to,      
                    timestamp: new Date().getTime()
                  };
        $websocket.current.sendMessage("/app/send", JSON.stringify(m));
        dispatch(insertMessage(m));
      }
    
      const recevieMessage = (msg) => {
        console.log('ChatroomList receiveMessage ===============>', msg);
        dispatch(receive(msg));    
      }


      const handleAddPartner = (name)=> {

        // 이미 대화상대 있는 지 확인
        const existingPartner = conversationList[name];
        if(existingPartner) {
        // 이미 대화상대랑 채팅방 있으면 업데이트
            dispatch(insertPartner({
              partner:name,
              list: existingPartner.list, // 기존 대화 기록 유지
            })
          );
        } else {
          // 상대랑 채팅방 없을 경우 추가
            dispatch(insertPartner({
              partner:name,
              list: [], // 기존 대화 기록 유지
            })
          );
        }


      };

      
      useImperativeHandle(ref, () => ({
        handleAddPartner,
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

                        { 
                            Object.keys(conversationList).map((key) => {
                            console.log('Key:', key);

                              return (
                                  <ConversationListItem             
                                    key={key}
                                    partner={key}
                                    host={empName}
                                    sendToMessage={sendToMessage}
                                  />
                                );
                                  
                          })
                        } 

                        <SockJsClient
                        url="http://highcare.coffit.today:8080/chat"
                        topics={topics} // WebSocket 주제 설정 => WebSocket 연결 시 해당 주제 구독
                        onMessage={msg => {
                          recevieMessage(msg);
                          console.log('[SocketJsClient rendering...] Received message ==============> ', msg);
                        }}
                        onConnect={() => {
                          console.log('WebSocket connected successfully.');
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