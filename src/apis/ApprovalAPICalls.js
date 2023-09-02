import {

    GET_APROVAL_MAIN_TODAY1,

    GET_APROVAL_WRITEBOX,
    GET_APROVAL_RECEIVEBOX,

    
    POST_APPROVAL_BIZ1,
    GET_APPROVAL_BIZ1,
    PUT_APPROVAL_BIZ1,
    
    POST_APPROVAL_BIZ2,
    POST_APPROVAL_BIZ3,

    POST_APPROVAL_EXP1,
    POST_APPROVAL_EXP2,
    GET_APPROVAL_EXP4,
    POST_APPROVAL_EXP4,
    POST_APPROVAL_EXP6,

    POST_APPROVAL_HRM1,
    POST_APPROVAL_HRM3,




} from '../modules/ApprovalModule';


export const callApvMainToday1API = ({ empNo, apvStatus }) => {

    console.log('[ApprovalAPICalls] callApvMainToday1API Call');
    const requestURL = `http://localhost:8080/api/approval/write?empNo=${empNo}&apvStatus=${apvStatus}`;

    return async (dispatch, getState) => {

        try {
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

            dispatch({ type: GET_APROVAL_WRITEBOX, payload: result.data });
            return result;
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

        try {
            const result = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    // 'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvWriteBoxAPI RESULT : ', result.data);

            dispatch({ type: GET_APROVAL_WRITEBOX, payload: result.data });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvWriteBoxAPI: ', error);
            throw error;
        }

    };
};


export const callApvReceiveBoxAPI = ({ empNo, apvStatus }) => {

    console.log('[ApprovalAPICalls] callApvReceiveBoxAPI Call');
    const requestURL = `http://localhost:8080/api/approval/receive?empNo=${empNo}&apvStatus=${apvStatus}`;

    return async (dispatch, getState) => {

        try {
            const result = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    // 'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvReceiveBoxAPI RESULT : ', result.data);

            dispatch({ type: GET_APROVAL_RECEIVEBOX, payload: result.data });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvReceiveBoxAPI: ', error);
            throw error;
        }

    };
};




/* 전자결재 양식 - 업무 */

/* 전자결재 - 업무 : biz1 기안서 */
export const callApvBiz1API = ({ formData, selectedEmployees }) => {

    console.log('[ApprovalAPICalls] callApvBiz1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/biz1`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvBiz1API formData : ', formData);
        console.log('[ApprovalAPICalls] callApvBiz1API selectedEmployees : ', selectedEmployees);

        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify( {apvFormDTO:formData, apvLineDTOs:selectedEmployees}),
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] callApvBiz1API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_BIZ1, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvBiz1API: ', error);
            throw error;
        }
    };
};

export const callApvBiz1ViewAPI = ({ apvNo }) => {

    console.log('[ApprovalAPICalls] callApvBiz1ViewAPI Call');

    const requestURL = `http://localhost:8080/api/approval/search/biz1/${apvNo}`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvBiz1ViewAPI apvNo : ', apvNo);
        try {
            const result = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(),
            })
            .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvBiz1ViewAPI RESULT : ', result.data);

            dispatch({ type: GET_APPROVAL_BIZ1, payload: result.data });
            return result.data;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvBiz1ViewAPI: ', error);
            throw error;
        }

    };
};

export const callApvBiz1UpdateAPI = ({ formData, selectedEmployees }) => {

    console.log('[ApprovalAPICalls] callApvBiz1API Call');

    const requestURL = `http://localhost:8080/api/approval/put/biz1`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvBiz1UpdateAPI formData : ', formData);
        console.log('[ApprovalAPICalls] callApvBiz1UpdateAPI selectedEmployees : ', selectedEmployees);

        try {
            const result = await fetch(requestURL, {
                method: "PUT",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify( {apvFormDTO:formData, apvLineDTOs:selectedEmployees}),
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] callApvBiz1UpdateAPI RESULT : ', result);

            dispatch({ type: PUT_APPROVAL_BIZ1, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvBiz1API: ', error);
            throw error;
        }
    };
};




/* 전자결재 - 업무 : biz2 회의록 */
export const callApvBiz2API = ({ formData, selectedEmployees }) => {

    console.log('[ApprovalAPICalls] callApvBiz2API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/biz2`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvBiz2API formData : ', formData);
        console.log('[ApprovalAPICalls] callApvBiz2API selectedEmployees : ', selectedEmployees);

        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify( {apvFormDTO:formData, apvLineDTOs:selectedEmployees}),
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvBiz2API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_BIZ2, payload: result });
            return result;

        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvBiz2API: ', error);
            throw error;
        }
    };
};

/* 전자결재 - 업무 : biz3 출장신청서 */
export const callApvBiz3API = ({ formData, selectedEmployees }) => {

    console.log('[ApprovalAPICalls] callApvBiz3API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/biz3`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvBiz3API formData : ', formData);
        console.log('[ApprovalAPICalls] callApvBiz3API selectedEmployees : ', selectedEmployees);

        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify( {apvFormDTO:formData, apvLineDTOs:selectedEmployees}),
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvBiz3API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_BIZ3, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvBiz3API: ', error);
            throw error;
        }
    };
};



