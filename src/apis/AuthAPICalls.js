import { loginAction, logoutAction } from "../modules/authSlice";

export const callLoginAPI = ({ form }) => {

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

        try {
            dispatch(loginAction(result))
            console.log("result.data : ", result.data);
            window.localStorage.setItem('accessToken', result.data.accessToken);

        } catch (e) {
            console.error("로그인 문제발생", e.message);
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
            // 로그아웃시 로컬에 있는 리덕스, 토큰 싹 날리기 
            localStorage.setItem('reduxState', {});
            localStorage.removeItem('accessToken');
            document.cookie = 'RefreshToken' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=C.kr;path=/;';
        }
    }

}


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
            .then(response => response.json())

        if (result.status == 401) {
            alert(result.message);
            // navigator("/", { replace: true } );
        } else {

            console.log('재발급 access token 확인 : ', result);
            window.localStorage.setItem('accessToken', result.data.accessToken);
        }

    };

}

export const modifyMemberAPI = () => {

    const requestURL = `http://localhost:8080/api/admin/modifymember`;

    return async (dispatch, getState) => {
        console.log("수정할 회원의 정보를 가져옵니다.");
        dispatch()
    }

}