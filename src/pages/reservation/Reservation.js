import BoardStyle from '../bulletin/Bullentin.module.css';
function Reservation(){
    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>시설예약</h1>
    
    <div className={BoardStyle.step}>
        <div className={BoardStyle.step_1}>
            <h3>시설선택</h3>
            <div className={BoardStyle.step_1_content}>   
                <ul>
                    <li>회의실</li>
                    <li>강당</li>
                </ul>
            </div>
        </div>
        <div className={BoardStyle.step_2}>
            <h3>지역선택</h3>
            <div className={BoardStyle.step_2_content}>
                <ul>
                    <li>서울</li>
                    <li>부산</li>
                </ul>
            </div>
        </div>
        <div className={BoardStyle.step_3}>
            <h3 className="">정보확인</h3>
            <div id="step-3-content" className={BoardStyle.abcdefg}> 
                <div>시설명 : <span>3회의실</span></div>
                <div>위치 : <span>3층</span></div>
                <div>이용시간 : <span>09:00~17:00</span></div>
                <img src="../../img/dog.jpg" alt="" width="300px" height="200px"/>
                <div style={{textAlign: 'center'}}>예약하기</div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Reservation;