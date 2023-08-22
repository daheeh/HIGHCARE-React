import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authes',  // 리듀서 이름 
    initialState: {
        id: '',
        message: '',
        statenumber: '',
        accessExpiretime: 0,
        refreshExpiretime: 0,
    },
    reducers: {
        authSettingAction: (state, {payload}) => {
        console.log("authSettingAction", payload);
        const {role, accessTokenExpiresIn} = payload.data;
            
        state.id = role[0].id;
        state.message = payload.message;
        state.statenumber = payload.status;
        state.accessExpiretime = accessTokenExpiresIn;
        state.refreshExpiretime = 600000;
        }
    },
    extraReducers:{}
})


// 액션 생성자 내보내기 
export const { authSettingAction } = authSlice.actions; 
// 리듀서 내보내기 -- store에 저장
export default authSlice.reducer; 
