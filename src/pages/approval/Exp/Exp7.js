import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalExp.css';
import '../Approval.css';
import { callApvExp7API } from '../../../apis/ApprovalAPICalls';

function Exp7({ mode, data }) {
	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const approval = useSelector(state => state.approval);

	const isEditMode = approval.apvLines ? true : false;
	console.log('isEditMode 1 : ', isEditMode);
	console.log('Exp7 first : ', approval.data);

	const [formCount, setFormCount] = useState(1);
	const [formData, setFormData] = useState({

		apvNo: approval.apvNo?approval.apvNo:'',
		title: '법인카드사용보고서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '지출',
		empNo: empNo,
		empName: authes.name,
		deptName: authes.dept,
		jobName: authes.job,
		apvLines: approval.apvLines ? approval.apvLines : [],
		apvCorpCards: [{
			cardNo: approval.cardNo ? approval.cardNo : '',
			paymentMonth: approval.details ? approval.details : '',
			details: approval.details ? approval.details : '',
			account: approval.account ? approval.account : '',
			amount: approval.amount ? approval.amount : 0,
			cardComment: approval.cardComment ? approval.cardComment : '',
		}]
	});

	const location = useLocation();
	const initialData = location.state ? location.state.initialData : null;
	const [amounts, setAmounts] = useState([0]);

	useEffect(() => {
		const newAmounts = formData.apvCorpCards.map(form => parseFloat(form.amount || 0));
		setAmounts(newAmounts);
	}, [formData.apvCorpCards]);



	const [sharedProperties, setSharedProperties] = useState({
		amount: approval.amount ? approval.amount : 0,
		paymentMonth: approval.details ? approval.details : '',
	});

	const onChangeHandler = (e, index) => {
		const { name, value } = e.target;
		const nameParts = name.split('.');

		if (nameParts[0] === 'apvCorpCards') {
			const field = nameParts[2];
			const updatedFormData = { ...formData };
			updatedFormData.apvCorpCards[index][field] = value;
			setFormData(updatedFormData);
		} else if (nameParts[0] === 'sharedProperties') {

			if (name === 'sharedProperties.requestDate') {
				const currentDate = new Date().toISOString().split('T')[0];
				if (value < currentDate) {
					window.alert('지급요청일자는 현재일자보다 빠를 수 없습니다.');
					setSharedProperties(prevSharedProps => ({
						...prevSharedProps,
						requestDate: currentDate
					}));
					return;
				}
			}

			const field = nameParts[1];
			const updatedSharedProperties = {
				...sharedProperties,
				[field]: value
			};

			setSharedProperties(updatedSharedProperties);
			setFormData(prevFormData => ({
				...prevFormData,
				apvCorpCards: prevFormData.apvCorpCards.map((form, i) => ({
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
			apvCorpCards: [
				...prevFormData.apvCorpCards,
				{
					...prevFormData.apvCorpCards[0],
					details: '',
					account: '',
					amount: '',
					cardComment: '',
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
				const updatedapvCorpCards = [...prevFormData.apvCorpCards];
				updatedapvCorpCards.pop();
				return {
					...prevFormData,
					apvCorpCards: updatedapvCorpCards
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
						name={`apvCorpCards.${index}.details`}
						onChange={e => onChangeHandler(e, index)}
					/>
				</div>
				<div className="column22">
					<input
						className="input1"
						name={`apvCorpCards.${index}.account`}
						onChange={e => onChangeHandler(e, index)}
					/>
				</div>
				<div className="column23">
					<input
						className="input1"
						type="number"
						name={`apvCorpCards.${index}.amount`}
						value={formData.apvCorpCards[index].amount || ''}
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
						name={`apvCorpCards.${index}.cardComment`}
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
					// response = await dispatch(callApvExp7UpdateAPI({ formData, selectedEmployees }));
				} else {

					response = await dispatch(callApvExp7API({ formData, selectedEmployees }));
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
					<div className="apvApvTitle">법인카드사용보고서</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						authes={authes}
						approval={approval}
					/>
					<div className="apvContent">
						<div className="apvContentTitleExp1">
							<div className="column1">카드번호</div>
							<div className="column2">
								<input className="input1" placeholder="카드번호 입력"
									name='sharedProperties.cardNo' value={sharedProperties.cardNo} onChange={onChangeHandler} />
							</div>
							<div className="column3">결제월</div>
							<div className="column4">
								<select className="input1" name='sharedProperties.paymentMonth' onChange={onChangeHandler}>
									<option value="">선택</option>
									<option value="1">1월</option>
									<option value="2">2월</option>
									<option value="3">3월</option>
									<option value="4">4월</option>
									<option value="5">5월</option>
									<option value="6">6월</option>
									<option value="7">7월</option>
									<option value="8">8월</option>
									<option value="9">9월</option>
									<option value="10">10월</option>
									<option value="11">11월</option>
									<option value="12">12월</option>
								</select>
							</div>
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
								renderApvExpForm(formData.apvCorpCards[index] || {}, index)
							)}
						</div>
						<div className="apvContentDetailExp1Total">
							<div className="column31">합계</div>
							<div className="column32">{totalAmount}</div>
						</div>
						<div className="apvContentDetail3">위와 같이 법인카드 사용내역을 보고합니다.</div>
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

export default Exp7;

