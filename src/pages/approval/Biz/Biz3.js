import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvBiz3API, callApvUpdateAPI } from '../../../apis/ApprovalAPICalls';
import ApvFileList from '../ApvFileList';
import { handleSubmission } from '../ApvSubmit';
import {RESET_APPROVAL} from '../../../modules/ApprovalModule';

function Biz3({ mode, data }) {

    const dispatch = useDispatch();

    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    console.log("empNo : ", empNo);
    
    const location = useLocation();
    const initialData = location.state ? location.state.initialData : null;
    
    const navigate = useNavigate();
    
    const approval = useSelector(state => state.approval);
    
	console.log('Biz3 first : ', approval.data);

	const [formData, setFormData] = useState({

		apvNo: approval.apvNo ? approval.apvNo : '',
		title: '출장신청서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '업무',
		contents1: '',
		empNo: empNo,
		empName: authes.name,
		deptName: authes.dept,
		jobName: authes.job,
		apvLines: approval.apvLines ? approval.apvLines : [],
		apvFiles: approval.apvFiles ? approval.apvFiles : [],
		apvBusinessTrips: [{
			purpose: approval.purpose ? approval.purpose : '',
			startDate: approval.startDate ? approval.startDate : '',
			startTime: approval.startTime ? approval.startTime : '',
			endDate: approval.endDate ? approval.endDate : '',
			endTime: approval.endTime ? approval.endTime : '',
			location: approval.location ? approval.location : '',
			tripAttendees:approval.tripAttendees ? approval.tripAttendees : '',
		}]
	});

	const isEditMode = formData.apvNo ? true : false;
    console.log('isEditMode 1 : ', isEditMode);

		useEffect(() => {
		if (!isEditMode) {
			dispatch({ type: RESET_APPROVAL });
		}
	}, [isEditMode, dispatch]);

	const calculateTravelDuration = () => {
		const startDate = new Date(
			`${formData.apvBusinessTrips[0].startDate} ${formData.apvBusinessTrips[0].startTime}`
		);
		const endDate = new Date(
			`${formData.apvBusinessTrips[0].endDate} ${formData.apvBusinessTrips[0].endTime}`
		);

		const startTime = formData.apvBusinessTrips[0].startTime;
		const endTime = formData.apvBusinessTrips[0].endTime;

		const timeDiffMillis = endDate - startDate;

		if (timeDiffMillis < 0) {
			alert("종료일자 및 시간은 시작일자 및 시간보다 빠를 수 없습니다.");
			setFormData((prevFormData) => ({
				...prevFormData,
				apvBusinessTrips: [
					{
						...prevFormData.apvBusinessTrips[0],
						endDate: prevFormData.apvBusinessTrips[0].startDate,
						endTime: prevFormData.apvBusinessTrips[0].startTime,
					},
				],
			}));
			return "";
		}

		if (timeDiffMillis >= 86400000) {
			const days = Math.floor(timeDiffMillis / 86400000);
			return `${days} 박 ${days + 1} 일`;
		} else {
			const hours = Math.floor(timeDiffMillis / 3600000);
			const minutes = Math.floor((timeDiffMillis % 3600000) / 60000);
			return `${hours} 시간 ${minutes} 분`;
		}
	};

	function generateTimeOptions() {
		const options = [];
		const interval = 10;
		for (let minutes = 0; minutes < 1440; minutes += interval) {
			const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
			const mins = (minutes % 60).toString().padStart(2, '0');
			const time = `${hours}:${mins}`;
			options.push(<option key={time} value={time}>{time}</option>);
		}
		return options;
	}

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === 'contents1') {
			setFormData((prevFormData) => ({
				...prevFormData,
				contents1: value,
			}));
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				apvBusinessTrips: [
					{
						...prevFormData.apvBusinessTrips[0],
						[name]: value,
					},
				],
			}));
		}

		console.log('Biz3 formData : ', formData);
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
		console.log('Biz3 - selectedEmployees : ', selectedEmployees);
		if (approval.apvLines) {
			const initialSelectedEmployees = approval.apvLines.map((line, index) => ({
				...line,
				isApproval: 'F',
				apvLineNo: line.apvLineNo,
			}));

			setSelectedEmployees(initialSelectedEmployees);
		}
	}, [approval, setSelectedEmployees]);


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

    const APIPoint = isEditMode ? callApvUpdateAPI : callApvBiz3API;

    const handleSubmissionClick = () => {
        const submissionData = {
            empNo,
            isEditMode,
            formData,
            selectedEmployees,
            navigate,
            fileList,
            APIPoint,
            dispatch,
        };

        console.log('submissionData', submissionData);
        handleSubmission(null, submissionData);
    };

	console.log('Biz3 formData : ', formData);

	return (
		<section>
			<ApvMenu />
			<div>
			<ApvSummitBar
                    onSubmit={handleSubmissionClick}
                    updateIsUrgency={updateIsUrgency}
                    setSelectedEmployees={setSelectedEmployees}
                    fileList={fileList}
                    updateFileList={updateFileList}
                    data={data}
                />
                <div className="containerApv">
					<div className="apvApvTitle">출장신청서</div>
					<ApvSummitLine
						mode="create"
						selectedEmployees={selectedEmployees}
						authes={authes}
						approval={approval}
					/>
					<div className="apvContent">
						<div className="apvContentTitle">
							<div className="column1">출장목적</div>
							<div className="column2">
								<input className="input1" placeholder="출장 목적 입력"
									name='purpose' value={formData.apvBusinessTrips[0].purpose}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitleBiz3">
							<div className="column1">출장기간</div>
							<div className="column2">
								<input className="input1" type="date" name="startDate"
									value={formData.apvBusinessTrips[0].startDate} onChange={onChangeHandler} />
							</div>
							<div className="column2">
								<select className="input1" name="startTime"
									value={formData.apvBusinessTrips[0].startTime} onChange={onChangeHandler}>
									{generateTimeOptions()}
								</select>
							</div>
							<div className="column3">~</div>
							<div className="column2">
								<input className="input1" type="date" name="endDate"
									value={formData.apvBusinessTrips[0].endDate} onChange={onChangeHandler} />
							</div>
							<div className="column2">
								<select className="input1" name="endTime"
									value={formData.apvBusinessTrips[0].endTime} onChange={onChangeHandler}>
									{generateTimeOptions()}
								</select>
							</div>
							<div className="column2">({calculateTravelDuration()})</div>
						</div>
						<div className="apvContentTitle">
							<div className="column1">출장지</div>
							<div className="column2">
								<input className="input1" placeholder="출장지 입력"
									name='location' value={formData.apvBusinessTrips[0].location}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitle">
							<div className="column1">동반자</div>
							<div className="column2">
								<input className="input1" placeholder="정보 입력"
								name='tripAttendees' value={formData.apvBusinessTrips[0].tripAttendees}
								onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentDetail">상세내용
						</div>
						<div className="apvContentDetailComent">
							<textarea placeholder="내용 작성" name='contents1' className='apvTextarea'
								value={formData.contents1}
								onChange={onChangeHandler} />
						</div>
					</div>
					<ApvFileList files={fileList} />
                </div>
            </div>
        </section>
    );
}

export default Biz3;