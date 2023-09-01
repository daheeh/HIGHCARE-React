import { createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_MEMBER = 'treeview/GET_MEMBER';

export const GET_TREEVIEW_ONE = 'treeview/GET_TREEVIEW_ONE';

export const GET_MANAGEMENT = "treeview/GET_MANAGEMENT";

export const POST_PM_MANAGEMENT = "treeview/POST_PM_MANAGEMENT";

export const POST_PM_END = "treeview/POST_PM_END";

const actions = createActions({
    [GET_MEMBER]: () => {},
    [GET_TREEVIEW_ONE]:() => {},
    [GET_MANAGEMENT]:() => {},

    [POST_PM_MANAGEMENT]:() => {},
    [POST_PM_END]:() => {}
    
});

const TreeReduccer = handleActions(
    {
        [GET_MEMBER]: (state, {payload}) => {
            return payload;
        },
        [GET_TREEVIEW_ONE]: (state, {payload}) => {
            return payload;
        },
        [GET_MANAGEMENT]: (state, {payload}) => {
            return payload;
        },

        [POST_PM_MANAGEMENT]: (state, {payload}) => {
            return payload;
        },
        [POST_PM_END]: (state, {payload}) => {
            return payload;
        },
        
    },
    initialState  
);




export default TreeReduccer;
