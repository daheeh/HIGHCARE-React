import BoardStyle from '../bulletin/Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
    callResAPI
} from '../../apis/ResAPICall';

import{
    callResListAPI
} from '../../apis/ResListAPICall';

import{
    callResContentAPI
} from '../../apis/ResContentAPICall';

function Reservation(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const res = useSelector(state => state.resReducer);
    const resCategory = res.data;
    const resList = useSelector(state => state.resListReducer);
    const resLoc = resList.data;

    const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;
    const [stepA, setStepA] = useState(-1);
    const [stepB, setStepB] = useState(-1);

    useEffect(
        () =>{
            dispatch(callResAPI());
        },[]
    );

    const onClickCategory = (categoryCode) =>{
        setStepA(categoryCode);
            dispatch(callResListAPI({
                    categoryCode: categoryCode
                }));
                dispatch(callResContentAPI({
                    resourceCode: 0
                }));

    }
    const onClickArea = (resourceCode) =>{
        setStepB(resourceCode);
        dispatch(callResContentAPI({
            resourceCode: resourceCode
        }));
        console.log('content : ', content);
    }

    const onCLickRes = (resourceCode)=>{
        navigate(`/reservation/reserve`, {replace: false});
    }

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
                            <li onClick={() => onClickCategory(category.categoryCode)} 
                            style={category.categoryCode === stepA?{backgroundColor: '#00b6c2',color:'#fff'}: {backgroundColor : '#f4f4f4',color:'black'}}>{category.name}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
        <div className={BoardStyle.step_2}>
            <h3>지역선택</h3>
            <div className={BoardStyle.step_2_content}>
                <ul>
                {Array.isArray(resLoc) && resLoc.map(
                        (area) => (
                            <li onClick={() => onClickArea(area.resourceCode)}
                            style={area.resourceCode === stepB?{backgroundColor: '#00b6c2',color:'#fff'}: {backgroundColor : '#f4f4f4',color:'black'}}>{area.area}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
        <div className={BoardStyle.step_3}>
            <h3 className="">정보확인</h3>
            <div id="step-3-content" className={BoardStyle.abcdefg}>
            {  content &&
            <div style={{fontWeight:"800"}}> 
                <div>시설명 : <span>{content.resourceName}</span></div>
                <div>위치 : <span>{content.location}</span></div>
                <div>이용시간 : <span>{content.startTime}:00 - {content.endTime}:00</span></div>
                <img src="../../img/dog.jpg" alt="" width="350px" height="200px"/>
                <div style={{textAlign: 'center',width:'80px',margin:'auto',height:'30px',fontSize:'14px'}} onClick={() => onCLickRes(content.resourceCode)} className={BoardStyle.comment_ok}>예약하기</div>
            </div>
            }
            </div>
        </div>
    </div>
</div>
    )
}

export default Reservation;