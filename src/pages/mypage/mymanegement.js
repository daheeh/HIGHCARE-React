import React from 'react';
import "./mymanegement.css";
import MypageNav from './MypageNav';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
// import { callManSelctAPI } from '../../apis/MypageApiCalls';
import { CallManSelectAPI } from '../../apis/MypageApiCalls';
import { useNavigate } from 'react-router-dom';
// import { Navigate, useNavigate } from "react-router-dom";

function MyManegement() {

    const dispatch = useDispatch();
    const employee = useSelector(state => state.authes);
    // const empNo = employee.empNo;

    console.log("authes check: ", employee);

   const mypageMan = useSelector(state => state?.mypage?.data);
    const totalPage = useSelector(state => state?.mypage?.data);


    console.log("mypage Check ---------: ", mypageMan);
    console.log("totalPage ====> ", totalPage);

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerpage = 10;

    const totalPages = Math.ceil( totalPage?.pageInfo?.total / itemPerpage);
    console.log("TOTAL : ------", totalPages);

    useEffect(
        
        () => {
            dispatch(CallManSelectAPI(employee.empNo, currentPage));
            // effect에서 currentPage를 API에 넘겨줘서 API에서 받아야함 
            // offset=2를 넘겨받아서 서버에 보내야되는데 그걸 하는 방법을 몰랐음
            console.log('=============><><><>', currentPage)
            console.log('=============><><><>', totalPages)
            console.log('=============><><><>', itemPerpage)
        }
        , [currentPage]);      //  currentPage

    // const navigate = useNavigate(); 


    const handlePageChange = (pageNumber) => {
        console.log('pageNumber :',pageNumber)
        setCurrentPage(pageNumber);
    };


    return (
        <section>
            <MypageNav />

            <div className="packing">
                {/* <div>
                </div> */}
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>출근시간</th>
                            <th>퇴근시간</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(mypageMan?.data) && mypageMan?.data
                            .map((item) => (
                                <tr className="column2" key={item?.manNo}>
                                    <td>{item?.manTime}</td>
                                    <td>{item?.stime}</td>
                                    <td>{item?.etime}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
                <div className="pagingmypage">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`pagingBtn ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyManegement;