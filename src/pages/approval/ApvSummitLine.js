import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ApvSummitLine({ selectedEmployees, authes, mode, data }) {
	const currentDate = new Date();
	const currentDateString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

	const navigate = useNavigate();

	useEffect(() => {
		console.log('ApvSummitLine - selectedEmployees : ', selectedEmployees);
		console.log('ApvSummitLine - authes : ', authes);
		console.log('ApvSummitLine - data : ', data);
	}, [selectedEmployees, authes, data]);

	const handleApprove = async (index) => {
		const apvLineNo = selectedEmployees[index].apvLineNo;
		const apvNo = selectedEmployees[index].apvNo;
		const apvStatus = '';
		console.log('apvLineNo : ', apvLineNo);
		console.log('apvNo : ', apvNo);


		try {
			const requestURL = `http://localhost:8080/api/approval/put/line/${apvLineNo}?apvNo=${apvNo}&apvStatus=${apvStatus}`;
			const response = await fetch(requestURL, {
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
				body: JSON.stringify({ apvNo }),
			});

			if (response.status === 200) {
				if (response.data === "실패") {
					window.alert("결재 등록 실패");
				} else {
					window.alert("결재 등록 성공");
					navigate('/approval');
				}
			} else {
				window.alert("결재 등록 중 오류가 발생했습니다.");
			}
		} catch (error) {
			console.error("API error:", error);
			window.alert("API 요청 중 오류가 발생했습니다.");
		}
	};

	const handleReject = async (index) => {
		const apvLineNo = selectedEmployees[index].apvLineNo;
		const apvNo = selectedEmployees[index].apvNo;
		const apvStatus = '결재반려';
		console.log('apvLineNo: ', apvLineNo);
		console.log('apvNo: ', apvNo);

		try {
			const requestURL = `http://localhost:8080/api/approval/put/line/${apvLineNo}?apvNo=${apvNo}&apvStatus=${apvStatus}`;
			const response = await fetch(requestURL, {
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
				body: JSON.stringify({ apvNo }),
			});

			if (response.status === 200) {
				if (response.data === "실패") {
					window.alert("결재 반려 실패");
				} else {
					window.alert("결재 반려 성공");
					navigate('/approval');
				}
			} else {
				window.alert("결재 반려 중 오류가 발생했습니다.");
			}
		} catch (error) {
			console.error("API error:", error);
			window.alert("API 요청 중 오류가 발생했습니다.");
		}
	};


	// const handleEdit = (index) => {
	// 	const updatedContent =
	// 		updateContent(index, updatedContent);
	// };

	// const handleApprove = (index) => {
	// 	const updatedSelectedEmployees = [...selectedEmployees];
	// 	updatedSelectedEmployees[index].isApproval = 'T';

	// 	const currentDate = new Date();
	// 	const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
	// 	updatedSelectedEmployees[index].apvDate = formattedDate;

	// 	updateEmployeeInDatabase(updatedSelectedEmployees[index]);

	// 	setSelectedEmployees(updatedSelectedEmployees);
	// };



	if (mode === 'create') {

		return (
			<div className="apvApvLine">
				<div className="apvApvLineBox">
					<div className="row1">기안자</div>
					<div className="row2">{authes.name}  {authes.job}</div>
					<div className="row3">{authes.dept}</div>
					<div className="row4">{currentDateString}</div>
				</div>

				{selectedEmployees.slice(1).map((emp, index) => (
					<div className="apvApvLineBox" key={index + 1}>
						<div className="row1">{index + 1}</div>
						<div className="row2">{emp.employee.empName} {emp.jobName}</div>
						<div className="row3">{emp.deptName}</div>
						<div className="row4"></div>
					</div>
				))}
			</div>
		);

	} else if (mode === 'view') {

		return (
			<div className="apvApvLine">
				{selectedEmployees.map((emp, index) => (
					<div className="apvApvLineBox" key={index}>
						<div className="row1">{index === 0 ? '기안자' : index}</div>
						<div className="row2">{emp.employee.empName} {emp.employee.job.name}</div>
						<div className="row3">{emp.employee.deptName}</div>
						<div className="row4">
							{index === 0 && authes.empNo === emp.empNo ? (
								// <button onClick={() => handleEdit(index)}>수정</button>
								<button>수정</button>
							) : index !== 0 && authes.empNo === emp.empNo ? (
								selectedEmployees[index - 1].isApproval === 'T' ? (
									selectedEmployees[index].isApproval === 'T' ? (
										<>
											{emp.apvDate && <span>{emp.apvDate}</span>}
										</>
									) :
										<>
											<button className='apvBtn2' onClick={() => handleApprove(index)}>승인</button>
											<button className='apvBtn2' onClick={() => handleReject(index)}>반려</button>
										</>
								) : (
									<>
										{emp.apvDate && <span>{emp.apvDate}</span>}
									</>
								)
							) : <>
								
							</>}
						</div>
					</div>
				))}

			</div>
		);
	};
}
export default ApvSummitLine;


