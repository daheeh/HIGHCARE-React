import React from 'react';
import { Link } from 'react-router-dom';

function PmNav() {
	return (
		<section style={{width:'auto'}}> 
			<div className="leftMenu">
				<div className="leftMenu2">
					<div className="mainLogo">
						<img src="/img/highcareLogo.png" alt="High Care Logo" />
					</div>
					<div className="mainTitle">
						<Link to="/pm/">인사관리</Link>
					</div>
					<div className="apvNaviBox">
						<div className="apvNaviBoxTop">
							<Link to="/pm/de-resist">사원 등록</Link>
						</div>
						<div className="apvNaviBoxEmp"></div>
						<div className="apvNaviBoxMainTitle">
							<Link to="/pm/work">출 퇴근 관리</Link>
						</div>
						<ul className="apvNaviBoxUl">   
							<li><Link to="/pm/search">사원 조회</Link></li>
							<li>사원 수정</li>
							<li>사원 삭제</li>
							<li>조직도</li>
							<li>업무 일정 관리</li>
						</ul>
						<div className="apvNaviBoxEmp"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PmNav;
