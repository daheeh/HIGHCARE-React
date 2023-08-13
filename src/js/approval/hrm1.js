import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalHrm.css';
import '../../css/approval/approval.css';

function Hrm1() {
    return (
        <html lang="ko">
            <head>
                <title>연차신청서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">연차신청서</div>
                            <ApvSummitLine />
							<div class="apv-content">
								<div class="apv-content-hrm1">
									<div class="column1">휴가 종류</div>
									<div class="column2">연차</div>
								</div>
													
								<div class="apv-content-hrm1">
									<div class="column1">반차 여부</div>
									<div class="column2">
										<label><input type="radio" name="offtype"/>오전 반차</label>
										<label><input type="radio" name="offtype"/>오후 반차</label>
									</div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">시작일자</div>
									<div class="column2"><input class="input1" type="date"/></div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">종료일자</div>
									<div class="column2"><input class="input1" type="date"/></div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">기간</div>
									<div class="column2"></div>
								</div>
								<div class="apv-content-detail">-사유-</div>
								<div class="apv-content-detail-coment"><textarea placeholder="사유 작성" rows="20"></textarea></div>
							</div>
						</div>
					</div>									
				</section>
                <Footer />
            </body>
        </html>
    );
}

export default Hrm1;
