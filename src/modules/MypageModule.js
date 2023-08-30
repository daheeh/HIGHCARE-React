import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_MYPAGE_SELECT = 'mypage/GET_MYPAGE_SELECT';      // 조회 
export const POST_MYPAGE_PROFILE = 'mypage/POST_MYPAGE_PROFILE';   // 프로필



const actions = createActions({
    [GET_MYPAGE_SELECT]: () => {},
    [POST_MYPAGE_PROFILE]: () => {}
})

const mypageReducer = handleActions(
    {
        [GET_MYPAGE_SELECT]: (state, {payload}) => {
            return payload;
        },

        [POST_MYPAGE_PROFILE]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default mypageReducer;