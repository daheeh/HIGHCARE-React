import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalExp.css';
import '../../css/approval/approval.css';

function Exp6() {
    return (
        <html lang="ko">
            <head>
                <title>경조금신청서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">경조금신청서</div>
                            <ApvSummitLine />
							<div class="apv-content">
								<div class="apv-content-title-exp6">
									<div class="column1">경조분류</div>
									<div class="column2">
										<select class="input1">
											<option value="">선택</option>
											<option name="" value="입고">결혼</option>
											<option name="" value="입고">조모상</option>
											<option name="" value="입고">조부모상</option>
											<option name="" value="출고">본인상</option>
										</select>
									</div>
									<div class="column3">지급액</div>
									<div class="column4">200,000원</div>
								</div>
								<div class="apv-content-title-exp1-2">
									<div class="column41">예금주</div>
									<div class="column42">김나경</div>
									<div class="column43">은행</div>
									<div class="column44">국민은행</div>
								</div>
								<div class="apv-content-title-exp1-3">
									<div class="column45">계좌번호</div>
									<div class="column46">111-1111-1111</div>
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

export default Exp6;
