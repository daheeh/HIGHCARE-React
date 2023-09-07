import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalHrm.css';
import '../Approval.css';
import { callApvHrm1API, callApvHrm1UpdateAPI } from '../../../apis/ApprovalAPICalls';

function Hrm2({ mode, data }) {
	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const approval = useSelector(state => state.approval);

	const isEditMode = approval.apvLines? true : false;
	console.log('isEditMode 1 : ', isEditMode);

	console.log('hrm2 first : ', approval.data);

	const [formData, setFormData] = useState({
		
		apvNo: approval.apvNo?approval.apvNo:'',
		title: '기타휴가신청서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '인사',
		empNo: empNo,
		empName: authes.name,
		deptName: authes.dept,
		jobName: authes.job,
		apvLines: approval.apvLines?approval.apvLines: [],
		apvVacations: [{
			startDate: approval.startDate? approval.startDate : '',
			endDate: approval.endDate? approval.endDate : '',
			type: approval.type? approval.type : '',
			comment: approval.comment? approval.comment : '',
			amount: approval.amount? approval.amount : 0.0,
			offType1: approval.offType1? approval.offType1 : '',
			offType2: approval.offType2? approval.offType2 : '',
		}],
	});
	
	const location = useLocation();
	const initialData = location.state ? location.state.initialData : null;

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

	useEffect(() => {
		const currentDate = new Date();
		setFormData(prevFormData => ({
			...prevFormData,
			writeDate: currentDate,
			...(initialData ? initialData : {}),
		}));
	}, [initialData]);

	const updateIsUrgency = (newIsUrgency) => {
		setFormData(prevFormData => ({
			...prevFormData,
			isUrgency: newIsUrgency
		}));
	};
	

	const initialSelectedEmployees = [{
        degree: 0,
        isApproval: 'T',
        apvDate: new Date(),
        empNo: authes.empNo,
        empName: authes.name,
        jobName: authes.job,
        deptName: authes.dept,
    }];

    const [selectedEmployees, setSelectedEmployees] = useState(initialSelectedEmployees);

    useEffect(() => {
		console.log('Hrm1 - selectedEmployees : ', selectedEmployees);
		if (approval.apvLines) {
			const initialSelectedEmployees = approval.apvLines.map((line, index) => ({
				...line,
				isApproval: 'F',
				apvLineNo: line.apvLineNo,
			}));
	
			setSelectedEmployees(initialSelectedEmployees);
		}
	}, [approval, setSelectedEmployees]);

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

	console.log('formData : ', formData);


	const handleSubmission = async () => {

        if (empNo !== undefined) {
            try {
                let response;
                if ((isEditMode)) {
                    response = await dispatch(callApvHrm1UpdateAPI({ formData, selectedEmployees }));
                } else {
				
                    response = await dispatch(callApvHrm1API({ formData, selectedEmployees }));
                }
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

	console.log('formData : ', formData);

	return (

		<section>
			<ApvMenu />
			<div>
			<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency} setSelectedEmployees={setSelectedEmployees} />
				<div className="containerApv">
					<div className="apvApvTitle">기타휴가신청서</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						authes={authes}
						approval={approval}
					/>
					<div className="apvContent">
						<div className="apvContentHrm2">
							<div className="column1">휴가 종류</div>
							<select className="input2" name="type" onChange={onTypeChangeHandler}>휴가 종류
								<option>종류</option>
								<option value="경조휴가">경조휴가</option>
								<option value="포상휴가">포상휴가</option>
								<option value="대체휴가">대체휴가</option>
								<option value="기타휴가">기타휴가</option>
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