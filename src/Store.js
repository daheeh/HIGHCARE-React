import rootReducer from './modules';
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import memberReducer from './modules/memberSlice'
import { configureStore } from '@reduxjs/toolkit';
import approvalReducer from './modules/ApprovalModule';
import boardReducer from './modules/BoardModule';



const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
    reducer: {
        members: memberReducer,
        approval : approvalReducer,
        boardtest : boardReducer

    },
    preloadedState: persistedState, // Set initial state from localStorage
    middleware: [ReduxThunk]
});


store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState())); // Save state to localStorage on every state change
  });

export default store;