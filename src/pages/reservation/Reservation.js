import './Bullentin.css'
function Reservation(){
    return (
        <div className="content-bullentin-main">
        <h1 className="content-title">시설예약</h1>
    
    <div className="step">
        <div className="step-1">
            <h3>시설선택</h3>
            <div className="step-1-content">   
                <ul>
                    <li>회의실</li>
                    <li>강당</li>
                </ul>
            </div>
        </div>
        <div className="step-2">
            <h3>지역선택</h3>
            <div className="step-2-content">
                <ul>
                    <li>서울</li>
                    <li>부산</li>
                </ul>
            </div>
        </div>
        <div className="step-3">
            <h3 className="">정보확인</h3>
            <div id="step-3-content"> 
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