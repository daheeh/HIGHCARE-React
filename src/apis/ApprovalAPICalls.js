import {
    GET_APROVAL_STATUS,
    POST_APPROVAL_EXP1,
    POST_APPROVAL_EXP2
} from '../modules/ApprovalModule';

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

// export const callApvExp1API = ({formData}) => {

//     console.log('[ApprovalAPICalls] callApvExp1API Call');

//     const requestURL = `http://localhost:8080/api/approval/insert/exp1`;

//     const requestBody = {
//         formData,
//         // apvExpForms: formData.apvExpForms, 
//         sharedProperties: {
//             requestDate: formData.apvExpForms.requestDate,
//             payee: formData.apvExpForms.payee,
//             accountHolder : formData.apvExpForms.accountHolder,
//             bank : formData.apvExpForms.bank,
//             accountNumber : formData.apvExpForms.accountNumber,
//         },
//     };

    
//     return async (dispatch, getState) => {

//         try{
//             const result = await fetch(requestURL, {
//                 method: "POST",
//                 headers: {
//                     "Accept": "*/*",
//                     // "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(requestBody),
//             })
//             .then(response => response.json());

//         console.log('[ApprovalAPICalls] callApvExp1API RESULT : ', result.data);

//         dispatch({ type: POST_APPROVAL_EXP1,  payload: result.data });
//     } catch (error) {
//         console.error('[ApprovalAPICalls] Error in callApvExp1API: ', error);
//     }
        
//     };    
// };


export const callApvExp1API = ({ formData }) => {
    console.log('[ApprovalAPICalls] callApvExp1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp1`;

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvExp1API RESULT : ', result.data);

            dispatch({ type: POST_APPROVAL_EXP1, payload: result.data });
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvExp1API: ', error);
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
    }
        
    };    
};
