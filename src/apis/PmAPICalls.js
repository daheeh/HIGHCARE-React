import {
    GET_MEMBER

} from '../modules/TreeModule';

export const callEmployeeAPI = ({ empNo= 1, apvStatus }) => {

    console.log('[PmAPICalls] callEmployeeAPI Call');

    const requestURL = `http://localhost:8080/api/pm/all?offset=${empNo}`;
    
    
    return async (dispatch, getState) => {

        try{
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => {
            console.log(response);
            return response.json()
        });

        console.log('[PmAPICalls] callEmployeeAPI RESULT : ', result.data);

        dispatch({ type: GET_MEMBER,  payload: result.data });
    } catch (error) {
        console.error('[PmAPICalls] Error in callEmployeeAPI: ', error);
    }
        
    };    
};
