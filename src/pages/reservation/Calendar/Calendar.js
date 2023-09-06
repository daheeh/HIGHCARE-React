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



   const dateClick=(info)=>{
        dispatch(callDateResAPI({
            reservationDate : info.dateStr,
            resourceCode : content.resourceCode
        }));
        setData(info.dateStr);
    }
    
        return(
            <>
            <div style={{ margin:15, display:'grid',gridTemplateColumns:"2fr 1fr"}}>
                <FullCalendar   
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={
                        {
                            start: 'today', 
                            center: 'title',
                            end: 'prev,next' 
                        }
                    }
                    height={"85vh"}
                    dateClick={dateClick}
                    locale={'ko'}
                />
            </div>
            </>     
        );
}

export default Calendar;