import React from 'react';
import '../css/approval/approval.css';

function BizList() {
    return (
        <div className="apvMainListRList">
            <div className="listTitle">업무</div>
            <div><a href="/approval/biz1">기안서</a></div> 
            <div><a href="/HTML/approval/biz2.html">회의록</a></div> 
            <div><a href="/HTML/approval/biz3.html">출장신청서</a></div> 
            <div><a href="/HTML/approval/biz4.html">공문</a></div> 
            <div><a href="/HTML/approval/biz5.html">custom</a></div> 
        </div>

    );
}

export default BizList;