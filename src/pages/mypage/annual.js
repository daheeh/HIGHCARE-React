import React from 'react';
import './annual.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { callAnnSelectAPI } from '../../apis/MypageApiCalls';
// import { Navigate, useNavigate } from "react-router-dom";

function MypageAnnual() {

    // const navigate= useNavigate();
    const dispatch = useDispatch();

    const mypageAnn = useSelector(state => state.authes);
    console.log("mypageAnn====", mypageAnn);    // authes의 로그인정보로 가지고옴***, 마이페이지의 값을 들고 오면 안됨

        useEffect(() => {
        dispatch(callAnnSelectAPI(empNo));
        // console.log("ann test ------", ann);
    }, 
    []);


    // 로그인한 정보를 받아오기 위해 authes로 접근,  mypage에 담긴 값을 불러오려면 mypage에 담긴 값을 불러와야함
    const ann = useSelector(state => state.mypage);
    // const apvVa = ann[0].myApvVation;
    // const useAn = ann.empNo; 
    const empNo = mypageAnn.useAn;
    // console.log("apvVa=====",apvVa);


    // 리듀서명을 코드 어디서 확인할지 알아보기
    console.log("in reducer/mypage/myAnnual  ====== ",ann);
    // console.log("myAnuual.addAn", ann[0]);  // 연차안에 있는 값 출력
    console.log('연차개수',empNo);
    // console.log("empNo=====", empNo);

    // console.log("mypageAnn", mypageAnn);




    return (
        <section>
            {/* <MypageAnnual /> */}
            <div className="leftmenu">
                <div className="leftmenu1"></div>
                <div className="leftmenu2">
                    <div className="mainlogo">
                        <img src="/" />

                    </div>
                    <div className="maintitle">
                        <a href="#">마이페이지</a>
                    </div>
                    <div className="apv-navibox">
                        <div className="apv-navibox-top">
                            <a href="#">프로필수정</a>
                        </div>
                        <ul className="apv-navibox-ul">
                            <li>수집명함 등록</li>
                            <li>수집명함 조회</li>
                        </ul>
                        <div className="apv-navibox-emp"></div>
                        <div className="apv-navibox-maintitle">
                            <a href="#">나의근태조회</a>
                        </div>
                        <div className="apv-navibox-emp"></div>
                        <div className="apv-navibox-maintitle">
                            <a href="/HTML/approval/receivebox.html">나의연차조회</a>
                        </div>
                        <div className="apv-navibox-emp"></div>
                        <div className="apv-navibox-maintitle">마이템플릿</div>
                        <ul className="apv-navibox-ul">
                            <li><a href="/HTML/approval/hrm1.html">업무일지</a></li>
                            <li><a href="/HTML/approval/exp1.html">상담일지</a></li>
                        </ul>
                        <div className="apv-navibox-emp"></div>
                        <div className="apv-navibox-maintitle">
                            <a href="">캘린더</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="apv-navibox">
                {/* <div className="pm-de-top">
                    <div className="pm-div-font">개인 연차 조회</div>
                </div> */}
                <div className="pm-ma-top">
                    <div className='div3'></div>
                    <div className="pm-ma-box2">
                        <div className="pm-ma-font">총연차</div>
                        {/* <div className="pm-ma-number" >{ ann[0].ban }</div> */}
                        {/* <div className="pm-ma-number" >{ ann.ban }</div> */}
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div> 총 월차</div>
                        <div className="pm-ma-number">00</div>
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div>잔여 연차</div>
                        {/* <div className="pm-ma-number">{ ann[0].totalAn}</div> */}
                        {/* <div className="pm-ma-number" >{ ann.ban }</div> */}
                        {/* 잔여연차는 최신으로 들어간 DB값을 불러와야 하는 로직 필요 */}
                    </div>
                    <div className="pm-line"></div>
                    <div className="pm-ma-box">
                        <div>조정 연차</div>
                        {/* <div className="pm-ma-number">{ann[0].addAn}</div> */}
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
                        {/* <div className="pm-ma-number">{ann[0].useAn}</div> */}
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
                    {Array.isArray( ann ) &&  ann
                        .map((item) => (
                            <tr className = "myanntrsize" key={ item?.annNo }>
                                {/* pk 인덱스 */}
                                <td>{item.myApvVation.sdate}</td>
                                <td>{item.myApvVation.edate}</td>
                                <td>{item.myApvVation.type}</td>
                                {/* <td>{}</td>
                                <td>{}</td> */}
                                <td>{item.myApvVation?.comment}</td>
                                {/* <td>{}</td> */}
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
    );
}

export default MypageAnnual;
