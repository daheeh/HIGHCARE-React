import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalHrm.css';
import '../../css/approval/approval.css';

function Hrm5() {
    return (
        <html lang="ko">
            <head>
                <title>휴일/연장근무신청서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">휴일/연장근무신청서</div>
                            <ApvSummitLine />
							<div class="apv-content">
								<div class="apv-content-hrm3">
									<div class="column1">근무시간</div>
									<div class="column2"><input class="input1" type="date"/></div>
									<div class="column2"><input class="input1" type="time"/></div>
									<div class="column3">~</div>
									<div class="column2"><input class="input1" type="date"/></div>
									<div class="column2"><input class="input1" type="time"/></div>
									<div class="column2">(1일)</div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">업무내용</div>
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

export default Hrm5;
