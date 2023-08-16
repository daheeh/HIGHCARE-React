import { Link } from 'react-router-dom';
import HeaderCSS from './Header.module.css';


function Header(){

    
    return (
        <>
            {/* { loginModal ? <LoginModal setLoginModal={ setLoginModal }/> : null} */}

            <div className={ HeaderCSS.HeaderDiv }>
                {/* <h1>HICARE</h1> */}
            <Link to="/">
                <button
                    className={ HeaderCSS.LogoBtn }
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
                {/* 로그인 상태에 따라 다른 컴포넌트 랜더링 */}
                {/* { (isLogin == null || isLogin === undefined) ? <BeforeLogin /> : <AfterLogin />} */}
                    <div className={HeaderCSS.logininput} style={{display:'flex', alignItems:'flex-end', marginLeft:1040}}>
                        <div >
                            <input 
                                type="text" 
                                name='memberId'
                                placeholder="아이디" 
                                autoComplete='off'
                                // onChange={ onChangeHandler }
                            />
                            <input 
                                type="password"
                                name='memberPassword' 
                                placeholder="패스워드" 
                                autoComplete='off'
                                // onChange={ onChangeHandler }
                            />
                        </div>
                        <button
                            // onClick={ onClickLoginHandler }
                            >
                            로그인
                        </button>
                        <button
                            // style={ { border: 'none', margin: 0, fontSize: '10px', height: '10px' } }
                            // onClick={ () => setLoginModal(false) }
                            >
                            돌아가기
                        </button>
                    </div>
            </div>
        </>
    );

}

export default Header;