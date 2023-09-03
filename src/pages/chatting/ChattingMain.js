import React, { useState, useRef, useEffect } from 'react';
import ChattingMainCSS from './ChattingMain.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';
import ChattingFooter from '../../component/ChattingFooter';
import ChattingRoomList from './ChattingRoomList';
// import ChattingPage from './ChattingPage';
import { Link } from 'react-router-dom';
import TreeView from '../pm/treeview';


    function ChattingMain({ onClose }) {

        const [activeTab, setActiveTab] = useState('user'); // 기본 탭 설정
        // const mainContentsRef = useRef();
        // const [isChattingPageOpen, setIsChattingPageOpen] = useState(false);


        const handleTabChange = (tab) => {
            setActiveTab(tab);
        };

        // // 채팅창 열고 닫기 이벤트
        // const chattingPageOpen = () => {
        //     setIsChattingPageOpen(true);
        // };
    
        // const chattingPageClose = () => {
        //     setIsChattingPageOpen(false);
        // };

        // useEffect(() => {
        //     // activeTab이 변경될 때마다 mainContents의 스크롤을 최하단으로 이동
        //     if (mainContentsRef.current) {
        //         mainContentsRef.current.scrollTop = mainContentsRef.current.scrollHeight;
        //     }
        // }, [activeTab]);

        

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
                            <FontAwesomeIcon
                                 icon={faComment} 
                                 style={{ color: activeTab === 'comment' ? 'white' : 'white', fontSize: '24px', marginRight: '10px', cursor: 'pointer'}}
                                 onClick={() => handleTabChange('comment')}
                            />

                            {/* 쪽지 */}
                            <Link to="/socket/chatting">
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
                                <TreeView />
                            </div>
                        )}

                        {activeTab === 'comment' && (
                            <ChattingRoomList/>
                        )}
                    <ChattingFooter/>
                    </div>
                </div>
                </Draggable>

                {/* {isChattingPageOpen && (
                <ChattingPage onClose={chattingPageClose} />
                )} */}
            </>
        );
    }

    export default ChattingMain;
