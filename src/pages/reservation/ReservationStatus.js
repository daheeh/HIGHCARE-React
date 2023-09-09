import BoardStyle from '../bulletin/Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
    callAllResAPI
} from '../../apis/ReserAPICall';

import{
    callApprovalAPI,
    callRejectedAPI
} from '../../apis/ResStatusAPICall';

function ReservationStatus(){
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const dispatch = useDispatch();
    const reser = useSelector(state => state.reserReducer);
    const resList = reser.data;
    const pageInfo = reser.pageInfo;
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumber = [];
    const status = useSelector(state => state.resStatusReducer);

    if(pageInfo){
        for(let i = 1; i<=pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }
    useEffect(
        ()=>{
            dispatch(callAllResAPI({
                currentPage: currentPage
            }));
        },[currentPage,status]
    );

    const onClickApprova = (statusCode) => {
        dispatch(callApprovalAPI({
            statusCode : statusCode
        }));
    }
    const onClickRejected = (statusCode) => {
        dispatch(callRejectedAPI({
            statusCode : statusCode
        }));
    }
    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>신청현황</h1>
        <table>
            <thead>
                <tr>
                    <th>지역</th>
                    <th>시설이름</th>
                    <th>예약날짜</th>
                    <th>예약시간</th>
                    <th>신청자</th>
                    <th>신청상태</th>
                    <th>승인/거절</th>
                </tr>
            </thead>
            <tbody>
            { Array.isArray(resList) && resList.map(
                        (res) => (
                <tr>
                    <td>{res.resource.area}</td>
                    <td>{res.resource.resourceName}</td>
                    <td>{res.reservationDate!==null?res.reservationDate.substring(0,10):res.reservationDate}</td>
                    <td>{res.startTime}:00 - {res.endTime}:00</td>
                    <td>{res.bulletinEmployee.empName}</td>
                    <td>{res.reservationStatus=='SCREENING'?'대기':(res.reservationStatus=='APPROVAL'?'승인':'취소')}</td>
                    <td><span onClick={() => onClickApprova(res.statusCode)}>승인</span>/<span onClick={() => onClickRejected(res.statusCode)}>거절</span></td>
                    </tr>)
                   ) }
            </tbody>
        </table>
        <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }} className={BoardStyle.pagingButton}>
            { Array.isArray(resList) &&
            <button 
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
                className={BoardStyle.pagingButtona}
            >
                &lt;
            </button>
            }
            {pageNumber.map((num) => (
            <li key={num} onClick={() => setCurrentPage(num)} className={BoardStyle.pagingButton}>
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
                className={BoardStyle.pagingButtona}
            >
                &gt;
            </button>
            }
        </div>
    </div>
    
    )
}

export default ReservationStatus;