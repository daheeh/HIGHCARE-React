import React from 'react';
import { Link } from 'react-router-dom';
import "./myNav.css"; 

function MypageNav() {

    return (

        <section style={{width:300}}>
            <div className="leftMenu">
                <div className="leftMenu2">
                    <div className="myMainTitle">
                        <Link to="/mypage">마이페이지</Link>
                    </div>
                    <div className="myNaviBox">
                        {/* <div className="myNaviBoxTop">
                            <Link to="/approval/biz1"></Link>
                        </div> */}
                        <div className="myNaviBoxEmp"></div>
                        <div className="myNaviBoxMainTitle">
                            <Link to="/mypage/profile">프로필</Link>
                        </div>
                        <div className="myNaviBoxEmp"></div>
                        <div className="myNaviBoxMainTitle">
                            <Link to="/mypage/myannual">나의연차</Link>
                        </div>
                        <div className="myNaviBoxEmp"></div>
                        <div className="myNaviBoxMainTitle">
                            <Link to="/mypage/mymanegement">나의 근태조회</Link>
                        </div>
                        {/* <div className="myNaviBoxMainTitle">
                            <Link to="/modifyinfo/password">명함관리</Link>
                        </div> */}
                        <div className="myNaviBoxEmp"></div>
                        <div className="myNaviBoxMainTitle">
                            <Link to="/modifyinfo">소셜로그인연동</Link>
                        </div>
                        <div className="myNaviBoxEmp"></div>
                        <div className="myNaviBoxMainTitle">
                            <Link to="/modifyinfo/password">비밀정보수정</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    )

}

export default MypageNav;

