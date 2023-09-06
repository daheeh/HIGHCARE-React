import { loginAction, logoutAction } from "../modules/authSlice";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReduxReset } from "../utils/ReduxReset";

// 수정 테스트-----
export const callLoginAPI = (form) => {

    const requestURL = `http://localhost:8080/api/auth/login`;

    return async (dispatch, getState) => {

        const response = await fetch(requestURL, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                id: form.id,
                password: form.password
            })
        })
            .then(res => res.json());

        try {
            dispatch(loginAction(response))
            console.log("result.data : ", response.data);
            window.localStorage.setItem('accessToken', response.data.accessToken);


        } catch (e) {
            console.error("로그인 문제발생", e.message);
            ReduxReset('authes');
            // localStorage.setItem('reduxState', '');

        }

    }
}

export const callLogoutAPI = () => {

    return async (dispatch, getState) => {

        try {

            await dispatch(logoutAction());
            console.log("callLogoutAPI : logout 완료");
        } catch (error) {
            console.log(error);
        } finally {
            // 로그아웃시 로컬에 있는 리덕스, 토큰 초기화하기 
            // localStorage.setItem('reduxState', '');
            ReduxReset('authes');

            localStorage.removeItem('accessToken');
            document.cookie = 'RefreshToken' || '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=C.kr;path=/;';
        }
    }

}


export const jwtReissueAPI = (id) => {

    console.log(id);

    const requestURL = `http://localhost:8080/api/auth/reissue?id=${id}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            credentials: "include",
            headers: {
                // "Content-Type": "application/json",
                // "Accept": "*/*",
                // "Access-Control-Allow-Origin": "*"
                "Access-Control-Allow-Credentials": "*"

                
            }
        })
            .then(response => response.json())

        if (result.status === 401) {
            alert(result.message);

        } else {

            console.log('재발급 access token 확인 : ', result);
            window.localStorage.setItem('accessToken', result.data.accessToken);
        }

    };

}

export const modifyMemberAPI = () => {

    // const requestURL = `http://localhost:8080/api/admin/modifymember`;

    return async (dispatch, getState) => {
        console.log("수정할 회원의 정보를 가져옵니다.");
        dispatch()
    }

}

export const authCodeSendingAPI = createAsyncThunk(
    'authcode/authes',
    async (props, thunkAPI) => {
        console.log('authCodeSendingAPI Props :', props);

        try {
            const response =
                await axios.post(`http://localhost:8080/api/auth/find/${props.authType}`
                , props
                    // , {
                    //     headers: {
                    //         "Accept": "*/*",
                    //         "Access-Control-Allow-Origin": "*"

                    //     }
                    // }
                );
            console.log(response.data);

            const code = response.data.data["code"];
            const message = response.data.data["message"];
            const timeout = response.data.data["timeout"];

            console.log("code : ", code);
            console.log("message : ", message);
            console.log("timeout :", timeout);

            const resultReducer = {
                code: code,
                message: message,
                timeout: timeout,
            };

            if (code) { // 성공코드 
                alert(message);
            }
            else {      // 실패코드 
                alert(message + " 확인 후 인증번호를 입력해주세요.")
            }
            return resultReducer;

        } catch (error) {
            console.log("error message", error);
            throw error.message;
        }
    }

);


export const authCheckAPI = createAsyncThunk(

    'authCheck/authes',
    async (props, thunkAPI) => {

        console.log('authCheck props :', props);

        try {
            const response =
                await axios.post(`http://localhost:8080/api/auth/find/authcheck`
                    , props
                    // , {
                    //     headers: {
                    //         "Accept": "*/*",
                    //         "Access-Control-Allow-Origin": "*"
                    //     }
                    // }
                );
            console.log(response.data);

            const result = response.data.data; 

            if(result.requestMessage === 'correct'){
                alert("인증 확인되었습니다.")
            } else {
                alert("인증코드가 올바르지 않습니다. 다시 시도해주세요.");
            }


            return result;

        } catch (error) {
            console.log("error message", error);
            throw error.message;
        }
    }
)



export const updatePasswordAPI = createAsyncThunk(
    'passwordModify/authes',
    async (props, thunkAPI) => {
      
        console.log('passwordModify props :', props);

        try {
            const response =
                await axios.post(`http://localhost:8080/api/auth/password`
                    , props
                    , {
                        headers: {
                            "Accept": "*/*",
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            console.log(response.data);

            const result = response.data; 

            alert(result.message)
      
            return result;

        } catch (error) {
            console.log("error message", error);
            throw error.message;
        }
    }
)

