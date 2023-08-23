import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name: 'admins',  // 리듀서 이름 
    initialState: {
        data: {}
    },
    reducers: {
        modifyMemberAction: (state, {payload}) => {
            return payload;
        },
        
    }
})


// 액션 생성자 내보내기 
export const { modifyMemberAction } = adminSlice.actions; 
// 리듀서 내보내기 -- store에 저장
export default adminSlice.reducer; 
