import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChattingMainCSS from './ChattingMain.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';
import ChattingFooter from '../../component/ChattingFooter';
import { Link } from 'react-router-dom';
import TreeViewChatting from '../pm/treeview-chatting';
import WebSocketTestRoomList from './WebSocketTestRoomList';
import { decodeJwt } from "../../utils/decodeJwt";



    function ChattingMain({ onClose, isOpen}) {

        const [activeTab, setActiveTab] = useState('user'); // 기본 탭 설정

        const handleTabChange = (tab) => {
            setActiveTab(tab);
        };

        
        // 채팅 모달 열었을 때, 로그인된 회원 정보 가져오기
            const authes = useSelector(state => state.authes);
            const empNo = authes.empNo;
            const empName = authes.name;
            const empDept = authes.dept;
            const empJob = authes.job;
            const userId = decodeJwt(window.localStorage.getItem("accessToken")).sub;
            console.log("empNo : ", empNo);
            console.log("empName : ", empName);
            console.log("empDept : ", empDept);
            console.log("empJob : ", empJob);


            useEffect(() => {
                // 모달이 열릴 때 API 요청 보내기
                if (!isOpen) {
                    const userId = decodeJwt(window.localStorage.getItem("accessToken")).sub;
                    console.log("loginEmpId: ", userId);
                }
              }, [isOpen, userId]);


        return (
            <>
                <Draggable 
                    handle={`.${ChattingMainCSS.chattingHeader}`}
                    bounds="body"
                >
                <div className={ChattingMainCSS.chattingMain}>
                    <div className={ChattingMainCSS.chattingHeader}>
                        <div className={ChattingMainCSS.chattingLogo}>
                            <img className={ChattingMainCSS.logoImg} src='images/HIGHCARE-logo.png' alt='logo' />
                        <button className={ChattingMainCSS.chattingCloseButton} onClick={ onClose }>X</button>
                        </div>
                        <div className={ChattingMainCSS.chattingIcon}>

                            {/* 사용자 */}
                            <FontAwesomeIcon
                                icon={faUser}
                                style={{ color: activeTab === 'user' ? 'white' : 'white', fontSize: '24px', marginRight: '10px', cursor: 'pointer'}}
                                onClick={() => handleTabChange('user')}
                            />

                            {/* 말풍선 */}
                            {/* <Link to = "/roomList"> */}
                            <FontAwesomeIcon
                                 icon={faComment} 
                                 style={{ color: activeTab === 'comment' ? 'white' : 'white', fontSize: '24px', marginRight: '10px', cursor: 'pointer'}}
                                 onClick={() => handleTabChange('comment')}
                            />
                            {/* </Link> */}

                            {/* 쪽지 */}
                            <Link to="/roomList">
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    style={{ color: 'white', fontSize: '24px', cursor: 'pointer'}}
                                    // onClick={chattingPageOpen}    
                                />
                            </Link>
                        </div>
                    </div> 
                    
 
                    {/* 이 메인컨텐츠 부분을 조건부 렌더링으로 아이콘 누를때마다 바꿔주기 */}
                    <div className={ChattingMainCSS.mainContents}>
                        {activeTab === 'user' && (
                            <div className={ChattingMainCSS.searchHeader}>
                                <div className={ChattingMainCSS.searchMember}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{cursor: 'pointer'}} />
                                    <input type="search" className={ChattingMainCSS.searchBox} placeholder="이름, 부서명, 전화번호 검색"/>
                                </div>
                            </div>

                        )}
                        {activeTab === 'user' && (
                            <div className={ChattingMainCSS.chattingTreeView}>
                                 <div style={{ fontWeight: 'bold', color: 'black', marginBottom: '10px'}}>{empDept} {empName} {empJob}님</div>
                                <TreeViewChatting />
                            </div>
                        )}

                        {activeTab === 'comment' && (
                            <WebSocketTestRoomList userId={userId} />
                        )}
                    <ChattingFooter/>
                    </div>
                </div>
                </Draggable>

            </>
        );
    }

    export default ChattingMain;
