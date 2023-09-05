import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_LISTRES = 'listres/GET_LISTRES';
const actions = createActions({
    [GET_LISTRES]: () => {},
});

const resListReducer = handleActions(
    {
        [GET_LISTRES]: (state, {payload})=>{
            return payload;
        }
    },
    initialState
);

export default resListReducer;

