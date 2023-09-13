import { Link } from "react-router-dom"
import mypageLayOut from "./mypageLayoOut.css"
// import BulletinBoard from "../pages/bulletin/BulletinBoard";
// import { dividerClasses } from "@mui/material";
import MypageNav from "./MypageNav";

function MypageLayOut() {
    

    return (
        <div>

        <section style={{width:300}}>
            <MypageNav />
                    <div className="apvMainBox">
                        <div className="apvMainBoxRightBox">
                            <div className="apvMainBoxRight">
                                <div className="row1">
                                <Link to="/mypage/profile">프로필</Link>
                                </div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">
                                <Link to="/mypage/annual">연차</Link>
                                </div>   
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">
                                <Link to="/mypage/mymanegement">근태관리</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
        </div>

    
    );
}

export default MypageLayOut;



// import Board3 from "./prevBoard/board3";
// import { Link } from "react-router-dom";
// import MypageNav from "./MypageNav";

// function Mypage() {

//         return (
//         <div>
           
//             <nav>
//             <MypageNav/>
//                 <Link to="/">Home</Link>
//                 <Link to="/mypage">마이페이지</Link>
//                 <Link to="/mypage/list/regist">명함등록</Link>
//                 <Link to="/mypage/mytemplate/customlog">상담일지</Link>
//                 <Link to="/mypage/mytemplate/worklog">업무일지</Link>
//                 <Link to="/mypage/profile">프로필</Link>
//                 <Link to="/mypage/annual">연차</Link>
//                 <Link to="/mypage/mymanegement">근태관리</Link>
//             </nav>

//         </div>
//     )

// }
// export default Mypage;