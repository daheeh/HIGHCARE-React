import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const POST_RESULT = 'result/POST_RESULT';
const actions = createActions({
    [POST_RESULT]: () => {},
});

const resStatusReducer = handleActions(
    {
        [POST_RESULT]: (state, {payload})=>{
            return payload;
        }
    },
    initialState
);

export default resStatusReducer;