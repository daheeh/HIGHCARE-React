import React from 'react';
import '../pm/css/pm-member.css'
import "../commons/leftnavibar.css"
import PmNav from './pmNav';

function PmWork() {
	return (
<section>
<PmNav/>
<div className="apv-navibox">
        <div className="pm-de-top">
            <div className="pm-div-font">출퇴근 관리
            </div>
        </div>

                    <div className="pm-workbox">
                        <div className="pm-workin-box">
                            <input type="button" value="출근" className="pm-work-button"></input>
                            <input type="button" value="퇴근" className="pm-work-button"></input>
                            <input type="button" value="자리 비움" className="pm-work-button"></input>
                            {/* <button className="pm-work-button">퇴근</button>
                            <button className="pm-work-button">자리 비움</button> */}
                        </div>
                        <div className="pm-workin-box">
                            <h2>누적 근무시간</h2>
                            <h2>00:00:00</h2>
                        </div>
                        <div className="pm-workin-box2">
                            <h2>출근시간</h2>
                            <h2>00:00:00</h2>
                        </div>
                        <div className="pm-workin-box-last">
                            <h2>퇴근시간</h2>
                            <h2>00:00:00</h2>
                        </div>
                    </div>
                <table className="pm-job-table">
                    <tr>
                        <th className="columnpm1">사원명</th>
                        <th className="columnpm2">날짜</th>
                        <th className="columnpm0">부서명</th>
                        <th className="columnpm0">직급 </th>
                        <th className="columnpm0">출근시간 </th>
                        <th className="columnpm0">퇴근시간</th>
                        <th className="columnpm0">이메일</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <br></br>
                <div className="paging">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
    </section>
	);
}

export default PmWork;
