import { createActions, handleActions } from "redux-actions";

const initialState =[];


export const GET_MYPAGE_SELECT = 'mypage/GET_MYPAGE_SELECT';      // 조회 
export const POST_MYPAGE_PROFILE = 'mypage/POST_MYPAGE_PROFILE';   // 프로필
export const  GET_MYPAGE_ANNSELECT = 'mypage/GET_MYPAGE_ANNSELECT';    // 연차조회
export const  GET_MYPAGE_MANSELECT = 'mypage/GET_MYPAGE_MANSELECT';    // 근태조회
export const GET_RESET_MANSELECT = "mypage/GET_RESET_MANSELECT";


const actions = createActions({
    [GET_MYPAGE_SELECT]: () => {},
    [POST_MYPAGE_PROFILE]: () => {},
    [ GET_MYPAGE_ANNSELECT]: () => {},
    [GET_MYPAGE_MANSELECT]: () => {},
    [ GET_RESET_MANSELECT]:() => {},

})

const mypageReducer = handleActions(
    {
        [GET_MYPAGE_SELECT]: (state, {payload}) => {
            return payload;
        },

        [POST_MYPAGE_PROFILE]: (state, {payload}) => {
            return payload;
        },

        [ GET_MYPAGE_ANNSELECT]: (state, {payload}) => {
            return payload;
        },
        [ GET_MYPAGE_MANSELECT]: (state, {payload}) => {
            return payload;
        },
        [ GET_RESET_MANSELECT]: (state, {payload}) => {
           return Object.assign(state, initialState);
            
        },


    },
    initialState
);

export default mypageReducer;