import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalHrm.css';
import '../Approval.css';
import { callApvHrm3API, callApvHrm3UpdateAPI } from '../../../apis/ApprovalAPICalls';

function Hrm3({ mode, data }) {
	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const approval = useSelector(state => state.approval);

	const isEditMode = approval.apvLines ? true : false;
	console.log('isEditMode 1 : ', isEditMode);


	console.log('Hrm3 first : ', approval.data);

	const [formData, setFormData] = useState({

		apvNo: approval.apvNo ? approval.apvNo : '',
		title: '서류발급신청서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '인사',
		empNo: empNo,
		empName: authes.name,
		deptName: authes.dept,
		jobName: authes.job,
		apvLines: approval.apvLines ? approval.apvLines : [],
		apvIssuances: [{
			type: approval.type ? approval.type : '',
			subType: approval.type ? approval.type : '',
			submission: approval.submission ? approval.submission : '',
			uses: approval.uses ? approval.uses : '',
			requests: approval.requests ? approval.requests : '',
		}],
	});

	const location = useLocation();
	const initialData = location.state ? location.state.initialData : null;

	const onTypeChangeHandler = (e) => {
		const { value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			apvIssuances: [{
				...prevFormData.apvIssuances[0],
				type: value,
			}],
		}));
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			apvIssuances: [{
				...prevFormData.apvIssuances[0],
				[name]: value,
			}]
		}));

		console.log('formData : ', formData);
	}


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


	const handleSubmission = async () => {

		if (empNo !== undefined) {
			try {
				let response;
				if ((isEditMode)) {
					// response = await dispatch(callApvHrm3UpdateAPI({ formData, selectedEmployees }));
				} else {

					response = await dispatch(callApvHrm3API({ formData, selectedEmployees }));
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
					<div className="apvApvTitle">서류발급신청서</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						authes={authes}
						approval={approval}
					/>
					<div className="apvContent">
						<div className="apvContentHrm2">
							<div className="column1">서류 종류</div>
							<select className="input2" name="type" onChange={onTypeChangeHandler}>
								<option>종류</option>
								<option value="재직증명서">재직증명서</option>
								<option value="경력증명서">경력증명서</option>
								<option value="기타">기타</option>
							</select>
							<div className="column2">
								<input className="input1" placeholder="기타서류명 입력"
									name='subType' value={formData.apvIssuances[0].subType}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">제출처</div>
							<div className="column2">
								<input className="input1" placeholder="제출처 입력"
									name='submission' value={formData.apvIssuances[0].submission}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">용도</div>
							<div className="column2">
								<input className="input1" placeholder="용도 입력"
									name='uses' value={formData.apvIssuances[0].uses}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">요청사항</div>
							<div className="column2">
								<input className="input1" placeholder="요청사항 입력"
									name='requests' value={formData.apvIssuances[0].requests}
									onChange={onChangeHandler} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
}

export default Hrm3;
