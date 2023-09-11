import React, { useEffect, useState } from 'react';
import './pm-member.css'
import PmNav from './pmNav';
import { useDispatch, useSelector } from 'react-redux';
import { callAnnualAPI } from '../../apis/PmAPICalls';

function PmAnnual() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const dispatch = useDispatch();
    const result = useSelector(state => state.pmannual);

  const empinfo = useSelector(state => state.authes);
  const name = empinfo.name;
  const dept = empinfo.dept;
  const job = empinfo.job; 



    console.log('----------',result);
  
    // const empinfo = useSelector(state => state.authes);
    // const empNum = empinfo.empNo;
    // const department = empinfo.dept;
    // const empName = empinfo.empName;
  
    // console.log('================================================empnNum>>>>',empNum);
  
    useEffect(() => {
      dispatch(callAnnualAPI());
    },[]);
  
	return (
<section>
<PmNav/> 
        <div display="flex">
            <br />
            <div>
                <div className="pm-de-top">
                <div className="pm-div-font">전체 사원 연차 내역
                    <label className="label-font">이름
                    <input className="pm-an-search" type="text" name="name" placeholder="사원이름을 입력하세요."/></label>
                    <label className="label-font2">부서명
                    <input className="pm-an-search2" type="text" name="name" placeholder="사원이름을 입력하세요."/></label>
                    <button className="pm-department-button">검색</button>
                </div>
                <div className="pm-topmenu"></div>
                <div className="pm-de">
                    <table className="pm-department-table">
                        <tbody>
                    <tr>
                        <th className="columnpm1">이름</th>
                        <th className="columnpm2">입사날짜</th>
                        <th className="columnpm3">직책</th>
                        <th className="columnpm4">부서</th>
                        <th className="columnpm5">휴가종류</th>
                        <th className="columnpm6">사용연차</th>
                        <th className="columnpm7">연차사용기간</th>
                        <th className="columnpm7">비고</th>
                    </tr>
                    {Array.isArray(result) && result
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((result) => (
                            <tr key={result.empNo}>
                                <td>{result.anEmployee[0].empName}</td>
                                <td>{result.anEmployee[0].startDate}</td>
                                <td>{result.anEmployee[0].job.name}</td>
                                <td>{result.anEmployee[0].dt.name}</td>
                                <td>{result.totalAnnual}</td>
                                <td>{result.useAnnual}</td>
                                <td>{result.reason}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            
            <button className="pm-de-add">연차 신청 하기</button>
                <div className="paging">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
        </div>
        </div>
            
        
    </section>
	);
}

export default PmAnnual;
