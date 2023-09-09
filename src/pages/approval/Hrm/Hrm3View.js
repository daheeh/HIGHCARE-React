import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalHrm.css';
import '../Approval.css';
import ApvFileList from '../ApvFileList';
import { callApvViewAPI } from '../../../apis/ApprovalAPICalls';
import { useReactToPrint } from 'react-to-print';

function Hrm1View() {
	const authes = useSelector((state) => state.authes);
	const empNo = authes.empNo;
	const ref = useRef();

	console.log("Hrm1View empNo : ", empNo);
	console.log("ref = ", ref);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { apvNo } = useParams();

	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await dispatch(callApvViewAPI({ apvNo }));
				setData(data);
				console.log('data : ', data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [apvNo, dispatch]);

	const [dateRange, setDateRange] = useState("");

	useEffect(() => {

		console.log('data : ', data);
		console.log('apvNo : ', data.apvNo);
		console.log('apvLines : ', data.apvLines);
		// const formattedStartDate = (data.apvVacations[0].startDate).toLocaleDateString();
		// const formattedEndDate = (data.apvVacations[0].endDate).toLocaleDateString();
		// setDateRange(`${formattedStartDate} ~ ${formattedEndDate}`);
	}, []);


	return (
		<section>
			<ApvMenu />
			<div>
				<div className="containerApv">
					<div className="apvApvTitle">연차신청서</div>
					<ApvSummitLine
						mode="view"
						selectedEmployees={data?.apvLines || []}
						authes={authes}
					/>
					<div className="apvContent">
						<div className="apvContentHrm1">
							<div className="column1">휴가 종류</div>
							<div className="column2">연차</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">시작일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="startDate"
									value={data?.startDate || ''}
								/>
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offType1" value="09:00" />오전</label>
								<label><input type="radio" name="offType1" value="14:00" />오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">종료일자</div>
							<div className="column2">
								<input className="input1" type="date" placeholder="날짜 입력"
									name="endDate"
									value={data?.endDate || ''}
								/>
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offType2" value="09:00" />오전</label>
								<label><input type="radio" name="offType2" value="14:00" />오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">기간</div>
							<div className="column2">{dateRange}</div>
							{/* <div className="column2">{dateRange} (주말 {weekendDays}일 연차 미차감)</div> */}
						</div>
						<div className="apvContentHrm1">
							<div className="column1">연차 사용 개수</div>
							<div className="column2">{data?.amount || ''} 개</div>
						</div>
						<div className="apvContentDetail">- 사유 -</div>
						<div className="apvContentDetailComent">
							<textarea rows="20"
								value={data.apvVacations[0]?.comment || ''}
							></textarea>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hrm1View;