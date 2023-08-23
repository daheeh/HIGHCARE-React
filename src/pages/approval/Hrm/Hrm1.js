import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline'; 
import './ApprovalHrm.css';
import '../Approval.css';
import { callApvExp1API } from '../../../apis/ApprovalAPICalls';

function Hrm1() {
	const [formCount, setFormCount] = useState(1);
	const dispatch = useDispatch();
	
    const hrm1 = useSelector(state => state.approvalReducer);

	console.log('hrm1 first : ', hrm1);

	const [formData, setFormData] = useState({

		title: '연차신청서',
		writeDate:'',
		apvStatus:'결재예정',
		isUrgency: 'F',
		category: '인사',
		empNo: 999999,
		apvVacation:{
			startDate : null,
			endDate: null,
			type: '연차',
			comment: '',
			amount: '',
		}
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

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === 'offtype1') {
			const time = value === 'am' ? '09:00' : '14:00';
			setFormData((prevFormData) => ({
				...prevFormData,
				apvVacation: {
				...prevFormData.apvVacation,
				startDate: `${prevFormData.apvVacation.startDate.split(' ')[0]} ${time}`,
				},
			}));
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				apvVacation: {
				...prevFormData.apvVacation,
				startDate: prevFormData.apvVacation.startDate.split(' ')[0],
				endDate: prevFormData.apvVacation.endDate.split(' ')[0],
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
			<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency}/>
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
								value={formData.apvVacation.startDate}
								onChange={(e) => onSelectDateHandler(e.target.value, 'startDate')}

							/>
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offtype1" value="am"  onChange={onChangeHandler}/>오전</label>
								<label><input type="radio" name="offtype1" value="pm"  onChange={onChangeHandler}/>오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">종료일자</div>
							<div className="column2">
							<input className="input1" type="date" placeholder="날짜 입력"
								name="apvVacation.endDate" 
								value={formData.apvVacation.endDate}
								onChange={(e) => onSelectDateHandler(e.target.value, 'endDate')}

							/>
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offtype2" value="am" onChange={onChangeHandler}/>오전</label>
								<label><input type="radio" name="offtype2" value="pm" onChange={onChangeHandler}/>오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">기간</div>
							<div className="column2"></div>
						</div>
						<div className="apvContentDetail">-사유-</div>
						<div className="apvContentDetailComent"><textarea placeholder="사유 작성" rows="20"></textarea></div>
					</div>
				</div>
			</div>									
		</section>
    );
}

export default Hrm1;
