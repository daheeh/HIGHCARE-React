import thunkMiddleware from 'redux-thunk';
import memberReducer from './modules/memberSlice'
import adminReducer from './modules/adminSlice'
import authReducer from './modules/authSlice'
import { configureStore } from '@reduxjs/toolkit';
import approvalReducer from './modules/ApprovalModule';
import boardReducer from './modules/BoardModule';

import TreeReduccer from './modules/TreeModule';

import mypageReducer from './modules/MypageModule';
import secondReduccer from './modules/SecondTreeModule';
import ManagementReduccer from './modules/ManageMentModule';



//새로고침해도 state 값이 사라지지 않도록, localstorage에 reducer를 저장
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  // ? (localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
    reducer: {
        members: memberReducer,
        approval : approvalReducer,
        boardtest : boardReducer,
        admins: adminReducer,
        authes: authReducer,
        treeview: TreeReduccer,
        mypage: mypageReducer,
        second: secondReduccer,
        manage: ManagementReduccer

        // 마이페이지리듀서에서 마이페이지로 간다는 뜻, 선생님 파일에선 콤바인

    },
    preloadedState: persistedState, // Set initial state from localStorage
    middleware: [thunkMiddleware]
});

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState())); 
  });

export default store;