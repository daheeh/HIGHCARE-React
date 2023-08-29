import { createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_TREEVIEW_TWO = 'second/GET_TREEVIEW_TWO';

const actions = createActions({
    [GET_TREEVIEW_TWO]:() => {}
    
});

const secondReduccer = handleActions(
    {
        [GET_TREEVIEW_TWO]: (state, {payload}) => {
            return payload;
        }
    },
    initialState  
);



export default secondReduccer;