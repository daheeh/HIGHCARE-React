import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admins',  // 리듀서 이름 
    initialState: {
        id: '',
        empNo:'',
        name: '',
        dept:'',
        job:'',
        role:'',
        
    },
    reducers: {
        modifyMemberAction: (state, {payload}) => {
            console.log("getLoginInfo : ", state, payload);
            // action.payload에서 가져온 data 
            const {id, empNo, name, dept, job, role} = payload.data; 
            state.id = id;
            state.empNo = empNo;
            state.name = name; 
            state.dept = dept;
            state.job = job; 
            state.role = role
        }
    },
    extraReducers:''
})


// 액션 생성자 내보내기 
export const { modifyMemberAction } = adminSlice.actions; 
// 리듀서 내보내기 -- store에 저장
export default adminSlice.reducer; 
