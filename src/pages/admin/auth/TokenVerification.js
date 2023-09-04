import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decodeJwt } from "../../../utils/decodeJwt";
import { logoutAction } from "../../../modules/authSlice";
import { jwtReissueAPI } from "../../../apis/AuthAPICalls";
import { Outlet, useNavigate } from "react-router-dom";

// 토큰만료 검증 
export const TokenVerification = () => {

    // console.log("token verification 작동 중");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const authes = useSelector(state => state.authes);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));


    useEffect(()=> {

        if (token === null) {
            alert('로그인이 필요합니다.');
            navigate("/login", { replace: true });
        }  
        else {
    
            const verified =  LoginVerify(token, authes.refreshExp);
    
            if (verified === 2) {
                alert('유효시간이 초과되었습니다. 재로그인이 필요합니다.');
                dispatch(logoutAction());
                navigate("/login", { replace: true });
            } else if(verified === 1) {
                dispatch(jwtReissueAPI(token.sub));
                console.log("토큰 재발급");
            } 
        }

    },[])

    
    return <Outlet/>

}

const LoginVerify = (token, refreshExp) => {
    // console.log("token : ", token);
    // console.log("토큰 시간 *1000 : ", token.exp * 1000);
    // console.log("refresh exp : ", refreshExp);
    // console.log("현재 시간 : ", Date.now());

    if (token.exp === 0 || token.exp*1000 < Date.now()) {   // 1. 엑세스토큰 만료시 리프레시 기간유무에 따라 재발급 
        if( refreshExp >= Date.now() ) {  // 재발급 
            // 재발급 
            return 1;
        } else {
            // 재로그인
            return 2; 
        }
    }
    else {  // 엑세스 만료되지 않음 
        // 통과 
        return 3; 
    }
        

};


    

 export default TokenVerification;