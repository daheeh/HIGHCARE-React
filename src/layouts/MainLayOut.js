import { Link } from "react-router-dom"
import MainLayOutCss from "./MainLayOut.module.css"
import ApvMainBox from "../pages/approval/ApprovalMainBox";
import Board3 from "./prevBoard/board3";
import Calendar from "../pages/reservation/Calendar/Calendar";
import { useState } from "react";

function MainLayOut() {

    const [data, setData] = useState('');


    function dateRe(data){
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
                    <h2>출퇴근 기록</h2>
                    <p></p>
                    <a href="#" style={{ color: 'gray' }}></a>
                </div>
                <div className={MainLayOutCss.box}>
                    <h2>결재문서</h2>
                    <ApvMainBox showCounts={true} />
                    <Link to="/approval" style={{ color: 'gray' }}></Link>
                </div>
                <div className={MainLayOutCss.box}>
                    <h2>업무일정</h2>
                    <div>
                        <Calendar setData={setData}/>
                    </div>
                    {/* <Link to="/reservation">예약하러 가기</Link> */}

                </div>
                    <div className={MainLayOutCss.box}>
                    <h2>공지사항</h2>
                    <div>
                        <Board3 />
                    </div>
                    <a href="#" style={{ color: 'gray' }}></a>
                </div>

            </div>
        </>

    );
}

export default MainLayOut