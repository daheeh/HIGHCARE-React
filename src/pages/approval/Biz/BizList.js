import React from 'react';
import { Link } from 'react-router-dom';


function BizList() {
    return (
        <div className="apvMainListRList">
            <div className="listTitle">업무</div>
            <div><Link to="Biz1">기안서</Link></div> 
            <div><Link to="Biz2">회의록</Link></div> 
            <div><Link to="Biz3">출장신청서</Link></div> 
            <div><Link to="Biz4">공문</Link></div> 
            <div><Link to="Biz5">custom</Link></div> 
        </div>

    );
}

export default BizList;