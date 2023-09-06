import { decodeJwt } from '../utils/decodeJwt';
import { useDispatch } from 'react-redux';
import { jwtReissueAPI } from '../apis/AuthAPICalls';
import { logoutAction } from '../modules/authSlice';

const LoginVerify = (token, refreshExp) => {


    // token = decodeJwt(window.localStorage.getItem("accessToken"));
    const dispatch = useDispatch();
    // const tokenresult = useSelector(state.)

    // console.log("토큰 시간 : ", token.exp);
    // console.log("토큰 시간 *1000 : ", token.exp*1000);
    // console.log("refresh exp : ", refreshExp);
    // console.log("현재 시간 : ", Date.now());


    if (!token) {
        alert('로그인을 먼저해주세요');
        return false;
    }

    if(refreshExp === 0){

        return false;
    }

    else if (token.exp * 1000 < Date.now()) {
        if (token.exp * 1000 > 0 && refreshExp < Date.now()){
            alert('로그인을 먼저해주세요');
            dispatch(logoutAction());
            return false;
            
        } else {
            
            dispatch(jwtReissueAPI(token.sub));
            console.log("토큰 재발급 완료");
            return true;
        }
    }



    return true;


};

export default LoginVerify;