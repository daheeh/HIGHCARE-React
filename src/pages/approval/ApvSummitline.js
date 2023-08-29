import React, { useEffect } from 'react';

function ApvSummitLine({ selectedEmployees = [], authes }) {
	const currentDate = new Date();
	const currentDateString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
	
	useEffect(() => {
        console.log('ApvSummitLine - selectedEmployees : ', selectedEmployees);
    }, [selectedEmployees]);

    useEffect(() => {
        console.log('ApvSummitLine - authes : ', authes);
    }, [authes]);

	
	return (
		<div className="apvApvLine">
			<div className="apvApvLineBox">
				<div className="row1">기안자</div>
				<div className="row2">{authes?.name}</div>
				<div className="row3">{authes?.dept} {authes?.job}</div>
				{/* <div className="row2">{authes.name}</div>
				<div className="row3">{authes.dept} {authes.job}</div> */}
				<div className="row4">{currentDateString}</div>
			</div>
			{selectedEmployees.map((emp, index) => (
				<div className="apvApvLineBox" key={index}>
					<div className="row1">{index + 1}</div>
					{/* <div className="row2">{employee.name}</div> */}
					<div className="row2">{emp.employee.empNo}</div>
					<div className="row3">{emp.employee.dept} {emp.employee.job}</div>
					<div className="row4"></div>
				</div>
			))}
		</div>
	);
}

export default ApvSummitLine;


