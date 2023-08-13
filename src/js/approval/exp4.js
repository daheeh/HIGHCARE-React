import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalExp.css';
import '../../css/approval/approval.css';

function Exp4() {
    return (
        <html lang="ko">
            <head>
                <title>출장경비정산서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">출장경비정산서</div>
                            <ApvSummitLine />
							<div class="apv-content">
								<div class="apv-content-title-exp1">
									<div class="column1">출장신청서 번호</div>
									<div class="column2">123123123</div>
									<div class="column3">출장기간</div>
									<div class="column4">1박2일</div> 
								</div>
								<div class="apv-content-title-exp1">
									<div class="column1">출장지</div>
									<div class="column2">부산 지점</div>
									<div class="column3">출장인원</div>
									<div class="column4">1인</div> 
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
								<div class="apv-content-title-exp1-2">
									<div class="column41">예금주</div>
									<div class="column42"><input class="input1" placeholder="예금주 입력"/></div>
									<div class="column43">은행</div>
									<div class="column44"><input class="input1" placeholder="은행 입력"/></div>
								</div>
								<div class="apv-content-title-exp1-3">
									<div class="column45">계좌번호</div>
									<div class="column46"><input class="input1" placeholder="계좌번호 입력"/></div>
								</div>

								<div class="apv-content-detail">위와 같이 지급을 요청합니다.</div>
							</div>
						</div>
					</div>
				</section>
                <Footer />
            </body>
        </html>
    );
}

export default Exp4;

