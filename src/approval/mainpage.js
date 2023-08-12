import React from 'react';
import ApvMenu from './apvMenu';
import Footer from '../Footer';
import HrmList from './hrmList';
import ExpList from './expList';
import BizList from './bizList';



import '../css/approval/approval.css';

function ApvMain() {
    return (
        <html lang="ko">
            <head>
                <title>전자결재</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <div className="apvMain">
                            <table className="apvMainToday">
                                <tr>
                                    <th colSpan="2">TODAY</th>
                                </tr>
                                <tr> 
                                    <td className="today1">결재진행중</td>
                                    <td>긴급</td>
                                </tr>
                                <tr>
                                    <td className="today1">100건</td>
                                    <td>50건</td>
                                </tr>
                            </table>
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
                <Footer />
            </body>
        </html>
    );
}

export default ApvMain;