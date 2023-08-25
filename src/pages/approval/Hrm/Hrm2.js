import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline';
import './ApprovalHrm.css';
import '../Approval.css';
import { callApvHrm1API } from '../../../apis/ApprovalAPICalls';

function Hrm2() {
	// state.members.empNo > state.auths.empNo 변경하기
	const members = useSelector(state => state.members);
	const empNo = members.empNo;
	console.log("empNo : ", empNo);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const hrm2 = useSelector(state => state.approvalReducer);

	console.log('hrm2 first : ', hrm2);

	const [formData, setFormData] = useState({

		title: '기타휴가신청서',
		writeDate: '',
		apvStatus: '결재진행중',
		isUrgency: 'F',
		category: '인사',
		empNo: members.empNo,
		apvVacations: [{
			startDate: '',
			endDate: '',
			type: '',
			comment: '',
			amount: 0,
			offType1: '',
			offType2: '',
		}],
	});

	const onSelectDateHandler = (selectedDate, field) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			apvVacations: [{
				...prevFormData.apvVacations[0],
				[field]: selectedDate,
			}],
		}));
	};

	const [dateRange, setDateRange] = useState("");

	useEffect(() => {
		if (formData.apvVacations[0].startDate && formData.apvVacations[0].endDate) {
			const formattedStartDate = new Date(formData.apvVacations[0].startDate).toLocaleDateString();
			const formattedEndDate = new Date(formData.apvVacations[0].endDate).toLocaleDateString();
			setDateRange(`${formattedStartDate} ~ ${formattedEndDate}`);
		}
	}, [formData.apvVacations[0].startDate, formData.apvVacations[0].endDate]);


	useEffect(() => {
		if (formData.apvVacations[0].startDate && formData.apvVacations[0].endDate) {

			console.log('formData.apvVacations[0].startDate && formData.apvVacations[0].endDate');
			let startDate = new Date(formData.apvVacations[0].startDate);
			let endDate = new Date(formData.apvVacations[0].endDate);
			let offType1 = formData.apvVacations[0].offType1;
			let offType2 = formData.apvVacations[0].offType2;


			if (endDate < startDate) {
				alert("종료일자는 시작일자보다 빠를 수 없습니다");
				endDate = startDate;
				offType2 = offType1;
				setFormData((prevFormData) => ({
					...prevFormData,
					apvVacations: [{
						...prevFormData.apvVacations[0],
						endDate: formData.apvVacations[0].startDate.split(' ')[0],
					}],
				}));
			}

			const yearDiff = endDate.getFullYear() - startDate.getFullYear();
			const monthDiff = endDate.getMonth() - startDate.getMonth();
			const dayDiff = endDate.getDate() - startDate.getDate();

			let totalDays = yearDiff * 365 + monthDiff * 30 + dayDiff + 1;
			console.log('totalDays : ', totalDays);

			if (offType1 !== '') {
				totalDays -= 0.5;
			}

			if (offType2 !== '') {
				totalDays -= 0.5;
			}

			setFormData((prevFormData) => ({
				...prevFormData,
				apvVacations: [{
					...prevFormData.apvVacations[0],
					amount: totalDays,
				}],
			}));
		}
	}, [formData.apvVacations[0].startDate, formData.apvVacations[0].endDate, formData.apvVacations[0].offType1, formData.apvVacations[0].offType2]);




	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === 'offType1') {
			const time = e.target.checked ? value : '';
			setFormData((prevFormData) => ({
				...prevFormData,
				apvVacations: [{
					...prevFormData.apvVacations[0],
					startDate: `${prevFormData.apvVacations[0].startDate.split(' ')[0]} ${time}`,
					offType1: value,
					comment: value,
				}],
			}));
		}

		if (name === 'offType2') {
			const time = e.target.checked ? value : '';
			setFormData((prevFormData) => ({
				...prevFormData,
				apvVacations: [{
					...prevFormData.apvVacations[0],
					endDate: `${prevFormData.apvVacations[0].endDate.split(' ')[0]} ${time}`,
					offType2: value,
				}],
			}));
		}
	};


	const onCommentChangeHandler = (e) => {
		const { value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			apvVacations: [{
				...prevFormData.apvVacations[0],
				comment: value,
			}],
		}));
	};

	const onTypeChangeHandler = (e) => {
		const { value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			apvVacations: [{
				...prevFormData.apvVacations[0],
				type: value,
			}],
		}));
	};

	const handleSubmission = async () => {
		const convertedStartDate = new Date(formData.apvVacations[0].startDate).getTime();
		const convertedEndDate = new Date(formData.apvVacations[0].endDate).getTime();

		const formDataWithTimestamps = {
			...formData,
			apvVacations: [
				{
					...formData.apvVacations[0],
					startDate: convertedStartDate,
					endDate: convertedEndDate,
				}
			]
		};

		try {
			await dispatch(callApvHrm1API({ formData }));

			window.alert("결재 등록 성공");

			navigate('/approval');
		} catch (error) {
			window.alert("결재 등록 중 오류가 발생했습니다.");
		}
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

	console.log('formData : ', formData);





	return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency} />
				<div className="containerApv">
					<div className="apvApvTitle">기타휴가신청서</div>
					<ApvSummitLine />
					<div className="apvContent">
						<div className="apvContentHrm2">
							<div className="column1">휴가 종류</div>
							<select className="input2" name="type" onChange={onTypeChangeHandler}>휴가 종류
								<option>종류</option>
								<option value="경조휴가" >경조휴가</option>
								<option value="포상휴가" >포상휴가</option>
								<option value="대체휴가" >대체휴가</option>
								<option value="기타휴가" >기타휴가</option>
							</select>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">시작일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="startDate"
									value={formData.apvVacations[0].startDate.split(' ')[0]}
									onChange={(e) => onSelectDateHandler(e.target.value, 'startDate')}
								/>
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offType1" value="09:00" onChange={onChangeHandler} />오전</label>
								<label><input type="radio" name="offType1" value="14:00" onChange={onChangeHandler} />오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">종료일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="endDate"
									value={formData.apvVacations[0].endDate.split(' ')[0]}
									onChange={(e) => onSelectDateHandler(e.target.value, 'endDate')}
								/>
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offType2" value="09:00" onChange={onChangeHandler} />오전</label>
								<label><input type="radio" name="offType2" value="14:00" onChange={onChangeHandler} />오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">기간</div>
							<div className="column2">{dateRange}</div>
						</div>
						<div className="apvContentDetail">-사유-</div>
						<div className="apvContentDetailComent">
							<textarea placeholder="사유 작성" rows="20"
							value={formData.apvVacations[0].comment}
							onChange={onCommentChangeHandler}
							onBlur={onCommentChangeHandler}></textarea>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

export default Hrm2;