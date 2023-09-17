import { createSlice } from "@reduxjs/toolkit";
import { selectDepartmentsList, selectJobList, selectMenuGroupList } from "../apis/AdminAPI";
import { ModifyInfoAPI, WithDrawInfoAPI } from "../apis/MemberAPICalls";

const initialState = {
        data: {},
        joblList:[],
        departmentList: [],
        menuGroupList: [],
        // selectMember: {},
}

const adminSlice = createSlice({
    name: 'admins',  // 리듀서 이름 
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(selectJobList.fulfilled, (state, {payload})=>{
            state.joblList = payload.data.joblList;
        })
        .addCase(selectDepartmentsList.fulfilled, (state, {payload})=>{
            state.departmentList = payload.data.departmentList;
        })
        .addCase(selectMenuGroupList.fulfilled, (state, {payload}) => {
            console.log("state ====", state);
            state.menuGroupList = payload.data; 
        })
        // .addCase(ModifyInfoAPI.fulfilled, (state, {payload})=> {
        //     console.log("payloaddddddd :", payload);
        //     state.selectMember = payload;

        // })
        .addCase(WithDrawInfoAPI.fulfilled, (state, {payload})=> {
            alert(payload);

        }) 

    }
})


// 액션 생성자 내보내기 
export const {  } = adminSlice.actions; 
// 리듀서 내보내기 -- store에 저장
export default adminSlice.reducer; 
