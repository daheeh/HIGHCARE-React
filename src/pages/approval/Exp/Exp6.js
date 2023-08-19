import React from 'react';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline'; 
import './ApprovalExp.css';
import '../Approval.css';

function Exp6() {
    return (
    
		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar />
				<div className="container">
					<div className="apv-apvtitle">경조금신청서</div>
					<ApvSummitLine />
					<div className="apv-content">
						<div className="apv-content-title-exp6">
							<div className="column1">경조분류</div>
							<div className="column2">
								<select className="input1">
									<option value="">선택</option>
									<option name="" value="입고">결혼</option>
									<option name="" value="입고">조모상</option>
									<option name="" value="입고">조부모상</option>
									<option name="" value="출고">본인상</option>
								</select>
							</div>
							<div className="column3">지급액</div>
							<div className="column4">200,000원</div>
						</div>
						<div className="apv-content-title-exp1-2">
							<div className="column41">예금주</div>
							<div className="column42">김나경</div>
							<div className="column43">은행</div>
							<div className="column44">국민은행</div>
						</div>
						<div className="apv-content-title-exp1-3">
							<div className="column45">계좌번호</div>
							<div className="column46">111-1111-1111</div>
						</div>

						<div className="apv-content-detail">위와 같이 지급을 요청합니다.</div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Exp6;
