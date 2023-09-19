import { Link } from "react-router-dom"
import MainLayOutCss from "./MainLayOut.module.css"
import ApvMainBox from "../pages/approval/ApprovalMainBox";
import Board3 from "./prevBoard/board3";
import PmWorkMain from "../pages/pm/pmWorkMain";

function MainLayOut() {

    return (
        <>
            <div className={MainLayOutCss.container}>
            <div className={MainLayOutCss.box}>
                    <h2>출 / 퇴근</h2>

                <PmWorkMain/>
                    <br/><br/>
                    <Link to="/pm/work">더보기</Link>
                    
                </div>
                <div className={MainLayOutCss.box}>
                    <h2>결재문서</h2>
                    <ApvMainBox showCounts={true} />
                    <Link to="/approval" style={{color:'gray'}}>더보기</Link>
                </div>
                <div className={MainLayOutCss.box}>
                    <h2>공지사항</h2>
                    <div>
                            <Board3 />
                    </div>
                    <a href="#" style={{color:'gray'}}>더 보기</a>
                </div>

                <div className={MainLayOutCss.box}>
                    <h2>업무일정</h2>
                    <p></p>
                    <a href="#" style={{color:'gray'}}>더 보기</a>
                </div>
            </div>
        </>

    );
}

export default MainLayOut