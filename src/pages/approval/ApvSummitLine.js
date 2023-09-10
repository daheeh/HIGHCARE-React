import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ApvSummitLine({ selectedEmployees, authes, mode, data, approval }) {


	const currentDate = new Date();
	const currentDateString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
	const results = useSelector(state => state.approval);
	const navigate = useNavigate();


	useEffect(() => {
		console.log('ApvSummitLine - selectedEmployees : ', selectedEmployees);
		console.log('ApvSummitLine - authes : ', authes);
		console.log('ApvSummitLine - data : ', data);
		console.log('results : ', results.data);
		console.log('approval : ', approval);


	}, [selectedEmployees, authes, data, results, approval]);


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

	const handleDelete = async (apvNo) => {
		console.log('apvNo: ', apvNo);

		try {
			const requestURL = `http://localhost:8080/api/approval/delete/${apvNo}`;
			const response = await fetch(requestURL, {
				method: 'DELETE',
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
					window.alert("결재 취소 실패");
				} else {
					window.alert("결재 취소 성공");
					navigate('/approval');
				}
			} else {
				window.alert("결재 취소 중 오류가 발생했습니다.");
			}
		} catch (error) {
			console.error("API error:", error);
			window.alert("API 요청 중 오류가 발생했습니다.");
		}
	};

	const [isEditMode, setIsEditMode] = useState(false);


	const title = results.title;


	const handleEdit = (apvNo) => {
		console.log('apvNo, :', apvNo);

		setIsEditMode(true);


		if (title) {
			console.log('title:', title);

			let action = '';
			switch (title) {
				case '회의록':
					action = `/approval/biz2`;
					break;
				case '출장신청서':
					action = `/approval/biz3`;
					break;
				case '공문':
					action = `/approval/biz4`;
					break;

				case '지출결의서':
					action = `/approval/exp1`;
					break;
				case '출장경비정산서':
					action = `/approval/exp4`;
					break;
				case '경조금신청서':
					action = `/approval/exp6`;
					break;
				case '법인카드사용보고서':
					action = `/approval/exp7`;
					break;

				case '연차신청서':
					action = `/approval/hrm1`;
					break;
				case '기타휴가신청서':
					action = `/approval/hrm2`;
					break;
				case '서류발급신청서':
					action = `/approval/hrm3`;
					break;
				default:
					action = `/approval/biz1`;
					break;
			}
			console.log('Action:', action);
			navigate(action, { state: { initialData: data, isEditMode: true } });
		} else {
			console.error(`No result found for apvNo: ${apvNo}`);
		}

	};


	if (mode === 'create') {

		return (
			(results.apvNo) ?
				<>
					<div className="apvApvLine">
						<div className="apvApvLineBox">
							<div className="row1">기안자</div>
							<div className="row2">{authes.name}  {authes.job}</div>
							<div className="row3">{authes.dept}</div>
							<div className="row4">{currentDateString}</div>
						</div>

						{selectedEmployees.slice(1, 4).map((emp, index) => (
							<div className="apvApvLineBox" key={index + 1}>
								<div className="row1">{index + 1}</div>
								<div className="row2">{emp.empName} {emp.jobName}</div>
								<div className="row3">{emp.deptName}</div>
								<div className="row4"></div>
							</div>
						))}
					</div>
				</>
				:
				<>
					<div className="apvApvLine">
						<div className="apvApvLineBox">
							<div className="row1">기안자</div>
							<div className="row2">{authes.name}  {authes.job}</div>
							<div className="row3">{authes.dept}</div>
							<div className="row4">{currentDateString}</div>
						</div>

						{selectedEmployees.slice(1, 4).map((emp, index) => (
							<div className="apvApvLineBox" key={index + 1}>
								<div className="row1">{index + 1}</div>
								<div className="row2">{emp.empName} {emp.jobName}</div>
								<div className="row3">{emp.deptName}</div>
								<div className="row4"></div>
							</div>
						))}
					</div>

				</>



		);


	} else if (mode === 'view') {

		return (
			<div className="apvApvLine">
				{selectedEmployees.map((emp, index) => (
					<div className="apvApvLineBox" key={index}>
						<div className="row1">{index === 0 ? '기안자' : index}</div>
						<div className="row2">{emp.empName} {emp.jobName}</div>
						<div className="row3">{emp.deptName}</div>
						<div className="row4">
							{index === 0 && authes.empNo === emp.empNo ? (
								<>
									{data.apvStatus !== "결재완료" || data.apvLines.length !== 1 ?
										data.apvStatus === "결재예정" || data.apvStatus === "결재반려" ? (
											<>
												<button className='apvBtn2' onClick={() => handleEdit(emp.apvNo)}>수정</button>
												<button className='apvBtn2' onClick={() => handleDelete(emp.apvNo)}>취소</button>
											</>
										) :
											<>
												{emp.apvDate && <span>{emp.apvDate}</span>}
											</>
										:
										<>
											<button className='apvBtn2' onClick={() => handleDelete(emp.apvNo)}>취소</button>
										</>}
								</>
							) : index !== 0 && authes.empNo === emp.empNo ? (
								selectedEmployees[index - 1].isApproval === 'T' ? (
									selectedEmployees[index].isApproval === 'T' ? (
										<>
											{emp.apvDate && <span>{emp.apvDate}</span>}
										</>
									) : (
										<>
											<button className='apvBtn2' onClick={() => handleApprove(index)}>승인</button>
											<button className='apvBtn2' onClick={() => handleReject(index)}>반려</button>
										</>
									)
								) : (
									<>
										{emp.apvDate && <span>{emp.apvDate}</span>}
									</>
								)
							) : <>
								{emp.apvDate && <span>{emp.apvDate}</span>}
							</>}
						</div>
					</div>
				))}
			</div>
		);

	};
}
export default ApvSummitLine;


