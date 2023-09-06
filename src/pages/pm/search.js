import React, { useEffect, useState } from 'react';
import './pm-member.css'
import PmNav from './pmNav';
import { useDispatch, useSelector } from 'react-redux';
import { callEmployeeAPI } from '../../apis/PmAPICalls';

function PmMenu() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const dispatch = useDispatch();
    const results = useSelector(state => state.pmreduccer);
    const [selectedStatus, setSelectedStatus] = useState('사원조회');

    console.log(results);
    useEffect(() => {
        dispatch(callEmployeeAPI({ empNo: 1, pmStatus: '사원조회'}));
    },[]);

    const handleMenuItemClick = (pmStatus) => {
        dispatch(callEmployeeAPI({ empNo: 1, pmStatus}));
        setSelectedStatus(pmStatus);
    }


	return (
<section>
<PmNav/>
<div className="apv-navibox">
        <div className="pm-de-top" style={{margin:'auto'}}>
            <div className="pm-div-font">사원 조회
                <input className="pm-department-search" type="text" name="name" placeholder="사원이름을 입력하세요."/>
                <button className="pm-department-button">검색</button>
            </div>
            </div>
            <br />

            <div className='pm-divbox'>
                <table className="pm-boxresult-table">
                    <tbody>
                    <tr>
                        <th className="columnpm1">사원명</th>
                        <th className="columnpm2">직급</th>
                        <th className="columnpm3">휴대폰</th>
                        <th className="columnpm4">부서</th>
                        <th className="columnpm5">내선전화</th>
                        <th className="columnpm6">입사일</th>
                        <th className="columnpm7">이메일</th>
                    </tr>
                    {Array.isArray(results.data) && results.data
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((result) => (
                            <tr key={result.empName}>
                                <td>{result.empName}</td>
                                <td>{result.jobCode}</td>
                                <td>{result.phone}</td>
                                <td>{result.deptCode}</td>
                                <td>{result.telephone}</td>
                                <td>{result.startDate}</td>
                                <td>{result.empEmail}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div style={{width:'auto'}}>

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
        
	);
}

export default PmMenu;
