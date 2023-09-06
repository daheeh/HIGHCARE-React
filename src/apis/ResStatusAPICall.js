import{
    POST_RESULT
} from '../modules/resultStatusModule';

export const callResInsertAPI = ({form}) => {
    const requestURL = `http://localhost:8080/res/status`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*" ,
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify({
                startTime: form.startTime,
                endTime: form.endTime,
                empNo: form.empNo,
                resourceCode : form.resourceCode,
                reservationDate : form.reservationDate
            })
        })
        .then(Response => Response.json());

        dispatch({type: POST_RESULT, payload: result});
    }

}