import React from 'react';
import ApvMenu from './apvMenu';
import './approvalBox.css';
import './approval.css';

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
                        <div className="apv-topmenu">
                            <ul className="apv-topmenu-ul">
                                <li>결재 예정</li>                    
                                <li>결재 진행중</li>
                                <li>결재 완료</li>
                                <li>결재 반려</li>
                                <li>결재 참조</li>
                            </ul>
                        </div>
                        <div>
                            <table className="apv-boxresult-table">
                                <tr>
                                    <th className="column1">문서번호</th>
                                    <th className="column2">제목</th>
                                    <th className="column3">문서분류</th>
                                    <th className="column4">작성일자</th>
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
                            <div className="paging">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    );
}

export default WriteBox;

