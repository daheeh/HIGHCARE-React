import React from 'react';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline'; 
import './ApprovalHrm.css';
import '../Approval.css';

function Hrm3() {
    return (
		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar />
				<div className="container">
					<div className="apv-apvtitle">서류발급신청서</div>
					<ApvSummitLine />
					<div className="apv-content">
						<div className="apv-content-hrm2">
							<div className="column1">서류 종류</div>
							<select className="input1" name="etcofftype">
								<option>종류</option>
								<option>재직증명서</option>
								<option>경력증명서</option>
								<option>기타</option>
							</select>
							<div className="column2"><input className="input1" placeholder="기타서류명 입력"/></div>
						</div>
						<div className="apv-content-hrm1">
							<div className="column1">제출처</div>
							<div className="column2"><input className="input1" placeholder="제출처 입력"/></div>
						</div>
						<div className="apv-content-hrm1">
							<div className="column1">용도</div>
							<div className="column2"><input className="input1" placeholder="용도 입력"/></div>
						</div>
						<div className="apv-content-hrm1">
							<div className="column1">요청사항</div>
							<div className="column2"><input className="input1" placeholder="요청사항 입력"/></div>
						</div>
					</div>
				</div>
			</div>									
		</section>
    );
}

export default Hrm3;
