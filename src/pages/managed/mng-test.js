import { Link } from "react-router-dom";


function ManageTest(){

    return (

        <nav>
                <Link to="/login">로그인 페이지</Link>

                <Link to="/admin">관리자 메인</Link>
        </nav>
    )
}

export default ManageTest;