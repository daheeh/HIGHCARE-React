import { Link, useNavigate } from 'react-router-dom';
import HeaderCSS from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { callLoginAPI, callLogoutAPI } from '../../apis/AuthAPICalls';

function Header() {

    const navigate = useNavigate();

    const loginMember = useSelector(state => state.members);

    const dispatch = useDispatch();  // action을 보낼 수 있다. 

    const isLogin = window.localStorage.getItem('accessToken');

    const [form, setForm] = useState({
        id: '',
        password: ''
    });

    // useEffect(() => {
    //     // navigate("/", { replace: true });
    // }, [isLogin])

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickLoginHandler = async () => {
        await dispatch(callLoginAPI({ form }));
        console.log("callapi 반환");
        console.log(loginMember);
        console.log(loginMember.status);
    }

    const onClickLogoutHandler = async () => {
        await dispatch(callLogoutAPI());

        navigate("/", { replace: true });
        window.location.reload();
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
                <div style={{ fontWeight: 'bold', color: 'gray' }}>{loginMember.dept} {loginMember.name} {loginMember.job}님 반갑습니다.</div>
                <Link to="/modifyinfo">
                    <button>
                        내정보수정
                    </button>
                </Link>
                <button onClick={onClickLogoutHandler}>
                    로그아웃
                </button>
                <Link to="/admin">
                    {loginMember.role && loginMember.role.includes('ADMIN') && <button>관리자페이지</button>}
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

                    {(isLogin == null || isLogin === undefined || loginMember.status === false) ? <BeforeLogin /> : <AfterLogin />}

                </div>

            </div>
        </>
    );

}

export default Header;