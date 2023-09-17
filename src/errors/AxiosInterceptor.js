import axios from 'axios';
import ServerErrorPage from './ServerErrorPage';
import { PageNotFound } from './pageNotFound';
import { BadRequestErrorPage, ForbiddenErrorPage, UnauthorizedErrorPage } from './ErrorPages';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../modules/authSlice';
import { Logout } from '@mui/icons-material';
import { callLogoutAPI } from '../apis/AuthAPICalls';

// Axios 요청 전에 실행되는 인터셉터
axios.interceptors.request.use(
    (config) => {
        // 요청 설정을 변경할 수 있음
        return config;
    },
    (error) => {
        // 요청 에러 처리
        return Promise.reject(error);
    }
);

// Axios 응답을 받기 전에 실행되는 인터셉터
axios.interceptors.response.use(

    (response) => {
        //ß 응답 처리
        return response;
    },
    (error) => {
        // 응답 에러 처리
        const responseError = error.response;

        // 에러 코드에 따라 분기 처리
        if (responseError.status === 400) {
            // 400 에러 처리
            // window.location.href="/error/400"
            // console.log("400");
        } else if (responseError.status === 401) {
            // window.location.href="/error/401"

            alert("권한이 없습니다.");

            // 401 에러 처리
        } else if (responseError.status === 403) {
            // console.log(40333333);
            
            alert("인증되지 않은 사용자입니다. 재로그인 해주세요.");
            callLogoutAPI();
            

            // 403 에러 처리
        } else if (responseError.status === 404) {
            window.location.href = "/error/404"
        } else if (responseError.status === 1001) {
            alert("해당 요청에 대한 권한이 없습니다.")
            window.location.href = "/"


        } else if (responseError.status === 500) {
            // window.location.href="/error/500"
            // console.log("인증되지 않은 사용자입니다.");


            alert("api 요청 에러 ", responseError.data.message);

            if (responseError.data.message.includes("JWT")) {
                // window.location.href="/error/403"
                alert("인증되지 않은 사용자입니다. 재로그인 해주세요.");
                

            }
            else if (responseError.data.message.includes("401")) {
                alert("권한이 없습니다.");

                // window.location.href="/error/401"
            }
            else if (responseError.data.message.includes("1001")) {
                // window.location.href="/error/1001"            }
                // window.location.href="/error/500"
                alert("해당 요청에 대한 권한이 없습니다.")

            }
            else if (responseError.status === 1001) {
                alert("api 요청 에러 ", responseError.data.message);

                alert(responseError.data.message);
            }

            else {
                // 기타 에러 처리
            }

            return Promise.reject(error);
        }
    }
);

// Axios 인스턴스를 내보냅니다.
export default axios;