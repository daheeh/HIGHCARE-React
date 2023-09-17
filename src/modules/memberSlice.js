import { createSlice } from "@reduxjs/toolkit";
import { ModifyInfoAPI, WithDrawInfoAPI, allMemberListApi, requestMember, selectMember } from "../apis/MemberAPICalls";
import { modifyMemberAPI } from "../apis/AuthAPICalls";

const initialState = {
  data: {},
  treeviewMember: [],
  message: '',
  selectMember: '',

}


const memberSlice = createSlice({
  name: 'members',  // 리듀서 이름 
  initialState,
  reducers: {
    selectAction: (state, { payload }) => {
      return payload;
    },
    memberByTreeview: (state, { payload }) => {
      state.treeviewMember = payload;
    },
    resetMemberAction: (state, action) => {
      state.treeviewMember = [];
    },
    selectMemberAction: (state, { payload }) => {
      state.selectMember = payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(selectMember.pending, (state, action) => {
        console.log("pending.....");
      })
      .addCase(selectMember.fulfilled, (state, { payload }) => {
        // 비동기 작업 성공하면 업데이트됨 
        console.log("fulfilled...!!");
        state.data = payload.data;

      })
      .addCase(selectMember.rejected, (state, action) => {
        // 비동기 작업이 실패한 경우 -> 나중에 에러 처리 수정하기 
        state.data = '';
        console.log("rejected!!!!!!");
        console.error(action.error);
      })
      .addCase(allMemberListApi.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(ModifyInfoAPI.fulfilled, ModifyInfoAPI.rejected, (state, { payload }) => {
        state.message = payload;
        alert(payload);
      })
      .addCase(WithDrawInfoAPI.fulfilled, WithDrawInfoAPI.rejected, (state, { payload }) => {
        state.message = payload;
        alert(payload);
      })
      .addCase(requestMember.fulfilled, (state, { payload }) => {
        // alert("회원 정보 수정 성공");
      })
  }
})


// 액션 생성자 내보내기 
export const { selectAction, accountStatus, resetMemberAction, resetRequestMemberAction, memberByTreeview, selectMemberAction } = memberSlice.actions;
// 리듀서 내보내기 -- store에 저장
export default memberSlice.reducer; 
