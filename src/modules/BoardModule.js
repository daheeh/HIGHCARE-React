import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_BOARD = 'board/GET_BOARD';
export const POST_BOARD = 'board/POST_BOARD';
export const GET_BOARDS = 'board/GET_BOARDS';
export const GET_BOARDD = 'board/GET_BOARDD';
export const POST_REGISTER = 'board/POST_REGISTER';

const actions = createActions({
    [GET_BOARD]: () => {},
    [POST_BOARD]: () => {},
    [GET_BOARDS]: () => {},
    [GET_BOARDD]: () => {},
    [POST_REGISTER]: () => {}
});

const boardReducer = handleActions(
    {
        [GET_BOARD]: (state, {payload}) =>{
            return payload;
        },
        [GET_BOARDS]: (state, {payload})=>{
            return payload;
        },
        [POST_BOARD]: (state, {payload})=> {
            return payload;
        },
        [GET_BOARDD]: (state, {payload})=> {
            return payload;
        },
        [POST_REGISTER]: (state, {payload})=>{
            return payload;
        }
    },
    initialState
);

export default boardReducer;