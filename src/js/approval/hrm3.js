import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalHrm.css';
import '../../css/approval/approval.css';

function Hrm3() {
    return (
        <html lang="ko">
            <head>
                <title>서류발급신청서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">서류발급신청서</div>
                            <ApvSummitLine />
							<div class="apv-content">
								<div class="apv-content-hrm2">
									<div class="column1">서류 종류</div>
									<select class="input1" name="etcofftype">
										<option>종류</option>
										<option>재직증명서</option>
										<option>경력증명서</option>
										<option>기타</option>
									</select>
									<div class="column2"><input class="input1" placeholder="기타서류명 입력"/></div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">제출처</div>
									<div class="column2"><input class="input1" placeholder="제출처 입력"/></div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">용도</div>
									<div class="column2"><input class="input1" placeholder="용도 입력"/></div>
								</div>
								<div class="apv-content-hrm1">
									<div class="column1">요청사항</div>
									<div class="column2"><input class="input1" placeholder="요청사항 입력"/></div>
								</div>
							</div>
						</div>
					</div>									
				</section>
                <Footer />
            </body>
        </html>
    );
}

export default Hrm3;
