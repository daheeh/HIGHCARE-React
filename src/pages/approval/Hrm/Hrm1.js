import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline';
import './ApprovalHrm.css';
import '../Approval.css';
import { callApvExp1API } from '../../../apis/ApprovalAPICalls';

function Hrm1() {

	const dispatch = useDispatch();

	const hrm1 = useSelector(state => state.approvalReducer);

	console.log('hrm1 first : ', hrm1);

	const [formData, setFormData] = useState({

		title: '연차신청서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '인사',
		empNo: 999999,
		apvVacation: {
			startDate: '',
			endDate: '',
			type: '연차',
			comment: '',
			amount: '',
			offType1: '',
			offType2: '',
		},
		lastClickedRadio: '',
	});

	const onSelectDateHandler = (selectedDate, field) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			apvVacation: {
				...prevFormData.apvVacation,
				[field]: selectedDate,
			},
		}));
	};

	const [dateRange, setDateRange] = useState("");

	useEffect(() => {
		if (formData.apvVacation.startDate && formData.apvVacation.endDate) {
			// const formattedStartDate = new Date(formData.apvVacation.startDate);
			// const formattedEndDate = new Date(formData.apvVacation.endDate);
			const formattedStartDate = new Date(formData.apvVacation.startDate).toLocaleDateString();
			const formattedEndDate = new Date(formData.apvVacation.endDate).toLocaleDateString();
			setDateRange(`${formattedStartDate} ~ ${formattedEndDate}`);
		}
	}, [formData.apvVacation.startDate, formData.apvVacation.endDate]);

	const [usedDays, setUsedDays] = useState(0);

	useEffect(() => {
		if (formData.apvVacation.startDate && formData.apvVacation.endDate) {
			let startDate = new Date(formData.apvVacation.startDate);
			let endDate = new Date(formData.apvVacation.endDate);
	
			if (endDate < startDate) {
				alert("종료일자는 시작일자보다 빠를 수 없습니다.");
				endDate = startDate;
				setFormData((prevFormData) => ({
					...prevFormData,
					apvVacation: {
						...prevFormData.apvVacation,
						endDate: formData.apvVacation.startDate.split(' ')[0],
					},
				}));
			}
	
			const yearDiff = endDate.getFullYear() - startDate.getFullYear();
			const monthDiff = endDate.getMonth() - startDate.getMonth();
			const dayDiff = endDate.getDate() - startDate.getDate();
	
			let totalDays = yearDiff * 365 + monthDiff * 30 + dayDiff + 1;
	
			let adjustedUsedDays = totalDays;
	
			console.log("formData.apvVacation.offType1 : ", formData.apvVacation.offType1);
			if (formData.apvVacation.offType1 === "09:00" || formData.apvVacation.offType1 === "14:00") {
				adjustedUsedDays -= 0.5;
				console.log(adjustedUsedDays);
			}
	
			if (formData.apvVacation.offType2 === "09:00" || formData.apvVacation.offType2 === "14:00") {
				adjustedUsedDays -= 0.5;
			}
			console.log("adjustedUsedDays : ", adjustedUsedDays);
			setUsedDays(adjustedUsedDays);
		}
	}, [formData.apvVacation.startDate, formData.apvVacation.endDate, formData.apvVacation.offType1, formData.apvVacation.offType2]);
	


	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === 'offtype1') {
			const time = e.target.checked ? value : '';
			setFormData((prevFormData) => ({
				...prevFormData,
				apvVacation: {
					...prevFormData.apvVacation,
					startDate: `${prevFormData.apvVacation.startDate.split(' ')[0]} ${time}`,
				},
			}));
		}

		if (name === 'offtype2') {
			const time = e.target.checked ? value : '';
			setFormData((prevFormData) => ({
				...prevFormData,
				apvVacation: {
					...prevFormData.apvVacation,
					endDate: `${prevFormData.apvVacation.endDate.split(' ')[0]} ${time}`,
				},
			}));
		}
	};

	const handleSubmission = () => {
		const convertedStartDate = new Date(formData.apvVacation.startDate).getTime();
		const convertedEndDate = new Date(formData.apvVacation.endDate).getTime();

		const formDataWithTimestamps = {
			...formData,
			apvVacation: {
				...formData.apvVacation,
				startDate: convertedStartDate,
				endDate: convertedEndDate,
			},
		};

		dispatch(callApvExp1API({ formData: formDataWithTimestamps }));
	};


	const updateIsUrgency = (newIsUrgency) => {
		setFormData(prevFormData => ({
			...prevFormData,
			isUrgency: newIsUrgency
		}));
	};

	useEffect(() => {
		const currentDate = new Date();
		setFormData(prevFormData => ({
			...prevFormData,
			writeDate: currentDate
		}));
	}, []);

	console.log('formData.apvVacation : ', formData.apvVacation);
	return (
		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency} />
				<div className="containerApv">
					<div className="apvApvTitle">연차신청서</div>
					<ApvSummitLine />
					<div className="apvContent">
						<div className="apvContentHrm1">
							<div className="column1">휴가 종류</div>
							<div className="column2">연차</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">시작일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="apvVacation.startDate"
									value={formData.apvVacation.startDate.split(' ')[0]}
									onChange={(e) => onSelectDateHandler(e.target.value, 'startDate')}
								/>
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offtype1" value="09:00" onChange={onChangeHandler} />오전</label>
								<label><input type="radio" name="offtype1" value="14:00" onChange={onChangeHandler} />오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">종료일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="apvVacation.endDate"
									value={formData.apvVacation.endDate.split(' ')[0]}
									onChange={(e) => onSelectDateHandler(e.target.value, 'endDate')}
								/>
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offtype2" value="09:00" onChange={onChangeHandler} />오전</label>
								<label><input type="radio" name="offtype2" value="14:00" onChange={onChangeHandler} />오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">기간</div>
							<div className="column2">{dateRange}</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">연차 사용 개수</div>
							<div className="column2">{usedDays < 0 ? 0 : usedDays} 개</div>
						</div>
						<div className="apvContentDetail">-사유-</div>
						<div className="apvContentDetailComent">
							<textarea placeholder="연차사용" rows="20" onChange={onChangeHandler}></textarea>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hrm1;
