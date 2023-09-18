import React from 'react';
import './myannual.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { callAnnSelectAPI } from '../../apis/MypageApiCalls';
import MypageNav from './MypageNav';


function MypageAnnual() {

    const dispatch = useDispatch();
    const employee = useSelector(state => state.authes) 

    const mypage = useSelector(state => state?.mypage?.data);

    const numAnnData = useSelector(state => state?.mypage?.data);
    const pageInfo = useSelector(state => state?.mypage?.pageInfo);


    console.log("numAnnData Check : ", numAnnData);
    console.log("ann----", mypage);

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerpage = 10;

    const totalPages = Math.ceil(pageInfo?.total / itemPerpage);
    console.log("totalPages=====", totalPages);



    console.log("in reducer/mypage/myAnnual  ====== ", mypage);


    useEffect(

        () => {
            dispatch(callAnnSelectAPI(employee.empNo, currentPage));

        }
        , [currentPage]);



    const handlePageChange = (pageNumber) => {
        console.log('pageNumber :', pageNumber)
        setCurrentPage(pageNumber);
    };


    return (


        <section>
            <MypageNav />

            <div className="packingmy">


                <div className="myMainBox">
                    <div className="myMainBoxRightBox" style={{display:'flex'}}>
                        <div className="myMainBoxRight">
                            <div className="row1">
                                총연차
                                <div className="annRow">{numAnnData && numAnnData[0]?.ban}</div>
                            </div>
                        </div>
                        <div className="myMainBoxRight">
                            <div className="row1">
                                잔여연차
                                <div className="annRow">{numAnnData && numAnnData[0]?.totalAn}</div>
                            </div>
                        </div>
                        <div className="myMainBoxRight">
                            <div className="row1">
                                조정연차
                                <div className="annRow">{numAnnData && numAnnData[0]?.addAn}</div>
                            </div>
                        </div>
                        <div className="myMainBoxRight">
                            <div className="row1">
                                사용연차
                                <div className="annRow">{numAnnData && numAnnData[0]?.useAn}</div>
                            </div>
                        </div>

                    </div>
                </div>
                <table className="task-table">
                    <thead>
                        <tr>
                            <th className="columnpm1">시작일</th>
                            <th className="columnpm2">종료일</th>
                            <th className="columnpm3">휴가 종류</th>
                            <th className="columnpm4">사유</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(mypage) && mypage
                            .map((item) => (
                                <tr className="myanntrsize" key={item?.annNo}>
                                    {/* pk 인덱스 */}
                                    <td>{item.myApvVation?.sdate}</td>
                                    <td>{item.myApvVation?.edate}</td>
                                    <td>{item.myApvVation?.type}</td>
                                    <td>{item.myApvVation?.comment}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                <div className="pagingmypageAnn">
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

export default MypageAnnual;