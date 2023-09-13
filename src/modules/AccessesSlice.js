import { createSlice } from "@reduxjs/toolkit";
import { selectAccess, selectAccessByDateRange, selectSearchMemberLog } from "../apis/AdminAPI";

const initialState = {
    // searchMember: {},
    accessList: [],
}

const accessSlice = createSlice({
    name: 'accesses',  // 리듀서 이름 
    initialState,
    // reducers: {


    // },
    extraReducers: (builder) => {
        builder
            .addCase(selectAccess.fulfilled, (state, {payload}) => {
                state.accessList = payload.data;
            })
            .addCase(selectSearchMemberLog.fulfilled, (state, { payload }) => {
                state.accessList = payload.data;
                // return payload.data;
            })
            .addCase(selectAccessByDateRange.fulfilled, (state, { payload }) => {
                state.accessList = payload.data;
                // return payload.data;
            })

    }
})

// export const {  } = accessSlice.actions; 
// 리듀서 내보내기 -- store에 저장
export default accessSlice.reducer; 