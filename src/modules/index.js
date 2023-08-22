import { combineReducers } from 'redux';
import approvalReducer from './ApprovalModule';
import boardReducer from './BoardMocule';

const rootReducer = combineReducers({
    approvalReducer,

    boardReducer

    
});
export default rootReducer;