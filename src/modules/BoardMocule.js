import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_BOARD = 'board/GET_BOARD';

const actions = createActions({
    [GET_BOARD]: () => {}
});

const boardReducer = handleActions(
    {
        [GET_BOARD]: (state, {payload}) =>{
            return [...payload]
        }
    },
    initialState
);

export default boardReducer;