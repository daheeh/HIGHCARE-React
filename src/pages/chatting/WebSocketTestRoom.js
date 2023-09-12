// import React, { useRef, useState, useEffect } from 'react';
// import ChattingPageCSS from './ChattingPage.module.css';
// import Draggable from 'react-draggable';
// import "../chatting/ChatTextBalloon.css";
// import SockJS from 'sockjs-client';
// import { Stomp } from '@stomp/stompjs';


//     function WebSocketTestRoom() {

//         //============================= WebSocket 시작 =====================================
        
//         const [stompClient, setStompClient] = useState(null); // webSocket연결 관리
//         const [roomId] = useState(/* 초기 roomId 값 */);      // 채팅방(WeobSocket서버랑 연결된 특정채팅방 식별)
//         const [chatList] = useState(/* 초기 chatList 값 */);  // 초기채팅목록 저장(저장한 채팅목록 불러올때)  
//         const [connected, setConnected] = useState(false);    // WebSocket연결 상태 저장 
//         const [sender, setSender] = useState('');            // 
//         const [message, setMessage] = useState('');
//         const [chatting, setChatting] = useState([]);

        
//         const connect = () => {
//             const socket = new SockJS('/api/ws-stomp');
//             const client = Stomp.over(socket);
//             client.connect({}, (frame) => {
//                 setStompClient(client);
//                 setConnected(true);
//                 console.log('Connected: ' + frame);
//                 loadChat(chatList); // 저장된 채팅 불러오기 

//                 // 구독
//                 client.subscribe('/room/' + roomId, (chatMessage) => {
//                     showChat(JSON.parse(chatMessage.body));
//                 });
//             });
//         };       


//         // 사용자가 텍스트 입력할 때 호출되는 함수
//         const onText = (event) => {
//             console.log(event.target.value);
//             setMessage(event.target.value); // 메세지를 사용자가 입력한 걸로 set해줌
//         }

//         const disconnect = () => {
//             if(stompClient) {
//                 stompClient.disconnect();
//                 setConnected(false);
//                 console.log('Disconnected');
//             }
//         };


//         // view에서 입력값, roomId를 받아서 Controller로 전달
//         const sendChat = () => {
//             if(stompClient && sender && message) {
//                 const data = {
//                     sender,
//                     message,
//                 };
//                 stompClient.send(`/send/${roomId}`, {}, JSON.stringify(data));
//             }
//         };

//         // 저장된 채팅 불러오기 
//         const loadChat = (chatList) => {
//             if(chatList){
//                 setChatting(chatList);
//             }
//         };


//         // 보낸 채팅 보기
//         const showChat = (chatMessage) => {
//             setChatting((prevChatting) => [...prevChatting, chatMessage]);
//         }

//         useEffect(() => {
//             connect();
//             return () => disconnect();
//         },[]);


    
//         const msgBox = chatting.map((item, idx) => (
//             <div key={idx} className={item.sender === sender ? 'me' : 'other'}>
//                 <span><b>{item.sender}</b></span> [ {item.time} ]<br/>
//                 <span>{item.message}</span>
//             </div>
//         ));
   

//         const handleSubmit = (e) => {
//             e.preventDefault();
//             };


//         //============================= WebSocket 끝 =====================================





//         //============================= 채팅화면 =====================================
        
//         const scrollRef = useRef();
        
//         // 채팅내용이 업데이트 될때마다 실행
//         useEffect(() => {
//             scrollBottom();
//         }, [chatting]);
        
//         const scrollBottom = () => {
//             if(scrollRef.current) {
//                 scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//             }
//             // scrollHeight: 스크롤 요소 전체내용 높이
//             // scrollTop: 현재 스크롤 위치
//         };


//         return (
            
//             <>
//                 <Draggable 
//                     handle={`.${ChattingPageCSS.chattingPageHeader}`}
//                     bounds="body"
//                 >
//                     <div className={ChattingPageCSS.chattingPageMain}>
//                         <div className={ChattingPageCSS.chattingPageHeader}>
//                             <button className={ChattingPageCSS.chattingCloseButton} onClick={ disconnect }>X</button>
//                             {/* 채팅방 이름 or 대화상대 이름 */}
//                             <p style={{textAlign: 'center', paddingTop: '13px', paddingLeft: '30px' }}><b>webSocket Chatting</b></p>
//                         </div> 

//                         <div className={ChattingPageCSS.chattingMainContents}>
//                             <div className={ChattingPageCSS.chattingScreen}>
//                             {/* 말풍선 */}
//                             {/* 스크롤 가능 섹션 */}
//                             <div className='talkshadow' ref={scrollRef}>
//                                 {msgBox}
//                             </div>
//                             </div>
//                             <div className={ChattingPageCSS.chattingSendZone}>
//                                 {/* 이름입력창 */}
//                             <input 
//                                 className={ChattingPageCSS.chatNameInput}
//                                 placeholder='이름을 입력하세요.' 
//                                 type='text' 
//                                 id='name' 
//                                 value={sender} 
//                                 onChange={(event => setSender(event.target.value))}/>
                            
//                                 {/* 채팅입력창 */}
//                                 <div className={ChattingPageCSS.chatInputAndButton}>
//                                     <textarea className={ChattingPageCSS.sendChatMsg} id='sendChatMsg' value={message} onChange={onText}
//                                         onKeyDown={(ev) => {if(ev.keyCode === 13){sendChat();}}} ></textarea>
//                                     <input type='button' className={ChattingPageCSS.chattingSendButton} 
//                                         value='전송' id='btnChatSend' onClick={sendChat}/>
//                                 </div>
//                             </div>
                                
//                         </div>

//                     </div>
//                 </Draggable>
//             </>
//         );
//     }


// export default WebSocketTestRoom;
