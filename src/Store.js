import rootReducer from './modules';
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import memberReducer from './modules/memberSlice'
import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './modules/adminSlice';
import authReducer from './modules/authSlice';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(ReduxThunk))
// );

// Get persisted state from localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Create store using configureStore from @reduxjs/toolkit
const store = configureStore({
  reducer: {
    members: memberReducer,
    admins: adminReducer,
    authes: authReducer,
    root: rootReducer,
  },
  preloadedState: persistedState, // Set initial state from localStorage
  middleware: [ReduxThunk],
});

// Subscribe to store changes and save state to localStorage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;