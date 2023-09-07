import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ChattingMainCSS from './ChattingMain.module.css';
import ChattingRoomListCSS from "../chatting/ChattingRoomList.module.css";
import axios from 'axios';
import { insertPartner, insertMessage, receive } from '../../modules/ConversationList'
import ConversationListItem from "./ConversationListItem";
import SockJsClient from 'react-stomp';
import AddPartner from './AddPartner';



function WebSocketTestRoomList({userId}) {

    const conversationList = useSelector(state => state.conversationlist);
    console.log("conversationList =========> " + conversationList);
    // const [conversations, setConversations] = useState([]);
    const [addPartner, setAddPartner] = useState(false);
    const $websocket = useRef(null); 
    let topics = ['/topic/'+userId];
    const dispatch = useDispatch();

    useEffect(() => {
        getConversations()
      },[])


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
        dispatch(receive(msg));    
      }
      
      const handleAddPartner = (name)=> {
        dispatch(insertPartner({
          photo:process.env.REACT_APP_USER_BASE_IMAGE,
          partner:name,
          list:[]
        }))
      }
    
      const handleOpenAddPartner = () => {
        setAddPartner(true);
      }
    
      const handleLogOut = () => {
        window.sessionStorage.removeItem("login");
        window.sessionStorage.removeItem("userId");
        window.location.reload();
      }


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
                <button onClick={handleOpenAddPartner} key="add" icon="ion-ios-add-circle-outline" />
                    <div className={ChattingRoomListCSS.chattingRoomLists} id="chattingList1">
                        {/* <div className={ChattingRoomListCSS.profileIcon} style={{width: '70px'}}> */}
                            {/* <FontAwesomeIcon icon={faCircleUser} style={{ color: '#CBDDFF', fontSize: '70px'}}/> */}
                        </div>
                        <div className={ChattingRoomListCSS.chattingRoomInfo}>
                            {/* <div className={ChattingRoomListCSS.roomInfoText}> */}
                        { 
                            //데이터가 정의되었을때 Object.keys(conversationList)에 할당하고, 
                            // 정의되지 않았을때는 빈 배열을 반환하도록 조건걸기
                            Object.keys(conversationList || {}).map((key) => 
                            <ConversationListItem             
                                key={key}
                                //photo={conversation.photo}
                                partner={key}
                                //list={conversationList[key]}
                                host={userId}
                                sendToMessage={sendToMessage}
                            />
                            )
                        }
                        <AddPartner userId={userId} open={addPartner} setOpen={setAddPartner} handleAddPartner={handleAddPartner}/>
                        <SockJsClient
                        url={process.env.REACT_APP_CHAT_BASE_URL}
                        topics={topics}
                        onMessage={msg => {
                            recevieMessage(msg);
                        }}
                        ref={$websocket}
                        />

                               
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
        </>
    );








}



    export default WebSocketTestRoomList;