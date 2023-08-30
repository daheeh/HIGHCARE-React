import BoardStyle from '../bulletin/Bullentin.module.css';

function MyReservationStatus(){
    return (
 <div className={BoardStyle.content_bullentin_main}>
            <h1 className={BoardStyle.content_title}>나의 신청현황</h1>
            <div className={BoardStyle.wrap}>
                <div className={BoardStyle.search}>
                    <input type="text" className={BoardStyle.searchTerm} placeholder="제목 입력하세요."/>
                    <button type="submit" className={BoardStyle.searchButton}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>자원이름</th>
                        <th>예약날짜</th>
                        <th>예약시간</th>
                        <th>신청상태</th>
                        <th>취소/반납</th>
                        <th>사유</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>제 3회의실</td>
                        <td>2023-08-05</td>
                        <td>제목 1</td>
                        <td></td>
                        <td><span>반납</span></td>
                        <td>2023-08-05</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyReservationStatus;