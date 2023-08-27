import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ApvLineTree from './ApvLineTree';
import ApvSummitLine from './ApvSummitLine';


const modalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		width: '1000px',
		height: '500px',
		maxHeight: '70vh',
		overflow: 'auto',
	},
};


function ApvSummitBar({ onsubmit, updateIsUrgency, setSelectedEmployees }) {
    const [isUrgency, setIsUrgency] = useState('F');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        const dateToSend = [];
        onsubmit(dateToSend);
    }

    const handleEmergencyClick = () => {
        const newIsUrgency = isUrgency === 'F' ? 'T' : 'F';
        setIsUrgency(newIsUrgency);
        updateIsUrgency(newIsUrgency);
        console.log('isUrgency:', isUrgency);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        console.log('ApvSummitBar - selectedEmployees (inside useEffect):', setSelectedEmployees);
    }, [setSelectedEmployees]);

    const handleCompleteSelection = (selectedData) => {
        setSelectedEmployees(selectedData);
        console.log('ApvSummitBar - selectedData:', selectedData);
        console.log('ApvSummitBar - selectedEmployees:', setSelectedEmployees);
        setIsModalOpen(false);
    };

    return (
        <div className="apvTopBar">
            <div>
                <button className="summit" onClick={handleClick}>제출</button>
                <button className={isUrgency === 'T' ? 'emergencyActive' : ''} onClick={handleEmergencyClick}>긴급</button>
                <button>파일첨부</button>
                <button onClick={handleModalOpen}>결재선</button>
                {isModalOpen && <div className="modalOverlay" />}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleModalClose}
                    style={modalStyles}
                >
                    <ApvLineTree onSelect={handleCompleteSelection} />
                </Modal>
                <button>설정</button>
            </div>
        </div>
    );
}

export default ApvSummitBar;