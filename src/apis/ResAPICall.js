import{
    GET_RES,
    POST_RES,
    POST_RESR
} from '../modules/reservationModule';

export const callResAPI = () => {
    const requestURL = `http://localhost:8080/res/res`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(Response => Response.json());

        dispatch({type: GET_RES, payload: result});
    }
}

export const callResAddAPI = ({form})=>{
    const requestURL = `http://localhost:8080/res/category`;
    return async(dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*" ,
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify({
                name: form.name
            })
        })
        .then(response => response.json());
        dispatch({type: POST_RES, payload: result});
    };
}

export const callResRegistAPI = ({form}) => {
    const requestURL = `http://localhost:8080/res/regist`;
    console.log('form : ' , form)
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Accept": "*/*" ,
                "Access-Control-Allow-Origin": "*" 
            },
            body: form
        })
        .then(response => response.json());

        dispatch({type: POST_RESR, payload: result});
    }
    
}