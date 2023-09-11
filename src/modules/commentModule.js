import { createActions, handleActions } from 'redux-actions';

const initialState = [];


export const GET_COMMENT = 'comment/GET_COMMENT';
export const PUT_COMMENT = 'comment/PUT_COMMENT';
export const PUT_COMMENTS = 'comment/PUT_COMMENTS';
export const POST_REGISTERS = 'comment/POST_REGISTERS';

const actions = createActions({
    [GET_COMMENT]: () => {},
    [PUT_COMMENT]: () => {},
    [PUT_COMMENTS]: () => {},
    [POST_REGISTERS]: () => {}
});

const commentReducer = handleActions(
    {
        [GET_COMMENT]:(state, {payload})=>{
            return payload;
        },
        [PUT_COMMENT]:(state, {payload})=>{
            return payload;
        },
        [PUT_COMMENTS]:(state, {payload})=>{
            return payload;
        },
        [POST_REGISTERS]:(state, {payload})=>{
            return payload;
        }
    },
    initialState
);

export default commentReducer;