import { Link, useNavigate } from "react-router-dom";
import "./identification.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updatePasswordAPI } from "../../apis/AuthAPICalls";
import ValidatePassword from "./components/ValidationPassword";
import { resetAuthesAction } from "../../modules/authSlice";


function Idcheck({ findId }) {

    return (
        <div>

            <div className="step2idbox">

                <div className="step2id-title">아이디 : </div>
                <div className="step2id-content" > {findId}</div>
            </div>
            <div>
            </div>

        </div>
    );
}

function LoginOfPass() {

    const authes = useSelector(state => state.authes);



    const passwordResetClick = () => {

        if (authes.requestMessage === 'correct' && authes.requestCode) {
            return window.location.href = "/login/find/reset"
        }
        else {
            alert("권한 없음. 인증을 다시 진행해주세요.")
        }

    }

    return (

        <div>
            <div><Idcheck findId={authes.id} /></div>
            <div className="step2btn">
                <Link to="/login">
                    <button className="step2btn-1">로그인 하기</button>
                </Link>
                {/* <Link to="/login/find/reset"> */}
                <button className="step2btn-2"
                    onClick={passwordResetClick}
                >비밀번호 설정</button>
                {/* </Link> */}

            </div>

        </div>
    )
}


function PassReset() {


    const authes = useSelector(state => state.authes);
    const dispatch = useDispatch(); 

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const props = {
        memberId: authes.id, 
        password: newPassword 
    }

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleNewPasswordBlur = () => {

        console.log("newpassword : ", newPassword);

        const valid = ValidatePassword(newPassword);
        if (!valid) {
            setNewPasswordError("영문, 숫자, 특수문자를 함께 사용(8자리 이상, 16자리 이하)해야 합니다.");

        } else {
            setNewPasswordError("");
        }
    };


    const handleConfirmPasswordBlur = () => {
        console.log("confirmPassword : ", confirmPassword);

        if (newPassword !== confirmPassword) {
            setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
        } else {
            setConfirmPasswordError("");
        }
    };


    const navigate = useNavigate();

    const passwordResetClick = async () => {
        if(props.memberId && props.password && authes.requestCode && authes.requestMessage === 'correct' 
        && ValidatePassword(props.password) ){

            await dispatch(updatePasswordAPI(props)); 
            await dispatch(resetAuthesAction());
            await alert("비밀번호 변경 완료, 재로그인 해주세요.");
            navigate("/login");

        } else {
            alert("유효한 요청이 아닙니다.")
        }
    }


    return (
        <div>

            <div><Idcheck findId={authes.id} /></div>
            <div className="step2pwd">
                <div className="pwdreset-box">
                    <input type="password" placeholder="새 비밀번호 입력"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        onBlur={handleNewPasswordBlur} // 포커스 아웃 시 밸리데이션 체크

                    /><br />
                    <div style={{ color: 'red', fontSize: 14 }}>{newPasswordError}</div>
                    <input type="password" placeholder="새 비밀번호 확인"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        onBlur={handleConfirmPasswordBlur} // 포커스 아웃 시 밸리데이션 체크
                    />
                    <div style={{ color: 'red', fontSize: 14 }}>{confirmPasswordError}</div>

                    <div>영문, 숫자, 특수문자를 함께 사용(8자리 이상, 16자리 이하)</div>
                </div>
            </div>

            <div className="nextbutton-container">
                {/* <Link to="/login"> */}

                    <button className="nextbtn"
                        onClick={passwordResetClick}
                    >확인</button>
                {/* </Link> */}
            </div>
        </div>
    );
}







export { LoginOfPass, PassReset };