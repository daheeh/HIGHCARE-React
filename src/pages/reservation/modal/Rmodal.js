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

    const [form, setForm] = useState({
        startTime: '',
        endTime: '',
        empNo: empNo,
        resourceCode : content.resourceCode,
        reservationDate : props.data
    });

    const onChangeHandler = (e) => {
            if(e.target.name == 'startTime'){
                if(e.target.value > content.endTime || e.target.value <content.startTime){
                    alert('예약할 수 없는 시간대 입니다');
                    document.getElementById(`startTime`).value = '';
                    setForm({
                        ...form,
                        [e.target.name]: ''
                    });
                }
            }else{
                if(e.target.value > content.endTime || e.target.value <content.startTime || e.target.value <= form.startTime ){
                    alert('예약할 수 없는 시간대 입니다');
                    document.getElementById(`endTime`).value = '';
                    setForm({
                        ...form,
                        [e.target.name]: ''
                    });

                }
            }
    
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickResHandler = () => {
        dispatch(callResInsertAPI({
            form: form
        }));
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