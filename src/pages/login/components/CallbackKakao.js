import { useEffect, useState } from "react";
import { decodeJwt } from "../../../utils/decodeJwt";
import axios from "axios";
import { kakaoAuth } from "../../../apis/OAuthApiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { browserInfo, deviceInfo } from "../logininfo";

export const CallbackKakao = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    console.log("로그인 연동중 ");
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const id = url.searchParams.get("state");
    let br = browserInfo();
    let dv = deviceInfo();

    console.log("code : ", code);


    console.log("callback 페이지에서 넘겨줄 id : ", id);

    const props = {
        code:code, 
        id:id, 
        browser: br, 
        device: dv,
    }

    useEffect( () => {

        ( async ()=> {
            await dispatch(kakaoAuth(props));
        })();  // destroy 작업 
        
        console.log("kakaoAUth dispatch callback");
        navigate("/", { replace: true }); 
        
    }, [])  

    return (

        <>
        </>
    )
}