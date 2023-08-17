import { Link } from "react-router-dom";

function ManageTest() {

    return (
        <div>
            <nav>
                <Link to="/login">로그인 페이지</Link>
                <Link to="/admin">관리자 페이지</Link>
            </nav>
        </div>
    )
}

export default ManageTest;