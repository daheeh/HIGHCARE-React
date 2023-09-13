import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalExp.css';
import '../Approval.css';
import { callApvExp1API, callApvUpdateAPI } from '../../../apis/ApprovalAPICalls';
import ApvFileList from '../ApvFileList';
import { handleSubmission } from '../ApvSubmit';
import { RESET_APPROVAL } from '../../../modules/ApprovalModule';

function Exp1({ mode, data }) {

	const dispatch = useDispatch();
	dispatch({ type: RESET_APPROVAL });

	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const location = useLocation();
	const initialData = location.state ? location.state.initialData : null;

	const navigate = useNavigate();

	const approval = useSelector(state => state.approval);

	console.log('Exp1 first : ', approval.data);

	const [formCount, setFormCount] = useState(0);
	const [formData, setFormData] = useState({

		apvNo: approval.apvNo ? approval.apvNo : '',
		title: '지출결의서',
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
		apvExpForms: [{
			requestDate: approval.requestDate ? approval.requestDate : '',
			payee: approval.payee ? approval.payee : '',
			bank: approval.bank ? approval.bank : '',
			accountHolder: approval.accountHolder ? approval.accountHolder : '',
			accountNumber: approval.accountNumber ? approval.accountNumber : '',
			details: approval.details ? approval.details : '',
			account: approval.account ? approval.account : '',
			amount: approval.amount ? approval.amount : 0,
			comment: approval.comment ? approval.comment : '',
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
		const newAmounts = formData.apvExpForms.map(form => parseFloat(form.amount || 0));
		setAmounts(newAmounts);
	}, [formData.apvExpForms]);


	const [sharedProperties, setSharedProperties] = useState({
		requestDate: approval.requestDate ? approval.requestDate : new Date(),
		payee: approval.payee ? approval.payee : '',
		bank: approval.bank ? approval.bank : '',
		accountHolder: approval.accountHolder ? approval.accountHolder : '',
		accountNumber: approval.accountNumber ? approval.accountNumber : '',
	});

	const [totalAmount, setTotalAmount] = useState(0);

	// 각 입력 필드의 변경에 따라 totalAmount를 업데이트하는 함수 정의
	const updateTotalAmount = () => {
		const newTotalAmount = formData.apvExpForms.reduce((sum, form) => {
			return sum + parseFloat(form.amount || 0);
		}, 0);

		// setFormData((prevFormData) => ({
		// 	...prevFormData,
		// 	totalAmount: newTotalAmount,
		// }));

		// totalAmount 상태 변수 업데이트
		setTotalAmount(newTotalAmount);
	};

	const onChangeHandler = (e, index) => {
		const { name, value } = e.target;
		const nameParts = name.split('.');

		if (nameParts[0] === 'apvExpForms') {
			const field = nameParts[2];
			setFormData((prevFormData) => {
				const updatedFormData = { ...prevFormData };
				updatedFormData.apvExpForms[index][field] = value;
				return updatedFormData;
			});
		} else if (nameParts[0] === 'sharedProperties') {
			if (name === 'sharedProperties.requestDate') {
				const currentDate = new Date().toISOString().split('T')[0];
				if (value < currentDate) {
					window.alert('지급요청일자는 현재일자보다 빠를 수 없습니다.');
					setSharedProperties((prevSharedProps) => ({
						...prevSharedProps,
						requestDate: currentDate,
					}));
					return;
				}
			}

			const field = nameParts[1];
			setSharedProperties((prevSharedProps) => ({
				...prevSharedProps,
				[field]: value,
			}));
		} else {

			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value,
			}));
		}

		const updatedAmounts = [...amounts];
		updatedAmounts[index] = parseFloat(value || 0);
		setAmounts(updatedAmounts);

		const newTotalAmount = updatedAmounts.reduce((sum, amount) => sum + amount, 0);
		setTotalAmount(newTotalAmount);
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
		console.log('Exp1 - selectedEmployees : ', selectedEmployees);
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
		// 이전 라인의 sharedProperties 값을 복사하여 새로운 라인에 적용
		const newLine = {
			...formData.apvExpForms[0],
			details: '',
			account: '',
			amount: '',
			comment: '',
		};
		setFormData(prevFormData => ({
			...prevFormData,
			apvExpForms: [...prevFormData.apvExpForms, newLine]
		}));
		setAmounts(prevAmounts => [...prevAmounts, 0]);
	};

	const handleRemoveForm = () => {
		if (formCount > 0) {
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


	const renderApvExpForm = () => {
		return (
			<>
				{formData?.apvExpForms.map((form, index) => (
					<div className="apvContentDetailExp1Content" key={index}>
						<div className="apvContentDetailExp1List">
							<div className="column21">
								<input
									className="input1"
									name={`apvExpForms.${index}.details`}
									value={form.details || ''}
									onChange={e => onChangeHandler(e, index)}
								/>
							</div>
							<div className="column22">
								<input
									className="input1"
									name={`apvExpForms.${index}.account`}
									value={form.account || ''}
									onChange={e => onChangeHandler(e, index)}
								/>
							</div>
							<div className="column23">
								<input
									className="input1"
									type="number"
									name={`apvExpForms.${index}.amount`}
									value={form.amount || ''}
									onChange={e => onChangeHandler(e, index)}
								/>
							</div>
							<div className="column24">
								<input
									className="input1"
									name={`apvExpForms.${index}.comment`}
									value={form.comment || ''}
									onChange={e => onChangeHandler(e, index)}
								/>
							</div>
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

	const APIPoint = isEditMode ? callApvUpdateAPI : callApvExp1API;

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
	console.log('Exp1 formData : ', formData);

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
					<div className="apvApvTitle">지출결의서(단건)</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						refSelectedEmployees={refSelectedEmployees}
						authes={authes}
						data={formData}
					/>
					<div className="apvContent">
						<div className="apvContentTitleExp1">
							<div className="column1">지급요청일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="sharedProperties.requestDate"
									value={formData.apvExpForms[0].requestDate} onChange={onChangeHandler} />
							</div>
							<div className="column3">지급처</div>
							<div className="column4">
								<input className="input1" placeholder="지급처 입력"
									name='sharedProperties.payee' value={formData.apvExpForms[0].payee} onChange={onChangeHandler} />
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
							{renderApvExpForm(formData)}
						</div>
						<div className="apvContentDetailExp1Total">
							<div className="column31">합계</div>
							<div className="column32"><div name='totalAmount' value={formData.totalAmount}>{totalAmount}</div></div>
						</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">예금주</div>
							<div className="column42">
								<input className="input1" placeholder="예금주 입력"
									name='sharedProperties.accountHolder' value={formData.apvExpForms[0].accountHolder} onChange={onChangeHandler} />
							</div>
							<div className="column43">은행</div>
							<div className="column44">
								<input className="input1" placeholder="은행 입력"
									name='sharedProperties.bank' value={formData.apvExpForms[0].bank} onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">계좌번호</div>
							<div className="column46">
								<input className="input1" placeholder="계좌번호 입력"
									name='sharedProperties.accountNumber' value={formData.apvExpForms[0].accountNumber} onChange={onChangeHandler} />
							</div>
						</div>

						<div className="apvContentDetail3">위와 같이 지급을 요청합니다.</div>
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

export default Exp1;
