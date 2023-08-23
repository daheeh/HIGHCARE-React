import React, { useEffect, useState } from "react";
import './login.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { callLoginAPI } from "../../apis/AuthAPICalls";


function Logininfo() {

    const navigate = useNavigate();


    // selector state를 통해 리듀서에 접근 
    const loginMember = useSelector(state => state.members);
    const dispatch = useDispatch();  // action을 보낼 수 있다. 

    const [form, setForm] = useState({
        id: '',
        password: ''
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

    dispatch(callLoginAPI({ form }));

    }


    return (
        <div>
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