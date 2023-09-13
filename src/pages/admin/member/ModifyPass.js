import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValidatePassword from "../../login/components/ValidationPassword";
import { updatePasswordAPI } from "../../../apis/AuthAPICalls";
import { resetAuthesAction } from "../../../modules/authSlice";
import { decodeJwt } from "../../../utils/decodeJwt";

export function ModifyPass() {


    const dispatch = useDispatch(); 

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const memberId = decodeJwt(window.localStorage.getItem("accessToken"))?.sub;


    const props = {
        memberId: memberId, 
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


    const passwordResetClick = async () => {

        console.log("memberid, password", props.memberId, props.password);
        if(props.memberId && props.password 
        && ValidatePassword(props.password) ){

            await dispatch(updatePasswordAPI(props)); 

            alert("비밀번호 변경 완료");

        } else {
            alert("유효한 요청이 아닙니다.")
        }
    }


    return (
        <div>

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



