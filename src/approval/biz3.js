import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../Footer';
import '../css/approval/approvalBiz.css';
import '../css/approval/approval.css';

function Biz3() {
    return (
        <html lang="ko">
            <head>
                <title>출장신청서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">출장신청서</div>
                            <ApvSummitLine />
							<div class="apv-content">
								<div class="apv-content-title">
									<div class="column1">출장목적</div>
									<div class="column2"><input class="input1" placeholder="출장 목적 입력"/></div>
								</div>
								<div class="apv-content-title-biz3">
									<div class="column1">출장기간</div>
									<div class="column2"><input class="input1" type="date"/></div>
									<div class="column2"><input class="input1" type="time"/></div>
									<div class="column3">~</div>
									<div class="column2"><input cla ss="input1" type="date"/></div>
									<div class="column2"><input class="input1" type="time"/></div>
									<div class="column2">(1일)</div>
								</div>
								<div class="apv-content-title">
									<div class="column1">출장지</div>
									<div class="column2"><input class="input1" placeholder="출장지 입력"/></div>
								</div>
								<div class="apv-content-title">
									<div class="column1">동반자</div>
									<div class="column2"><input class="input1" placeholder="사번 입력"/></div>
								</div> 
								<div class="apv-content-detail">상세내용
								</div>
								<div class="apv-content-detail-coment">
									<textarea placeholder="내용 작성" rows="11"></textarea>
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

export default Biz3;