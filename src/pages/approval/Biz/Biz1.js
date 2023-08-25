import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline'; 
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvBiz1API } from '../../../apis/ApprovalAPICalls';
import { async } from 'q';

function Biz1() {

    const empNo = useSelector(state => state.members.empNo);
	console.log("empNo : ", empNo);

	const [formCount, setFormCount] = useState(1);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
    const biz1 = useSelector(state => state.approvalReducer);

	console.log('biz1 first : ', biz1);

    const [formData, setFormData] = useState({

		title: '',
		writeDate:'',
		apvStatus:'결재예정',
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

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        console.log('formData : ',formData);
    }

    const handleSubmission = async() => {

		try {
			await dispatch(callApvBiz1API({ formData }));
	
			window.alert("결재 등록 성공");
	
			navigate('/approval');
		} catch (error) {
			window.alert("결재 등록 중 오류가 발생했습니다.");
		}
	};

    return (

        <section>
            <ApvMenu />
            <div>
                <ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency} />
                <div className="containerApv">
                    <div className="apvApvTitle">기안서</div>
                    <ApvSummitLine />
                    <div className="apvContent">
                        <div className="apvContentTitle">
                            <div className="column1">제목</div>
                            <div className="column2">
                                <input className="input2" placeholder="제목 입력"
                                        name='title' value={formData.title}
                                        onChange={onchangeHandler}/>
                            </div>
                        </div>
                        <div className="apvContentDetail">상세내용</div>
                        <div className="apvContentDetailComent">
                            <textarea placeholder="내용 작성" rows="9" name='contents1'
                                        value={formData.contents1}
                                        onChange={onchangeHandler}/>
                        </div>
                        <div className="apvContentDetail2">-아래-</div>
                        <div className="apvContentDetailComent2">
                            <textarea placeholder="내용 작성" rows="9" name='contents2'
                                        value={formData.contents2}
                                        onChange={onchangeHandler}/></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Biz1;
