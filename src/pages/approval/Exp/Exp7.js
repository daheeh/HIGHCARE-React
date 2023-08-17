import React from 'react';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline'; 
import './ApprovalExp.css';
import '../Approval.css';

function Exp7() {
    return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar />
				<div className="container">
					<div className="apv-apvtitle">법인카드사용보고서</div>
					<ApvSummitLine />
					<div className="apv-content">
						<div className="apv-content-title-exp1">
							<div className="column1">카드번호</div>
							<div className="column2">111-1111-11-1111</div>
							<div className="column3">결제월</div>
							<div className="column4">4월</div>
						</div>
						<div className="apv-content-detail">내역</div>
						<div className="apv-content-detail-exp1-title">
							<div className="column11">내역</div>
							<div className="column12">계정과목</div>
							<div className="column13">금액</div>
							<div className="column14">적요</div>
						</div>
						<div className="apv-content-detail-exp1-content">
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
							<div className="apv-content-detail-exp1-list">
								<div className="column21"></div>
								<div className="column22"></div>
								<div className="column23"></div>
								<div className="column24"></div>
							</div>
						</div>

						<div className="apv-content-detail-exp1-total">
							<div className="column31">합계</div>
							<div className="column32">20,000원</div>
						</div>
						<div className="apv-content-detail3">위와 같이 법인카드 사용 내역을 보고합니다.</div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Exp7;

