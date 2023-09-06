import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_BOARD = 'board/GET_BOARD';
export const POST_BOARD = 'board/POST_BOARD';
export const GET_BOARDS = 'board/GET_BOARDS';
export const GET_BOARDD = 'board/GET_BOARDD';
export const POST_REGISTER = 'board/POST_REGISTER';
export const POST_REGISTERS = 'board/POST_REGISTERS';
export const PUT_BOARD = 'board/PUT_BOARD';
export const PUT_BOARDS = 'board/PUT_BOARDS';
export const GET_THREAD = 'board/GET_THREAD';
export const PUT_COMMENT = 'board/PUT_COMMENT';
export const PUT_COMMENTS = 'board/PUT_COMMENTS';

const actions = createActions({
    [GET_BOARD]: () => {},
    [POST_BOARD]: () => {},
    [GET_BOARDS]: () => {},
    [GET_BOARDD]: () => {},
    [POST_REGISTER]: () => {},
    [POST_REGISTERS]: () => {},
    [PUT_BOARD]: () => {},
    [PUT_BOARDS]: () => {},
    [GET_THREAD]: () => {},
    [PUT_COMMENT]: () => {},
    [PUT_COMMENTS]: () => {}
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
        },
        [POST_REGISTERS]: (state, {payload})=>{
            return payload;
        },
        [PUT_BOARD]: (state, {payload})=>{
            return payload;
        },
        [PUT_BOARDS]:(state, {payload}) =>{
            return payload;
        },
        [GET_THREAD]:(state, {payload})=>{
            return payload;
        },
        [PUT_COMMENT]:(state, {payload})=>{
            return payload;
        },
        [PUT_COMMENTS]:(state, {payload})=>{
            return payload;
        }
    },
    initialState
);

export default boardReducer;