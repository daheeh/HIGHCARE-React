import React from 'react';
import modalStyle from '../../bulletin/bmodal/Bmodal.module.css';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';




    function Rmodal({ onClose }) {
        const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;

        const dateres = useSelector(state => state.dateReducer);
        const daterese = dateres.data;

        
        const [form, setForm] = useState({
            startTime: '',
            endTime: ''
        });

        const onChangeHandler = (e) => {
                console.log('form ' , form)
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
                    if(e.target.value > content.endTime || e.target.value <content.startTime){
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


        return (
            <div className={modalStyle.bcontainer}>
                <div className={modalStyle.bmodal}>
                    <button className={modalStyle.bcloseButton} onClick={onClose}>X</button>
                    <h2 className={modalStyle.modalH}>HIGHCARE</h2>
                    <p>예약하기</p>
                    <span>예약일</span>
                    <input type='text' style={{width : "70px"}} readOnly></input><br/>
                    <input type='text' name='startTime' onBlur={onChangeHandler} style={{width : "20px"}}className={modalStyle.inputModal}id='startTime' />시 - 
    
                    <input type='text' name='endTime' onBlur={onChangeHandler} style={{width : "20px"}}className={modalStyle.inputModal}id='endTime'/>시 
                    <button className={modalStyle.add}>예약하기</button>
                </div>
            </div>
        );
    }


export default Rmodal;