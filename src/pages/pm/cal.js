import React from 'react';
import './pm-member.css'
import PmNav from './pmNav';

function PmCalender() {
	return (
<section>
<PmNav/>
<div className="apv-navibox">
        <div className="pm-de-top">
            <div className="pm-div-font">일정 등록</div>
        </div>
                <div className="pm-ca-top"> 
            <div className='div6'>
                <div>
                    <div className='div1'>
                    <div className="pm-ma-title-in">
                    <div className="pm-ma-title-box">제목</div>
                    <input className="pm-input"/>
                    </div>
                    <div className='div2'></div>

                    <div className="pm-ma-regist-in">
                        <div className="pm-de-regist">일자</div>
                        <div className='div3'>
                                <input className="pm-cal-search" type="text" name="name" placeholder="사원이름을 입력하세요."/>
                                <button className="pm-department-button">달력</button>
                                <input className="pm-cal-search2" type="text" name="name" placeholder="사원이름을 입력하세요."/>
                                <button className="pm-department-button">달력</button>
                        </div>
                    </div>
                    <div className="pm-ma-regist-in">
                        <div className="pm-de-regist">장소</div>
                        <input className="pm-input"/>
                    </div>
                    <div className="pm-ma-regist-in">
                        <div className="pm-de-regist">참석자</div>
                        <input className="pm-input"/>
                    </div>
                    <div className="pm-ma-regist-last">
                        <div className="pm-ma-regist">내용</div>
                        <input className="pm-input"/>
                    </div>
                    </div>
                    </div>
                </div>
                <button className="pm-ma-add">등록 하기</button>
            </div>
            <br></br>
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

export default PmCalender;
