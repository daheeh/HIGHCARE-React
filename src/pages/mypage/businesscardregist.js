// import React from 'react';
// import "../../css/mypage/businesscardregist.css";
// import "../../css/mypage/mymain.css";
import "./businesscardregist.css";
import "./mymain.css";

function Businesscardregist() {

    return (
        <>
            <section>
                <div className="leftmenu">
                    <div className="leftmenu1"></div>
                    <div className="leftmenu2">
                        <div className="mainlogo">
                            {/* <img src="/img/HIGH CARE.png"/> */}
                            <img src="/img/highcareLogo.png"/>

                        </div>
                        <div className="maintitle">
                            <a href="#">마이페이지</a>
                        </div>
                        <div className="apv-navibox">
                            <div className="apv-navibox-top">
                                <a href="#">수집명함관리</a>
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
        <div className="bscd-form">
            <div className="content">
                {/* <form name="registbusinesscard" action="/JOIN_MEMBER/html/main.html" method="POST"> */}
                    <h3>이름</h3>
                    <input type="text" name="user_name" id="user_name" className="text-field" placeholder="이름"
                        maxLength="20"/>
                    <h3>전화번호</h3>
                    <input type="password" name="user_pw" id="user_pw" className="text-field" placeholder="비밀번호"
                        maxLength="20"/>
                    <h3>회사</h3>
                    <input type="text" name="user_name" id="user_name" className="text-field" placeholder="이름"
                        maxLength="20"/>
            </div>
            <h3>이메일</h3>
            <div className="email-form">
                <input type="text" id="email_id" name="email_id" className="form_w200"  title="이메일 아이디"
                    placeholder="이메일" maxLength="18"/><span>@</span>
                <input type="text" id="email_domain" name="email_domain" className="form_w200"  title="도메인"
                    maxLength="18"/>
                <select className="sel" id="email_sel" title="이메일 도메인 주소 선택">
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
            <div className="address-form">
                <input type="text" name="wPostCode" className="text-field-address" placeholder="우편번호"/>
                <input type="button" className="addressbutton" onclick="DaumPostcode()" value="우편번호 찾기"/><br />
                <input type="text" name="wRoadAddress" className="text-field" placeholder="도로명주소"/>
                <h3></h3>
                <input type="text" name="wJibunAddress" className="text-field" placeholder="지번주소"/>
                <br /><span id="guide"></span>
                <br /><br /><input type="text" className="text-field" placeholder="나머지 주소" />
            </div>
            <h3>전화번호</h3>
            <input type="tel" id="user_ph" className="text-field" maxLength="16" placeholder="전화번호"/>
            <h3>메모</h3>
            <textarea name='self' id='user_self' cols="40" rows="7"></textarea>
            <input type="button" className="submit-btn" id="btnjoin" onclick="joinform_check();" value="등록"/>
            <input type="reset" className="reset-btn" id="btnreset" value="취소"/>
            {/* </form> */}
        </div>
        {/* </div> */}
    </section>

  </>

    );
}

export default Businesscardregist;
