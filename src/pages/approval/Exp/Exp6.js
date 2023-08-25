import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitline';
import './ApprovalExp.css';
import '../Approval.css';
import { callApvExp6API } from '../../../apis/ApprovalAPICalls';

function Exp6() {


	const empNo = useSelector(state => state.authes.empNo);
	console.log("empNo : ", empNo);

	const [formCount, setFormCount] = useState(1);
	const [isSendingWreath, setIsSendingWreath] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const exp6 = useSelector(state => state.approvalReducer);

	console.log('exp6 first : ', exp6);

	const [formData, setFormData] = useState({

		title: '경조금신청서',
		writeDate: '',
		apvStatus: '결재예정',
		isUrgency: 'F',
		category: '지출',
		empNo: empNo,
		apvFamilyEvents: [{
			type: '',
			familyDate: '',
			bank: '',
			accountHolder: '',
			accountNumber: '',
			payment: 0,
			isSendingWreath: 'F',
			sendingName: '',
			sendingAddress: '',
			sendingPhone: '',
			requestsNote: '',
		}]
	});





	const onTypeChangeHandler = (e) => {
		const { name, value } = e.target;

		const selectedOption = e.target.options[e.target.selectedIndex];
		const selectedName = selectedOption.getAttribute("name");
		const selectedValue = selectedOption.value;

		const paymentMap = {
			"본인결혼": 5000000,
			"형제자매결혼": 1000000,
			"자녀결혼": 1000000,
			"본인상": 5000000,
			"배우자상": 1000000,
			"자녀상": 1000000,
			"조부모상": 500000,
			"부모상": 1000000,
			"형제자매상": 300000,
			"본인 칠순,팔순,구순": 1000000,
			"조부모 칠순,팔순,구순": 300000,
			"부모 칠순,팔순,구순": 500000,
		};

		setFormData((prevFormData) => ({
			...prevFormData,
			apvFamilyEvents: [{
				...prevFormData.apvFamilyEvents[0],
				[name]: value,
				type: selectedName,
				payment: paymentMap[selectedName] || 0,
			}]
		}));
	}

	const onCheckboxChangeHandler = (e) => {
		const { checked } = e.target;
		setIsSendingWreath(checked);

		setFormData((prevFormData) => ({
			...prevFormData,
			apvFamilyEvents: [{
				...prevFormData.apvFamilyEvents[0],
				payment: checked
          ? prevFormData.apvFamilyEvents[0].payment - 150000
          : prevFormData.apvFamilyEvents[0].payment,
        isSendingWreath: checked ? "T" : "F",
			}]
		}));
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			apvFamilyEvents: [{
				...prevFormData.apvFamilyEvents[0],
				[name]: value,
			}]
		}));

		console.log('formData : ', formData);
	}
	const handleSubmission = async () => {
		try {
			const response = await dispatch(callApvExp6API({ formData }));

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
	};

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

	console.log('formData : ', formData);


	return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar onsubmit={handleSubmission} updateIsUrgency={updateIsUrgency} />
				<div className="containerApv">
					<div className="apvApvTitle">경조금신청서</div>
					<ApvSummitLine />
					<div className="apvContent">
						<div className="apvContentTitleExp6">
							<div className="column1">경조분류</div>
							<div className="column2">
								<select className="input1" name="type" onChange={onTypeChangeHandler}>
									<option value="">선택</option>
									<optgroup label='결혼'>
										<option name="본인결혼" value="5000000">본인결혼</option>
										<option name="형제자매결혼" value="1000000">형제자매결혼</option>
										<option name="자녀결혼" value="1000000">자녀결혼</option>
									</optgroup>
									<optgroup label='조의'>
										<option name="본인상" value="5000000">본인상</option>
										<option name="배우자상" value="1000000">배우자상</option>
										<option name="자녀상" value="1000000">자녀상</option>
										<option name="조부모상" value="500000">조부모상</option>
										<option name="부모상" value="1000000">부모상</option>
										<option name="형제자매상" value="300000">형제자매상</option>

									</optgroup>
									<optgroup label='기타'>
										<option name="본인 칠순,팔순,구순" value="1000000">본인 칠순,팔순,구순</option>
										<option name="조부모 칠순,팔순,구순" value="300000">조부모 칠순,팔순,구순</option>
										<option name="부모 칠순,팔순,구순" value="500000">부모 칠순,팔순,구순</option>
									</optgroup>
								</select>
							</div>
							<div className="column3">경조일자</div>
							<div className="column4">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="familyDate"
									value={formData.apvFamilyEvents[0].familyDate} onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">지급액</div>
							<div className="column46">{formData.apvFamilyEvents[0].payment} 원</div>

						</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">예금주</div>
							<div className="column42">
								<input className="input1" placeholder="예금주 입력"
									name='accountHolder' value={formData.apvFamilyEvents[0].accountHolder}
									onChange={onChangeHandler} />
							</div>
							<div className="column43">은행</div>
							<div className="column44">
								<input className="input1" placeholder="계좌번호 입력"
									name='bank' value={formData.apvFamilyEvents[0].bank}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">계좌번호</div>
							<div className="column46">
								<input className="input1" placeholder="계좌번호 입력"
									name='accountNumber' value={formData.apvFamilyEvents[0].accountNumber}
									onChange={onChangeHandler} />
							</div>
						</div>

						<div className="apvContentTitleExp1-4">
							<div className="column45">화환여부 (150,000원 차감)</div>
							<div className="column50">
								<input className="checkbox" type='checkbox' onChange={onCheckboxChangeHandler} />
							</div>
						</div>
						<div className="apvContentDetail3">화환 수령 정보</div>
						<div className="apvContentTitleExp1-2">
							<div className="column41">수령자</div>
							<div className="column42">
								<input className="input1" placeholder="수령자 입력"
									name='sendingName' value={formData.apvFamilyEvents[0].sendingName}
									onChange={onChangeHandler} />
							</div>
							<div className="column43">수령자 연락처</div>
							<div className="column44">
								<input className="input1" placeholder="수령자 연락처 입력"
									name='sendingPhone' value={formData.apvFamilyEvents[0].sendingPhone}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">수령지</div>
							<div className="column46">
								<input className="input1" placeholder="수령지 입력"
									name='sendingAddress' value={formData.apvFamilyEvents[0].sendingAddress}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentTitleExp1-3">
							<div className="column45">요청사항</div>
							<div className="column46">
								<input className="input1" placeholder="요청사항 입력"
									name='requestsNote' value={formData.apvFamilyEvents[0].requestsNote}
									onChange={onChangeHandler} />
							</div>
						</div>
						<div className="apvContentDetail3">위와 같이 지급을 요청합니다.</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Exp6;
