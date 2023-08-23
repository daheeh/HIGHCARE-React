import { Link, useNavigate } from 'react-router-dom';
import HeaderCSS from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { callLoginAPI, callLogoutAPI } from '../../apis/AuthAPICalls';
import { decodeJwt } from '../../utils/decodeJwt';
import LoginVerify from '../../utils/LoginVerify';

function Header() {

    const navigate = useNavigate();

    const loginMember = useSelector(state => state.members);

    const loginInfo = {
        id: loginMember.id,
        refreshExp:loginMember.refreshExp,
        name: loginMember.name,
        dept:loginMember.dept,
        job:loginMember.job,
        role:loginMember.role,
        isLogin: loginMember.isLogin,
        status:loginMember.status,
    }

    const dispatch = useDispatch();  // action을 보낼 수 있다. 

    const [form, setForm] = useState({
        id: '',
        password: ''
    });


    // const isLogin = window.localStorage.getItem('accessToken');

    // 토큰만료 검증 
    const token = decodeJwt(window.localStorage.getItem("accessToken"));   
    if(token != null ){
        LoginVerify(token, loginInfo.refreshExp);
    } 
    

    // useEffect(() => {
    //     // navigate("/", { replace: true });
    // }, [isLogin])

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickLoginHandler = () => {
        dispatch(callLoginAPI({ form }));
        console.log("callapi 반환");
        console.log(loginInfo);
        console.log(loginInfo.status);
    }

    const onClickLogoutHandler = () => {
        dispatch(callLogoutAPI());
        navigate("/", { replace: true });
        
    }

    // console.log("로그인정보 확인" ,loginMember);

    function BeforeLogin() {

        return (
            <div className={HeaderCSS.logininput} style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 'auto', marginLeft: 'auto' }}>

                <Link to="/login">
                    <button>
                        로그인
                    </button> </Link>


                {/* <form>

                        <input
                            type="text"
                            name='id'
                            placeholder="아이디"
                            autoComplete='off'
                            onChange={onChangeHandler}
                        />
                        <input
                            type="password"
                            name='password'
                            placeholder="패스워드"
                            autoComplete='off'
                            onChange={onChangeHandler}
                        />
                    </form> */}
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
            {/* { loginModal ? <LoginModal setLoginModal={ setLoginModal }/> : null} */}

            <div className={HeaderCSS.HeaderDiv}>
                {/* <h1>HICARE</h1> */}
                <Link to="/">
                    <button
                        className={HeaderCSS.LogoBtn}
                    // onClick={ onClickLogoHandler }
                    >

                    </button>
                </Link>
                {/* <input 
                    className={ HeaderCSS.InputStyle }
                    type="text" 
                    placeholder="검색" 
                    value={ search }
                    onKeyUp={ onEnterkeyHandler }
                    onChange={ onSearchChangeHandler }
                />
                 */}

                <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px', marginLeft: 'auto' }} >

                    {/* {(isLogin == null || isLogin === undefined || loginMember.status === false) ? <BeforeLogin /> : <AfterLogin />} */}
                    {(loginInfo.isLogin === false) ? <BeforeLogin /> : <AfterLogin />}

                </div>

            </div>
        </>
    );

}

export default Header;