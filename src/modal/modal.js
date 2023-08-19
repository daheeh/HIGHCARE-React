import React from 'react';
import './modal.css';

    function Modal({ onClose }) {
        return (
            <div className='container'>
                <div className='modal'>
                    <button className='closeButton' onClick={onClose}>X</button>
                    <h2>HIGHCARE</h2>
                    <p>그룹웨어 하이케어의 채팅창입니다.</p>
                    <p>contents</p>
                </div>
            </div>
        );
    }


export default Modal;