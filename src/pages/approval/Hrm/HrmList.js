import React from 'react';
import { Link } from 'react-router-dom';

function HrmList() {

    const handleDragStart = (e, link) => {
        e.dataTransfer.setData('link', link);
    };
    
    
    return (
        <div className="apvMainListRList">
            <div className="listTitle">인사</div>
{/* 
            <div draggable="true" data-link="Hrm1"
                onDragStart={(e) => handleDragStart(e, "Hrm1")}>
            연차신청서
            </div>
            <div draggable="true" data-link="Hrm2">기타휴가신청서</div>
            <div draggable="true" data-link="Hrm3">서류발급신청서</div>
            <div draggable="true" data-link="Hrm4">시말서xx</div>
            <div draggable="true" data-link="Hrm5">연장근무신청서</div>
            <div draggable="true" data-link="Hrm6">사직서xx</div>
            <div draggable="true" data-link="Hrm7">기안서</div> */}

            <div><Link to="Hrm1">연차신청서</Link></div>
            <div><Link to="Hrm2">기타휴가신청서</Link></div>
            <div><Link to="Hrm3">서류발급신청서</Link></div>
            <div><Link to="Hrm4">시말서xx</Link></div>
            <div><Link to="Hrm5">연장근무신청서</Link></div>
            <div><Link to="Hrm6">사직서xx</Link></div>
            <div><Link to="Hrm7">기안서</Link></div>
        </div>

    );
}

export default HrmList;