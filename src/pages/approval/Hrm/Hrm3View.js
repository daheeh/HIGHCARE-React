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

function Hrm3View() {
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
					<div className="apvApvTitle">서류발급신청서</div>
					<ApvSummitLine
						mode="view"
						selectedEmployees={data?.apvLines || []}
						authes={authes}
						data={data}
					/>
					<div className="apvContent">
						<div className="apvContentHrm2">
							<div className="column1">서류 종류</div>
							<div name="type">{data?.apvIssuances[0].type}</div>
							<div className="column2">
								<input className="input1" name='subType' value={data?.apvIssuances[0].subType} />
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">제출처</div>
							<div className="column2">
								<input className="input1" name='submission' value={data?.apvIssuances[0].submission} />
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">용도</div>
							<div className="column2">
								<input className="input1" name='uses' value={data?.apvIssuances[0].uses} />
							</div>
						</div>
						<div className="apvContentHrm1">
							<div className="column1">요청사항</div>
							<div className="column2">
								<input className="input1" name='requests' value={data?.apvIssuances[0].requests} />
							</div>
						</div>
					</div>
					<ApvFileList files={data?.apvFiles || []} data={data} isEditMode={false} />
				</div>
			</div>
		</section>
	);
}

export default Hrm3View;