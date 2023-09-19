import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector, useDispatch } from 'react-redux';
import './Calendar.css';
import {
    callDateResAPI
} from '../../../apis/DateResAPICall';

function Calendar({setData}){
    const dispatch = useDispatch();
    const dateres = useSelector(state => state.dateReducer);
    const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;
    const today = new Date();


   const dateClick=(info)=>{
        console.log('today : ' , today)
        if(new Date(info.dateStr) <= today){
            alert('예약불가능한 날짜입니다')
        }else{
            alert('예약 가능한 날짜입니다.')
            dispatch(callDateResAPI({
                reservationDate : info.dateStr,
                resourceCode : content.resourceCode
            }));
            setData(info.dateStr);
        }
    }
    
        return(
            <>
            <div style={{ margin:15, display:'grid',gridTemplateColumns:"2fr 1fr"}}>
                <FullCalendar   
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={
                        {
                            start: 'prev', 
                            center: 'title',
                            end: 'next' 
                        }
                    }
                    height={"50vh"}
                    dayMinWidth={"450px"}
                    dateClick={dateClick}
                    locale={'ko'}
                />
            </div>
            </>     
        );
}

export default Calendar;