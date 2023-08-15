import { useState } from "react"
import "./SlideSide.css"
import { Link } from "react-router-dom";

function SlideSide(){

    const [isMenuActive, setMenuActive] = useState(false);

    const menuOnClickHandler = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <>

            <div className="navibox">

                <div style={{}}>
                    <span className="menu-anchor" onClick={menuOnClickHandler}></span>
                </div>

            <Link to="/">
                <div className="navimenu-main"/>
            </Link>
                <div className="navimenu-note"/>
                <div className="navimenu-pm"/>
            <Link to="approval/mainpage">
                <div className="navimenu-approval"/>
            </Link>
                <div className="navimenu-mypage"/>
                <div className="navimenu-schedule"/>
                <div className="navimenu-reservation"/>
            </div>

  
            <menu className={isMenuActive ? 'menu-active' : ''}>
                <ul>
                <Link to="/">
                    <li><a>Home</a></li>
                </Link>
                <Link to="/">
                    <li><a>인사관리</a></li>
                </Link>
                    <Link to="/approval/mainpage">
                    <li><a>전자결재</a></li>
                    </Link>
                <Link to="/">
                    <li><a>마이페이지</a></li>
                </Link>
                <Link to="/">
                    <li><a>출퇴근관리</a></li>
                </Link>
                <Link to="/">
                    <li><a>시설예약</a></li>
                </Link>
                <Link to="/admin">
                    <li><a>시스템운영</a></li>
                </Link>
                </ul>
            </menu>
        </>
    )
}

export default SlideSide;