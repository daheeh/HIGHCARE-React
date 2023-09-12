import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvBiz4API, callApvUpdateAPI } from '../../../apis/ApprovalAPICalls';
import { GET_PM_MEMBER } from '../../../modules/PmMemberModule';
import ApvFileList from '../ApvFileList';
import { handleSubmission } from '../ApvSubmit';
import { RESET_APPROVAL } from '../../../modules/ApprovalModule';
import Biz4Offcial from './Biz4Offcial';

const modalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		width: '1600px',
		height: '1000px',
		maxHeight: '70vh',
		overflow: 'auto',
	},
};

function Biz4({ mode, data }) {

	const dispatch = useDispatch();
	dispatch({ type: RESET_APPROVAL });

	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const location = useLocation();
	const initialData = location.state ? location.state.initialData : null;

	const navigate = useNavigate();

	const approval = useSelector(state => state.approval);

	console.log('Biz4 first : ', approval.data);
	const [empData, setEmpData] = useState([]);

	useEffect(() => {
		const fetchRequest = async () => {
			try {
				const requestURL = `http://localhost:8080/api/pm/member/detail/${empNo}`;

				const result = await fetch(requestURL, {
					method: "GET",
					headers: {
						"Accept": "*/*",
						"Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
						'Content-Type': 'application/json',
						"Access-Control-Allow-Origin": "*",
					},
				}).then(response => response.json());

				console.log('[ApprovalAPICalls] Biz4 callApvBiz4ViewAPI RESULT : ', result.data);

				dispatch({ type: GET_PM_MEMBER, payload: result.data });
				console.log('신청서 조회 결과: ', result.data);
				setEmpData(result.data);
				console.log('empData: ', empData);

			} catch (error) {
				console.error('[ApprovalAPICalls] Biz4 Error in callApvBiz4ViewAPI: ', error);
				throw error;
			}
		};

		fetchRequest(); // useEffect 내부에서 fetchRequest를 호출
	}, [empNo, dispatch]);



	const [formData, setFormData] = useState({

		apvNo: approval.apvNo ? approval.apvNo : '',
		title: '공문',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '업무',
		contents1: approval.contents1 ? approval.contents1 : '',
		contents2: approval.contents2 ? approval.contents2 : '',
		empNo: empNo,
		empName: authes.name,
		deptName: authes.dept,
		jobName: authes.job,
		empPhone: '',
		empEmail: '',
		apvLines: approval.apvLines ? approval.apvLines : [],
		apvFiles: approval.apvFiles ? approval.apvFiles : [],
		apvOfficials: [{
			officialTitle: '',
			reception: '',
		}]
	});

	const isEditMode = formData.apvNo ? true : false;
	console.log('isEditMode 1 : ', isEditMode);

	useEffect(() => {
		if (!isEditMode) {
			dispatch({ type: RESET_APPROVAL });
		}
	}, [isEditMode, dispatch]);

	useEffect(() => {
		setFormData(prevFormData => ({
			...prevFormData,
			empPhone: empData.phone,
			empEmail: empData.empEmail,
		}))
		console.log("empData.phone", empData.phone);
		console.log("empData.empEmail", empData.empEmail);
	}, [empData])

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
			apvOfficials: [{
				...prevFormData.apvOfficials[0],
				[name]: value,
			}]
		}));
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
		console.log('Biz4 - selectedEmployees : ', selectedEmployees);
		if (approval.apvLines) {
			const initialSelectedEmployees = approval.apvLines.map((line, index) => ({
				...line,
				isApproval: 'F',
				apvLineNo: line.apvLineNo,
			}));

			setSelectedEmployees(initialSelectedEmployees);
		}
	}, [approval]);

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


	// 미리보기 모달창
	const [isPreviewOpen, setPreviewOpen] = useState(false);
	const handlePreviewClick = () => {
		setPreviewOpen(true);

	};
	const handleModalClose = () => {
		setPreviewOpen(false);
	};


	const APIPoint = isEditMode ? callApvUpdateAPI : callApvBiz4API;

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
	console.log('Biz4 formData : ', formData);


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
					<div className="apvApvTitle">공문</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						refSelectedEmployees={refSelectedEmployees}
						authes={authes}
						data={formData}
					/>
					<button className='apvBtn3' onClick={handlePreviewClick}>미리보기</button>
					<Modal
						isOpen={isPreviewOpen}
						onClose={() => setPreviewOpen(false)}
						formData={formData}
						selectedEmployees={selectedEmployees}
						refSelectedEmployees={refSelectedEmployees}
						style={modalStyles}>
						<Biz4Offcial formData={formData} mode='preView' />

						<button className="apvBtn2" onClick={handleModalClose}>닫기</button>
					</Modal>
					<div className="apvContent">
						<div className="apvContentTitle">
							<div className="column1">제목</div>
							<div className="column2">
								<input className="input2" placeholder="제목 입력"
									name='officialTitle' value={formData.apvOfficials[0].officialTitle}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitle">
							<div className="column1">수신처</div>
							<div className="column2">
								<input className="input2" placeholder="수신처 입력"
									name='reception' value={formData.apvOfficials[0].reception}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentDetail">상세내용</div>
						<div className="apvContentDetailComent">
							<textarea placeholder="내용 작성" name='contents1' className='apvTextarea'
								value={formData.contents1}
								onChange={onChangeHandler} />
						</div>
						<div className="apvContentDetail2">-아래-</div>
						<div className="apvContentDetailComent2">
							<textarea placeholder="상세 내용 작성" name='contents2' className='apvTextarea'
								value={formData.contents2}
								onChange={onChangeHandler} />
						</div>
					</div>
					<ApvFileList files={fileList} data={formData} />
				</div>
			</div>
		</section>
	);
}

export default Biz4;