import React from 'react';
import ApvMenu from './apvMenuCopy';
import Footer from '../Footer';
import '../css/approval/approvalBiz.css';
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
                        <div className="apvMainbox">
                            <table className="apvMaintoday">
                                <tr>
                                    <th colspan="2">TODAY</th>
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
                            <div className="apvMainbox1">
                                <div className="apvMainbox1Rightbox">
                                    <div className="apvMainbox1Right">
                                        <div className="row1">결재 진행중</div>
                                        <div className="row2">100개</div>
                                    </div>
                                    <div className="apvMainbox1Right">
                                        <div className="row1">긴급</div>
                                        <div className="row2">100개</div>
                                    </div>
                                    <div className="apvMainbox1Right">
                                        <div className="row1">신규 수신</div>
                                        <div className="row2">100개</div> 
                                    </div>
                                    <div className="apvMainbox1Right">
                                        <div className="row1">결재 반려 </div>
                                        <div className="row2">100개</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="apvMainlist">
                            <div className="apvMainlistMy">
                                <div className="apvMainlistLTitle">마이 결재</div>
                                <div className="apvMainlistMylist">
                                    <div><a href="/HTML/approval/hrm1.html">연차신청서</a></div>
                                    <div><a href="/HTML/approval/exp1.html">지출결의서(단건)</a></div> 
                                    <div><a href="/HTML/approval/biz4.html">공문</a></div>
                                    <div><a href="/HTML/approval/biz2.html">회의록</a></div>
                                    <div><a href="/HTML/approval/hrm5.html">연장근무신청서</a></div>
                                </div>
                            </div>   
                            <div className="apvMainlistList">
                                <div className="apvMainlistRTitle">탬플릿 양식</div>
                                <div className="apvMainlistRmList">
                                    <div className="apvMainlistRList">
                                        <div className="listtitle">인사</div>
                                        <div><a href="/HTML/approval/hrm1.html">연차신청서</a></div>
                                        <div><a href="/HTML/approval/hrm2.html">기타휴가신청서</a></div>
                                        <div><a href="/HTML/approval/hrm3.html">서류발급신청서</a></div>
                                        <div><a href="/HTML/approval/hrm4.html">시말서xx</a></div>
                                        <div><a href="/HTML/approval/hrm5.html">연장근무신청서</a></div>
                                        <div><a href="/HTML/approval/hrm6.html">사직서xx</a></div>
                                        <div><a href="/HTML/approval/hrm7.html">기안서</a></div>
                                    </div>
                                    <div className="apvMainlistRListEmp"></div>
                                    <div className="apvMainlistRList">
                                        <div className="listtitle">지출</div>
                                        <div><a href="/HTML/approval/exp1.html">지출결의서(단건)</a></div> 
                                        <div><a href="/HTML/approval/exp2.html">지출결의서(다건)</a></div> 
                                        <div><a href="/HTML/approval/exp3.html">구매기안서xx</a></div> 
                                        <div><a href="/HTML/approval/exp4.html">출장경비신청서</a></div> 
                                        <div><a href="/HTML/approval/exp5.html">개인경비신청서xx</a></div> 
                                        <div><a href="/HTML/approval/exp6.html">경조금신청서</a></div> 
                                        <div><a href="/HTML/approval/exp7.html">법인카드사용보고서</a></div> 
                                    </div>
                                    <div className="apvMainlistRListEmp"></div>
                                    <div className="apvMainlistRList">
                                        <div className="listtitle">업무</div>
                                        <div><a href="/HTML/approval/biz1.html">기안서</a></div> 
                                        <div><a href="/HTML/approval/biz2.html">회의록</a></div> 
                                        <div><a href="/HTML/approval/biz3.html">출장신청서</a></div> 
                                        <div><a href="/HTML/approval/biz4.html">공문</a></div> 
                                        <div><a href="/HTML/approval/biz5.html">custom</a></div> 
                                    </div>
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