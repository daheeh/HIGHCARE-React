import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalExp.css';
import '../Approval.css';
import { callApvExp7API, callApvUpdateAPI } from '../../../apis/ApprovalAPICalls';
import ApvFileList from '../ApvFileList';
import { handleSubmission } from '../ApvSubmit';
import { RESET_APPROVAL } from '../../../modules/ApprovalModule';

function Exp7({ mode, data }) {

	const dispatch = useDispatch();
	dispatch({ type: RESET_APPROVAL });

	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const location = useLocation();
	const initialData = location.state ? location.state.initialData : null;

	const navigate = useNavigate();

	const approval = useSelector(state => state.approval);
	console.log('Exp7 first : ', approval);

	const [formCount, setFormCount] = useState(1);
	const [formData, setFormData] = useState({

		apvNo: approval.apvNo ? approval.apvNo : '',
		title: '법인카드사용보고서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '지출',
		totalAmount: approval.totalAmount ? approval.totalAmount : 0,
		empNo: empNo,
		empName: authes.name,
		deptName: authes.dept,
		jobName: authes.job,
		apvLines: approval.apvLines ? approval.apvLines : [],
		apvFiles: approval.apvFiles ? approval.apvFiles : [],
		apvCorpCards: [{
			cardNo: approval.cardNo ? approval.cardNo : '',
			paymentMonth: approval.details ? approval.details : '',
			details: approval.details ? approval.details : '',
			account: approval.account ? approval.account : '',
			amount: approval.amount ? approval.amount : 0,
			cardComment: approval.cardComment ? approval.cardComment : '',
		}]
	});

	const isEditMode = formData.apvNo ? true : false;
	console.log('isEditMode 1 : ', isEditMode);

	useEffect(() => {
		if (!isEditMode) {
			dispatch({ type: RESET_APPROVAL });
		}
	}, [isEditMode, dispatch]);


	const [amounts, setAmounts] = useState([0]);

	useEffect(() => {
		const newAmounts = formData.apvCorpCards.map(form => parseFloat(form.amount || 0));
		setAmounts(newAmounts);
	}, [formData.apvCorpCards]);



	const [sharedProperties, setSharedProperties] = useState({
		amount: approval.amount ? approval.amount : 0,
		paymentMonth: approval.details ? approval.details : '',
	});

	const [totalAmount, setTotalAmount] = useState(0);

	// 각 입력 필드의 변경에 따라 totalAmount를 업데이트하는 함수 정의
	const updateTotalAmount = () => {
	  const newTotalAmount = formData.apvCorpCards.reduce((sum, form) => {
		return sum + parseFloat(form.amount || 0);
	  }, 0);

	  setFormData((prevFormData) => ({
		...prevFormData,
		totalAmount: newTotalAmount,
	  }));
  
	  // totalAmount 상태 변수 업데이트
	  setTotalAmount(newTotalAmount);
	};

	const onChangeHandler = (e, index) => {
		const { name, value } = e.target;
		const nameParts = name.split('.');

		if (nameParts[0] === 'apvCorpCards') {
			const field = nameParts[2];
			setFormData((prevFormData) => {
				const updatedFormData = { ...prevFormData };
				updatedFormData.apvCorpCards[index][field] = value;
				return updatedFormData;
			});
			updateTotalAmount();
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
			setSharedProperties((prevSharedProps) => ({
				...prevSharedProps,
				[field]: value,
			}));
			// apvExpForms 배열 내의 해당 속성 업데이트
			setFormData((prevFormData) => ({
				...prevFormData,
				apvCorpCards: prevFormData.apvCorpCards.map((form, i) => ({
					...form,
					[field]: value,
				})),
			}));
			updateTotalAmount();
		} else {
			// 다른 폼 데이터 속성 업데이트
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value,
			}));
			updateTotalAmount();
		}
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
		console.log('Exp7 - selectedEmployees : ', selectedEmployees);
		if (approval.apvLines) {
			const initialSelectedEmployees = approval.apvLines.map((line, index) => ({
				...line,
				isApproval: 'F',
				apvLineNo: line.apvLineNo,
			}));

			setSelectedEmployees(initialSelectedEmployees);
		}
	}, [approval]);


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


	const renderApvCorpCard = () => {
		return (
			<>
				{formData?.apvCorpCards.map((form, index) => (
					<div className="apvContentDetailExp1List" key={index}>
						<div className="column21">
							<input
								className="input1"
								name={`apvCorpCards.${index}.details`}
								value={form.details || ''}
								onChange={e => onChangeHandler(e, index)}
							/>
						</div>
						<div className="column22">
							<input
								className="input1"
								name={`apvCorpCards.${index}.account`}
								value={form.account || ''}
								onChange={e => onChangeHandler(e, index)}
							/>
						</div>
						<div className="column23">
							<input
								className="input1"
								type="number"
								name={`apvCorpCards.${index}.amount`}
								value={form.amount || ''}
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
								value={form.cardComment || ''}
								onChange={e => onChangeHandler(e, index)}
							/>
						</div>
					</div>
				))}
			</>
		);
	};

	const [refSelectedEmployees, setRefSelectedEmployees] = useState([]);
	const [fileList, setFileList] = useState([]);
	const handleFileUpload = (file) => {
		if (file) {
			// Create a copy of the current apvFiles array and add the new file to it
			const updatedApvFiles = [...formData.apvFiles, file];
			setFormData((prevFormData) => ({
				...prevFormData,
				apvFiles: updatedApvFiles,
			}));

			// Update the fileList state for rendering in the component
			setFileList([...fileList, file]);
			console.log('ApvSummitBar에서 업로드한 파일:', file);
		}
	};

	const updateFileList = (newFileList) => {
		setFileList(newFileList);
	};

	useEffect(() => {
		console.log('fileList : ', fileList);
	}, [fileList])

	const APIPoint = isEditMode ? callApvUpdateAPI : callApvExp7API;

	const handleSubmissionClick = () => {
		const submissionData = {
			empNo,
			isEditMode,
			formData,
			selectedEmployees,
			refSelectedEmployees,
			navigate,
			fileList,
			APIPoint,
			dispatch,
		};

		console.log('submissionData', submissionData);
		handleSubmission(null, submissionData);
	};
	console.log('Exp7 formData : ', formData);

	return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar
					onSubmit={handleSubmissionClick}
					updateIsUrgency={updateIsUrgency}
					setSelectedEmployees={setSelectedEmployees}
					setRefSelectedEmployees={setRefSelectedEmployees}
					fileList={fileList}
					updateFileList={updateFileList}
					data={formData}
				/>
				<div className="containerApv">
					<div className="apvApvTitle">법인카드사용보고서</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						refSelectedEmployees={refSelectedEmployees}
						authes={authes}
						data={formData}
					/>
					<div className="apvContent">
						<div className="apvContentTitleExp1">
							<div className="column1">카드번호</div>
							<div className="column2">
								<input className="input1" placeholder="카드번호 입력"
									name='sharedProperties.cardNo' value={formData.apvCorpCards[0].cardNo} onChange={onChangeHandler} />
							</div>
							<div className="column3">결제월</div>
							<div className="column4">
								<select className="input1" name='sharedProperties.paymentMonth'
									value={formData.apvCorpCards[0].paymentMonth} onChange={onChangeHandler}>
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
							{renderApvCorpCard(formData)}
						</div>
						<div className="apvContentDetailExp1Total">
							<div className="column31">합계</div>
							<div className="column32"><div name='totalAmount' value={formData.totalAmount}>{totalAmount}</div></div>
						</div>
						<div className="apvContentDetail3">위와 같이 법인카드 사용내역을 보고합니다.</div>
					</div>
					<div className='apvLineCount'>
						<button onClick={handleAddForm}>라인추가</button>
						<button onClick={handleRemoveForm}>라인삭제</button>
					</div>
					<ApvFileList files={fileList} data={formData} />
				</div>
			</div>
		</section>
	);
}

export default Exp7;

