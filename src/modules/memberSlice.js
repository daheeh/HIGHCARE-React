import { createSlice } from "@reduxjs/toolkit";
import { selectMember } from "../apis/MemberAPICalls";

const initialState = {
  data: "",
}


const memberSlice = createSlice({
  name: 'members',  // 리듀서 이름 
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(selectMember.pending, (state, action) => {
        console.log("pending.....");
      })
      .addCase(selectMember.fulfilled, (state, {payload}) => {
        // 비동기 작업 성공하면 업데이트됨 
        console.log("fulfilled...!!");
        state.data = payload; 
        console.log("state.data : " , state.data);       

      })
      .addCase(selectMember.rejected, (state, action) => {
        // 비동기 작업이 실패한 경우 -> 나중에 에러 처리 수정하기 
        state.data = '';
        console.log("rejected!!!!!!");
        console.error(action.error);
      });
  }
})


// 액션 생성자 내보내기 
export const { memberset, request } = memberSlice.actions;
// 리듀서 내보내기 -- store에 저장
export default memberSlice.reducer; 
