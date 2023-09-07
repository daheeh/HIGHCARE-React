import BoardStyle from '../bulletin/Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
    callMyResAPI
} from '../../apis/ReserAPICall';
function MyReservationStatus(){
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const dispatch = useDispatch();
    const reser = useSelector(state => state.reserReducer);
    const resList = reser.data;
    const pageInfo = reser.pageInfo;
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i<=pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        ()=>{
            dispatch(callMyResAPI({
                empNo: empNo,
                currentPage: currentPage
            }));
        },[currentPage]
    );
    return (
 <div className={BoardStyle.content_bullentin_main}>
            <h1 className={BoardStyle.content_title}>나의 신청현황</h1>
            <table>
                <thead>
                    <tr>
                   
                        
                        <th>시설이름</th>
                        <th>예약날짜</th>
                        <th>예약시간</th>
                        <th>신청상태</th>
                        <th>사유</th>
                    </tr>
                </thead>
                <tbody>
                    { Array.isArray(resList) && resList.map(
                        (res) => (
                    <tr>
                        
                        <td>{res.resource.resourceName}</td>
                        <td>{res.reservationDate!==null?res.reservationDate.substring(0,10):res.reservationDate}</td>
                        <td>{res.startTime}:00 - {res.endTime}:00</td>
                        <td>{res.reservationStatus=='SCREENING'?'대기':(res.reservationStatus=='APPROVAL'?'승인':'취소')}</td>
                        <td>{res.reason}</td>
                    </tr>)
                   ) }
                </tbody>
            </table>
            <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
            { Array.isArray(resList) &&
            <button 
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
       
            >
                &lt;
            </button>
            }
            {pageNumber.map((num) => (
            <li key={num} onClick={() => setCurrentPage(num)}>
                <button
                    style={ currentPage === num ? {backgroundColor : 'orange' } : null}
                >
                    {num}
                </button>
            </li>
            ))}
            { Array.isArray(resList) && pageInfo != null &&
            <button 
                onClick={() => setCurrentPage(currentPage + 1)} 
                disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}
            >
                &gt;
            </button>
            }
        </div>
        </div>
    )
}

export default MyReservationStatus;