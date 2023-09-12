import React from 'react';
import './myannual.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { callAnnSelectAPI } from '../../apis/MypageApiCalls';
import MypageNav from './MypageNav';
// import { Navigate, useNavigate } from "react-router-dom";

function MypageAnnual() {

    const dispatch = useDispatch();
    const employee = useSelector(state => state.authes) // authes
    // const [numAnn, setNumAnn] = useState(null);

    console.log("employee====", employee);    // authes의 로그인정보로 가지고옴***, 마이페이지의 값을 들고 오면 안됨

    // 로그인한 정보를 받아오기 위해 authes로 접근,  mypage에 담긴 값을 불러오려면 mypage에 담긴 값을 불러와야함
    const mypage = useSelector(state => state?.mypage?.data);
    // const numAnnData = useSelector(state => state.mypage.data.myEmployee.myAnnual[0]);
    const numAnnData = useSelector(state => state?.mypage?.data[0]);
    const pageInfo = useSelector(state => state?.mypage?.pageInfo);


    console.log("numAnnData Check : ", numAnnData);
    console.log("ann----", mypage);

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerpage = 10;

    const totalPages = Math.ceil(pageInfo?.total / itemPerpage);
    console.log("totalPages=====", totalPages);


    // const apvVa = ann[0].myApvVation;   // myApvVacation 연차, 사유,...
    // 여기서 가지고 올 수 가 없음
    // const useAn = ann.empNo; 

    // console.log("apvVa=====",apvVa);

    console.log("in reducer/mypage/myAnnual  ====== ", mypage);
    // console.log("myAnuual.addAn", ann[0]);  // 연차안에 있는 값 출력
    // console.log('연차개수',empNo);
    // console.log("empNo=====", empNo);
    // console.log("mypageAnn", mypageAnn);

    useEffect(

        () => {
            dispatch(callAnnSelectAPI(employee.empNo, currentPage));
            // effect에서 currentPage를 API에 넘겨줘서 API에서 받아야함 
            // offset=2를 넘겨받아서 서버에 보내야되는데 그걸 하는 방법을 몰랐음
            console.log('=============><><><>', currentPage)
            console.log('=============><><><>', totalPages)
            console.log('=============><><><>', itemPerpage)
        }
        , [currentPage]);

    // useEffect(() => {
    //     dispatch(callAnnSelectAPI(employee.empNo));
    //     // console.log("ann test ------", ann);
    // },
    //     []);

    // 방법
    // const annemp = mypageAnn.empNo; // authes안에 empNo
    //     useEffect(
    //     () => {
    //         dispatch(callAnnSelectAPI(annemp));       // 나중에 mypage에서 불러오는걸로 바꿔보기
    //         console.log("로그인회원정보 담음", annemp);

    //         /// empNo로 불러오기
    //     }
    //     , []);

    const handlePageChange = (pageNumber) => {
        console.log('pageNumber :', pageNumber)
        setCurrentPage(pageNumber);
    };


    return (


        <section>
            <MypageNav />

            <div className="packingmy">


                <div className="apvMainBox">
                    <div className="apvMainBoxRightBox">
                        <div className="apvMainBoxRight">
                            <div className="row1">
                                총연차
                                <div className="annRow">{numAnnData?.ban}</div>
                            </div>
                        </div>
                        <div className="apvMainBoxRight">
                            <div className="row1">
                                잔여연차
                                <div className="annRow">{numAnnData?.totalAn}</div>
                            </div>
                        </div>
                        <div className="apvMainBoxRight">
                            <div className="row1">
                                조정연차
                                <div className="annRow">{numAnnData?.addAn}</div>
                            </div>
                        </div>
                        <div className="apvMainBoxRight">
                            <div className="row1">
                                사용연차
                                <div className="annRow">{numAnnData?.useAn}</div>
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
