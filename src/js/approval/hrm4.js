import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalHrm.css';
import '../../css/approval/approval.css';

function Hrm4() {
    return (
        <html lang="ko">
            <head>
                <title>시말서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">시말서</div>
                            <ApvSummitLine />
							<div className="apv-content">
								<div className="apv-content-hrm1">
									<div className="column1">소속</div>
									<div className="column2"></div>
								</div>
								<div className="apv-content-hrm1">
									<div className="column1">직위</div>
									<div className="column2"></div>
								</div>
								<div className="apv-content-hrm1">
									<div className="column1">성명</div>
									<div className="column2"></div>
								</div>
								<div className="apv-content-detail"></div>
								<div className="apv-content-detail-coment2">
									위 본인은 직원으로서 제 사규를 준수하고 맡은 바 책임과 의무를 다하여 성실히 복무하여야 함에도 불구하고
									아래와 같이 회사의 관련 규정을 위반하였는바, 이에 시말서를 제출하고 그에 따른 처벌을 감수하며 
									차후 본 건을 계기로 과오의 재발이 없을 것임을 서약합니다.</div>
								<div className="apv-content-detail">-위반내용-</div>
								<div className="apv-content-detail-coment">
									<textarea placeholder="내용 작성" rows="20"></textarea>
								</div>
								<div className="apv-content-detail-coment2">
									상기 기록사실에 허위가 없습니다.
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

export default Hrm4;

