import React, { useEffect, useState } from "react";
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { callLoginAPI } from "../../apis/AuthAPICalls";

export function device () {

    let agent = navigator.userAgent.toLowerCase(); 

    if(agent.indexOf('mac') >= 0 ){
        return 'Mac OS'
    }
    else if(agent.indexOf('win') >= 0 ){
        return 'Window'
    }
    else if(agent.indexOf('linux') >= 0 ){
        return 'Linux'
    }
    else if(agent.indexOf('android') >= 0 ){
        return 'Android'
    }
    else if(agent.indexOf('iphone') >= 0 ){
        return 'iPhone'
    }
    else if(agent.indexOf('iPad') >= 0 ){
        return 'iPad'
    }
    else if(agent.indexOf('android') >= 0 ){
        return 'Android'
    }
    else if(agent.indexOf('opera') >= 0 ){
        return 'Opera'
    }
    else if(agent.indexOf('iemobile') >= 0 ){
        return 'IEMobile'
    }
    else if(agent.indexOf('webos') >= 0 ){
        return 'webOS'
    } else {
        return 'none';
    }
}

export const browser = () => {

    let agent = navigator.userAgent.toLowerCase(); 

    if(agent.indexOf('trident') >= 0 ){
        return 'IE';
    } 
    else if(agent.indexOf('firefox') >= 0 ){
        return 'Firefox';
    } 
    else if(agent.indexOf('edg') >= 0 ){
        return 'Edge';
    }
    else if(agent.indexOf('chrome') >= 0 ){
        return 'Chrome';
    } 
    else if(agent.indexOf('safari') >= 0 ){
        return 'Safari';
    }
    else {
        return 'none';
    }

}

function Logininfo() {

    const navigate = useNavigate();


    // selector state를 통해 리듀서에 접근 
    const loginMember = useSelector(state => state.authes);
    const dispatch = useDispatch();  // action을 보낼 수 있다. 

    

    const [form, setForm] = useState({
        id: '',
        password: '',
        device: device(),
        browser: browser(),


    });

    useEffect(() => {
        if (loginMember.status === 200 && loginMember.isLogin) {
            
            navigate("/", { replace: true });  // 메인 페이지로 돌아가기
        }
    }, [loginMember]);

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickLoginHandler = () => {

    dispatch(callLoginAPI(form));

    }

    

    console.log(browser());
    console.log(device());


    return (
        <div  style={{marginTop:100}}>
           
            <div className="login-container">
                <div className="input-group">
                    <div className="id-group">
                        <input type="text" id="username"
                            name="id" placeholder="아이디를 입력하세요." required
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="password-group">
                        <input type="password" id="password"
                            name="password" placeholder="비밀번호를 입력하세요." required
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>
                <div className="button-group">
                    <button type="button"
                        onClick={onClickLoginHandler}
                    >로그인</button>
                </div>
                <div className="save-and-find">
                    <div className="save-group">
                        <input type="checkbox" id="saveid" />
                        <label htmlFor="saveid">아이디 저장</label>
                    </div>
                    <div className="find-group">
                        <Link to="/login/find/step1">
                            <input type="button" hidden id="findid" />
                            <label htmlFor="findid">아이디 찾기</label>
                            <input type="checkbox" hidden id="findpass" />
                            <label htmlFor="findpass">비밀번호 찾기</label>
                        </Link>
                        <Link to="/login/member/request">
                            <input type="checkbox" hidden id="reqmember" />
                            <label htmlFor="reqmember">가입요청</label>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Logininfo;