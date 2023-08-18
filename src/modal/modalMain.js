import React from 'react';
import Modal from './modal';
import './modalMain.css';

const { useState } = React;

function ModalMain() {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
            <div>
                <button className='openButton' onClick={openModal}>messenger</button>
            </div>
            {modal && <Modal onClose={ closeModal } />}
            {/* Modal 컴포넌트에 onClose prop을 전달하여 모달 내부에서 모달을 닫는데 사용되는 함수를 실행 */}
        </>
    );
}

export default ModalMain;