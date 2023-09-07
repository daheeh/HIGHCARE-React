import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_MYRES = 'reser/GET_MYRES';
export const GET_MYRESALL = 'reser/GET_MYRESALL';
const actions = createActions({
    [GET_MYRES]: () => {},
    [GET_MYRESALL]: () => {}
});

const reserReducer = handleActions(
    {
        [GET_MYRES]: (state, {payload})=>{
            return payload;
        },
        [GET_MYRESALL]: (state, {payload})=> {
            return payload;
        }
    },
    initialState
);

export default reserReducer;
