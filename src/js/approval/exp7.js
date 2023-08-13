import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalExp.css';
import '../../css/approval/approval.css';

function Exp7() {
    return (
        <html lang="ko">
            <head>
                <title>법인카드사용보고서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">법인카드사용보고서</div>
                            <ApvSummitLine />
							<div class="apv-content">
								<div class="apv-content-title-exp1">
									<div class="column1">카드번호</div>
									<div class="column2">111-1111-11-1111</div>
									<div class="column3">결제월</div>
									<div class="column4">4월</div>
								</div>
								<div class="apv-content-detail">내역</div>
								<div class="apv-content-detail-exp1-title">
									<div class="column11">내역</div>
									<div class="column12">계정과목</div>
									<div class="column13">금액</div>
									<div class="column14">적요</div>
								</div>
								<div class="apv-content-detail-exp1-content">
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
									<div class="apv-content-detail-exp1-list">
										<div class="column21"></div>
										<div class="column22"></div>
										<div class="column23"></div>
										<div class="column24"></div>
									</div>
								</div>

								<div class="apv-content-detail-exp1-total">
									<div class="column31">합계</div>
									<div class="column32">20,000원</div>
								</div>
								<div class="apv-content-detail3">위와 같이 법인카드 사용 내역을 보고합니다.</div>
							</div>
						</div>
					</div>
				</section>
                <Footer />
            </body>
        </html>
    );
}

export default Exp7;

