import BoardStyle from '../bulletin/Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
    callResAPI
} from '../../apis/ResAPICall';

function Reservation(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    
    const res = useSelector(state => state.resReducer);
    const resCategory = res.data;


    useEffect(
        () =>{
            dispatch(callResAPI());
        },[]
    );
    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>시설예약</h1>
    
    <div className={BoardStyle.step}>
        <div className={BoardStyle.step_1}>
            <h3>시설선택</h3>
            <div className={BoardStyle.step_1_content}>   
                <ul>
                    {Array.isArray(resCategory) && resCategory.map(
                        (category) => (
                            <li>{category.name}</li>
                        )
                    )}
                    {/* <li>회의실</li>
                    <li>강당</li> */}
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