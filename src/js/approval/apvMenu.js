import React from 'react';

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
						<a href="/HTML/approval/mainpage.html">전자결재</a></div>
					<div class="apvNaviBox">
						<div class="apvNaviBoxTop">
							<a href="/HTML/approval/biz1.html">작성하기</a></div>
						<div class="apvNaviBoxEmp"></div>
						<div class="apvNaviBoxMainTitle">
							<a href="/HTML/approval/writeBox.html">결재함</a>
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
							<a href="/HTML/approval/receiveBox.html">수신함</a></div>
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
