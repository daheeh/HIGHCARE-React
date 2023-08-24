import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        id: '',
        password:'',
        empNo:'',
        accessExp:0,
        refreshExp:0,
        name: '',
        dept:'',
        job:'',
        isLogin: false,
        role:'',
        status:'',
}
const authSlice = createSlice({
    name: 'authes',  // 리듀서 이름 
    initialState,
    reducers: {
        loginAction: (state, {payload}) => {       // state는 잡아놓은 초기값의 value를 가져오는 역할 
                                                // actions안에 payload, type 원하는 곳에 넘겨주는 역할 
            console.log("login : ", payload);
            // state.id = payload.id;
            state.name = payload.data.memberName; 
            state.empNo = payload.data.empNo;
            state.accessExp = payload.data.accessTokenExpiresIn;
            state.refreshExp = payload.data.refreshTokenExpiresIn;
            state.dept = payload.data.deptName;
            state.job = payload.data.jobName; 
            state.isLogin = true; 
            state.role =payload.data.role;
            state.status = payload.status;
        },
        logoutAction: (state, {payload}) => {
            state.id = '';
            state.password = '';
            state.empNo = '';
            state.accessExp= 0;
            state.refreshExp = 0;
            state.name = '';
            state.dept = '';
            state.job = '';  
            state.isLogin = false; 
            state.role = '';
        },
        reissueAction: (state, {payload}) => {
            console.log("reissueAction : ", state, payload);
            // action.payload에서 가져온 data 
            const {accessTokenExpiresIn } = payload.data; 
            state.accessExp = accessTokenExpiresIn;

        }, 
    }, 
    
    
})


// 액션 생성자 내보내기 
export const { loginAction, logoutAction, reissueAction } = authSlice.actions; 
// 리듀서 내보내기 -- store에 저장
export default authSlice.reducer; 
