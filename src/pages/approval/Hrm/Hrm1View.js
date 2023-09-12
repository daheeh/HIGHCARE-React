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
	const [weekendDays, setWeekendDays] = useState(0);

	useEffect(() => {
		if (data?.apvVacations) {
			const formattedStartDate = new Date(data.apvVacations[0].startDate).toLocaleDateString();
			const formattedEndDate = new Date(data.apvVacations[0].endDate).toLocaleDateString();
			setDateRange(`${formattedStartDate} ~ ${formattedEndDate}`);
			setWeekendDays(countWeekendDays(data.apvVacations[0].startDate, data.apvVacations[0].endDate));
		}
	}, [data]);

	function countWeekendDays(startDate, endDate) {
		let currentDate = new Date(startDate);
		const endDateObj = new Date(endDate);
		let weekendDays = 0;

		while (currentDate <= endDateObj) {
			const dayOfWeek = currentDate.getDay(); // 0 일요일, 6 토요일
			if (dayOfWeek === 0 || dayOfWeek === 6) {
				weekendDays++;
			}
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return weekendDays;
	}

	if (!data) {
		return ;
	  }
	
		if (!authes || data.apvLines.every(emp => emp.empNo !== authes.empNo)) {
		return <div className='apvNoUser'>권한이 없습니다</div>;
	  }

	return (
		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar
					data={data}
					ref={ref}
				/>
				<div className="containerApv" ref={ref}>
					<div className="apvApvTitle">연차신청서</div>
					<ApvSummitLine
						mode="view"
						selectedEmployees={data?.apvLines || []}
						authes={authes}
						data={data}
					/>
					<div className="apvContent">
						<div className="apvContentHrm1">
							<div className="column1">휴가 종류</div>
							<div className="column2">연차</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">시작일자</div>
							<div className="column2">
								<input className="input1" name="startDate" value={data?.apvVacations[0].startDate || ''} />
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offType1" value="09:00"
									checked={data?.apvVacations[0].offType1 === "09:00"} />오전</label>
								<label><input type="radio" name="offType1" value="14:00"
									checked={data?.apvVacations[0].offType1 === "14:00"} />오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>

						<div className="apvContentHrm1">
							<div className="column1">종료일자</div>
							<div className="column2">
								<input className="input1" name="endDate" value={data?.apvVacations[0].endDate || ''} />
								<label className='labelName'> (반차) </label>
								<label><input type="radio" name="offType2" value="09:00"
									checked={data?.apvVacations[0].offType2 === "09:00"} />오전</label>
								<label><input type="radio" name="offType2" value="14:00"
									checked={data?.apvVacations[0].offType2 === "14:00"} />오후</label>
								<label className='labelName'> - 미선택 시 전일 - </label>
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">기간</div>
							<div className="column2">{dateRange} (주말 {weekendDays}일 연차 미차감)</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">연차 사용 개수</div>
							<div className="column2">{data?.apvVacations[0].amount || ''} 개</div>
						</div>
						<div className="apvContentDetail">- 사유 -</div>
						<div className="apvContentDetailComent" >
							<textarea className='apvTextarea' value={data?.apvVacations[0].comment || ''}></textarea>
						</div>
					</div>
					<ApvFileList files={data?.apvFiles || []} data={data} isEditMode={false} />
				</div>
			</div>
		</section>
	);
}

export default Hrm1View;