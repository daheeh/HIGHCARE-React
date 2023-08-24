import rootReducer from './modules';
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import memberReducer from './modules/memberSlice'
import adminReducer from './modules/adminSlice'
import authReducer from './modules/authSlice'
import { configureStore } from '@reduxjs/toolkit';
import approvalReducer from './modules/ApprovalModule';
import boardReducer from './modules/BoardModule';


//새로고침해도 state 값이 사라지지 않도록, localstorage에 reducer를 저장
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
    reducer: {
        members: memberReducer,
        approval : approvalReducer,
        boardtest : boardReducer,
        admins: adminReducer,
        authes: authReducer,

    },
    preloadedState: persistedState, // Set initial state from localStorage
    middleware: [thunkMiddleware]
});

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState())); 
  });

export default store;