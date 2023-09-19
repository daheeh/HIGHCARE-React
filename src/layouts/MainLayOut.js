import { Link } from "react-router-dom"
import MainLayOutCss from "./MainLayOut.module.css"
import ApvMainBox from "../pages/approval/ApprovalMainBox";
import Board3 from "./prevBoard/board3";
import PmWorkMain from "../pages/pm/pmWorkMain";
import { useEffect, useState } from "react";
import Calendar from "../pages/reservation/Calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { callNoticeAPI } from "../apis/BulletinAPICall";


function MainLayOut() {

    const [data, setData] = useState('');
    const dispatch = useDispatch();
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;

    function dateRe(data) {
        var dateObj = new Date(data);

        var year = dateObj.getFullYear();
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        var formattedDate = year + '년 ' + month + '월 ' + day + '일';

        return formattedDate;
    }

    return (
        <>
            <div className={MainLayOutCss.container}>
                <div className={MainLayOutCss.box}>
                    <Link to="/pm/work"><h2>출 / 퇴근</h2></Link>
                    {empNo && <PmWorkMain />}


                </div>
                <div className={MainLayOutCss.box}>
                    <Link to="/approval" style={{ color: 'gray' }}><h2>결재문서</h2></Link>
                    <ApvMainBox showCounts={true} />

                </div>
                <div className={MainLayOutCss.box}>
                    <h2>업무일정</h2>
                    <div>
                        <Calendar setData={setData} />
                    </div>
                    {/* <Link to="/reservation">예약하러 가기</Link> */}

                </div>
                <div className={MainLayOutCss.box}>
                    <Link to="bulletin/board/4" style={{ color: 'gray' }}><h2>공지사항</h2></Link>
                    <div style={{padding:20}}>
                        <Board3 />
                    </div>

                </div>
            </div>
        </>

    );
}

export default MainLayOut