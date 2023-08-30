import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvBiz2API } from '../../../apis/ApprovalAPICalls';

function Biz2() {

	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const biz2 = useSelector(state => state.approvalReducer);

	console.log('biz2 first : ', biz2);

	const [formData, setFormData] = useState({

		title: '회의록',
		writeDate: '',
		apvStatus: '결재진행중',
		isUrgency: 'F',
		category: '업무',
		empNo: empNo,
		contents1: '',
		apvMeetingLogs: [{
			meetingTitle: '',
			meetingDate: '',
			location: '',
			participants: '',
		}]
	});


	useEffect(() => {
		const currentDate = new Date();
		setFormData(prevFormData => ({
			...prevFormData,
			writeDate: currentDate
		}));
	}, []);

	const updateIsUrgency = (newIsUrgency) => {
		setFormData(prevFormData => ({
			...prevFormData,
			isUrgency: newIsUrgency
		}));
	};

	const [selectedEmployees, setSelectedEmployees] = useState([]);

    useEffect(() => {
        console.log('Biz2 - selectedEmployees : ', selectedEmployees);
    }, [setSelectedEmployees]);

    const handleEmployeeSelect = (selectedEmployee) => {
        setSelectedEmployees((prevSelectedEmployees) => [
            ...prevSelectedEmployees,
            {
            ...selectedEmployee,
            isApproval: 'F',
            }
        ]);
    };

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			contents1: value,
			apvMeetingLogs: [{ 
				...prevFormData.apvMeetingLogs[0],
				[name]: value,
			}]
		}));

	}
	
	const handleSubmission = async () => {
		if (empNo !== undefined) {
			try {
				const response = await dispatch(callApvBiz2API({ formData, selectedEmployees }));
	
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
	
	console.log('Biz formData : ', formData);

	return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency} setSelectedEmployees={setSelectedEmployees}/>
                <div className="containerApv">
					<div className="apvApvTitle">회의록</div>
					<ApvSummitLine
                        selectedEmployees={selectedEmployees}
                        authes={authes}
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
							<div><textarea placeholder="회의 내용 작성" rows="30" name='contents1'
								value={formData.apvMeetingLogs[0].contents1}
								onChange={onChangeHandler} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	);
}

export default Biz2;