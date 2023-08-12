import React from 'react';
import ApvMenu from './apvMenuCopy';
import ApvSummitBar from './apvSmmitbarCopy';
import ApvSummitLine from './apvSummitlineCopy'; 
import Footer from '../Footer';
import '../css/approval/approvalBiz.css';
import '../css/approval/approval.css';

function Biz1() {
    return (
        <html lang="ko">
            <head>
                <title>기안서</title>
            </head>
            <body>
                <section>
                    <ApvMenu />
                    <div>
                        <ApvSummitBar />
                        <div className="container">
                            <div className="apv-apvtitle">기안서</div>
                            <ApvSummitLine />
                            <div className="apv-content">
                                <div className="apv-content-title">
                                    <div className="column1">제목</div>
                                    <div className="column2"><input className="input1" placeholder="제목 입력" /></div>
                                </div>
                                <div className="apv-content-detail">상세내용</div>
                                <div className="apv-content-detail-coment">
                                    <textarea placeholder="내용 작성" rows="9" />
                                </div>
                                <div className="apv-content-detail2">-아래-</div>
                                <div className="apv-content-detail-coment2">어쩌고저쩌고</div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </body>
        </html>
    );
}

export default Biz1;
