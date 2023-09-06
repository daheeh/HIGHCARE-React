import {combineReducers} from 'redux';
import authes  from '../pages/chatting/ChattingMain';
import conversationlist from './ConversationList'

require('dotenv').config();

const rootReducer = combineReducers({
    authes ,
    conversationlist
});

export default rootReducer;