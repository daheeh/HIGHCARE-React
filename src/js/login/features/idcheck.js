import { Link } from "react-router-dom";
import "../css/identification.css"


function Idcheck(){

    return (
        <div>

            <div className="step2idbox">

                <div className="step2id-title">아이디 : </div>
                <div className="step2id-content" > dd</div>
            </div>
            <div>
            </div>
            
        </div>
    );
}

function LoginOfPass(){

    return (

        <div>
            <div><Idcheck/></div>
            <div className="step2btn">
                <Link to="/login">
                    <button className="step2btn-1">로그인 하기</button>
                </Link>
                <Link to="/login/findaccount/pass-reset">
                    <button className="step2btn-2">비밀번호 설정</button>
                </Link>
    
            </div>

        </div>
    )
}


function PassReset(){

    return (
        <div>

            <div><Idcheck/></div>
            <div className="step2pwd">
                <div className="pwdreset-box">
                    <input type="password" placeholder="새 비밀번호 입력" /><br/>
                    <input type="password" placeholder="새 비밀번호 확인"/>
                    <div>영문, 숫자, 특수문자를 함께 사용(8자리 이상, 16자리 이하)</div>
                </div>
            </div>

            <div className="nextbutton-container">
                <Link to="/login">
                    
                <button className="nextbtn">확인</button>
                </Link>
            </div>
        </div>
    );
}



export { LoginOfPass, PassReset };