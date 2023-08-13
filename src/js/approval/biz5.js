import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import Footer from '../../Footer';
import '../../css/approval/approvalBiz.css';
import '../../css/approval/approval.css';

function Biz5() {
    return (
        <html lang="ko">
            <head>
                <title>custom</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
						<div><input class="apv-apvtitle-custom" placeholder="양식 제목"/></div>
                            <ApvSummitLine />
								<div class="apv-content">
									<div class="apv-content-title">
										<div class="column1">제목</div>
										<div><input class="column2" placeholder="제목 입력"/></div>
									</div>
									<div class="apv-content-detail">상세내용</div>
									<div class="apv-content-detail-coment2">  sodyd</div>
								</div>
							</div>
						</div>																	
				</section>
                <Footer />
            </body>
        </html>
    );
}

export default Biz5;