import rootReducer from './modules';
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import memberReducer from './modules/memberSlice'
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(ReduxThunk))

// );

export default configureStore({
    reducer: {
        members: memberReducer,
        root: rootReducer
    },
    middleware: [ReduxThunk]
});

// export default store;