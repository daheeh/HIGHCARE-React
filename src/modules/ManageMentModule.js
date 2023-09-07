import { createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_MANAGEMENT = "manage/GET_MANAGEMENT";

export const POST_PM_MANAGEMENT = "manage/POST_PM_MANAGEMENT";

export const POST_PM_END = "manage/POST_PM_END";


const actions = createActions({
    [GET_MANAGEMENT]:() => {},

    [POST_PM_MANAGEMENT]:() => {},
    [POST_PM_END]:() => {},


    
});

const ManagementReduccer = handleActions(
    {
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



export default ManagementReduccer;
