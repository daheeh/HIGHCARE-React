import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./mymain.css";
// import { callMypageProfileAPI } from '../../../apis/MypageApiCalls';
import { callMypageProfileAPI } from '../../apis/MypageApiCalls';
// 

function Profile() {

    const dispatch = useDispatch();

    const employee = useSelector(state => state.authes); // 회원번호 employee.empNo auth에 있는 계정정보를 다 담고 있음
    // const token = decodeJwt(window.localStorage.getItem("accessToken"));  
    console.log('profile firslt :', );


    useEffect(
        () => {
            dispatch(callMypageProfileAPI(employee.empNo));
            // empNo로 넘겨야되나? 아니면 employee로 넘겨야되나?
        }
        ,[]
    )

    
    return (
        <>
            <section>
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
                                <a href="">나의근태조회</a>
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
                {/* <!-- 아이디 주민번호 입사일 직급 --> */}
                <div className="profile-form">
                    <div className="double">
                        <div className="content">
                            <h3>프로필사진</h3>
                            {/* <!--  프로필사진을 클릭하면 수정 가능 --> */}
                            <textarea name='self' id='user_self' cols="40" rows="7" ></textarea>
                            <h3>이름</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                readOnly maxlength="20" />
                            <h3>사번</h3>
                            <input type="password" name="user_pw" id="user_pw" className="text-field"
                                readOnly maxlength="20" />
                            <h3>직급</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                readOnly maxlength="20" />
                            <h3>전화번호</h3>
                            <input type="tel" id="user_ph" className="text-field" maxlength="16" readOnly />

                        </div>


                        <div className="content2">
                            <h3>아이디</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                maxlength="20" readOnly />
                            <h3>부서</h3>
                            <input type="password" name="user_pw" id="user_pw" className="text-field" readOnly
                                maxlength="20" />
                            <h3>부서번호</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                maxlength="20" readOnly />
                            <h3>이메일</h3>
                            <div className="email-form">
                                <input type="text" id="email_id" name="email_id" className="form_w200" value="" title="이메일 아이디"
                                    maxlength="18" readOnly/><span>@</span>
                                <input type="text" id="email_domain" name="email_domain" className="form_w200" value=""
                                    title="도메인" maxlength="18" readOnly />
                                <select className="sel" id="email_sel" title="이메일 도메인 주소 선택"  >
                                    <option hidden>-선택-</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="hanmail.net">hanmail.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="korea.com">korea.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="yahoo.com">yahoo.com</option>
                                </select>
                            </div>
                            <h3>주소</h3>
                            {/* <h3>주소 <input type="button" className="submit-btn" id="btnjoin" value="수정"/></h3> */}
                            <div className="address-form">
                                <input type="text" name="wPostCode" className="text-field-address" readOnly/>
                                <input type="button" className="addressbutton" value="우편번호 찾기" readOnly/>
                                <br /><br />
                                <input type="text" name="wRoadAddress" className="text-field" readOnly/>

                                <br /><br />
                                <input type="text" name="wJibunAddress" className="text-field" readOnly/>
                                <br /><span id="guide"></span>
                                <br />
                                <input type="text" className="text-field" readOnly/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Profile;