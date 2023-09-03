import { createSlice } from "@reduxjs/toolkit";
import { kakaoAuth } from "../apis/OAuthApiCalls";
import { authCheckAPI, authCodeSendingAPI } from "../apis/AuthAPICalls";

const initialState = {
    id: '',
    password: '',
    empNo: '',
    accessExp: 0,
    refreshExp: 0,
    name: '',
    dept: '',
    job: '',
    isLogin: false,
    role: '',
    status: '',
    data: '',
    isTempPwd: 'N',
    requestCode: false,
    requestMessage: '',
    expireTime: 0,

}

const authSlice = createSlice({
    name: 'authes',  // 리듀서 이름 
    initialState,
    reducers: {
        loginAction: (state, { payload }) => {       // state는 잡아놓은 초기값의 value를 가져오는 역할 
            // actions안에 payload, type 원하는 곳에 넘겨주는 역할 
            console.log("login : ", payload);

            state.id = payload.id;
            state.name = payload.data.memberName;
            state.empNo = payload.data.empNo;
            state.accessExp = payload.data.accessTokenExpiresIn;
            state.refreshExp = payload.data.refreshTokenExpiresIn;
            state.dept = payload.data.deptName;
            state.job = payload.data.jobName;
            state.isLogin = true;
            state.role = payload.data.role;
            state.isTempPwd = payload.data.isTempPwd;
            state.status = payload.status;
        },
        logoutAction: (state, { payload }) => {
            Object.assign(state, initialState);  // state 초기 initialState로 변경 
        },
        reissueAction: (state, { payload }) => {
            console.log("reissueAction : ", state, payload);
            // action.payload에서 가져온 data 
            const { accessTokenExpiresIn } = payload.data;
            state.accessExp = accessTokenExpiresIn;

        },
        resetAuthesAction: (state, { payload }) => {
            console.log('resetAuthesAction ');
            Object.assign(state, initialState);
        },
        updateAuthExpireTime: (state, action) => {
            state.expireTime = action.payload;
        },
        updateAuthRequestCode: (state, action) => {
            state.requestCode = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(kakaoAuth.pending, (state, action) => {
                console.log("pending.....");
            })
            .addCase(kakaoAuth.fulfilled, (state, { payload }) => {
                // 비동기 작업 성공하면 업데이트됨 
                console.log("fulfilled...!!");
                state.id = payload.id;
                state.name = payload.data.memberName;
                state.empNo = payload.data.empNo;
                state.accessExp = payload.data.accessTokenExpiresIn;
                state.refreshExp = payload.data.refreshTokenExpiresIn;
                state.dept = payload.data.deptName;
                state.job = payload.data.jobName;
                state.isLogin = true;
                state.role = payload.data.role;
                state.status = payload.status;
                state.data = payload.data;
            })
            .addCase(kakaoAuth.rejected, (state, action) => {
                // 비동기 작업이 실패한 경우 -> 나중에 에러 처리 수정하기 
                state.data = '';
                console.log("rejected!!!!!!");
                console.error(action.error);
            })
            .addCase(authCodeSendingAPI.fulfilled, (state, { payload }) => {

                // state.data = payload;
                state.requestCode = payload.code;
                state.requestMessage = payload.message;
                state.expireTime = payload.timeout;

            })
            .addCase(authCheckAPI.fulfilled, (state, { payload }) => {
                console.log("payload!!!!!!",payload);
                state.requestMessage = payload.requestMessage;
                state.id = payload.findId
            })
           
    },
});


// 액션 생성자 내보내기 
export const { loginAction, logoutAction, reissueAction,resetAuthesAction, updateAuthRequestCode, updateAuthExpireTime } = authSlice.actions;
// 리듀서 내보내기 -- store에 저장
export default authSlice.reducer; 
