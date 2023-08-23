import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authes',  // 리듀서 이름 
    initialState: {
        id: '',
        empNo: '',
        roles: [],
    },
    reducers: {
        authSettingAction: (state, { payload }) => {
            console.log("authSettingAction", payload);
            const { id, empNo, roles } = payload.data;
            state.id = roles[0].id;
            state.empNo = empNo;
            state.roles = roles.map(role => role.authCode).filter((code, index, self) => self.indexOf(code) === index);
        },
    },
})


// 액션 생성자 내보내기 
export const { authSettingAction } = authSlice.actions;
// 리듀서 내보내기 -- store에 저장
export default authSlice.reducer; 
