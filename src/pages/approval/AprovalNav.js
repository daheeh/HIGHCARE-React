import React from 'react';
import { Link } from 'react-router-dom';

function ApvMenu() {
	return (
		<section>
			<div className="leftMenu">
				<div className="leftMenu2">
					{/* <div className="mainLogo">
						<img src="/public/images/HIGH CARE.png" alt="High Care Logo" />
					</div> */}
					<div className="apvMainTitle">
						<Link to="/approval">전자결재</Link>
					</div>
					<div className="apvNaviBox">
						<div className="apvNaviBoxTop">
							<Link to="/approval/biz1">작성하기</Link>
						</div>
						<div className="apvNaviBoxEmp"></div>
						<div className="apvNaviBoxMainTitle">
							<Link to="/approval/WriteBox">결재함</Link>
						</div>
						<ul className="apvNaviBoxUl">   
							<li>결재 예정</li>
							<li>결재 진행중</li>
							<li>결재 완료</li>
							<li>결재 반려</li>
							<li>결재 참조</li>
						</ul>
						<div className="apvNaviBoxEmp"></div>
						<div className="apvNaviBoxMainTitle">
							<Link to="/approval/ReceiveBox">수신함</Link>
						</div>
						<div className="apvNaviBoxEmp"></div>
						<div className="apvNaviBoxMainTitle">MY 결재 양식</div>
						<ul className="apvNaviBoxUl">    
							<li><a href="/HTML/approval/hrm1.html">연차신청서</a></li>
							<li><a href="/HTML/approval/exp1.html">지출결의서(단건)</a></li>
							<li><a href="/HTML/approval/biz4.html">공문</a></li>
							<li><a href="/HTML/approval/biz2.html">회의록</a></li>
							<li><a href="/HTML/approval/biz1.html">기안서</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ApvMenu;
