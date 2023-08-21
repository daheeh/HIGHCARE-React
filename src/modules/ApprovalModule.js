import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_APROVAL_STATUS = 'approval/GET_APROVAL_STATUS';
export const POST_APPROVAL_EXP2 = 'approval/POST_APPROVAL_EXP2';

const actions = createActions({
    [GET_APROVAL_STATUS]: () => {},
    [POST_APPROVAL_EXP2]: () => {}
})

const approvalReducer = handleActions(
    {
        [GET_APROVAL_STATUS]: (state, {payload}) => {
            return payload;
        },
        [POST_APPROVAL_EXP2]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default approvalReducer;