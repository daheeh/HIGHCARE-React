import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalHrm.css';
import '../../css/approval/approval.css';

function Hrm2() {
    return (
        <html lang="ko">
            <head>
                <title>기타휴가신청서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">기타휴가신청서</div>
                            <ApvSummitLine />
							<div class="apv-content">
								<div class="apv-content-hrm2">
									<div class="column1">휴가 종류</div>
									<select class="input1" name="etcofftype">휴가 종류
										<option>종류</option>
										<option>경조휴가</option>
										<option>포상휴가</option>
										<option>대체휴가</option>
										<option>포상휴가</option>
									</select>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">종료일자</div>
									<div class="column2"><input type="date" class="input2"/>
									<label><input type="radio" name="offtype"/>오전</label>
									<label><input type="radio" name="offtype"/>오후</label>
									<label>(미선택 시 전일)</label>
									</div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">종료일자</div>
									<div class="column2"><input type="date" class="input2"/>
									<label><input type="radio" name="offtype"/>오전</label>
									<label><input type="radio" name="offtype"/>오후</label>
									<label>(미선택 시 전일)</label>
									</div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">기간</div>
									<div class="column2"></div>
								</div>
								<div class="apv-content-detail">-사유-</div>


								<div class="apv-content-detail-coment">연차사용</div>

							</div>
						</div>
					</div>									
				</section>
                <Footer />
            </body>
        </html>
    );
}

export default Hrm2;