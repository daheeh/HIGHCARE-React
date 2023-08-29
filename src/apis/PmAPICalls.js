import { async } from '@dabeng/react-orgchart';
import {
    GET_MEMBER,
    GET_TREEVIEW_ONE,
    GET_TREEVIEW_TWO

} from '../modules/TreeModule';

export const callEmployeeAPI = ({ empNo= 1, pmStatus }) => {

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

export const callTreeviewOneAPI = () => {
console.log('[PmAPICalls] callTreeviewOneAPI Call');

const requestURL = `http://localhost:8080/api/pm/secondDept`;

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
            console.log('-----------------> \n', response);
            return response.json()
        });

        console.log('[PmAPICalls] callTreeviewOneAPI RESULT :>>>>>>>>>>>>>>>> ', result.data);

        dispatch({type: GET_TREEVIEW_ONE, payload: result.data});
    } catch(error) {
        console.error('[PmAPICalls] Error in callTreeviewOneAPI: ', error);
    }
    };
};

export const callTreeviewTwoAPI = () => {

    console.log('[PmAPICalls] callTreeviewTwoAPI Call');

    const requestURL = `http://localhost:8080/api/pm/selectDept`;
    
    
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

        console.log('[PmAPICalls] callTreeviewTwoAPI RESULT : ', result.data);

        dispatch({ type: GET_TREEVIEW_TWO,  payload: result.data });
    } catch (error) {
        console.error('[PmAPICalls] Error in callTreeviewTwoAPI: ', error);
    }
        
    };    
};
