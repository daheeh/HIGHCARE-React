import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvBiz3API } from '../../../apis/ApprovalAPICalls';
import { Link } from 'react-router-dom';

function Biz4() {

	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const biz4 = useSelector(state => state.approvalReducer);

	console.log('biz4 first : ', biz4);

	const [formData, setFormData] = useState({

		title: '공문',
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

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			apvBusinessTrips: [
				{
					...prevFormData.apvBusinessTrips[0],
					[name]: value,
				},
			],
		}));
		console.log('formData : ', formData);
	}


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
		writeDate: currentDate,
	}));
}, []);

const handleSubmission = async () => {

	if (empNo !== undefined) {
		try {
			const response = await dispatch(callApvBiz3API({ formData }));
			if (response.status === 200) {
				window.alert("결재 등록 성공");
				navigate('/approval');
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
		<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency} />
				<div className="containerApv">
				<div className="apvApvTitle">공문</div>
				<Link to="/biz4Offcial">미리보기</Link>
				<div className="apvContent">
					<div className="apvContentTitle">
						<div className="column1">제목</div>
						<div className="column2"><input className="input1" placeholder="제목 입력" /></div>
					</div>
					<div className="apvContentTitle">
						<div className="column1">수신처</div>
						<div className="column2"><input className="input1" placeholder="수신처 입력" /></div>
					</div>
					<div className="apvContentDetail">상세내용</div>
					<div className="apvContentDetailComent">
						<textarea placeholder="내용 작성" rows="9"></textarea>
					</div>
					<div className="apvContentDetail2">-아래-</div>
					<div className="apvContentDetailComent2">어쩌고저쩌고</div>
				</div>
			</div>
		</div>
	</section>
);
}

export default Biz4;