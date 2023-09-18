import{
    GET_DATERES,
} from '../modules/DateModule';

export const callDateResAPI = ({reservationDate,resourceCode})=>{
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/res/dateRes?reservationDate=${reservationDate}&resourceCode=${resourceCode}`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*" ,
            }
        })
        .then(response => response.json());
        dispatch({type: GET_DATERES, payload: result});
    };


}