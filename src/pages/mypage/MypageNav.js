import React from 'react';
import { Link } from 'react-router-dom';

function MypageNav() {

    return (
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

        </section>


    )

}

export default MypageNav;

