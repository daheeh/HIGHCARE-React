import { useEffect, useState } from "react";
import "./identification.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authCheckAPI, authCodeSendingAPI } from "../../apis/AuthAPICalls";
import { AuthTimer } from "./components/AuthTimer";
import { updateAuthRequestCode, updateAuthExpireTime, resetAuthesAction } from "../../modules/authSlice";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

function Identification() {

    const [authway, setAuthway] = useState('phone');
    const [showDiv, setShowDiv] = useState(true);
    const authes = useSelector(state => state.authes);  // 
    const dispatch = useDispatch();

    const [props, setProps] = useState({
        authType: '',        // 인증타입 (폰, 메일)
        mail: '',
        phone: '',
        name: '',
        authCode: '',   // 인증코드 value 
        id: '',      // 인증코드 key (폰번호, 메일주소 )
    })

    useEffect(() => {
        dispatch(resetAuthesAction());
    }, [])  // 리로드시 auth 정보 리셋 

    useEnhancedEffect(() => {

    }) // requestCode에 따라 


    const authHandler = async (e) => {
        const selectAuth = e.target.value;
        await setAuthway(() => selectAuth);
        await setShowDiv(authway === 'mail');
    }

    const ChangeProps = (e) => {
        setProps({
            ...props,
            [e.target.name]: e.target.value
        })
    }

    const authCodeSendingClick = async (e) => {
        dispatch(updateAuthExpireTime(0)); // 인증버튼 재작동시 3분 리셋 
        props.authType = e.target.name
        props.id = props[e.target.name];
        await dispatch(authCodeSendingAPI(props));
    }

    const timeOut = () => {
        dispatch(updateAuthExpireTime(0));
        dispatch(updateAuthRequestCode(false));
    }

    const authCheckClick = async (e) => {
        props.id = props[props.authType];
        console.log("props.id : ", props.id);
        // code false 면 인증코드 무효 처리 
        if (authes.requestCode) {
            await dispatch(authCheckAPI(props));
            await dispatch(updateAuthExpireTime(0))
        } else {
            alert('유효시간이 초과되었습니다.')
        }
    }

    const nextStepBtnClick = () => {
        if (authes.requestMessage === 'correct') {
            return window.location.href = "/login/find/step2"
        } else {
            alert("인증번호가 올바르지 않습니다. 다시 입력해주세요.")
        }
    }



    return (
        <div className="findAccount">
            <div className="find-step-container">

                <div className="authimage-flex">
                    <label htmlFor="phone" className="phoneimage" />
                    <label htmlFor="mail" className="mailimage" />
                </div>
                <div className="authtext-flex">
                    <label htmlFor="phone">
                        <div className="phonetxt">등록된 휴대폰으로 인증</div>
                    </label>
                    <label htmlFor="mail">
                        <div className="mailtxt">등록된 이메일로 인증</div>
                    </label>
                </div>

                <div>
                    <label htmlFor="phone" className="phoneimage"></label>
                    <input
                        hidden
                        type="radio"
                        name="phone"
                        id="phone"
                        value="phone"
                        checked={authway === 'phone'}
                        onChange={authHandler}
                    />

                    <label htmlFor="mail" className="mailimage"></label>
                    <input
                        hidden
                        type="radio"
                        name="mail"
                        id="mail"
                        value="mail"
                        checked={authway === 'mail'}
                        onChange={authHandler}
                    />
                </div>
                {showDiv && (
                    PhoneAuth()
                )}
                {!(showDiv) && (
                    mailAuth()

                )}
                <div className="nextbutton-container">
                    {/* <Link to="/login/find/step2"> */}

                    <button className="nextbtn"
                        onClick={nextStepBtnClick}
                    >다음</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )


    function PhoneAuth() {
        return (

            <div className="authbox">
                <div className="infobox">
                    <div>
                        <div className="grid1">이름</div>
                        <input className="name" name="name" type="text" />
                    </div>
                    <div className="info-flex">
                        <div className="grid1">휴대전화</div>
                        <input className="localnumber" type="text" value="+82" disabled />
                        <input className="phonenumber" type="text" placeholder="'-'제외 숫자만 입력" name="phone"

                        />
                        <input className="authbutton" value="인증코드발송" type="button"
                            name="phone"

                        />
                    </div>
                    <div>
                        <div className="grid1"></div>
                        <input className="authnumber" type="text" placeholder="인증코드 6자리 숫자 입력" />
                    </div>
                </div>
            </div>
        );
    }


    function mailAuth() {
        return (

            <div className="authbox">
                <div className="infobox">
                    <div>
                        <div className="grid1">이름</div>
                        <input className="name" name="name" type="text"
                            onChange={ChangeProps} />
                    </div>
                    <div className="info-flex">
                        <div className="grid1">메일주소</div>
                        <input className="name" name="mail"
                            type="text" placeholder="'@'를 포함하여 정확히 입력"
                            onChange={ChangeProps}
                        />
                        <input className="authbutton" value="인증코드발송" type="button"
                            name="mail" onClick={authCodeSendingClick} />

                    </div>
                    <div>
                        <div className="grid1"></div>
                        <input className="authnumber" type="text" placeholder="인증코드 6자리 숫자 입력"
                            name="authCode" onChange={ChangeProps}
                        />
                        <input className="authbutton" value="인증코드확인" type="button"
                            onClick={authCheckClick} />
                        <label><AuthTimer expireTime={authes.expireTime} funcTimeout={timeOut} /> </label>
                    </div>

                    <div style={{ width: 700, textAlign: 'center' }}>인증코드는 3분간 유효합니다.</div>
                </div>
            </div>


        );
    }

}


export default Identification;