import React from 'react';
import { Link } from 'react-router-dom';

function MypageNav() {

    return (
        // <section>

        <section style={{width:300}}>
            <div className="leftMenu">
                <div className="leftMenu2">
                    <div className="apvMainTitle">
                        <Link to="/mypage">마이페이지</Link>
                    </div>
                    <div className="apvNaviBox">
                        <div className="apvNaviBoxTop">
                            <Link to="/approval/biz1"></Link>
                        </div>
                        <div className="apvNaviBoxEmp"></div>
                        <div className="apvNaviBoxMainTitle">
                            <Link to="/mypage/profile">프로필</Link>
                        </div>
                        <div className="apvNaviBoxEmp"></div>
                        <div className="apvNaviBoxMainTitle">
                            <Link to="/mypage/annual">나의연차</Link>
                        </div>
                        <div className="apvNaviBoxEmp"></div>
                        <div className="apvNaviBoxMainTitle">
                            <Link to="/mypage/mymanegement">나의 근태조회</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    )

}

export default MypageNav;

