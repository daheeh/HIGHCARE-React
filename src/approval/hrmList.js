import React from 'react';
import '../css/approval/approval.css';

function HrmList() {
    return (
        <div className="apvMainListRList">
            <div className="listTitle">인사</div>
            <div><a href="/HTML/approval/hrm1.html">연차신청서</a></div>
            <div><a href="/HTML/approval/hrm2.html">기타휴가신청서</a></div>
            <div><a href="/HTML/approval/hrm3.html">서류발급신청서</a></div>
            <div><a href="/HTML/approval/hrm4.html">시말서xx</a></div>
            <div><a href="/HTML/approval/hrm5.html">연장근무신청서</a></div>
            <div><a href="/HTML/approval/hrm6.html">사직서xx</a></div>
            <div><a href="/HTML/approval/hrm7.html">기안서</a></div>
        </div>

    );
}

export default HrmList;