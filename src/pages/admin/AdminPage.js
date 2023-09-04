import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { TokenVerification } from './auth/TokenVerification';
import { AuthVarification } from './auth/AuthVerification';
import { AdminNav } from './AdminNav';
import AdminPageStyle from './AdminPage.module.css'
import { allMemberListApi } from '../../apis/MemberAPICalls';
import { useDispatch } from 'react-redux';

function AdminPage() {


	TokenVerification();
	AuthVarification();

	const dispatch = useDispatch();

    useEffect(() => {

        dispatch(allMemberListApi())

    })
	return (

		<section>
			<AdminNav />

			<div className={AdminPageStyle.container}>
				<div className={AdminPageStyle.box}>
					<h2>신규 회원가입 신청 현황</h2>
					<p>//</p>
					<a href="#">더 보기</a>
				</div>
				<div className={AdminPageStyle.box}>
					<h2>admin main2</h2>
					<p>manager</p>
					<a href="#">더 보기</a>
				</div>
			</div>

			<main>
				<Outlet />

			</main>


		</section>
	);
}

export default AdminPage;