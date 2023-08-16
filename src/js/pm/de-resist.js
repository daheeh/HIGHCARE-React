import React from 'react';
import '../pm/css/pm-member.css'
import "../commons/leftnavibar.css"
import PmNav from './pmNav';

function PmResist() {
	return (
<section>
<PmNav/>
<div className="apv-navibox">
        <div className="pm-de-top">
            <div className="pm-div-font">사원 등록하기(조직도)</div>
        </div>
            <br />
            <div className='div7'>
            <div className="pm-de-section">    
                <div className="pm-de-regist-in">
                <div className="pm-de-regist">이름</div>
                <input className="pm-input"/>
                </div>
                <div className="pm-de-regist-in">
                    <div className="pm-de-regist">부서</div>
                    <input className="pm-input"/>
                </div>
                <div className="pm-de-regist-in">
                <div className="pm-de-regist">직급</div>
                <input className="pm-input"/>
                </div>
                <div className="pm-de-regist-in">
                    <div className="pm-de-regist">입사날짜</div>
                    <input className="pm-input"/>
                </div>
                <div className="pm-de-regist-in">
                <div className="pm-de-regist">부서전화번호</div>
                <input className="pm-input"/>
                </div>
                <div className="pm-de-regist-in">
                    <div className="pm-de-regist">휴대폰</div>
                    <input className="pm-input"/>
                </div>
                <div className="pm-de-regist-in">
                <div className="pm-de-regist">이메일</div>
                <input className="pm-input"/>
                </div>
                <div className="pm-de-regist-in-last">
                    <div className="pm-de-regist-last">비고</div>
                    <input className="pm-input"/>
                </div>
            </div>
            <button className="pm-regist-button">추가하기</button>
        </div>

                <div className="paging">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
    </section>
	);
}

export default PmResist;
