import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_APROVAL_STATUS = 'product/GET_APROVAL_STATUS';

const actions = createActions({
    [GET_APROVAL_STATUS]: () => {},
});


const approvalReducer = handleActions(
    {
        [GET_APROVAL_STATUS]: (state, { payload }) => {
            
            return payload;
        }       
    },
    initialState
);

export default approvalReducer;