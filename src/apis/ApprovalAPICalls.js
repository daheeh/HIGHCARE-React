import {

    GET_APROVAL_MAIN_TODAY1,

    GET_APROVAL_WRITEBOX,

    POST_APPROVAL_EXP1,
    POST_APPROVAL_EXP2,

    POST_APPROVAL_HRM1,
    POST_APPROVAL_HRM3,


    POST_APPROVAL_BIZ1,


} from '../modules/ApprovalModule';


export const callApvMainToday1API = ({ empNo, apvStatus }) => {

    console.log('[ApprovalAPICalls] callApvMainToday1API Call');
    const requestURL = `http://localhost:8080/api/approval/write?empNo=${empNo}&apvStatus=${apvStatus}`;
    
    return async (dispatch, getState) => {

        try{
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(response => response.json());

        console.log('[ApprovalAPICalls] callApvWriteBoxAPI RESULT : ', result.data);

        dispatch({ type: GET_APROVAL_WRITEBOX,  payload: result.data });
    } catch (error) {
        console.error('[ApprovalAPICalls] Error in callApvWriteBoxAPI: ', error);
        throw error;
    }
    
    };    
};



export const callApvWriteBoxAPI = ({ empNo, apvStatus }) => {

    console.log('[ApprovalAPICalls] callApvWriteBoxAPI Call');
    const requestURL = `http://localhost:8080/api/approval/write?empNo=${empNo}&apvStatus=${apvStatus}`;
    
    return async (dispatch, getState) => {

        try{
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(response => response.json());

        console.log('[ApprovalAPICalls] callApvWriteBoxAPI RESULT : ', result.data);

        dispatch({ type: GET_APROVAL_WRITEBOX,  payload: result.data });
    } catch (error) {
        console.error('[ApprovalAPICalls] Error in callApvWriteBoxAPI: ', error);
        throw error;
    }
    
    };    
};



export const callApvExp1API = ({ formData }) => {
    console.log('[ApprovalAPICalls] callApvExp1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp1`;

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvExp1API RESULT : ', result.data);

            dispatch({ type: POST_APPROVAL_EXP1, payload: result.data });
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvExp1API: ', error);
            throw error;
        }
    };
};



export const callApvExp2API = ({formData}) => {

    console.log('[ApprovalAPICalls] callApvExp2API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp1`;
    
    return async (dispatch, getState) => {

        try{
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    // "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json());

        console.log('[ApprovalAPICalls] callApvExp2API RESULT : ', result.data);

        dispatch({ type: POST_APPROVAL_EXP2,  payload: result.data });
    } catch (error) {
        console.error('[ApprovalAPICalls] Error in callApvExp2API: ', error);
        throw error;
    }
        
    };    
};

export const callApvHrm1API = ({formData}) => {

    console.log('[ApprovalAPICalls] callApvHrm1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/hrm1`;
    
    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvHrm1API formData : ', formData);
        try{
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json());

        console.log('[ApprovalAPICalls] callApvHrm1API RESULT : ', result.data);

        dispatch({ type: POST_APPROVAL_HRM1,  payload: result.data });
    } catch (error) {
        console.error('[ApprovalAPICalls] Error in callApvHrm1API: ', error);
        throw error;
    }
        
    };    
};


export const callApvHrm3API = ({formData}) => {

    console.log('[ApprovalAPICalls] callApvHrm3API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/hrm3`;
    
    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvHrm3API formData : ', formData);
        try{
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json());

        console.log('[ApprovalAPICalls] callApvHrm3API RESULT : ', result.data);

        dispatch({ type: POST_APPROVAL_HRM3,  payload: result.data });
    } catch (error) {
        console.error('[ApprovalAPICalls] Error in callApvHrm3API: ', error);
        throw error;
    }
        
    };    
};





export const callApvBiz1API = ({formData}) => {

    console.log('[ApprovalAPICalls] callApvBiz1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/biz1`;
    
    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvBiz1API formData : ', formData);
        try{
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json());


        console.log('[ApprovalAPICalls] callApvBiz1API RESULT : ', result.data);

        dispatch({ type: POST_APPROVAL_BIZ1,  payload: result.data });
    } catch (error) {
        console.error('[ApprovalAPICalls] Error in callApvBiz1API: ', error);
        throw error;
    }
        
    };    
};