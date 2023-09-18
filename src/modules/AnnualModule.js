import { createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_ANNUAL = "pmannual/GET_ANNUAL";


export const GET_PM_ANNUAL = "pmannual/GET_PM_ANNUAL";

const actions = createActions({

    [GET_ANNUAL]:() => {},
    [GET_PM_ANNUAL]:() => {},
    
});

const pmAnnualReduccer = handleActions(
    {
        [GET_ANNUAL]: (state, {payload}) => {
            return payload;   
        },
        [GET_PM_ANNUAL]: (state, {payload}) => {
            return payload;   
        },
        
        
    },
    initialState  
);



export default pmAnnualReduccer;
//갈라