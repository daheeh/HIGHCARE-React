import {
    GET_APROVAL_STATUS,
} from '../modules/ApprovalModule.js';

export const callApvWriteBoxAPI = ({ empNo= 999999, apvStatus }) => {

    console.log('[ApprovalAPICalls] callApvWriteBoxAPI Call');

    const requestURL = `http://localhost:8080/api/approval/write?empNo=${empNo}&apvStatus=${apvStatus}`;
    
    return async (dispatch, getState) => {

        try{
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        console.log('[ApprovalAPICalls] callApvWriteBoxAPI RESULT : ', result.data);

        dispatch({ type: GET_APROVAL_STATUS,  payload: result.data });
    } catch (error) {
        console.error('[ApprovalAPICalls] Error in callApvWriteBoxAPI: ', error);
    }
        
    };    
};