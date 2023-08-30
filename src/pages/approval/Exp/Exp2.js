import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine'; 
import './ApprovalExp.css';
import '../Approval.css';
import { callApvExp2API } from '../../../apis/ApprovalAPICalls';


function Exp2() {

	
	const authes = useSelector(state => state.authes);
	const empNo = authes.empNo;
	console.log("empNo : ", empNo);

	const [formCount, setFormCount] = useState(1);
    const dispatch = useDispatch();
	const navigate = useNavigate();
    const exp2 = useSelector(state => state.approvalReducer);

	console.log('exp2 first : ', exp2);

	const [formData, setFormData] = useState({

		title: '지출결의서',
		writeDate:'',
		apvStatus:'결재예정',
		isUrgency: 'F',
		category: '지출',
		empNo: empNo,
		apvExpForms:[{
			requestDate : '',
			payee: '',
			bank: '',
			accountHolder: '',
			accountNumber: '',
			details: '',
			account: '',
			amount: '',
			comment: ''
		}]
	});	

	const [amounts, setAmounts] = useState([0]);


    useEffect(() => {
        const newAmounts = formData.apvExpForms.map(form => parseFloat(form.amount || 0));
        setAmounts(newAmounts);
    }, [formData.apvExpForms]);


	console.log('formData.apvExpForms : ', formData.apvExpForms);

	const [sharedProperties, setSharedProperties] = useState({
    	requestDate: ''
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

	const updateIsUrgency = (newIsUrgency) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            isUrgency: newIsUrgency
        }));
    };

	useEffect(() => {
        const currentDate = new Date();
        setFormData(prevFormData => ({
            ...prevFormData,
            writeDate: currentDate
        }));
    }, []);


	const handleAddForm = () => {
		setFormCount(prevCount => prevCount + 1);
		setFormData(prevFormData => ({
			...prevFormData,
			apvExpForms: [
				...prevFormData.apvExpForms,
				{
					...prevFormData.apvExpForms[0],
					payee: '',
					bank: '',
					accountHolder: '',
					accountNumber: '',
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
				const response = await dispatch(callApvExp2API({ formData }));

				if (response.status === 200) {
					window.alert("결재 등록 성공");
					navigate('/approval');
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
				<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency}/>
				<div className="containerApv">
					<div className="apvApvTitle">지출결의서(다건)</div>
					<ApvSummitLine />	
					<div className="apvContent">
						<div className="apvContentTitleExp1">
						<div className="column1">지급요청일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
								name="sharedProperties.requestDate"
								value={sharedProperties.requestDate} onChange={onChangeHandler}/>
							</div>
							<div className="column3">총 합계</div>
							<div className="column4">{totalAmount}</div>
						</div>
						<div className="apvContentDetail2">- 1 -</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">예금주</div>
							<div className="column42">
							<input className="input1" placeholder="예금주 입력"
								name='sharedProperties.accountHolder' value={sharedProperties.accountHolder} onChange={onChangeHandler}/>
							</div>
							<div className="column43">지급처</div>
							<div className="column44">
							<input className="input1" placeholder="지급처 입력"
								name='sharedProperties.payee' value={sharedProperties.payee} onChange={onChangeHandler}/>
							</div>
						</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">계좌번호</div>
							<div className="column42">
							<input className="input1" placeholder="계좌번호 입력"
								name='sharedProperties.accountNumber' value={sharedProperties.accountNumber} onChange={onChangeHandler}/>
							</div>
							<div className="column43">은행</div>
							<div className="column44">
							<input className="input1" placeholder="은행 입력"
								name='sharedProperties.bank' value={sharedProperties.bank} onChange={onChangeHandler}/>
							</div>
						</div>
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
						<div className="apvContentDetailExp1Total2">
							<div className="column31">합계</div>
							<div className="column32">{totalAmount}</div>
						</div>
						<div className="apvContentDetail3">위와 같이 지급을 요청합니다.</div>
					</div>
					<div>
						<div className='apvLineCount'>
							<button onClick={handleAddForm}>라인추가</button>
							<button onClick={handleRemoveForm}>라인삭제</button>
						</div>
					</div>
				</div>
			</div>
		</section>

    );
}

export default Exp2;
