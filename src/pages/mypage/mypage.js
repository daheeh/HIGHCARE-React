import { Link } from "react-router-dom";

function Mypage() {

        return (
        <div>
            <nav>

                {/* <Link to="/">Home</Link> */}
                <Link to="/mypage">마이페이지</Link>
                <Link to="/mypage/list/regist">명함등록</Link>
                <Link to="/mypage/mytemplate/customlog">상담일지</Link>
                <Link to="/mypage/mytemplate/worklog">업무일지</Link>
                <Link to="/mypage/profile">프로필</Link>
                <Link to="/mypage/annual">연차</Link>
                <Link to="/mypage/mymanegement">근태관리</Link>
            </nav>

        </div>
    )

}
export default Mypage;