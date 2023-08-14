import { Link } from "react-router-dom";
import "./leftnavibar.css"

function LeftNavibar(){

    return (

        <div className="navibox">

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
    )
}

export default LeftNavibar;