import { createSlice } from "@reduxjs/toolkit";



const memberSlice = createSlice({
    name: 'members',  // 리듀서 이름 
    initialState: {
        id: '',
        password:'',
        empNo:'',
        name: '',
        dept:'',
        job:'',
        status: false,
        role:'',
        
    },
    reducers: {
        loginAction: (state, {payload}) => {       // state는 잡아놓은 초기값의 value를 가져오는 역할 
                                                // actions안에 payload, type 원하는 곳에 넘겨주는 역할 
            console.log("login : ", payload);
            // state.id = payload.id;
            state.empNo = payload.data.empNo;
            state.name = payload.data.memberName; 
            state.dept = payload.data.deptName;
            state.job = payload.data.jobName; 
            state.status = true; 
            state.role =payload.data.role;
        },
        logoutAction: (state, {payload}) => {
            state.id = '';
            state.password = '';
            state.empNo = '';
            state.name = '';
            state.dept = '';
            state.job = '';  
            state.status = false; 
            state.role = '';

        },
        getmemberAction: (state, {payload}) => {
            console.log("getmember : ", state, payload);
            // action.payload에서 가져온 data 
            const {id, empNo, name, dept, job, status, role} = payload.data; 
            state.id = id;
            state.empNo = empNo;
            state.name = name; 
            state.dept = dept;
            state.job = job; 
            state.status = status;
            state.role = role

        }
    },
    extraReducers:{}
})


// 액션 생성자 내보내기 
export const { loginAction, logoutAction, getmemberAction } = memberSlice.actions; 
// 리듀서 내보내기 -- store에 저장
export default memberSlice.reducer; 
