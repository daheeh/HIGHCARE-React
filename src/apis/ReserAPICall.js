import{
    GET_MYRES,
    GET_MYRESALL
}from '../modules/reserModule';

export const callMyResAPI = ({empNo,currentPage}) => {
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/res/reser?empNo=${empNo}&currentPage=${currentPage}`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }     
        })
        .then(response => response.json());

        dispatch({type: GET_MYRES, payload: result.data});
        
    };
}

export const callAllResAPI = ({currentPage})=> {
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/res/reserAll?currentPage=${currentPage}`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }     
        })
        .then(response => response.json());

        dispatch({type: GET_MYRESALL, payload: result.data});
        
    };
}