import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */

export const GET_APROVAL_MAIN_TODAY1 = 'approval/GET_APROVAL_MAIN_TODAY1';


export const GET_APROVAL_WRITEBOX = 'approval/GET_APROVAL_WRITEBOX';

export const POST_APPROVAL_EXP1 = 'approval/POST_APPROVAL_EXP1';
export const POST_APPROVAL_EXP2 = 'approval/POST_APPROVAL_EXP2';
export const POST_APPROVAL_EXP6 = 'approval/POST_APPROVAL_EXP6';

export const POST_APPROVAL_HRM1 = 'approval/POST_APPROVAL_HRM1';
export const POST_APPROVAL_HRM3 = 'approval/POST_APPROVAL_HRM3';

export const POST_APPROVAL_BIZ1 = 'approval/POST_APPROVAL_BIZ1';

const actions = createActions({

    [GET_APROVAL_MAIN_TODAY1]: () => {},

    [GET_APROVAL_WRITEBOX]: () => {},
    
    [POST_APPROVAL_EXP1]: () => {},
    [POST_APPROVAL_EXP2]: () => {},
    [POST_APPROVAL_EXP6]: () => {},
    
    [POST_APPROVAL_HRM1]: () => {},
    [POST_APPROVAL_HRM3]: () => {},
    
    [POST_APPROVAL_BIZ1]: () => {},
})

const approvalReducer = handleActions(
    {
        [GET_APROVAL_MAIN_TODAY1]: (state, {payload}) => {
            return payload;
        },


        [GET_APROVAL_WRITEBOX]: (state, {payload}) => {
            return payload;
        },


        [POST_APPROVAL_EXP1]: (state, {payload}) => {
            return payload;
        },
        [POST_APPROVAL_EXP2]: (state, {payload}) => {
            return payload;
        },

        [POST_APPROVAL_EXP6]: (state, {payload}) => {
            return payload;
        },


        [POST_APPROVAL_HRM1]: (state, {payload}) => {
            return payload;
        },
        [POST_APPROVAL_HRM3]: (state, {payload}) => {
            return payload;
        },


        [POST_APPROVAL_BIZ1]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default approvalReducer;