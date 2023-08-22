import { loginAction, logoutAction, getLoginInfo } from "../modules/memberSlice"
import authSettingAction from "../modules/authSlice"

export const callLoginAPI = ({form}) => {

    const requestURL = `http://localhost:8080/api/auth/login`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
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
        .then(response => response.json());
        
        if(result.status === 200 ){
            console.log("result.data : ", result.data); 
            console.log("result.data.accessToken : ", result.data.accessToken); 
            window.localStorage.setItem('accessToken', result.data.accessToken);
        }
        dispatch(loginAction(result));

        // dispatch(authSettingAction(result))
    }
}

export const callLogoutAPI = () => {

    return async (dispatch, getState) => {

        await dispatch(logoutAction());
        console.log("callLogoutAPI : logout 완료");
        localStorage.removeItem('accessToken');
        document.cookie = 'RefreshToken' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=C.kr;path=/;';
    }

}

// export const LoginInfoAPI = () => {

//     return async (dispatch, getState) => {
//         console.log("로그인 정보를 가져옵니다.");
//         await dispatch(getLoginInfo());

//     }

// }

export const jwtReissueAPI = (id) => {

    console.log(id);

    const requestURL = `http://localhost:8080/api/auth/reissue?id=${id}`;

    return async (dispatch, getState) => {
        console.log("access 토큰 재발급을 시작합니다.");
        const result = await fetch(requestURL, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"  
            }
        })
        .then(response => response.json());

        console.log('재발급 access token 확인 : ', result);
        window.localStorage.setItem('accessToken', result.data.accessToken);


        dispatch(result);
    };

}

export const modifyMemberAPI = () => {

    const requestURL = `http://localhost:8080/api/admin/modifymember`;

    return async (dispatch, getState) => {
        console.log("수정할 회원의 정보를 가져옵니다.");
        dispatch()
    }

    // const requestURL = `http://localhost:8080/api/auth/login`;

    // return async (dispatch, getState) => {

    //     const result = await fetch(requestURL, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "*/*",
    //             "Access-Control-Allow-Origin": "*"  
    //         },
    //         body: JSON.stringify({
    //             id: form.id,
    //             password: form.password
    //         })
    //     })
    //     .then(response => response.json());

    //     console.log('callLoginAPI result : ', result);
    //     if(result.status === 200 ){
    //         console.log("result.data : ", result.data); 
    //         console.log("result.data.accessToken : ", result.data.accessToken); 
    //         window.localStorage.setItem('accessToken', result.data.accessToken);
    //         dispatch(loginAction(result));
    //     }
    // }
}