import { createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_PM_MEMBER = "pmmem/GET_PM_MEMBER";

export const POST_PM_INSERT = "pmmem/POST_PM_INSERT";



const actions = createActions({
    [GET_PM_MEMBER]:() => {},
    [POST_PM_INSERT]:() => {},

    
});

const pmMemberReduccer = handleActions(
    {
        [GET_PM_MEMBER]: (state, {payload}) => {
            return payload;   
        },
        [POST_PM_INSERT]: (state, {payload}) => {
            return payload;  
        },
    },
    initialState  
);



export default pmMemberReduccer;
//갈라