import React from 'react';
import modalStyle from './Bmodal.module.css'
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import{
    callResAddAPI
} from '../../../apis/ResAPICall';

    function Bmodal({ onClose }) {
        const dispatch = useDispatch();
        
        const [form, setForm] = useState({
            name: ''
        });

        const onChangeHandler = (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        };

        const onClickBoardNameHandler = () => {
            console.log(form);
            dispatch(callResAddAPI({
                form: form
            }));
            
        }

        return (
            <div className={modalStyle.bcontainer}>
                <div className={modalStyle.bmodal}>
                    <button className={modalStyle.bcloseButton} onClick={onClose}>X</button>
                    <h2 className={modalStyle.modalH}>HIGHCARE</h2>
                    <p>시설 그룹 추가하기</p>
                    <input type='text' name='name' onChange={onChangeHandler} className={modalStyle.inputModal}/><br/>
                    <button className={modalStyle.add} onClick={onClickBoardNameHandler}>추가하기</button>
                </div>
            </div>
        );
    }


export default Bmodal;