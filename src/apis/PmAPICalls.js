import {
    GET_TREEVIEW_ONE
} from '../modules/TreeModule';
import {
    GET_MEMBER,
} from '../modules/PmMeModule';
import {
    GET_TREEVIEW_TWO
} from '../modules/SecondTreeModule';
import {
    GET_MANAGEMENT,
    POST_PM_MANAGEMENT,
    POST_PM_END
} from '../modules/ManageMentModule';

import { async } from '@dabeng/react-orgchart';

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
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
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
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                }
            })
            .then(response => {
                console.log('-----------------> \n', response);
                return response.json()
            });
    
            console.log('[PmAPICalls] callTreeviewTwoAPI RESULT :>>>>>>>>>>>>>>>> ', result.data);
    
            dispatch({type: GET_TREEVIEW_TWO, payload: result.data});
        } catch(error) {
            console.error('[PmAPICalls] Error in callTreeviewTwoAPI: ', error);
        }
        };
    };

export const callManagementAPI = () => {
        console.log('[PmAPICalls] callManagementAPI Call');
        
        const requestURL = `http://localhost:8080/api/pm/management`;
        
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
        
                console.log('[PmAPICalls] callManagementAPI RESULT :>>>>>>>>>>>>>>>> ', result);
        
                dispatch({type: GET_MANAGEMENT, payload: result});
            } catch(error) {
                console.error('[PmAPICalls] Error in callManagementAPI: ', error);
            }
            };
        };

export const callMgStartAPI = ({ formData }) => {
    console.log('[PmAPICalls] callMgStartAPI Call');
    
    const requestURL = `http://localhost:8080/api/pm/management/insert`;
    
    return async (dispatch, getState) => {

        console.log('[PmAPICalls] callMgStartAPI formData : ', formData);
        try{
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(formData),
            })
            // .then(response => {
            //     console.log('-----------------> \n', response);
            //     return response.json()
            // });
            .then(response => response.json());

            console.log('[ApprovalAPICalls] callMgEndtAPI RESULT : ', result);

            dispatch({ type: POST_PM_MANAGEMENT, payload: result });
            return result;

        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callMgEndtAPI: ', error);
            throw error;
        }

    };
};

export const callMgEndAPI = ({ formData }) => {
    console.log('[PmAPICalls] callMgEndAPI Call');
    
    const requestURL = `http://localhost:8080/api/pm/management/update`;
    
    return async (dispatch, getState) => {

        console.log('[PmAPICalls] callMgEndAPI formData : ',formData );
        try{
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(formData),
            })
            // .then(response => {
            //     console.log('-----------------> \n', response);
            //     return response.json()
            // });
            .then(response => response.json());

            console.log('[ApprovalAPICalls] callMgEndAPI RESULT : ', result);

            dispatch({ type: POST_PM_END, payload: result });
            return result;

        } catch (error) {
            console.error('[ApprovalAPICalls] Error in callMgEndAPI: ', error);
            throw error;
        }

    };
};




