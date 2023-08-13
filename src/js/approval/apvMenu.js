import React from 'react';
import { Link } from 'react-router-dom';

function ApvMenu() {
	return (
		<section>
			<div class="leftMenu">
				<div class="leftMenu1"></div>
				<div class="leftMenu2">
					<div class="mainLogo">
						<img src="/img/highcareLogo.png" alt="High Care Logo" />
					</div>
					<div class="mainTitle">
						<Link to="/approval/mainpage">전자결재</Link>
					</div>
					<div class="apvNaviBox">
						<div class="apvNaviBoxTop">
							<Link to="/approval/biz1">작성하기</Link>
						</div>
						<div class="apvNaviBoxEmp"></div>
						<div class="apvNaviBoxMainTitle">
							<Link to="/approval/WriteBox">결재함</Link>
						</div>
						<ul class="apvNaviBoxUl">   
							<li>결재 예정</li>
							<li>결재 진행중</li>
							<li>결재 완료</li>
							<li>결재 반려</li>
							<li>결재 참조</li>
						</ul>
						<div class="apvNaviBoxEmp"></div>
						<div class="apvNaviBoxMainTitle">
							<Link to="/approval/ReceiveBox">수신함</Link>
						</div>
						<div class="apvNaviBoxEmp"></div>
						<div class="apvNaviBoxMainTitle">MY 결재 양식</div>
						<ul class="apvNaviBoxUl">    
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
