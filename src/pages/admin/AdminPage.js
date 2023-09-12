import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { TokenVerification } from './auth/TokenVerification';
import { AuthVarification } from './auth/AuthVerification';
import { AdminNav } from './AdminNav';
import AdminPageStyle from './AdminPage.module.css'
import { allMemberListApi } from '../../apis/MemberAPICalls';
import { useDispatch } from 'react-redux';
import MemberList from './member/MemberList';
import { AdminMain1, AdminMain2 } from './AdminMainBox';

function AdminPage() {


	TokenVerification();
	AuthVarification();

	const dispatch = useDispatch();

	// useEffect(() => {

	// 	dispatch(allMemberListApi())

	// },[])
	return (

		<section>
			<AdminNav />

			<div className={AdminPageStyle.container}>
				<div className={AdminPageStyle.box}>
					<div>
						<h2>임시회원 신청 현황</h2>
					</div>
					<div className={AdminPageStyle.innerbox}>
						<AdminMain1 />
					</div>
					<div>
						<Link to="/admin/member" style={{ color: 'gray' }}>더보기</Link>
					</div>
				</div>

				<div className={AdminPageStyle.box}>
					<div>
						<h2>차단회원</h2>
					</div>
					<div className={AdminPageStyle.innerbox}>
						<AdminMain2 />
					</div>
					<div>
						<Link to="/admin/member" style={{ color: 'gray' }}>더보기</Link>
					</div>
				</div>
			</div>

			<main>
				<Outlet />

			</main>


		</section>
	);
}

export default AdminPage;