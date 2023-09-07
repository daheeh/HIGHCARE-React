import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const POST_RESULT = 'result/POST_RESULT';
export const POST_RESULTS = 'result/POST_RESULTS';
export const POST_RESULTSA = 'result/POST_RESULTSA';
const actions = createActions({
    [POST_RESULT]: () => {},
    [POST_RESULTS]:() => {},
    [POST_RESULTSA]:() => {}
});

const resStatusReducer = handleActions(
    {
        [POST_RESULT]: (state, {payload})=>{
            return payload;
        },
        [POST_RESULTS]: (state, {payload})=> {
            return payload;
        },
        [POST_RESULTSA]: (state, {payload})=> {
            return payload;
        }
    },
    initialState
);

export default resStatusReducer;