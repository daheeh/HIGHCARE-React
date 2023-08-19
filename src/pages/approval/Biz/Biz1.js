import React from 'react';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline'; 
import './ApprovalBiz.css';
import '../Approval.css';

function Biz1() {
    return (

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
    );
}

export default Biz1;
