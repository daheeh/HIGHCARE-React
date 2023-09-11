import { Link } from "react-router-dom";
import PmNav from './pmNav';

function PmTest(){
    return(
        <div>
            <PmNav/>
            <nav style={{display:"flex"}}>
            <br></br>
            <Link to="/pm/search">사원조회</Link><br></br>
            <Link to="/pm/annual">전체 사원 연차 내역</Link><br></br>
            <Link to="/pm/cal">일정등록하기</Link><br></br>
            <Link to="/pm/de-resist">사원등록하기</Link><br></br>
            <Link to="/pm/department">부서조회</Link><br></br>
            <Link to="/pm/member-annual">개인 연차 조회</Link><br></br>
            <Link to="/pm/pm-resist">사원상세조회</Link><br></br>
            <Link to="/pm/work">근태 관리</Link><br></br>
            <Link to="/pm/treeview">조직도</Link>
            <Link to="/pm/secondTree">조직도2</Link>
            <Link to="/pm/pm-resist-insert">사원등록</Link>
            
            </nav>
        </div>
    )
}

export default PmTest;