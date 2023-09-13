import React from 'react';
import { Link } from 'react-router-dom';

function PmNav() {
	return (
		<section style={{width:'auto'}}> 
			<div className="leftMenu">
				<div className="leftMenu2">
					<div className="mainLogo">
					</div>
					<div className="pm-mainTitle">
						<Link to="/pm/">인사관리</Link>
					</div>
					<div className="apvNaviBox">
						<div className="apvNaviBoxTop">
						<Link to="/pm/pm-resist-insert">사원등록</Link>
						</div>
						<div className="apvNaviBoxEmp"></div>
						<div className="apvNaviBoxMainTitle">
							<Link to="/pm/work">출 퇴근 관리</Link>
						</div>
						<ul className="apvNaviBoxUl">   
							<li><Link to="/pm/search">사원 조회</Link></li>
							<li><Link to="/pm/pm-resist">사원상세조회</Link></li>
							{/* <li><Link to="/pm/department">부서 조회</Link></li> */}
							<li><Link to="/pm/annual">연차 조회</Link></li>
							<li><Link to="/pm/member-annual">개인 연차 조회</Link></li>
							<li><Link to="/pm/secondTree">조직도</Link></li>
							{/* <li><Link to="/pm/cal">업무 일정 관리</Link></li> */}
							
						</ul>
						<div className="apvNaviBoxEmp"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PmNav;
