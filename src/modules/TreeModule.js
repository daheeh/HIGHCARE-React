import { createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_MEMBER = 'treeview/GET_MEMBER';

export const GET_TREEVIEW_ONE = 'treeview/GET_TREEVIEW_ONE';

const actions = createActions({
    [GET_MEMBER]: () => {},
    [GET_TREEVIEW_ONE]:() => {},

    
});

const TreeReduccer = handleActions(
    {
        [GET_MEMBER]: (state, {payload}) => {
            return payload;
        },
        [GET_TREEVIEW_ONE]: (state, {payload}) => {
            return payload;
        }
        
    },
    initialState  
);




export default TreeReduccer;
