import { Link } from "react-router-dom";
import NaviCss from "./leftnavibar.module.css"
import { useState } from "react";

function LeftNavibar(){

    const [isMenuActive, setMenuActive] = useState(false);

    const menuOnClickHandler = () => {
        setMenuActive(!isMenuActive);
    };

    return (

        <>
        
            <div className={isMenuActive? NaviCss.NaviboxActive : NaviCss.Navibox}>

                    <div className={isMenuActive? NaviCss.MenuExpander : NaviCss.MenuReducer} onClick={menuOnClickHandler}/>
                <Link to="/">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Main}>{isMenuActive && 'Home'}</div>
                </Link>
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Note}>{isMenuActive && '채팅쪽지함'}</div>
                <Link to="/pm">
                    <div className={isMenuActive? NaviCss.MenuActive :NaviCss.Pm}>{isMenuActive && '인사관리'}</div>
                </Link>    
                <Link to={"approval/mainpage"}>
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Approval}>{isMenuActive && '전자결재'}</div>
                </Link>
                <Link to= "/mypage">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Mypage}>{isMenuActive && '마이페이지'}</div>
                </Link>   
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Schedule}>{isMenuActive && '일정관리'}</div>
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Reservation}>{isMenuActive && '시설예약'}</div>
                    <div className={isMenuActive? NaviCss.MenuActive : ''}>{isMenuActive && '시스템관리'}</div>

            </div>
        </>
    )
}

export default LeftNavibar;