import React from 'react';
import './myannual.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { callAnnSelectAPI } from '../../apis/MypageApiCalls';
import MypageNav from './MypageNav';
// import { Navigate, useNavigate } from "react-router-dom";

function MypageAnnual() {

    // const navigate= useNavigate();
    const dispatch = useDispatch();

    const mypageAnn = useSelector(state => state.authes) // authes
    // const [numAnn, setNumAnn] = useState(null);
    // const [numAnn, setNumAnn] = useState(null);

    console.log("mypageAnn====", mypageAnn);    // authes의 로그인정보로 가지고옴***, 마이페이지의 값을 들고 오면 안됨

    useEffect(() => {
        dispatch(callAnnSelectAPI(mypageAnn.empNo));
        // console.log("ann test ------", ann);
    },
        []);

    // 리듀서에서 받는다고 처리하고 있기때문에 async await 자체가 필요가 없음
    //         useEffect(() => {

    //             const fetchAnnData = async () => {
    //                 try {
    //                     const response = await dispatch(callAnnSelectAPI(mypageAnn.empNo));
    //                     if (response && response.data) {
    //                         setNumAnn(response.data);
    //                         console.log("response check: ",response);
    //                         console.log("response.data", response.data);
    //                     } else {
    //                         console.error('API 호출 결과에 데이터가 없음');
    //                     }
    //                 } catch (error) {
    //                     console.error('API 호출중 오류 발생 : ', error);
    //                 }
    //             };

    //             fetchAnnData();
    // },  [dispatch, mypageAnn.empNo]);


    // 방법
    // const annemp = mypageAnn.empNo; // authes안에 empNo
    //     useEffect(
    //     () => {
    //         dispatch(callAnnSelectAPI(annemp));       // 나중에 mypage에서 불러오는걸로 바꿔보기
    //         console.log("로그인회원정보 담음", annemp);

    //         /// empNo로 불러오기
    //     }
    //     , []);

    // 로그인한 정보를 받아오기 위해 authes로 접근,  mypage에 담긴 값을 불러오려면 mypage에 담긴 값을 불러와야함
    const ann = useSelector(state => state.mypage);
    // const numAnnData = useSelector(state => state.mypage.data.myEmployee.myAnnual[0]);
    const numAnnData = useSelector(state => state.mypage[0])


    console.log("ban확인 : ", numAnnData);

    console.log("ann----", ann);
    // console.log("총연차 check :", ann[0].ban);  

    // const apvVa = ann[0].myApvVation;   // myApvVacation 연차, 사유,...
    // 여기서 가지고 올 수 가 없음
    // const useAn = ann.empNo; 

    // console.log("apvVa=====",apvVa);

    console.log("in reducer/mypage/myAnnual  ====== ", ann);
    // console.log("myAnuual.addAn", ann[0]);  // 연차안에 있는 값 출력
    // console.log('연차개수',empNo);
    // console.log("empNo=====", empNo);
    // console.log("mypageAnn", mypageAnn);

    return (

      
        <section>
        <MypageNav />
          
            <div className="apv-navibox">
                {/* <div className="pm-de-top">
                    <div className="pm-div-font">개인 연차 조회</div>
                </div> */}
                <div className="pm-ma-top">
                    <div className='div3'></div>
                    <div className="pm-ma-box2">
                        <div className="pm-ma-font">총연차</div>
                        <div className="pm-ma-number" >{numAnnData?.ban}</div>
                        <div className="pm-ma-number" ></div>
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div> 총 월차</div>
                        <div className="pm-ma-number">00</div>
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div>잔여 연차</div>
                        <div className="pm-ma-number">{numAnnData?.totalAn}</div>
                        <div className="pm-ma-number" > </div>
                        {/* 잔여연차는 최신으로 들어간 DB값을 불러와야 하는 로직 필요 */}
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div>조정 연차</div>
                        <div className="pm-ma-number">{numAnnData?.addAn}</div>
                        {/* <div className="pm-ma-number" >{ ann.ban }</div> */}
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div>이월 연차</div>
                        <div className="pm-ma-number">00</div>
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div>사용 연차</div>
                        <div className="pm-ma-number">{numAnnData?.useAn}</div>
                        {/* <div className="pm-ma-number" >{ ann.ban }</div> */}
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div>잔여 연차</div>
                        <div className="pm-ma-number">00</div>
                    </div>

                </div>
                <table className="pm-ma-table">
                    <tbody>
                        <tr>
                            <th className="columnpm1">시작일</th>
                            <th className="columnpm2">종료일</th>
                            <th className="columnpm3">휴가 종류</th>
                            <th className="columnpm4">사유</th>
                            {/* <th className="columnpm5">사용 연차 </th>
                        <th className="columnpm7">연차 사용 기간</th>
                        <th className="columnpm7">비고</th> */}
                        </tr>
                        {Array.isArray(ann) && ann
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
                <div className="paging">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
        </section>
        
    
    )
}

export default MypageAnnual;
