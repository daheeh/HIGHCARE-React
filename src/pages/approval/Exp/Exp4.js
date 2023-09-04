import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalExp.css';
import '../Approval.css';
import { callApvExp4API } from '../../../apis/ApprovalAPICalls';
import { GET_APPROVAL_EXP4 } from '../../../modules/ApprovalModule';

function Exp4({ mode, data }) {
	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const approval = useSelector(state => state.approval);

	const isEditMode = approval.apvLines ? true : false;
	console.log('isEditMode 1 : ', isEditMode);
	console.log('Exp4 first : ', approval.data);

	const [resultData, setResultData] = useState([]);
	const [selectedApvNo, setSelectedApvNo] = useState(null); // 선택한 apvNo를 상태로 관리
	const [selectedInfo, setSelectedInfo] = useState(null); // 추가 정보를 상태로 관리

	useEffect(() => {
		const fetchRequest = async () => {
			try {
				const requestURL = `http://localhost:8080/api/approval/search/exp4/${empNo}`;

				const result = await fetch(requestURL, {
					method: "GET",
					headers: {
						"Accept": "*/*",
						"Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
						'Content-Type': 'application/json',
						"Access-Control-Allow-Origin": "*",
					},
				}).then(response => response.json());

				console.log('[ApprovalAPICalls] biz1 callApvBiz1ViewAPI RESULT : ', result.data);

				dispatch({ type: GET_APPROVAL_EXP4, payload: result.data });
				console.log('신청서 조회 결과: ', result.data);
				setResultData(result.data);
			} catch (error) {
				console.error('[ApprovalAPICalls] biz1 Error in callApvBiz1ViewAPI: ', error);
				throw error;
			}
		};

		fetchRequest(); // useEffect 내부에서 fetchRequest를 호출
	}, [empNo, dispatch]);

	// result.data에서 apvNo만 추출하여 배열로 만듭니다.
	const apvNoOptions = resultData.map(item => ({
		value: item.apvNo,
		label: `${item.apvNo} - ${item.purpose}`
	}));

	// 사용자가 apvNo를 선택했을 때 실행될 함수
	const handleApvNoSelect = (selectedValue) => {
		setSelectedApvNo(selectedValue);

		console.log('=== selectedValue: ', selectedValue);

		const selectedData = resultData.find(item => item.apvNo.toString() === selectedValue.toString());
		console.log('=== selectedData : ', selectedData);

		if (selectedData) {
			setSelectedInfo(selectedData);
		}
	};

	useEffect(() => {
		setFormData(prevFormData => ({
		  ...prevFormData,
		  refApvNo: selectedApvNo ? selectedApvNo : '',
		}));
	  }, [selectedApvNo]);

	console.log('-----resultData : ', resultData);
	console.log('-----apvNoOptions : ', apvNoOptions);
	console.log('-----selectedInfo : ', selectedInfo);


	const [formCount, setFormCount] = useState(1);
	const [formData, setFormData] = useState({

		title: '출장경비정산서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '지출',
		empNo: empNo,
		empName: authes.name,
		deptName: authes.dept,
		jobName: authes.job,
		apvLines: approval.apvLines ? approval.apvLines : [],
		refApvNo: selectedApvNo? selectedApvNo: '',
		apvExpForms: [{
			requestDate: approval.requestDate ? approval.requestDate : new Date(),
			payee: approval.payee ? approval.payee : authes.name,
			bank: approval.bank ? approval.bank : '',
			accountHolder: approval.accountHolder ? approval.accountHolder : '',
			accountNumber: approval.accountNumber ? approval.accountNumber : '',
			details: approval.details ? approval.details : '',
			account: approval.account ? approval.account : '',
			amount: approval.amount ? approval.amount : 0,
			comment: approval.comment ? approval.comment : '',
		}]
	});

	const location = useLocation();
	const initialData = location.state ? location.state.initialData : null;

	const [amounts, setAmounts] = useState([0]);

	useEffect(() => {
		const newAmounts = formData.apvExpForms.map(form => parseFloat(form.amount || 0));
		setAmounts(newAmounts);
	}, [formData.apvExpForms]);



	const [sharedProperties, setSharedProperties] = useState({
		requestDate: approval.requestDate ? approval.requestDate : new Date(),
		payee: approval.payee ? approval.payee : authes.name,
		bank: approval.bank ? approval.bank : '',
		accountHolder: approval.accountHolder ? approval.accountHolder : '',
		accountNumber: approval.accountNumber ? approval.accountNumber : '',
	});

	const onChangeHandler = (e, index) => {
		const { name, value } = e.target;
		const nameParts = name.split('.');

		if (nameParts[0] === 'apvExpForms') {
			const field = nameParts[2];
			const updatedFormData = { ...formData };
			updatedFormData.apvExpForms[index][field] = value;
			setFormData(updatedFormData);
		} else if (nameParts[0] === 'sharedProperties') {

			const field = nameParts[1];
			const updatedSharedProperties = {
				...sharedProperties,
				[field]: value
			};

			setSharedProperties(updatedSharedProperties);
			setFormData(prevFormData => ({
				...prevFormData,
				apvExpForms: prevFormData.apvExpForms.map((form, i) => ({
					...form,
					...updatedSharedProperties
				}))
			}));
		} else {


			setFormData(prevFormData => ({
				...prevFormData,
				[name]: value
			}));
		}
	};


	const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);

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


	const handleAddForm = () => {
		setFormCount(prevCount => prevCount + 1);
		setFormData(prevFormData => ({
			...prevFormData,
			apvExpForms: [
				...prevFormData.apvExpForms,
				{
					...prevFormData.apvExpForms[0],
					details: '',
					account: '',
					amount: '',
					comment: '',
					...sharedProperties,
				}
			]
		}));
		setAmounts(prevAmounts => [...prevAmounts, 0]);
	};



	const handleRemoveForm = () => {
		if (formCount > 1) {
			setFormCount(prevCount => prevCount - 1);
			setFormData(prevFormData => {
				const updatedApvExpForms = [...prevFormData.apvExpForms];
				updatedApvExpForms.pop();
				return {
					...prevFormData,
					apvExpForms: updatedApvExpForms
				};
			});
			setAmounts(prevAmounts => {
				const updatedAmounts = [...prevAmounts];
				updatedAmounts.pop();
				return updatedAmounts;
			});
		}
	};

	const updateAmounts = (index, newAmount) => {
		setAmounts(prevAmounts => {
			const updatedAmounts = [...prevAmounts];
			updatedAmounts[index] = parseFloat(newAmount || 0);
			return updatedAmounts;
		});
	};


	const renderApvExpForm = (form, index) => {
		return (
			<div className="apvContentDetailExp1List" key={index}>
				<div className="column21">
					<input
						className="input1"
						name={`apvExpForms.${index}.details`}
						onChange={e => onChangeHandler(e, index)}
					/>
				</div>
				<div className="column22">
					<input
						className="input1"
						name={`apvExpForms.${index}.account`}
						onChange={e => onChangeHandler(e, index)}
					/>
				</div>
				<div className="column23">
					<input
						className="input1"
						type="number"
						name={`apvExpForms.${index}.amount`}
						value={formData.apvExpForms[index].amount || ''}
						onChange={e => {
							const { value } = e.target;
							updateAmounts(index, value);
							onChangeHandler(e, index);
						}}
					/>
				</div>
				<div className="column24">
					<input
						className="input1"
						name={`apvExpForms.${index}.comment`}
						onChange={e => onChangeHandler(e, index)}
					/>
				</div>
			</div>
		);
	};


	const handleSubmission = async () => {

		if (empNo !== undefined) {
			try {
				let response;
				if ((isEditMode)) {
					// response = await dispatch(callApvExp4UpdateAPI({ formData, selectedEmployees }));
				} else {

					response = await dispatch(callApvExp4API({ formData, selectedEmployees }));
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
					<div className="apvApvTitle">출장경비정산서</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						authes={authes}
						approval={approval}
					/>
					<div className="apvContent">
						<div className="apvContentTitleExp1">
							<div className="column1">출장신청서 번호</div>
							<div className="column2">
								<select onChange={(e) => handleApvNoSelect(e.target.value)}>
									<option className="input1" value="">선택</option>
									{apvNoOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
							<div className="column3">출장기간</div>
							<div className="column4">
								{selectedInfo ? `${selectedInfo.startDate}~${selectedInfo.endDate}` : ''}
							</div>
						</div>
						<div className="apvContentTitleExp1">
							<div className="column1">출장지</div>
							<div className="column2">{selectedInfo ? selectedInfo.location : ''}</div>
							<div className="column3">출장인원</div>
							<div className="column4"></div>
						</div>
						<div className="apvContentDetail">내역</div>
						<div className="apvContentDetailExp1Title">
							<div className="column11">내역</div>
							<div className="column12">계정과목</div>
							<div className="column13">금액</div>
							<div className="column14">적요</div>
						</div>

						<div className="apvContentDetailExp1Content">
							{Array.from({ length: formCount }).map((_, index) =>
								renderApvExpForm(formData.apvExpForms[index] || {}, index)
							)}
						</div>
						<div className="apvContentDetailExp1Total">
							<div className="column31">합계</div>
							<div className="column32">{totalAmount}</div>
						</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">예금주</div>
							<div className="column42">
								<input className="input1" placeholder="예금주 입력"
									name='sharedProperties.accountHolder' value={sharedProperties.accountHolder} onChange={onChangeHandler} />
							</div>
							<div className="column43">은행</div>
							<div className="column44">
								<input className="input1" placeholder="은행 입력"
									name='sharedProperties.bank' value={sharedProperties.bank} onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">계좌번호</div>
							<div className="column46">
								<input className="input1" placeholder="계좌번호 입력"
									name='sharedProperties.accountNumber' value={sharedProperties.accountNumber} onChange={onChangeHandler} />
							</div>
						</div>

						<div className="apvContentDetail3">위와 같이 지급을 요청합니다.</div>
					</div>
					<div className='apvLineCount'>
						<button onClick={handleAddForm}>라인추가</button>
						<button onClick={handleRemoveForm}>라인삭제</button>
					</div>
				</div>
			</div>
		</section>


	);
}

export default Exp4;

