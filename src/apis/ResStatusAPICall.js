import{
    POST_RESULT,
    POST_RESULTS,
    POST_RESULTSA
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


export const callApprovalAPI = ({statusCode}) => {
    const requestURL = `http://localhost:8080/res/approval`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*" 
            },
            body: JSON.stringify({
                statusCode: statusCode
            }) 
        })
        .then(Response => Response.json());

        dispatch({type: POST_RESULTS, payload: result});
    }

}

export const callRejectedAPI = ({statusCode}) => {
    const requestURL = `http://localhost:8080/res/rejected`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*" 
            },
            body: JSON.stringify({
                statusCode: statusCode
            }) 
        })
        .then(Response => Response.json());

        dispatch({type: POST_RESULTSA, payload: result});
    }

}