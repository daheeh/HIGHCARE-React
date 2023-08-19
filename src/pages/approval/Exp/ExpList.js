import React from 'react';
import { Link } from 'react-router-dom';

function ExpList() {
    return (
        <div className="apvMainListRList">
            <div className="listTitle">지출</div>
            <div><Link to="Exp1">지출결의서(단건)</Link></div> 
            <div><Link to="Exp2">지출결의서(다건)</Link></div> 
            <div><Link to="Exp3">구매품의서xx</Link></div> 
            <div><Link to="Exp4">출장경비신청서</Link></div> 
            <div><Link to="Exp5">개인경비신청서xx</Link></div> 
            <div><Link to="Exp6">경조금신청서</Link></div> 
            <div><Link to="Exp7">법인카드사용보고서</Link></div> 
        </div>

    );
}

export default ExpList;