import React from 'react';
import modalStyle from '../../bulletin/bmodal/Bmodal.module.css';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import{
    callResInsertAPI
} from '../../../apis/ResStatusAPICall';


function Rmodal(props) {
    const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const dateres = useSelector(state => state.dateReducer);
    const daterese = dateres.data;
    const dispatch = useDispatch();

    const status = useSelector(state => state.resStatusReducer);
    if(daterese == null){
        alert('날짜를 입력해주세요');
    }
    const [form, setForm] = useState({
        startTime: '',
        endTime: '',
        empNo: empNo,
        resourceCode : content.resourceCode,
        reservationDate : props.data
    });

    const onChangeHandler = (e) => {
        if(e.target.value >24){
            document.getElementById(`endTime`).value = '';
            document.getElementById(`startTime`).value = '';
            alert("시간을 확인해주세요.")
        }else{
            setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    };

    const onClickResHandler = () => {
        // if(form.startTime >= form.endTime || form.startTime < content.startTime || form.endTime > content.endTime){
        if(form.startTime >= form.endTime || form.startTime < content.startTime){

            document.getElementById(`endTime`).value = '';
            document.getElementById(`startTime`).value = '';
            console.log('form.startTime', form.startTime);
            console.log('content.startTime', content.startTime);
            console.log('form.endTime', form.endTime);
            console.log('content.endTime', content.endTime);
            alert("예약시간을 확인해주시기 바랍니다")
            setForm({
                endTime: '',
                startTime: '',
            });
        }else if(form.endTime == '' || form.startTime == ''){
            alert('시간을 입력바랍니다.')
        }
        else{
            dispatch(callResInsertAPI({
                form: form
            }));
        }
      
    }

    return (
        <div className={modalStyle.bcontainer}>
            <div className={modalStyle.bmodal}>
                <button className={modalStyle.bcloseButton} onClick={props.onClose}>X</button>
                <h2 className={modalStyle.modalH}>HIGHCARE</h2>
                <p>예약하기</p>
                <span>예약일</span>
                <input type='text' value={props.data} style={{width : "70px"}} readOnly></input><br/>
                <input type='text' name='startTime' onBlur={onChangeHandler} style={{width : "20px"}}className={modalStyle.inputModal}id='startTime' />시 - 

                <input type='text' name='endTime' onBlur={onChangeHandler} style={{width : "20px"}}className={modalStyle.inputModal}id='endTime'/>시 
                <button className={modalStyle.add} onClick={onClickResHandler}>예약하기</button>
            </div>
        </div>
    );
}


export default Rmodal;