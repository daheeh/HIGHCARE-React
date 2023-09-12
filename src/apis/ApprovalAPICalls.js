import {

    GET_APROVAL_MAIN_TODAY1,

    GET_APROVAL_WRITEBOX,
    GET_APROVAL_RECEIVEBOX,

    GET_APPROVAL,
    DELETE_APPROVAL,
    PUT_APPROVAL,

    POST_APPROVAL_BIZ1,
    POST_APPROVAL_BIZ2,
    POST_APPROVAL_BIZ3,
    POST_APPROVAL_BIZ4,

    POST_APPROVAL_EXP1,
    POST_APPROVAL_EXP2,
    GET_APPROVAL_EXP4,
    POST_APPROVAL_EXP4,
    POST_APPROVAL_EXP6,
    POST_APPROVAL_EXP7,

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


/* 결재함 조회 */
export const callApvWriteBoxAPI = ({ empNo, apvStatus }) => {

    console.log('[ApprovalAPICalls] callApvWriteBoxAPI Call');
    console.log('[ApprovalAPICalls] empNo : ', empNo,);

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

/* 수신함 조회 */
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



/* 기안 조회 */
export const callApvViewAPI = ({ apvNo }) => {

    console.log('[ApprovalAPICalls] biz1 callApvBiz1ViewAPI Call');

    const requestURL = `http://localhost:8080/api/approval/search/${apvNo}`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] biz1 callApvBiz1ViewAPI apvNo : ', apvNo);
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

            console.log('[ApprovalAPICalls] biz1 callApvBiz1ViewAPI RESULT : ', result.data);

            dispatch({ type: GET_APPROVAL, payload: result.data });
            return result.data;
        } catch (error) {
            console.error('[ApprovalAPICalls] biz1 Error in callApvBiz1ViewAPI: ', error);
            throw error;
        }

    };
};

/* 기안 삭제 */

export const callApvDeleteAPI = ({ apvNo }) => {

    console.log('[ApprovalAPICalls] callApvDeleteAPI Call');

    const requestURL = `http://localhost:8080/api/approval/delete/biz1`;

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvDeleteAPI apvNo : ', apvNo);

        try {
            const result = await fetch(requestURL, {
                method: "DELETE",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "X-HTTP-Method-Override": "PUT",
                },
                body: JSON.stringify(),
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] callApvDeleteAPI RESULT : ', result);

            dispatch({ type: DELETE_APPROVAL, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] callApvDeleteAPI: ', error);
            throw error;
        }
    };
};


/* 전자결재 양식 - 업무 */

/* 전자결재 - 업무 : biz1 기안서 */
export const callApvBiz1API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] biz1 callApvBiz1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/biz1`;

    // FormData 객체를 생성하여 데이터를 담기
    const formData = new FormData();
    formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));

    // Convert selectedEmployees to an array if it's not already
    const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
        ? requestData.selectedEmployees
        : [requestData.selectedEmployees];
    formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));

    // apvLineDTOsArray.forEach(emp => {
    //     formData.append('apvLineDTOs', new Blob([JSON.stringify(emp)], { type: 'application/json' }));
    // });

    if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] biz1 callApvBiz1API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_BIZ1, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] biz1 Error in callApvBiz1API: ', error);
            throw error;
        }
    };
};

export const callApvUpdateAPI = ({ requestData }) => {

    console.log('[ApprovalAPICalls] biz1 callApvUpdateAPI Call');

    const apvNo = requestData.formData.apvNo;

    const requestURL = `http://localhost:8080/api/approval/put/${apvNo}`;

    // FormData 객체를 생성하여 데이터를 담기
    const formData = new FormData();
    formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));

    // Convert selectedEmployees to an array if it's not already
    const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
        ? requestData.selectedEmployees
        : [requestData.selectedEmployees];
    formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));

    // apvLineDTOsArray.forEach(emp => {
    //     formData.append('apvLineDTOs', new Blob([JSON.stringify(emp)], { type: 'application/json' }));
    // });

    if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {

        console.log('[ApprovalAPICalls] callApvUpdateAPI formData : ', requestData.formData);
        console.log('[ApprovalAPICalls] callApvUpdateAPI selectedEmployees : ', requestData.selectedEmployees);

        try {
            const result = await fetch(requestURL, {
                method: "PUT",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvUpdateAPI RESULT : ', result);

            dispatch({ type: PUT_APPROVAL, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvUpdateAPI: ', error);
            throw error;
        }
    };
};



/* 전자결재 - 업무 : biz2 회의록 */
export const callApvBiz2API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] biz2 callApvBiz2API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/biz2`;

    // FormData 객체를 생성하여 데이터를 담기
    const formData = new FormData();
    formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));

    // Convert selectedEmployees to an array if it's not already
    const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
        ? requestData.selectedEmployees
        : [requestData.selectedEmployees];
    formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));

    if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] biz2 callApvBiz2API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_BIZ2, payload: result });
            return result;

        } catch (error) {
            console.error('[ApprovalAPICalls] Error biz2 in callApvBiz2API: ', error);
            throw error;
        }
    };
};

/* 전자결재 - 업무 : biz3 출장신청서 */
export const callApvBiz3API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] callApvBiz3API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/biz3`;

     // FormData 객체를 생성하여 데이터를 담기
     const formData = new FormData();
     formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));
 
     // Convert selectedEmployees to an array if it's not already
     const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
         ? requestData.selectedEmployees
         : [requestData.selectedEmployees];
     formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));

     if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
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


