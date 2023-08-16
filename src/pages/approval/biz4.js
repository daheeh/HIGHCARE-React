import React from 'react';
import { Link } from 'react-router-dom';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import './approvalBiz.css';
import './approval.css';

function Biz4() {
    return (
        <html lang="ko">
            <head>
                <title>공문</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">공문</div>
                            <Link to="/biz4Offcial">미리보기</Link>
							<div className="apv-content">
								<div className="apv-content-title">
									<div className="column1">제목</div>
									<div className="column2"><input className="input1" placeholder="제목 입력"/></div>
								</div>
								<div className="apv-content-title">
									<div className="column1">수신처</div>
									<div className="column2"><input className="input1" placeholder="수신처 입력"/></div>
								</div>
								<div className="apv-content-detail">상세내용</div>
								<div className="apv-content-detail-coment">
									<textarea placeholder="내용 작성" rows="9"></textarea>
								</div>
								<div className="apv-content-detail2">-아래-</div>
								<div className="apv-content-detail-coment2">어쩌고저쩌고</div>
							</div>
						</div>
					</div>									
				</section>
            </body>
        </html>
    );
}

export default Biz4;