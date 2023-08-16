import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import './approvalExp.css';
import './approval.css';

function Exp1() {
    return (
        <html lang="ko">
            <head>
                <title>지출결의서(단건)</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">지출결의서(단건)</div>
                            <ApvSummitLine />
							<div className="apv-content">
								<div className="apv-content-title-exp1">
									<div className="column1">지급요청일자</div>
									<div className="column2"><input className="input1" type="date" placeholder="날짜 입력"/></div>
									<div className="column3">지급처</div>
									<div className="column4"><input className="input1" placeholder="지급처 입력"/></div>
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
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
									<div className="apv-content-detail-exp1-list">
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
									<div className="apv-content-detail-exp1-list">
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
									<div className="apv-content-detail-exp1-list">
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
									<div className="apv-content-detail-exp1-list">
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
									<div className="apv-content-detail-exp1-list">
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
									<div className="apv-content-detail-exp1-list">
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
									<div className="apv-content-detail-exp1-list">
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
									<div className="apv-content-detail-exp1-list">
										<div className="column21"><input className="input1"/></div>
										<div className="column22"><input className="input1"/></div>
										<div className="column23"><input className="input1" type="number"/></div>
										<div className="column24"><input className="input1"/></div>
									</div>
								</div>

								<div className="apv-content-detail-exp1-total">
									<div className="column31">합계</div>
									<div className="column32">20,000원</div>
								</div>
								<div className="apv-content-title-exp1-2">
									<div className="column41">예금주</div>
									<div className="column42"><input className="input1" placeholder="예금주 입력"/></div>
									<div className="column43">은행</div>
									<div className="column44"><input className="input1" placeholder="은행 입력"/></div>
								</div>
								<div className="apv-content-title-exp1-3">
									<div className="column45">계좌번호</div>
									<div className="column46"><input className="input1" placeholder="계좌번호 입력"/></div>
								</div>

								<div className="apv-content-detail">위와 같이 지급을 요청합니다.</div>
							</div>
						</div>
					</div>
				</section>
            </body>
        </html>
    );
}

export default Exp1;
