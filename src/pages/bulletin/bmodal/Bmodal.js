import React from 'react';
import modalStyle from './Bmodal.module.css'
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import{
    callBoardNameAddAPI
} from '../../../apis/BulletinAPICall';

    function Bmodal({ onClose }) {
        const dispatch = useDispatch();
        
        const [form, setForm] = useState({
            nameBoard: ''
        });

        const onChangeHandler = (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        };

        const onClickBoardNameHandler = () => {
            console.log(form);
            dispatch(callBoardNameAddAPI({
                form: form
            }));
        }

        return (
            <div className={modalStyle.bcontainer}>
                <div className={modalStyle.bmodal}>
                    <button className={modalStyle.bcloseButton} onClick={onClose}>X</button>
                    <h2 className={modalStyle.modalH}>HIGHCARE</h2>
                    <p>게시판 추가하기111</p>
                    <input type='text' name='nameBoard' onChange={onChangeHandler} className={modalStyle.inputModal}/><br/>
                    <button className={modalStyle.add} onClick={onClickBoardNameHandler}>추가하기</button>
                </div>
            </div>
        );
    }


export default Bmodal;