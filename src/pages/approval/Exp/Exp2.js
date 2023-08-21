import React from 'react';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline'; 
import './ApprovalExp.css';
import '../Approval.css';

function Exp2() {
    return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar />
				<div className="containerApv">
					<div className="apvApvTitle">지출결의서(다건)</div>
					<ApvSummitLine />
					<div className="apvContent">
						<div className="apvContentTitleExp1">
							<div className="column1">지급요청일자</div>
							<div className="column2"><input className="input1" type="date" placeholder="날짜 입력"/></div>
							<div className="column3">합계</div>
							<div className="column4">50,000원</div>
						</div>
						<div className="apvContentDetail2">- 1 -</div>
						<div className="apvContentDetailExp1Title">
							<div className="column11">지급처</div>
							<div className="column12">내역</div>
							<div className="column13">금액</div>
							<div className="column14">적요</div>
						</div>
						<div className="apvContentDetailExp1Content">
							<div className="apvContentDetailExp1List">
								<div className="column21"><input className="input1"/></div>
								<div className="column22"><input className="input1"/></div>
								<div className="column23"><input className="input1" type="number"/></div>
								<div className="column24"><input className="input1"/></div>
							</div>
						</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">예금주</div>
							<div className="column42"><input className="input1" placeholder="예금주 입력"/></div>
							<div className="column43">은행</div>
							<div className="column44"><input className="input1" placeholder="은행 입력"/></div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">계좌번호</div>
							<div className="column46"><input className="input1" placeholder="계좌번호 입력"/></div>
						</div>
						<div className="apvContentDetail2">- 2 -</div>
						<div className="apvContentDetailExp1Title">
							<div className="column11">지급처</div>
							<div className="column12">내역</div>
							<div className="column13">금액</div>
							<div className="column14">적요</div>
						</div>
						<div className="apvContentDetailExp1Content">
							<div className="apvContentDetailExp1List">
								<div className="column21"><input className="input1"/></div>
								<div className="column22"><input className="input1"/></div>
								<div className="column23"><input className="input1" type="number"/></div>
								<div className="column24"><input className="input1"/></div>
							</div>
						</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">예금주</div>
							<div className="column42"><input className="input1" placeholder="예금주 입력"/></div>
							<div className="column43">은행</div>
							<div className="column44"><input className="input1" placeholder="은행 입력"/></div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">계좌번호</div>
							<div className="column46"><input className="input1" placeholder="계좌번호 입력"/></div>
						</div>
						<div className="apvContentDetail2">- 3 -</div>
						<div className="apvContentDetailExp1Title">
							<div className="column11">지급처</div>
							<div className="column12">내역</div>
							<div className="column13">금액</div>
							<div className="column14">적요</div>
						</div>
						<div className="apvContentDetailExp1Content">
							<div className="apvContentDetailExp1List">
								<div className="column21"><input className="input1"/></div>
								<div className="column22"><input className="input1"/></div>
								<div className="column23"><input className="input1" type="number"/></div>
								<div className="column24"><input className="input1"/></div>
							</div>
						</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">예금주</div>
							<div className="column42"><input className="input1" placeholder="예금주 입력"/></div>
							<div className="column43">은행</div>
							<div className="column44"><input className="input1" placeholder="은행 입력"/></div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">계좌번호</div>
							<div className="column46"><input className="input1" placeholder="계좌번호 입력"/></div>
						</div>
						

						<div className="apvContentDetail">위와 같이 지급을 요청합니다.</div>
					</div>
				</div>
			</div>
		</section>

    );
}

export default Exp2;
