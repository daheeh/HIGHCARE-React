import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */

export const GET_APROVAL_MAIN_TODAY1 = 'approval/GET_APROVAL_MAIN_TODAY1';


export const GET_APROVAL_WRITEBOX = 'approval/GET_APROVAL_WRITEBOX';
export const GET_APROVAL_RECEIVEBOX = 'approval/GET_APROVAL_RECEIVEBOX';

export const POST_APPROVAL_BIZ1 = 'approval/POST_APPROVAL_BIZ1';
export const GET_APPROVAL_BIZ1 = 'approval/GET_APPROVAL_BIZ1';
export const PUT_APPROVAL_BIZ1 = 'approval/PUT_APPROVAL_BIZ1';

export const POST_APPROVAL_BIZ2 = 'approval/POST_APPROVAL_BIZ2';
export const POST_APPROVAL_BIZ3 = 'approval/POST_APPROVAL_BIZ3';


export const POST_APPROVAL_EXP1 = 'approval/POST_APPROVAL_EXP1';
export const GET_APPROVAL_EXP1 = 'approval/GET_APPROVAL_EXP1';
export const PUT_APPROVAL_EXP1 = 'approval/PUT_APPROVAL_EXP1';

export const POST_APPROVAL_EXP2 = 'approval/POST_APPROVAL_EXP2';
export const GET_APPROVAL_EXP4 = 'approval/GET_APPROVAL_EXP4';
export const POST_APPROVAL_EXP4 = 'approval/POST_APPROVAL_EXP4';
export const POST_APPROVAL_EXP6 = 'approval/POST_APPROVAL_EXP6';
export const POST_APPROVAL_EXP7 = 'approval/POST_APPROVAL_EXP7';

export const POST_APPROVAL_HRM1 = 'approval/POST_APPROVAL_HRM1';
export const GET_APPROVAL_HRM1 = 'approval/GET_APPROVAL_HRM1';
export const PUT_APPROVAL_HRM1 = 'approval/PUT_APPROVAL_HRM1';

export const POST_APPROVAL_HRM3 = 'approval/POST_APPROVAL_HRM3';

export const getPreviousValues = (previousValues) => ({
    type: GET_APPROVAL_EXP4,
    payload: previousValues,
});


const actions = createActions({

    [GET_APROVAL_MAIN_TODAY1]: () => { },

    [GET_APROVAL_WRITEBOX]: () => { },
    [GET_APROVAL_RECEIVEBOX]: () => { },

    [POST_APPROVAL_BIZ1]: () => { },
    [GET_APPROVAL_BIZ1]: () => { },
    [PUT_APPROVAL_BIZ1]: () => { },

    [POST_APPROVAL_BIZ2]: () => { },
    [POST_APPROVAL_BIZ3]: () => { },

    [POST_APPROVAL_EXP1]: () => { },
    [GET_APPROVAL_EXP1]: () => { },
    [PUT_APPROVAL_EXP1]: () => { },

    [POST_APPROVAL_EXP2]: () => { },
    [GET_APPROVAL_EXP4]: (previousValues) => ({ previousValues }),
    [POST_APPROVAL_EXP4]: () => { },
    [POST_APPROVAL_EXP6]: () => { },
    [POST_APPROVAL_EXP7]: () => { },

    [POST_APPROVAL_HRM1]: () => { },
    [GET_APPROVAL_HRM1]: () => { },
    [PUT_APPROVAL_HRM1]: () => { },

    [POST_APPROVAL_HRM3]: () => { },

})

const approvalReducer = handleActions(
    {
        [GET_APROVAL_MAIN_TODAY1]: (state, { payload }) => {
            return payload;
        },
        [GET_APROVAL_WRITEBOX]: (state, { payload }) => {
            return payload;
        },
        [GET_APROVAL_RECEIVEBOX]: (state, { payload }) => {
            return payload;
        },


        [POST_APPROVAL_BIZ1]: (state, { payload }) => {
            return payload;
        },
        [GET_APPROVAL_BIZ1]: (state, { payload }) => {
            return payload;
        },
        [PUT_APPROVAL_BIZ1]: (state, { payload }) => {
            return payload;
        },

        [POST_APPROVAL_BIZ2]: (state, { payload }) => {
            return payload;
        },
        [POST_APPROVAL_BIZ3]: (state, { payload }) => {
            return payload;
        },




        [POST_APPROVAL_EXP1]: (state, { payload }) => {
            return payload;
        },
        [GET_APPROVAL_EXP1]: (state, { payload }) => {
            return payload;
        },
        [PUT_APPROVAL_EXP1]: (state, { payload }) => {
            return payload;
        },


        [POST_APPROVAL_EXP2]: (state, { payload }) => {
            return payload;
        },
        [GET_APPROVAL_EXP4]: (state, { payload }) => ({
            ...state,
            previousValues: payload,
        }),

        [POST_APPROVAL_EXP4]: (state, { payload }) => {
            return {
                ...state,
                payload,
            };
        },
        [POST_APPROVAL_EXP6]: (state, { payload }) => {
            return payload;
        },
        [POST_APPROVAL_EXP7]: (state, { payload }) => {
            return payload;
        },



        [POST_APPROVAL_HRM1]: (state, { payload }) => {
            return payload;
        },
        [GET_APPROVAL_HRM1]: (state, { payload }) => {
            return payload;
        },
        [PUT_APPROVAL_HRM1]: (state, { payload }) => {
            return payload;
        },


        [POST_APPROVAL_HRM3]: (state, { payload }) => {
            return payload;
        },

    },
    initialState
);

export default approvalReducer;