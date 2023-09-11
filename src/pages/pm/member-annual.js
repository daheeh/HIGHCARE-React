import React, { useEffect, useState } from 'react';
import './pm-member.css'
import PmNav from './pmNav';
import { useDispatch, useSelector } from 'react-redux';
import { callAnnualAPI } from '../../apis/PmAPICalls';


function PmMemberAnnual() {
    const dispatch = useDispatch();
    const pmresult = useSelector(state => state.pmannual);
    // const total = pmresult.

    const empinfo = useSelector(state => state.authes);
    const empNo = empinfo.empNo;
    const depart = empinfo.dept;
    

    useEffect(() => {
        dispatch(callAnnualAPI(empNo));
      },[]);

	return (
<section>
<PmNav/>
<div className="apv-navibox">
        <div className="pm-de-top">
            <div className="pm-div-font">개인 연차 조회</div>
        </div>
                <div className="pm-ma-top">
                <div className='div3'></div>
                <div className="pm-ma-box2">
                    <div className="pm-ma-font">총연차</div>
                    <div className="pm-ma-number">{pmresult[0].totalAnnual || '00'}</div>
                </div>
                <div className="pm-line"></div>
                <div className="pm-ma-box">
                    <div>발생 연차</div>
                    <div className="pm-ma-number">{pmresult[0].addAnnual || '00'}</div>
                </div>
                <div className="pm-line"></div>
                <div className="pm-ma-box">
                    <div>발생 월차</div>
                    <div className="pm-ma-number">00</div>
                </div>
                <div className="pm-line"></div>
                <div className="pm-ma-box">
                    <div>조정 연차</div>
                    <div className="pm-ma-number">00</div>
                </div>
                <div className="pm-line"></div>
                <div className="pm-ma-box">
                    <div>이월 연차</div>
                    <div className="pm-ma-number">00</div>
                </div>
                <div className="pm-line"></div>
                <div className="pm-ma-box">
                    <div>사용 연차</div>
                    <div className="pm-ma-number">00</div>
                </div>
                <div className="pm-line"></div>
                <div className="pm-ma-box">
                    <div>잔여 연차</div>
                    <div className="pm-ma-number">00</div>
                </div>
                
                </div>
                    <table className="pm-ma-table">
                    <tr>
                        <th className="columnpm1">이름</th>
                        <th className="columnpm2">부서명</th>
                        <th className="columnpm3">휴가 종류</th>
                        <th className="columnpm4">사용 연차</th>
                        <th className="columnpm7">연차 사용 시작일</th>
                        <th className="columnpm5">연차 사용 종료일 </th>
                        <th className="columnpm7">비고</th>
                    </tr>
                    {Array.isArray(pmresult) && pmresult
                        .map((result) => (
                            <tr key={result.empNo}>
                                <td>{result.anEmployee[0].empName}</td>
                                <td>{result.anEmployee[0].dt.name}</td>
                                <td>{result.anEmployee[0].job.name}</td>
                                <td>{result.useAnnual}</td>
                                <td>{result.vacation[0].startDate}</td>
                                <td>{result.vacation[0].endDate}</td>
                                <td>{result.reason}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
    </section>
	);
}

export default PmMemberAnnual;
