import { loginAction, logoutAction, getmemberAction } from "../modules/memberSlice"




export const callLoginAPI = ({form}) => {

    const requestURL = `http://localhost:8080/api/auth/login`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
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

        console.log('callLoginAPI result : ', result);
        if(result.status === 200 ){
            console.log("result.data : ", result.data); 
            console.log("result.data.accessToken : ", result.data.accessToken); 
            window.localStorage.setItem('accessToken', result.data.accessToken);
            dispatch(loginAction(result));
        }
    }
}

export const callLogoutAPI = () => {

    return async (dispatch, getState) => {

        dispatch(logoutAction());
        console.log("callLogoutAPI : logout 완료");
        localStorage.removeItem('accessToken');
        document.cookie = 'RefreshToken' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=C.kr;path=/;';
    }

}