/* 전자결재 - 업무 : biz4 공문*/
export const callApvBiz4API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] callApvBiz3API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/biz4`;

     // FormData 객체를 생성하여 데이터를 담기
     const formData = new FormData();
     formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));
 
     // Convert selectedEmployees to an array if it's not already
     const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
         ? requestData.selectedEmployees
         : [requestData.selectedEmployees];
     formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));

     if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] callApvBiz3API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_BIZ4, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callApvBiz3API: ', error);
            throw error;
        }
    };
};



/* 전자결재 양식 - 지출 */

/* 전자결재 - 지출 : exp1 지출결의서 */
export const callApvExp1API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] exp1 callApvExp1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp1`;

     // FormData 객체를 생성하여 데이터를 담기
     const formData = new FormData();
     formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));
 
     // Convert selectedEmployees to an array if it's not already
     const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
         ? requestData.selectedEmployees
         : [requestData.selectedEmployees];
     formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));
 
     if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] exp1 callApvExp1API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP1, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] exp1 Error in callApvExp1API: ', error);
            throw error;
        }
    };
};


/* 전자결재 - 지출 : exp2 지출결의서 */
export const callApvExp2API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] exp2 callApvExp1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp2`;

     // FormData 객체를 생성하여 데이터를 담기
     const formData = new FormData();
     formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));
 
     // Convert selectedEmployees to an array if it's not already
     const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
         ? requestData.selectedEmployees
         : [requestData.selectedEmployees];
     formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));
 
     if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] exp2 callApvExp2API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP2, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] exp2 Error in callApvExp2API: ', error);
            throw error;
        }
    };
};



/* 전자결재 - 지출 : exp4 출장경비정산서 */
export const callApvExp4API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] exp4 callApvExp1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp4`;

     // FormData 객체를 생성하여 데이터를 담기
     const formData = new FormData();
     formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));
 
     // Convert selectedEmployees to an array if it's not already
     const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
         ? requestData.selectedEmployees
         : [requestData.selectedEmployees];
     formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));
 
     if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] exp4 callApvExp4API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP4, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] exp4 Error in callApvExp4API: ', error);
            throw error;
        }
    };
};



/* 전자결재 - 지출 : exp6 경조금 신청서 */
export const callApvExp6API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] exp6 callApvExp1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp6`;

     // FormData 객체를 생성하여 데이터를 담기
     const formData = new FormData();
     formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));
 
     // Convert selectedEmployees to an array if it's not already
     const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
         ? requestData.selectedEmployees
         : [requestData.selectedEmployees];
     formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));
 
     if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] exp6 callApvExp6API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP6, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] exp6 Error in callApvExp6API: ', error);
            throw error;
        }
    };
};


/* 전자결재 - 지출 : exp7 법인카드사용보고서 */
export const callApvExp7API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] exp7 callApvExp1API Call');

    const requestURL = `http://localhost:8080/api/approval/insert/exp7`;

     // FormData 객체를 생성하여 데이터를 담기
     const formData = new FormData();
     formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));
 
     // Convert selectedEmployees to an array if it's not already
     const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
         ? requestData.selectedEmployees
         : [requestData.selectedEmployees];
     formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));
 
     if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());


            console.log('[ApprovalAPICalls] exp7 callApvExp7API RESULT : ', result);

            dispatch({ type: POST_APPROVAL_EXP7, payload: result });
            return result;
        } catch (error) {
            console.error('[ApprovalAPICalls] exp7 Error in callApvExp7API: ', error);
            throw error;
        }
    };
};




/* 전자결재 양식 - 인사 */

/* 전자결재 - 인사 : hrm1 연차신청서, hrm2 기타휴가신청서 */
export const callApvHrm1API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] hrm1 callApvHrm1API Call');
    console.log('ApprovalAPICalls requestData', requestData);

    const requestURL = `http://localhost:8080/api/approval/insert/hrm1`;

    // FormData 객체를 생성하여 데이터를 담기
    const formData = new FormData();
    formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));

    // Convert selectedEmployees to an array if it's not already
    const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
        ? requestData.selectedEmployees
        : [requestData.selectedEmployees];
    formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));

    if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] biz1 callApvBiz1API RESULT : ', result);


            dispatch({ type: POST_APPROVAL_HRM1, payload: result });
            return result;

        } catch (error) {
            console.error('[ApprovalAPICalls] hrm1 Error in callApvHrm1API: ', error);
            throw error;
        }

    };
};


/* 전자결재 - 인사 : hrm3 서류발급신청서 */
export const callApvHrm3API = ({ requestData }) => {

    console.log('[ApprovalAPICalls] hrm3 callApvHrm3API Call');
    console.log('ApprovalAPICalls requestData', requestData);

    const requestURL = `http://localhost:8080/api/approval/insert/hrm3`;

    // FormData 객체를 생성하여 데이터를 담기
    const formData = new FormData();
    formData.append('apvFormDTO', new Blob([JSON.stringify(requestData.formData)], { type: 'application/json' }));

    // Convert selectedEmployees to an array if it's not already
    const apvLineDTOsArray = Array.isArray(requestData.selectedEmployees)
        ? requestData.selectedEmployees
        : [requestData.selectedEmployees];
    formData.append('apvLineDTOs', new Blob([JSON.stringify(apvLineDTOsArray)], { type: 'application/json' }));

    if (requestData.attachedFiles.length > 0) {
        requestData.attachedFiles.forEach(file => {
            formData.append('apvFileDTO', file);
        });
    }

    return async (dispatch, getState) => {
        try {
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                },
                body: formData, // 멀티파트 데이터를 전송합니다.
            })
                .then(response => response.json());

            console.log('[ApprovalAPICalls] hrm3 callApvHrm3API RESULT : ', result);


            dispatch({ type: POST_APPROVAL_HRM1, payload: result });
            return result;

        } catch (error) {
            console.error('[ApprovalAPICalls] hrm3 Error in callApvHrm3API: ', error);
            throw error;
        }

    };
};


