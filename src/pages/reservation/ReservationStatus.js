import BoardStyle from '../bulletin/Bullentin.module.css';

function ReservationStatus(){
    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>신청현황</h1>
        <div className={BoardStyle.wrap}>
            <div className={BoardStyle.search}>
                <input type="text" className={BoardStyle.searchTerm} placeholder="제목 입력하세요."/>
                <button type="submit" className={BoardStyle.searchButton}>
                    <i></i>
                </button>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>자원</th>
                    <th>자원이름</th>
                    <th>예약날짜</th>
                    <th>예약시간</th>
                    <th>신청자</th>
                    <th>신청상태</th>
                    <th>승인/거절</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2023-08-05</td>
                    <td>제목 1</td>
                    <td>제목 1</td>
                    <td>이름 </td>
                    <td>100</td>
                    <td><span>승인</span>/<span>거절</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    
    )
}

export default ReservationStatus;