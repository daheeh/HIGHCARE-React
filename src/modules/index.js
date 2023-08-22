import { combineReducers } from 'redux';
import approvalReducer from './ApprovalModule';
import boardReducer from './BoardModule';

const rootReducer = combineReducers({
    approvalReducer,
    boardReducer
});
export default rootReducer;