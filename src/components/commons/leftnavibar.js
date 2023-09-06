import { Link } from "react-router-dom";
import NaviCss from "./leftnavibar.module.css"
import { useState } from "react";
import ChattingMain from "../../pages/chatting/ChattingMain";

function LeftNavibar(){

    const [isMenuActive, setMenuActive] = useState(false);
    const [isChattingModalOpen, setChattingModalOpen] = useState(false); 

    const menuOnClickHandler = () => {
        setMenuActive(!isMenuActive);
    };

    const openChattingModal = () => {
        setChattingModalOpen(true);
    };

    const closeChattingModal = () => {
        setChattingModalOpen(false);
    };

    return (

        <>
        
            <div className={isMenuActive? NaviCss.NaviboxActive : NaviCss.Navibox}>

                    <div className={isMenuActive? NaviCss.MenuExpander : NaviCss.MenuReducer} onClick={menuOnClickHandler}/>
                <Link to="/">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Main}>{isMenuActive && 'Home'}</div>
                </Link>
                    {/* 채팅 모달 열기 버튼(링크이동X) */}
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Note} onClick={openChattingModal}>{isMenuActive && '채팅'}</div>
                
                <Link to="/pm">
                    <div className={isMenuActive? NaviCss.MenuActive :NaviCss.Pm}>{isMenuActive && '인사관리'}</div>
                </Link>    
                <Link to={"approval"}>
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Approval}>{isMenuActive && '전자결재'}</div>
                </Link>
                <Link to= "/mypage">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Mypage}>{isMenuActive && '마이페이지'}</div>
                </Link>   
                <Link to= "/bulletin/board/1">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.bulletin}>{isMenuActive && '게시판'}</div>
               </Link> 
               <Link to="/reservation">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Reservation}>{isMenuActive && '시설예약'}</div>
                </Link>
                    <div className={isMenuActive? NaviCss.MenuActive : ''}>{isMenuActive && '시스템관리'}</div>

            </div>
            {/* 채팅 모달 */}
            {isChattingModalOpen && (
                <ChattingMain onClose={closeChattingModal} isOpen={isChattingModalOpen} />
            )}

        </>
    )
}

export default LeftNavibar;