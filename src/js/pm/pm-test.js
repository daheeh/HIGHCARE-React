import { Link } from "react-router-dom";

function PmTest(){
    
    return(
        <div>
            <nav>
            <br></br>
            <Link to="/pm/search">사원조회</Link><br></br>
            <Link to="/pm/annual">전체 사원 연차 내역</Link><br></br>
            <Link to="/pm/cal">일정등록하기</Link><br></br>
            <Link to="/pm/de-resist">사원등록하기</Link><br></br>
            <Link to="/pm/department">부서조회</Link><br></br>
            <Link to="/pm/member-annual">개인 연차 조회</Link><br></br>
            <Link to="/pm/pm-resist">사원등록하기</Link><br></br>
            <Link to="/pm/work">근태 관리</Link><br></br>
            </nav>
        </div>
    )
}

export default PmTest;