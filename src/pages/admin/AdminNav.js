import { Link } from "react-router-dom";

export function AdminNav() {

    return (

        <div style={{marginTop:20}} className="leftMenu">
            <div className="leftMenu2">

                <div className="mainTitle">
                    <Link to="/admin">운영관리</Link>
                </div>
                <div className="apvNaviBox">
                    <div className="apvNaviBoxEmp"></div>
                    <div className="apvNaviBoxMainTitle">
                        <Link to="/admin/member">회원관리</Link>
                    </div>
                    <ul className="apvNaviBoxUl">
                        <Link to="/admin/member"><li>회원목록</li></Link>
                        <Link to="/admin/member/auth"><li>권한설정</li></Link>
                        <Link to="/admin/manager/member/request"><li>가입신청</li></Link>

                    </ul>
                    <div className="apvNaviBoxEmp"></div>
                    <div className="apvNaviBoxEmp"></div>
                    <div className="apvNaviBoxMainTitle">시스템관리</div>
                    <ul className="apvNaviBoxUl">
                        <Link to="/admin/member/log"><li>접속로그</li></Link>
                        {/* <li>시스템로그</li> */}
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}