import BoardStyle from '../bulletin/Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Calendar from './Calendar/Calendar';
function Reserve(){

    const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;

    return (
        <div class={BoardStyle.content_bullentin_main}>
            <h1 class={BoardStyle.content_title}>신청하기</h1>
            <h2>aaa</h2>
           <div className={BoardStyle.applay_main}>
               <div className={BoardStyle.apply_content}>
                <img src="../../img/dog.jpg" alt="" width="400px" height="200px"/>
                        <div>
                            <div>시설명 : <span>{content.resourceName}</span></div>
                            <div>지역 : <span>{content.area}</span></div>
                            <div>위치 : <span>{content.location}</span></div>
                            <div>사용시간 : <span>09:00 ~ 14:00</span></div>
                        </div>
                  </div>
                    <div style={{display: 'flex'}}>
                        <div id='calendar' style={{width: '80%'}}>
                            <Calendar />
                        </div>
                        <div id="reservation-status">
                            <h3>예약현황</h3>
                            <div>09:00~12:00</div>
                            <button>예약하기</button>
                        </div>
                    </div>
                          <div className={BoardStyle.content_main_main}></div>
        </div>
    </div>
   
    )
}

export default Reserve;