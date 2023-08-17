import React from "react";
import "./Customerlog.css";

function Customerlog() {


    return(

    <div className="consultation-form">
    <div className="title">
        <h1>상담일지</h1>
    </div>
    <div className="grid-container">
        <div className="grid-item1"><label for="customer-number">고객번호</label></div>
        <div className="grid-item"><input type="text" id="customer-number" placeholder="입력"/></div>
        <div className="grid-item1"><label for="consultation-number">상담번호</label></div>
        <div className="grid-item"><input type="text" id="consultation-number" placeholder="입력"/></div>
        <div className="grid-item1"><label for="customer">고객</label></div>
        <div className="grid-item"><input type="text" id="customer" placeholder="입력"/></div>
        <div className="grid-item1"><label for="consultation-date">상담일</label></div>
        <div className="grid-item"><input type="text" id="consultation-date" placeholder="입력"/></div>
        <div className="grid-item1"><label for="birthdate">생년월일</label></div>
        <div className="grid-item"><input type="text" id="birthdate" placeholder="입력"/></div>
        <div className="grid-item1"><label for="consultation-type">상담유형</label></div>
        <div className="grid-item"><input type="text" id="consultation-type" placeholder="입력"/></div>
        <div className="grid-item1"><label for="id-number">주민등록번호</label></div>
        <div className="grid-item"><input type="text" id="id-number" placeholder="입력"/></div>
        <div className="grid-item1"><label for="consultation-result">상담결과</label></div>
        <div className="grid-item"><input type="text" id="consultation-result" placeholder="입력"/></div>
        <div className="grid-item1"><label for="insurance-name">보험명</label></div>
        <div className="grid-item"><input type="text" id="insurance-name" placeholder="입력"/></div>
        <div className="grid-item1"><label for="design-fee">설계비용</label></div>
        <div className="grid-item" colspan="3"><input type="text" id="design-fee" placeholder="입력"/></div>
    </div>
    <div className="consultation-notes">
        <div className="notes">상담내용</div>
        <textarea id="notes" rows="5" placeholder="내용 작성"></textarea>
    </div>
    <div className="submit-button">
        <button type="submit">신청</button>
    </div>
</div>

    )

}

export default Customerlog;