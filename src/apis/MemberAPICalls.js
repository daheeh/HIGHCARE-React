import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


// export async function requestMember(empNo, disaptch) {
export const selectMember = createAsyncThunk(
  'select/members',
  async (empNo,) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/admin/member?empNo=${empNo}`, {
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        }
      }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const requestMember = createAsyncThunk(
  'request/members',
  async (form,) => {   // post요청은 url, data, header순 
    try {
      const response = await axios.post(`http://localhost:8080/api/admin/memberjoin`, form,
        {
          headers: {
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          }
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);






