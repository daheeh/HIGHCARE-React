import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApvMenu from './AprovalNav';
import HrmList from './Hrm/HrmList';
import ExpList from './Exp/ExpList';
import BizList from './Biz/BizList';
import './Approval.css';
// import { callApvWriteBoxAPI } from '../../../apis/ApprovalAPICalls';

function ApvMain() {

    const members = useSelector(state => state.members);
    const empNo = members?.empNo;
    console.log("empNo : ", empNo);
    
    const dispatch = useDispatch();


    return (

        <section>
            <ApvMenu />
            <div>
                <div className="apvMain">
                    <div className="apvMainToday">
                        <div className="header">TODAY</div>
                        <div className="cell1">결재진행중</div>
                        <div className="cell2">긴급</div>
                        <div className="cell1">결재진행중 개수</div>
                        <div className="cell2">긴급 개수</div>
                    </div>

                    <div className="apvMainBox">
                        <div className="apvMainBoxRightBox">
                            <div className="apvMainBoxRight">
                                <div className="row1">결재 진행중</div>
                                <div className="row2">100개</div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">긴급</div>
                                <div className="row2">100개</div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">신규 수신</div>
                                <div className="row2">100개</div> 
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">결재 반려 </div>
                                <div className="row2">100개</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="apvMainList">
                    <div className="apvMainListMy">
                        <div className="apvMainListLTitle">마이 결재</div>
                        <div className="apvMainListMyList">
                            <div><a href="/HTML/approval/hrm1.html">연차신청서</a></div>
                            <div><a href="/HTML/approval/exp1.html">지출결의서(단건)</a></div> 
                            <div><a href="/HTML/approval/biz4.html">공문</a></div>
                            <div><a href="/HTML/approval/biz2.html">회의록</a></div>
                            <div><a href="/HTML/approval/hrm5.html">연장근무신청서</a></div>
                        </div>
                    </div>   
                    <div className="apvMainListList">
                        <div className="apvMainListRTitle">탬플릿 양식</div>
                        <div className="apvMainListRmList">
                            <HrmList />
                            <div className="apvMainListRListEmp"></div>
                            <ExpList />
                            <div className="apvMainListRListEmp"></div>
                            <BizList />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ApvMain;