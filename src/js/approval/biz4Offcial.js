import React from 'react';
import '../../css/approval/approvalBiz.css';
import '../../css/approval/approval.css';

function Biz4Offcial() {
    return (

	<section>
		<div>
			<div className="container">
				<div>
					<div className="apv-apvtitle"><img src="/img/HIGH CARE.png"/></div>
					<div className="apv-official-top">
						<div className="apv-official1">(우) 12334 서울 종로구 인사동길 12 대일빌딩</div>
						<div className="apv-official2">
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

				<div className="apv-content">
					<div className="apv-official-bottom">
						<div className="column1">문서번호</div>
						<div className="column2">123123123123</div>
					</div>
					<div className="apv-official-bottom">
						<div className="column1">수신처</div>
						<div className="column2"></div>
					</div>
					<div className="apv-official-bottom">
						<div className="column1">제목</div>
						<div className="column2"></div>
					</div>
					<div className="apv-official-bottom2">
					</div>
					<div className="apv-content-detail-coment"> sodyd</div>
					<div className="apv-content-detail2">-아래-</div>
					<div className="apv-content-detail-coment2">어쩌고저쩌고</div>
				</div>
				<div className="highcare-stamp">
					<div className="highcare-text">하이케어</div>
					<div><img src="/img/HIGHCARE-stamp.png" alt="High Care" className="highcare-image"/></div>
				</div>
			</div>
		</div>
	</section>

    );
}

export default Biz4Offcial;