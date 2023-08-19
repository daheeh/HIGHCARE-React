import React from "react";
import './login.css'
import { Link } from "react-router-dom";


function Logininfo(){

    

    return (
        <div>
    
            <div className="login-container">
                <div className="input-group">
                    <div className="id-group">
                        <input type="text" id="username" 
                        name="username" placeholder="아이디를 입력하세요." required />
                    </div>
                    <div className="password-group">
                        <input type="password" id="password" 
                        name="password" placeholder="비밀번호를 입력하세요."required />
                    </div>
                </div>
                <div className="button-group">
                    <button type="button">로그인</button>
                </div>
                <div className="save-and-find">
                    <div className="save-group">
                        <input type="checkbox" id="saveid"/>
                        <label htmlFor="saveid">아이디 저장</label>
                    </div>
                    <div className="find-group">
                        <Link to="/login/findaccount/step1">
                        <input type="button" hidden id="findid"/>
                        <label htmlFor="findid">아이디 찾기</label>
                        <input type="checkbox" hidden id="findpass"/>
                        <label htmlFor="findpass">비밀번호 찾기</label>
                        </Link>
                        <input type="checkbox" hidden id="reqmember"/>
                        <label htmlFor="reqmember">가입요청</label>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Logininfo;