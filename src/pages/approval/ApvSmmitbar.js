import React, { useState } from 'react';

function ApvSummitBar({onsubmit, updateIsUrgency }) {

	const [isUrgency, setIsUrgency] = useState('F');

	const handleClick = () => {
		const dateToSend = [];
		onsubmit(dateToSend);
	}

	const handleEmergencyClick = () => {
        const newIsUrgency = isUrgency === 'F' ? 'T' : 'F';
		setIsUrgency(newIsUrgency);
		updateIsUrgency(newIsUrgency);
		console.log('isUrgency :', isUrgency);
    };


	return (
	<div className="apvTopBar">
		<div>
			<button className="summit" onClick={handleClick}>제출</button>
			<button className={isUrgency === 'T' ? 'emergencyActive' : ''} onClick={handleEmergencyClick}>긴급</button>
			<button>파일첨부</button>
			<button>결재선</button>
			<button>설정</button>
			
		</div>
	</div>
	);
}

export default ApvSummitBar;

