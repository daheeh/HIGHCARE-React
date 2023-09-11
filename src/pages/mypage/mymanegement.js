import React from 'react';
import "./mymanegement.css";
import MypageNav from './MypageNav';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
// import { callManSelctAPI } from '../../apis/MypageApiCalls';
import { CallManSelectAPI } from '../../apis/MypageApiCalls';
// import { Navigate, useNavigate } from "react-router-dom";

function MyManegement() {


    const dispatch = useDispatch();
    const employee = useSelector(state => state.authes);

    console.log("authes check: ",employee);

    const mypageMan = useSelector(state => state.mypage.data);
    console.log("mypage Check ---------: ", mypageMan);

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerpage = 10;


    const totalPages = Math.ceil((mypageMan && mypageMan.length) / itemPerpage);

    useEffect(

        () => {
            dispatch(CallManSelectAPI(employee.empNo));
        }
    , []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



    return (
        <section>
                <MypageNav />
             
            <div className="packing">
                <div>
                    <h1 className="title">근태조회</h1>
                </div>
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>출근시간</th>
                            <th>퇴근시간</th>
                            <th>총근무시간</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(mypageMan) && mypageMan
                            .map((item) => (
                                <tr className="column2" key={item?.manNo}>
                                    <td>{item?.manTime}</td>
                                    <td>{item?.stime}</td>
                                    <td>{item?.etime}</td>
                                    <td>-</td>
                                </tr>

                            ))
                            }

                    </tbody>
                </table>
                <div className="pagingmypage">
                {Array.from({length: totalPages}, (_, index) => (
                    <span
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className = {`pagingBtn ${currentPage === index + 1 ? 'activce' : ''}`}
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