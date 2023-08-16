import React from 'react';
import ApvMenu from './apvMenu';
import HrmList from './hrmList';
import ExpList from './expList';
import BizList from './bizList';
import './approval.css';

function ApvMain() {
    return (

        <section>
            <ApvMenu />
            <div>
                <div className="apvMain">
                    <div className="apvMainToday">
                        <div className="header">TODAY</div>
                        <div className="cell1">결재진행중</div>
                        <div className="cell2">긴급</div>
                        <div className="cell1">100건</div>
                        <div className="cell2">50건</div>
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