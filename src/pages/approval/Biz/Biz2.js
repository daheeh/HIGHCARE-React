import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import '../Approval.css';
import { callApvBiz2API, callApvUpdateAPI } from '../../../apis/ApprovalAPICalls';
import ApvFileList from '../ApvFileList';
import { handleSubmission } from '../ApvSubmit';
import { RESET_APPROVAL } from '../../../modules/ApprovalModule';

function Biz2({ mode, data }) {

	const dispatch = useDispatch();
	dispatch({ type: RESET_APPROVAL });

	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const location = useLocation();
	const initialData = location.state ? location.state.initialData : null;

	const navigate = useNavigate();

	const approval = useSelector(state => state.approval);
	console.log('Biz2 first : ', approval);

	const [formData, setFormData] = useState({
		apvNo: approval.apvNo ? approval.apvNo : '',
		title: '회의록',
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
		apvLines: approval.apvLines ? approval.apvLines : [],
		apvFiles: approval.apvFiles ? approval.apvFiles : [],
		apvMeetingLogs: [{
			meetingTitle: approval.meetingTitle ? approval.meetingTitle : '',
			meetingDate: approval.meetingDate ? approval.meetingDate : '',
			location: approval.location ? approval.location : '',
			participants: approval.participants ? approval.participants : '',
		}]
	});

	const isEditMode = formData.apvNo ? true : false;
	console.log('isEditMode 1 : ', isEditMode);

	useEffect(() => {
		if (!isEditMode) {
			dispatch({ type: RESET_APPROVAL });
		}
	}, [isEditMode, dispatch]);

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
			apvMeetingLogs: [{
				...prevFormData.apvMeetingLogs[0],
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
		console.log('Biz2 - selectedEmployees : ', selectedEmployees);
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

	const APIPoint = isEditMode ? callApvUpdateAPI : callApvBiz2API;

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
	console.log('Biz2 formData : ', formData);

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
					<div className="apvApvTitle">회의록</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						refSelectedEmployees={refSelectedEmployees}
						authes={authes}
						data={formData}
					/>
					<div className="apvContent">
						<div className="apvContentBiz2">
							<div className="column1">제목</div>
							<div className="column2">
								<input className="input2" placeholder="제목 입력"
									name='meetingTitle' value={formData.apvMeetingLogs[0].meetingTitle}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentBiz2">
							<div className="column1">회의일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="meetingDate"
									value={formData.apvMeetingLogs[0].meetingDate} onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentBiz2">
							<div className="column1">회의장소</div>
							<div className="column2">
								<input className="input2" placeholder="회의장소 입력"
									name='location' value={formData.apvMeetingLogs[0].location}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentBiz2">
							<div className="column1">참석자</div>
							<div className="column2">
								<input className="input2" placeholder="참석자 입력"
									name='participants' value={formData.apvMeetingLogs[0].participants}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentBiz2Last">
							<div className="column1">회의내용</div>
							<div><textarea placeholder="회의 내용 작성" name='contents1' className='apvTextarea'
								value={formData.contents1}
								onChange={onChangeHandler} />
							</div>
						</div>
					</div>
					<ApvFileList files={fileList} data={formData}/>
				</div>
			</div>
		</section>
	);
}

export default Biz2;