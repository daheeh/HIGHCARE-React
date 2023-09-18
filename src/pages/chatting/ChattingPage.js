import React, { useCallback, useRef, useState, useEffect } from 'react';
import ChattingPageCSS from './ChattingPage.module.css';
import Draggable from 'react-draggable';
import "../chatting/ChatTextBalloon.css";
// import { connect } from 'react-redux';
// import socketIOClient from 'socket.io-client';
// import App from '../components/App';
// import * as action from '../actions/actions';



    function ChattingPage({ onClose }) {


        const [msg, setMsg] = useState("");
        const [name, setName] = useState("");
        const [chatt, setChatt] = useState([]); // 채팅메세지 담는 배열
        const [chkLog, setChkLog] = useState(false);
        const [socketData, setSocketData] = useState();
    
        // 1. webSocket객체 담는 변수
        // 컴포넌트가 변경될 때 객체가 유지되어야하므로 ref로 저장
        const ws = useRef(null);    

    
        // 3. 말풍선 렌더링
        // msgBBox가 chatt배열을 기반으로 사용자 메세지를 나타내는 JSX요소 생성
        // map 함수로 chatt 배열을 순회하면서 각 메세지 정보를 이용해 말풍선 요소 생성
        // item.name과 name을 비교하여 자신의 메세지인지, 상대방의 메세지인지 판별 후 맞는 스타일 적용
        // 각 요소는 name과 date 등을 포함하는 말풍선 형태로 렌더링
        const msgBox = chatt.map((item, idx) => (
            <div key={idx} className={item.name === name ? 'me' : 'other'}>
                <span><b>{item.name}</b></span> [ {item.time} ]<br/>
                <span>{item.msg}</span>
            </div>
        ));
    
        // 2. socketData 상태가 변경될 때마다 실행(=> 웹소켓에서 새로운 메세지가 도착할 때마다 실행)
        // socketDate가 변경되면 기존 chatt배열에 새로운 데이터를 추가하고, set으로 상태 업데이트
        // 이를 이용해 새로운 메세지를 화면에 렌더링
        useEffect(() => {
            if(socketData !== undefined) {
                const tempData = chatt.concat(socketData);
                console.log(tempData);
                setChatt(tempData);
            }
        }, [socketData]);
    



        
        //============================= WebSocket =====================================

        // 사용자가 텍스트 입력할 때 호출되는 함수
        const onText = event => {
            console.log(event.target.value);
            setMsg(event.target.value); // 메세지를 사용자가 입력한 걸로 set해줌
        }
    
        //웹소켓 연결 설정
        const webSocketLogin = useCallback(() => {
            ws.current = new WebSocket("ws://highcare.coffit.today:8080/ws-stomp"); // 웹소켓 연결
    
            ws.current.onmessage = (message) => {
                const dataSet = JSON.parse(message.data);   // 웹소켓에서 받은 메세지데이터 파싱
                setSocketData(dataSet); // 파싱한 데이터로 set해줌
            }
        },[]);
    
        // 메세지 전송
        const send = useCallback(() => {
            // 이걸 데이터로 받아올 예정
            if(!chkLog) {
                if(name === "") {
                    alert("이름을 입력하세요.");
                    document.getElementById("name").focus();
                    return;
                }
                webSocketLogin();   // 웹소켓 연결 설정 함수 호출
                setChkLog(true);    // 웹소켓 연결 여부 상태 true로 set
            }
    
            if(msg !== ''){

                const currentDate = new Date();
                const hours = currentDate.getHours();
                const minutes = currentDate.getMinutes();
                const ampm = hours >= 12 ? '오후' : '오전';
                const formattedHours = hours % 12 || 12;
            
                const formattedTime = `${ampm} ${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}`;
          
                const data = {
                    name,
                    msg,
                    time: formattedTime,
                };  //전송할 메세지 데이터(JSON)
    
                const temp = JSON.stringify(data);
                
                //readyState는 웹 소켓 연결 상태를 나타냄 (아직 연결되기 전의 상태)
                if(ws.current.readyState === 0) {   
                    //webSocket이 맺어지고 난 후, 실행
                    ws.current.onopen = () => {     
                        console.log(ws.current.readyState);
                        ws.current.send(temp);
                    }
                }else {
                    ws.current.send(temp); // 웹소켓이 이미 연결되어 있을 경우 메세지 전송
                }
            }else {
                alert("메세지를 입력하세요.");
                document.getElementById("msg").focus();
                return;
            }
            setMsg(""); // 메세지 입력창 초기화
        });

        //============================= WebSocket =====================================

    
        


        //============================= 채팅화면 =====================================
        

        // =================== 1. 스크롤 맨밑으로 자동이동 ============================
        const scrollRef = useRef();
        
        // 채팅내용이 업데이트 될때마다 실행
        useEffect(() => {
            scrollBottom();
        }, [chatt]);
        
        const scrollBottom = () => {
            if(scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
            // scrollHeight: 스크롤 요소 전체내용 높이
            // scrollTop: 현재 스크롤 위치
        };
        
        
        // =================== 2. 상대방이 채팅 입력 중일때 표시 ============================


        return (
            
            <>
                <Draggable 
                    handle={`.${ChattingPageCSS.chattingPageHeader}`}
                    bounds="body"
                >
                    <div className={ChattingPageCSS.chattingPageMain}>
                        <div className={ChattingPageCSS.chattingPageHeader}>
                            <button className={ChattingPageCSS.chattingCloseButton} onClick={ onClose }>X</button>
                            {/* 채팅방 이름 or 대화상대 이름 */}
                            <p style={{textAlign: 'center', paddingTop: '13px', paddingLeft: '30px' }}><b>webSocket Chatting</b></p>
                        </div> 

                        <div className={ChattingPageCSS.chattingMainContents}>
                            <div className={ChattingPageCSS.chattingScreen}>
                            {/* 말풍선 */}
                            {/* 스크롤 가능 섹션 */}
                            <div className='talkshadow' ref={scrollRef}>
                                {msgBox}
                            </div>
                            </div>
                            <div className={ChattingPageCSS.chattingSendZone}>
                                {/* 이름입력창 */}
                            <input 
                                className={ChattingPageCSS.chatNameInput}
                                placeholder='이름을 입력하세요.' 
                                type='text' 
                                id='name' 
                                value={name} 
                                onChange={(event => setName(event.target.value))}/>
                            
                                {/* 채팅입력창 */}
                                <div className={ChattingPageCSS.chatInputAndButton}>
                                    <textarea className={ChattingPageCSS.sendChatMsg} id='sendChatMsg' value={msg} onChange={onText}
                                        onKeyDown={(ev) => {if(ev.keyCode === 13){send();}}} ></textarea>
                                    <input type='button' className={ChattingPageCSS.chattingSendButton} 
                                        value='전송' id='btnChatSend' onClick={send}/>
                                </div>
                            </div>
                                
                        </div>

                    </div>
                </Draggable>
            </>
        );
    }


export default ChattingPage;
