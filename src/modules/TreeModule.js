import { createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_MEMBER = 'treeview/GET_MEMBER';


const actions = createActions({
    [GET_MEMBER]: () => {}
});

const TreeReduccer = handleActions(
    {
        [GET_MEMBER]: (state, {payload}) => {
            console.log("payload : ", payload);
            return payload;
        }
    },
    initialState  
);

export default TreeReduccer;
