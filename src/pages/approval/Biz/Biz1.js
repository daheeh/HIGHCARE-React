import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvBiz1API } from '../../../apis/ApprovalAPICalls';

function Biz1({ mode }) {

    const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const biz1 = useSelector(state => state.approvalReducer);

    console.log('biz1 first : ', biz1);

    const [formData, setFormData] = useState({

        title: '',
        writeDate: '',
        apvStatus: '결재진행중',
        isUrgency: 'F',
        category: '업무',
        empNo: empNo,
        contents1: '',
        contents2: '',
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
        console.log('Biz1 - selectedEmployees : ', selectedEmployees);
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
            [name]: value,
        }));

    }
    
    const handleSubmission = async () => {
        if (empNo !== undefined) {
			try {
				const response = await dispatch(callApvBiz1API({ formData, selectedEmployees }));
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
                    <div className="apvApvTitle">기안서</div>
                    <ApvSummitLine
                        mode="create"
                        selectedEmployees={selectedEmployees}
                        authes={authes}
                    />
                    <div className="apvContent">
                        <div className="apvContentTitle">
                            <div className="column1">제목</div>
                            <div className="column2">
                                <input className="input2" placeholder="제목 입력"
                                    name='title' value={formData.title}
                                    onChange={onChangeHandler} />
                            </div>
                        </div>
                        <div className="apvContentDetail">상세내용</div>
                        <div className="apvContentDetailComent">
                            <textarea placeholder="내용 작성" rows="9" name='contents1'
                                value={formData.contents1}
                                onChange={onChangeHandler} />
                        </div>
                        <div className="apvContentDetail2">-아래-</div>
                        <div className="apvContentDetailComent2">
                            <textarea placeholder="내용 작성" rows="9" name='contents2'
                                value={formData.contents2}
                                onChange={onChangeHandler} /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Biz1;