/* 전자결재 양식 - 지출 */

/* 전자결재 - 지출 : exp1 지출결의서 */
export const callApvExp1API =  ({ formData, selectedEmployees }) => {

    console.log('[ApprovalAPICalls] callApvExp1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp1`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvExp1API formData : ', formData);
        console.log('[ApprovalAPICalls] callApvExp1API selectedEmployees : ', selectedEmployees);

        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify( {apvFormDTO:formData, apvLineDTOs:selectedEmployees}),
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvExp1API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP1, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvExp1API: ', error);
            throw error;
        }
    };
};



/* 전자결재 - 지출 : exp2 지출결의서 */
export const callApvExp2API = ({ formData }) => {

    console.log('[ApprovalAPICalls] callApvExp2API Call');

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

            console.log('[ApprovalAPICalls] callApvExp2API RESULT : ', result.data);

            dispatch({ type: POST_APPROVAL_EXP2, payload: result.data });
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvExp2API: ', error);
            throw error;
        }

    };
};

/* 전자결재 - 지출 : exp4 출장경비정산서 */
// export const callApvExp4API = ({ formData }) => {
//     console.log('[ApprovalAPICalls] callApvExp4API Call');

//     const requestURL = `http://localhost:8080/api/approval/insert/exp4`;

//     return async (dispatch, getState) => {
//         try {
//             const result = await fetch(requestURL, {
//                 method: "POST",
//                 headers: {
//                     "Accept": "*/*",
//                     "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
//                     'Content-Type': 'application/json',
//                     "Access-Control-Allow-Origin": "*",
//                 },
//                 body: JSON.stringify(formData),
//             })
//                 .then(response => response.json());

//             console.log('[ApprovalAPICalls] callApvExp4API RESULT : ', result);

//             dispatch({ type: POST_APPROVAL_EXP1, payload: result });
//             return result;
//         } catch (error) {
//             console.error('[ApprovalAPICalls] Error in callApvExp4API: ', error);
//             throw error;
//         }
//     };
// };


/* 전자결재 - 지출 : exp4 출장경비정산서 */
export const callApvExp4API = ({ empNo, formData }) => {
    console.log('[ApprovalAPICalls] callApvExp4API Call');

    const title = '출장신청서';

    const getRequestURL = `http://localhost:8080/api/approval/select/exp4?title='${title}'&empNo=${empNo}`;

    return async (dispatch, getState) => {
        try {
            const requiredData = await fetch(getRequestURL, {
                method: "GET",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
            }).then(response => response.json());

            console.log('[ApprovalAPICalls] callApvExp4API Required Data: ', requiredData);

            const postRequestURL = `http://localhost:8080/api/approval/insert/exp4`;

            const result = await fetch(postRequestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    ...formData,
                    additionalData: requiredData
                }),
            }).then(response => response.json());

            console.log('[ApprovalAPICalls] callApvExp4API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP4, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvExp4API: ', error);
            throw error;
        }
    };
};



/* 전자결재 - 지출 : exp6 경조금 신청서 */
export const callApvExp6API = ({ formData }) => {
    console.log('[ApprovalAPICalls] callApvExp6API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp6`;

    return async (dispatch, getState) => {
        console.log('[ApprovalAPICalls] callApvExp6API formData : ', formData);
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

            console.log('[ApprovalAPICalls] callApvExp6API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP6, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvExp6API: ', error);
            throw error;
        }

    };
};


/* 전자결재 - 지출 : exp7 법인카드사용보고서 */
export const callApvExp7API = ({ formData }) => {
    console.log('[ApprovalAPICalls] callApvExp6API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp7`;

    return async (dispatch, getState) => {
        console.log('[ApprovalAPICalls] callApvExp7API formData : ', formData);
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

            console.log('[ApprovalAPICalls] callApvExp7API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP6, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvExp7API: ', error);
            throw error;
        }

    };
};




/* 전자결재 양식 - 인사 */

/* 전자결재 - 인사 : hrm1 연차신청서, hrm2 기타휴가신청서 */
export const callApvHrm1API = ({ formData }) => {

    console.log('[ApprovalAPICalls] callApvHrm1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/hrm1`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvHrm1API formData : ', formData);
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

            console.log('[ApprovalAPICalls] callApvHrm1API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_HRM1, payload: result });
            return result;

        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvHrm1API: ', error);
            throw error;
        }

    };
};


/* 전자결재 - 인사 : hrm3 서류발급신청서 */
export const callApvHrm3API = ({ formData }) => {

    console.log('[ApprovalAPICalls] callApvHrm3API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/hrm3`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvHrm3API formData : ', formData);
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

            console.log('[ApprovalAPICalls] callApvHrm3API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_HRM3, payload: result });
            return result;

        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvHrm3API: ', error);
            throw error;
        }

    };
};


