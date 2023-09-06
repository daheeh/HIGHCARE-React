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

      if (typeof response.data === String) {
        alert(response.data);
      }

      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);





export const allMemberListApi = createAsyncThunk(
  'all/members',
  async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/admin/memberlist`,
        {
          headers: {
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
          }
        }
      );
      console.log(response.data);

      return response.data.data;
    } catch (error) {
      throw error.response.data;
    }
  }
)


export const ModifyInfoAPI = createAsyncThunk(
  'modify/members',
  async (data) => {
    try {
      const response = '';
      console.log('data :', data);
      if (data.method === 'put') {
        response = await axios.put(`http://localhost:8080/api/admin/member`
          , data
          , {
            headers: {
              "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
              "Content-Type": "application/json", // JSON 형식으로 보냄

            }
          }
        )
      } else if (data.method === 'delete') {
        response = await axios.delete(`http://localhost:8080/api/admin/member/${data.id}`
          , {
            headers: {
              "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
            }
          }
        )
      }

      console.log(response.data);
      const result = response.data.data;
      return result;

    } catch (error) {
      throw error.response.data;
    }
  }
)







