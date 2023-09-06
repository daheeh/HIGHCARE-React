import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_DATERES= 'dateres/GET_DATERES';
const actions = createActions({
    [GET_DATERES]: () => {}
});

const dateReducer = handleActions(
    {
        [GET_DATERES]: (state, {payload})=>{
            return payload;
        }
    },
    initialState
);

export default dateReducer;
