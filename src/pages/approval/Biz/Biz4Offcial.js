import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import ApvFileList from '../ApvFileList';
import { callApvViewAPI } from '../../../apis/ApprovalAPICalls';
import { useReactToPrint } from 'react-to-print';

function Biz4Offcial({ formData, mode }) {

	const authes = useSelector((state) => state.authes);
	const empNo = authes.empNo;
	const ref = useRef();
	console.log("empNo : ", empNo);
	const dispatch = useDispatch();
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

	return (
		<section>
			{mode === 'preView' && (
				<div>
					<div className="containerApv">
						<div className="apvApvTitle"><img src="/images/HIGH CARE.png" /></div>
						<ApvSummitLine
							mode="view"
							selectedEmployees={data?.apvLines || []}
							authes={authes}
							data={data}
						/>
						<div className="apvOfficialTop">
							<div className="apvOfficial1">(우) 12334 서울 종로구 인사동길 12 대일빌딩</div>
							<div className="apvOfficial2">
								<div>담당자 : </div>
								<div>{formData.empName} {formData.jobName} ({formData.deptName})</div>
								<div>/ 전화 : </div>
								<div>{formData.empPhone}</div>
								<div>/ 팩스 : </div>
								<div>070-1111-9999</div>
								<div>/ 이메일 : </div>
								<div>{formData.empEmail}</div>
							</div>
						</div>
					</div>

					<div className="apvContent">
						<div className="apvOfficialBottom">
							<div className="column1">문서번호</div>
							<div className="column2">{formData.apvOfficials[0].apvNo ? formData.apvOfficials[0].apvNo : ''}</div>
						</div>
						<div className="apvOfficialBottom">
							<div className="column1">수신처</div>
							<div className="column2">{formData.apvOfficials[0].reception}</div>
						</div>
						<div className="apvOfficialBottom">
							<div className="column1">제목</div>
							<div className="column2">{formData.apvOfficials[0].officialTitle}</div>
						</div>
						<div className="apvOfficialBottom2">
						</div>
						<div className="apvContentDetailComent">{formData.contents1}</div>
						<div className="apvContentDetail2">-아래-</div>
						<div className="apvContentDetailComent2">{formData.contents2}</div>
					</div>
					<ApvFileList files={data?.apvFiles || []} data={data} />
					<div className="highcareStamp">
						<div className="highcareText">하이케어</div>
						<div><img src="/images/HIGHCARE-stamp.png" alt="High Care" className="highcareImage" /></div>
					</div>
				</div>

			)
			}


			<ApvMenu />
			<div>
				<ApvSummitBar
					data={data}
					ref={ref}
				/>
				<div className="containerApv" ref={ref}>
					<div>
						<div className="apvApvTitle">
							<img className="apvLogo" src="/images/HIGH CARE.png" />
						</div>
						<ApvSummitLine
							mode="view"
							selectedEmployees={data?.apvLines || []}
							authes={authes}
							data={data}
						/>
						<div className="apvOfficialTop">
							<div className="apvOfficial1">(우) 12334 서울 종로구 인사동길 12 대일빌딩</div>
							<div className="apvOfficial2">
								<div>담당자 : </div>
								<div>{data?.empName} {data?.jobName} ({data?.deptName})</div>
								<div>/ 전화 : </div>
								<div>{data?.apvEmployee.phone}</div>
								<div>/ 팩스 : </div>
								<div>070-1111-9999</div>
								<div>/ 이메일 : </div>
								<div>{data?.apvEmployee.email}</div>
							</div>
						</div>
					</div>

					<div className="apvContent">
						<div className="apvOfficialBottom">
							<div className="column1">문서번호</div>
							<div className="column2">{data?.apvOfficials[0].apvNo}</div>
						</div>
						<div className="apvOfficialBottom">
							<div className="column1">수신처</div>
							<div className="column2">{data?.apvOfficials[0].reception}</div>
						</div>
						<div className="apvOfficialBottom">
							<div className="column1">제목</div>
							<div className="column2">{data?.apvOfficials[0].officialTitle}</div>
						</div>
						<div className="apvOfficialBottom2">
						</div>
						<div className="apvContentDetailComent">{data?.contents1}</div>
						<div className="apvContentDetail2">-아래-</div>
						<div className="apvContentDetailComent2">{data?.contents2}</div>
					</div>
					<ApvFileList files={data?.apvFiles || []} data={data} />
					<div className="highcareStamp">
						<div className="highcareText">하이케어</div>
						<div><img src="/images/HIGHCARE-stamp.png" alt="High Care" className="highcareImage" /></div>
					</div>
				</div>
			</div>
		</section >
	);

}

export default Biz4Offcial;