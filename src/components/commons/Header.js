import { Link, useNavigate } from 'react-router-dom';
import HeaderCSS from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { callLoginAPI, callLogoutAPI } from '../../apis/AuthAPICalls';
import LoginVerify from '../../utils/LoginVerify';
import { decodeJwt } from "../../utils/decodeJwt";

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

<<<<<<< HEAD
    const [form, setForm] = useState({
        id: '',
        password: ''
    });


    // const isLogin = window.localStorage.getItem('accessToken');

    // // 토큰만료 검증 
    // const token = decodeJwt(window.localStorage.getItem("accessToken"));   
    // if(token != null ){
    //     if(!LoginVerify(token, loginInfo.refreshExp)){
    //         // alert('로그인을 먼저해주세요');
    //         navigate("/login", { replace: true });
    //     }
    // } 


    // const onChangeHandler = e => {
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value
    //     });
    // };

    // const onClickLoginHandler = () => {
    //     dispatch(callLoginAPI({ form }));
    //     console.log("callapi 반환");
    //     console.log(loginInfo);
    //     console.log(loginInfo.status);
    // }

    const onClickLogoutHandler = () => {
        dispatch(callLogoutAPI());
        navigate("/", { replace: true });        
    }
=======
    const onClickLogoutHandler = async () => {
        await dispatch(callLogoutAPI());
        navigate("/", { replace: true });
>>>>>>> 3bb03d96d7f498184848cc8c01d8b59e7d70e703

    }

    function BeforeLogin() {

        return (
            <div className={HeaderCSS.logininput} style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 'auto', marginLeft: 'auto' }}>

                <Link to="/login">
                    <button>
                        로그인
                    </button> </Link>
            </div>

        )
    }

    function AfterLogin() {

        return (
            <div className={HeaderCSS.logininput} style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 'auto', marginLeft: 'auto' }}>
                <div style={{ fontWeight: 'bold', color: 'gray' }}>{loginInfo.dept} {loginInfo.name} {loginInfo.job}님 반갑습니다.</div>
                <Link to="/modifyinfo">
                    <button>
                        내정보수정
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