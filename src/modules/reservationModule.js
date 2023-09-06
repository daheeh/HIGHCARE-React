import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_RES = 'res/GET_RES';
export const POST_RES = 'res/POST_RES';
export const POST_RESR = 'res/POST_RESR';
export const PUT_RES = 'res/PUT_RES';
const actions = createActions({
    [GET_RES]: () => {},
    [POST_RES]: () => {},
    [POST_RESR]: () => {},
    [PUT_RES]: () => {}
});

const resReducer = handleActions(
    {
        [GET_RES]: (state, {payload})=>{
            return payload;
        },
        [POST_RES]: (state, {payload})=>{
            return payload;
        },
        [POST_RESR]: (state, {payload})=>{
            return payload;
        },
        [PUT_RES]: (state, {payload})=>{
            return payload;
        }
    },
    initialState
);

export default resReducer;

