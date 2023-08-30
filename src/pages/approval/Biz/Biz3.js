import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvBiz3API } from '../../../apis/ApprovalAPICalls';

function Biz3() {

	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const biz3 = useSelector(state => state.approvalReducer);

	console.log('biz3 first : ', biz3);

	const [formData, setFormData] = useState({

		title: '출장신청서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '업무',
		empNo: empNo,
		contents1: '',
		apvBusinessTrips: [{
			purpose: '',
			startDate: '',
			startTime: '',
			endDate: '',
			endTime: '',
			location: '',
		}]
	});


	useEffect(() => {
		const currentDate = new Date();
		setFormData(prevFormData => ({
			...prevFormData,
			writeDate: currentDate
		}));
	}, []);

	const calculateTravelDuration = () => {
		const startDate = new Date(
			`${formData.apvBusinessTrips[0].startDate} ${formData.apvBusinessTrips[0].startTime}`
		);
		const endDate = new Date(
			`${formData.apvBusinessTrips[0].endDate} ${formData.apvBusinessTrips[0].endTime}`
		);

		const startTime = formData.apvBusinessTrips[0].startTime;
		const endTime = formData.apvBusinessTrips[0].endTime;

		const timeDiffMillis = endDate - startDate;

		if (timeDiffMillis < 0) {
			alert("종료일자 및 시간은 시작일자 및 시간보다 빠를 수 없습니다.");
			setFormData((prevFormData) => ({
				...prevFormData,
				apvBusinessTrips: [
					{
						...prevFormData.apvBusinessTrips[0],
						endDate: prevFormData.apvBusinessTrips[0].startDate,
						endTime: prevFormData.apvBusinessTrips[0].startTime,
					},
				],
			}));
			return "";
		}

		if (timeDiffMillis >= 86400000) {
			const days = Math.floor(timeDiffMillis / 86400000);
			return `${days} 박 ${days + 1} 일`;
		} else {
			const hours = Math.floor(timeDiffMillis / 3600000);
			const minutes = Math.floor((timeDiffMillis % 3600000) / 60000);
			return `${hours} 시간 ${minutes} 분`;
		}
	};

	function generateTimeOptions() {
		const options = [];
		const interval = 10;
		for (let minutes = 0; minutes < 1440; minutes += interval) {
			const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
			const mins = (minutes % 60).toString().padStart(2, '0');
			const time = `${hours}:${mins}`;
			options.push(<option key={time} value={time}>{time}</option>);
		}
		return options;
	}


	useEffect(() => {
		const currentDate = new Date();
		setFormData(prevFormData => ({
			...prevFormData,
			writeDate: currentDate,
		}));
	}, []);


	const updateIsUrgency = (newIsUrgency) => {
		setFormData(prevFormData => ({
			...prevFormData,
			isUrgency: newIsUrgency
		}));
	};

	const [selectedEmployees, setSelectedEmployees] = useState([]);

	useEffect(() => {
		console.log('Biz3 - selectedEmployees : ', selectedEmployees);
	}, [setSelectedEmployees]);

	const handleEmployeeSelect = (selectedEmployee) => {
		setSelectedEmployees((prevSelectedEmployees) => [
			...prevSelectedEmployees,
			{
				...selectedEmployee,
				isApproval: 'N',
			}
		]);
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === 'contents1') {
			setFormData((prevFormData) => ({
				...prevFormData,
				contents1: value,
			}));
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				apvBusinessTrips: [
					{
						...prevFormData.apvBusinessTrips[0],
						[name]: value,
					},
				],
			}));
		}

		console.log('Biz formData : ', formData);
	}




	const handleSubmission = async () => {

		if (empNo !== undefined) {
			try {
				const response = await dispatch(callApvBiz3API({ formData, selectedEmployees }));

				if (response.status === 200) {
					if (response.data === "기안 상신 실패") {
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
		} else {
			window.alert("재로그인 요청");
			navigate('/');
		}
	};



	return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency} setSelectedEmployees={setSelectedEmployees} />
				<div className="containerApv">
					<div className="apvApvTitle">출장신청서</div>
					<ApvSummitLine
						selectedEmployees={selectedEmployees}
						authes={authes}
					/>
					<div className="apvContent">
						<div className="apvContentTitle">
							<div className="column1">출장목적</div>
							<div className="column2">
								<input className="input1" placeholder="출장 목적 입력"
									name='purpose' value={formData.apvBusinessTrips[0].purpose}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitleBiz3">
							<div className="column1">출장기간</div>
							<div className="column2">
								<input className="input1" type="date" name="startDate"
									value={formData.apvBusinessTrips[0].startDate} onChange={onChangeHandler} />
							</div>
							<div className="column2">
								<select className="input1" name="endstartTimeTime"
									value={formData.apvBusinessTrips[0].endTistartTimeme} onChange={onChangeHandler}>
									{generateTimeOptions()}
								</select>
							</div>
							<div className="column3">~</div>
							<div className="column2">
								<input className="input1" type="date" name="endDate"
									value={formData.apvBusinessTrips[0].endDate} onChange={onChangeHandler} />
							</div>
							<div className="column2">
								<select className="input1" name="endTime"
									value={formData.apvBusinessTrips[0].endTime} onChange={onChangeHandler}>
									{generateTimeOptions()}
								</select>
							</div>
							<div className="column2">({calculateTravelDuration()})</div>
						</div>
						<div className="apvContentTitle">
							<div className="column1">출장지</div>
							<div className="column2">
								<input className="input1" placeholder="출장지 입력"
									name='location' value={formData.apvBusinessTrips[0].location}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitle">
							<div className="column1">동반자</div>
							<div className="column2">
								<input className="input1" placeholder="사번 입력" />
							</div>
						</div>
						<div className="apvContentDetail">상세내용
						</div>
						<div className="apvContentDetailComent">
							<textarea placeholder="내용 작성" rows="11" name='contents1'
								value={formData.contents1}
								onChange={onChangeHandler} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Biz3;