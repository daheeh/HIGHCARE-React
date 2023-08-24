import rootReducer from './modules';
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import memberReducer from './modules/memberSlice'
import adminReducer from './modules/adminSlice'
import authReducer from './modules/authSlice'
import { configureStore } from '@reduxjs/toolkit';
import approvalReducer from './modules/ApprovalModule';
import boardReducer from './modules/BoardModule';
import mypageReducer from './modules/MypageModule';



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
        mypage: mypageReducer
        // 마이페이지리듀서에서 마이페이지로 간다는 뜻, 선생님 파일에선 콤바인

    },
    preloadedState: persistedState, // Set initial state from localStorage
    middleware: [ReduxThunk]
});

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState())); // Save state to localStorage on every state change
  });

export default store;