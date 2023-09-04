import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CONTENT = 'content/GET_CONTENT';
const actions = createActions({
    [GET_CONTENT]: () => {},
});

const resContentReducer = handleActions(
    {
        [GET_CONTENT]: (state, {payload})=>{
            return payload;
        }
    },
    initialState
);

export default resContentReducer;

