import { Link, useNavigate } from 'react-router-dom';
import HeaderCSS from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { callLoginAPI, callLogoutAPI } from '../../apis/AuthAPICalls';
import LoginVerify from '../../utils/LoginVerify';
import { decodeJwt } from "../../utils/decodeJwt";

import { logoutAction } from '../../modules/authSlice';
import { ReduxReset } from '../../utils/ReduxReset';

import { GET_RESET_MANSELECT } from '../../modules/MypageModule';



function Header() {

    const navigate = useNavigate();

    const loginMember = useSelector(state => state.authes);

    const loginInfo = {
        id: loginMember.id,
        refreshExp: loginMember.refreshExp,
        name: loginMember.name,
        dept: loginMember.dept,
        job: loginMember.job,
        role: loginMember.role,
        isLogin: loginMember.isLogin,
        status: loginMember.status,
    }

    const dispatch = useDispatch();  // action을 보낼 수 있다. 

    const onClickLogoutHandler = () => {



        dispatch(callLogoutAPI());
        // dispatch(callLogoutAPI());
        localStorage.setItem('reduxState', '');

        // // ReduxReset("mypage");
        // // navigate("/login", { replace: true });
        window.location.href="/";

    }

    function BeforeLogin() {

        return (
            <div className={HeaderCSS.logininput} style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 'auto', marginLeft: 'auto' }}>
                <Link to="/login">
                    <button>
                        로그인
                    </button>
                </Link>
            </div>

        )
    }

    function AfterLogin() {

        return (
            <div className={HeaderCSS.logininput} style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 'auto', marginLeft: 'auto' }}>
                <div style={{ fontWeight: 'bold', color: 'gray' }}>{loginInfo.dept} {loginInfo.name} {loginInfo.job}님 반갑습니다.</div>
                <Link to="/mypage/profile">
                    <button>
                        마이페이지
                    </button>
                </Link>
                <button onClick={onClickLogoutHandler}>
                    로그아웃
                </button>
                <Link to="/admin">
                    {loginInfo.role && loginInfo.role.includes('ADMIN') && <button>관리자페이지</button>}
                </Link>
            </div>

        )
    }

    return (
        <>
            <div className={HeaderCSS.HeaderDiv}>
                <Link to="/">
                    <button
                        className={HeaderCSS.LogoBtn}
                    >
                    </button>
                </Link>
                <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px', marginLeft: 'auto' }} >
                    {(loginInfo.isLogin === false) ? <BeforeLogin /> : <AfterLogin />}

                </div>

            </div>
        </>
    );

}

export default Header;