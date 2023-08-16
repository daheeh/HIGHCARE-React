import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import './approvalBiz.css';
import './approval.css';

function Biz3() {
    return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar />
				<div className="container">
					<div className="apv-apvtitle">출장신청서</div>
					<ApvSummitLine />
					<div className="apv-content">
						<div className="apv-content-title">
							<div className="column1">출장목적</div>
							<div className="column2"><input className="input1" placeholder="출장 목적 입력"/></div>
						</div>
						<div className="apv-content-title-biz3">
							<div className="column1">출장기간</div>
							<div className="column2"><input className="input1" type="date"/></div>
							<div className="column2"><input className="input1" type="time"/></div>
							<div className="column3">~</div>
							<div className="column2"><input cla ss="input1" type="date"/></div>
							<div className="column2"><input className="input1" type="time"/></div>
							<div className="column2">(1일)</div>
						</div>
						<div className="apv-content-title">
							<div className="column1">출장지</div>
							<div className="column2"><input className="input1" placeholder="출장지 입력"/></div>
						</div>
						<div className="apv-content-title">
							<div className="column1">동반자</div>
							<div className="column2"><input className="input1" placeholder="사번 입력"/></div>
						</div> 
						<div className="apv-content-detail">상세내용
						</div>
						<div className="apv-content-detail-coment">
							<textarea placeholder="내용 작성" rows="11"></textarea>
						</div> 

					</div>
				</div>
			</div>									
		</section>
    );
}

export default Biz3;