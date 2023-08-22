import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_BOARD = 'board/GET_BOARD';
export const POST_BOARD = 'board/POST_BOARD';

const actions = createActions({
    [GET_BOARD]: () => {},
    [POST_BOARD]: () => {}
});

const boardReducer = handleActions(
    {
        [GET_BOARD]: (state, {payload}) =>{
            return payload;
        },
        [POST_BOARD]: (state, {payload})=> {
            return payload;
        }
    },
    initialState
);

export default boardReducer;