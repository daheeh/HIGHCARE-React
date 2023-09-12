import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { log } from "loglevel";


// export async function requestMember(empNo, disaptch) {
export const selectMember = createAsyncThunk(
  'select/members',
  async (empNo,) => {
    console.log(empNo);

    try {
      const response = await axios.get(`http://localhost:8080/api/admin/member?empNo=${empNo}`, {
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
        }
      }
      );
   
      console.log("response", response);
      if(typeof response.data.data === "string" )
      alert(response.data.data);
      
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const requestMember = createAsyncThunk(
  'request/members',
  async (form,) => {   // post요청은 url, data, header순 
    console.log('form', form);
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

      alert(response.data.data);
      console.log(response.data);
      
      // window.location.reload();

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

      if (data.status === 'isWithDraw') {
        response = await axios.delete(`http://localhost:8080/api/admin/member/${data.id}`
          , {
            headers: {
              "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
            }
          }
        )
      } else {
        if (data.method === 'put') {
          response = await axios.put(`http://localhost:8080/api/admin/member/${data.id}`
            , data
            , {
              headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json", // JSON 형식으로 보냄
              }
            }
          )
        }
      }

      console.log("응답 : ", response.data);

      const result = response.data.data;
      return result;

    } catch (error) {
      throw error.response.data;
    }
  }
)







