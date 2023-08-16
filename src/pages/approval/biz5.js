import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import './approvalBiz.css';
import './approval.css';

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
						<div><input className="apv-apvtitle-custom" placeholder="양식 제목"/></div>
                            <ApvSummitLine />
								<div className="apv-content">
									<div className="apv-content-title">
										<div className="column1">제목</div>
										<div><input className="column2" placeholder="제목 입력"/></div>
									</div>
									<div className="apv-content-detail">상세내용</div>
									<div className="apv-content-detail-coment2">  sodyd</div>
								</div>
							</div>
						</div>																	
				</section>
            </body>
        </html>
    );
}

export default Biz5;