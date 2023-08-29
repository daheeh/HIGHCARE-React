import { createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_MEMBER = 'treeview/GET_MEMBER';

export const GET_TREEVIEW_ONE = 'treeview/GET_TREEVIEW_ONE';

export const GET_TREEVIEW_TWO = 'treeview/GET_TREEVIEW_TWO';

const actions = createActions({
    [GET_MEMBER]: () => {},
    [GET_TREEVIEW_ONE]:() => {},
    [GET_TREEVIEW_TWO]:() => {}
    
});

const TreeReduccer = handleActions(
    {
        [GET_MEMBER]: (state, {payload}) => {
            return payload;
        },
        [GET_TREEVIEW_ONE]: (state, {payload}) => {
            return payload;
        },
        [GET_TREEVIEW_TWO]: (state, {payload}) => {
            return payload;
        }
    },
    initialState  
);



export default TreeReduccer;
