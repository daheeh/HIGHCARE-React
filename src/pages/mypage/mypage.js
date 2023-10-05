import { Link } from "react-router-dom"
import mypageLayOut from "./mypageLayoOut.css"
// import BulletinBoard from "../pages/bulletin/BulletinBoard";
// import { dividerClasses } from "@mui/material";
import MypageNav from "./MypageNav";
import "./mypageLayoOut.css";

function MypageLayOut() {
    

    return (
        <div>

        <section style={{width:300}}>
            <MypageNav />
                    <div className="myMainBox">
                        <div className="myMainBoxRightBox">
                            <div className="myMainBoxRight">
                                <div className="row1">
                                <Link to="/mypage/profile">프로필</Link>
                                </div>
                            </div>
                            <div className="myMainBoxRight">
                                <div className="row1">
                                <Link to="/mypage/myannual">연차</Link>
                                </div>   
                            </div>
                            <div className="myMainBoxRight">
                                <div className="row1">
                                <Link to="/mypage/mymanegement">근태관리</Link>
                                </div>
                            </div>
                            {/* <div className="myMainBoxRight">
                                <div className="row1">
                                <Link to="/mypage/businesscardregist">명함 관리</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
        </div>

    
    );
}

export default MypageLayOut;

