import { decodeJwt } from '../utils/decodeJwt';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callLoginAPI, jwtReissueAPI } from '../apis/AuthAPICalls';

const LoginVerify = (token) => {

    token = decodeJwt(window.localStorage.getItem("accessToken"));
    const dispatch = useDispatch();

    console.log("토큰 시간 : ", token.exp);
    console.log("토큰 시간 *1000 : ", token.exp*1000);
    console.log("현재 시간 : ", Date.now());


    if (!token) {
        alert('로그인을 먼저해주세요');
        return false;
    }

    if (token.exp * 1000 < Date.now()) {
        dispatch(jwtReissueAPI(token.sub));
        console.log("토큰 재발급 완료");
    }

    return true;

        

    // Assuming loginmember.isLogin indicates user login status
    // if (window.localStorage.getItem('accessToken') && loginmember.isLogin) {
    //     return true;
    // } else {
    //     return false;
    // }
};

export default LoginVerify;