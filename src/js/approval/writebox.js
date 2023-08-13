import React from 'react';
import ApvMenu from './apvMenu';
import Footer from '../../Footer';
import '../../css/approval/approvalBox.css';
import '../../css/approval/approval.css';

function WriteBox() {
    return (
        <html lang="ko">
            <head>
                <title>결재함</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <div className="apv-apvtitle">결재함</div>
                        <div class="apv-topmenu">
                            <ul class="apv-topmenu-ul">
                                <li>결재 예정</li>                    
                                <li>결재 진행중</li>
                                <li>결재 완료</li>
                                <li>결재 반려</li>
                                <li>결재 참조</li>
                            </ul>
                        </div>
                        <div>
                            <table class="apv-boxresult-table">
                                <tr>
                                    <th class="column1">문서번호</th>
                                    <th class="column2">제목</th>
                                    <th class="column3">문서분류</th>
                                    <th class="column4">작성일자</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                            </table>
                            <div class="paging">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </body>
        </html>
    );
}

export default WriteBox;

