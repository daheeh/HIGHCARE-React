import React from 'react';
import './ApprovalBiz.css';
import '../Approval.css';

function Biz4Offcial() {
    return (

	<section>
		<div>
			<div className="container">
				<div>
					<div className="apvApvTitle"><img src="/images/HIGH CARE.png"/></div>
					<div className="apvOfficialTop">
						<div className="apvOfficial1">(우) 12334 서울 종로구 인사동길 12 대일빌딩</div>
						<div className="apvOfficial2">
							<div>담당자 : </div>
							<div>김나경 </div>
							<div>/ 전화 : </div>
							<div>070-1111-1111 </div>
							<div>/ 팩스 : </div>
							<div>070-1111-9999 </div>
							<div>/ 이메일 : </div>
							<div>kim@highcare.com</div>
						</div>
					</div>
				</div>

				<div className="apvContent">
					<div className="apvOfficialBottom">
						<div className="column1">문서번호</div>
						<div className="column2">123123123123</div>
					</div>
					<div className="apvOfficialBottom">
						<div className="column1">수신처</div>
						<div className="column2"></div>
					</div>
					<div className="apvOfficialBottom">
						<div className="column1">제목</div>
						<div className="column2"></div>
					</div>
					<div className="apvOfficialBottom2">
					</div>
					<div className="apvContentDetailComent"> sodyd</div>
					<div className="apvContentDetail2">-아래-</div>
					<div className="apvContentDetailComent2">어쩌고저쩌고</div>
				</div>
				<div className="highcareStamp">
					<div className="highcareText">하이케어</div>
					<div><img src="/images/HIGHCARE-stamp.png" alt="High Care" className="highcareImage"/></div>
				</div>
			</div>
		</div>
	</section>

    );
}

export default Biz4Offcial;