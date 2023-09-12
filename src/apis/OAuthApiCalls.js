import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { log } from "loglevel";
import { loginAction } from "../modules/authSlice";

export const OauthLoginAPI = createAsyncThunk(
    'oauth/regist',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/oauth/regist`, data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                    }
                }
            );
            console.log(response.data);
            window.localStorage.setItem('accessToken', response.data.data.accessToken);

            if(response.status == 200) {
                return response.data; 
            } else {
                throw new Error("로그인 실패"); 
            }
        } catch (error) {
            throw error.response.data;
        }
    }
);

export const kakaoAuth = createAsyncThunk(
    'login/authes',
    async (props) => {
        console.log("kakaoAuth start");
        console.log("code :", props);
        console.log("콜백 api의 넘겨받은 id :", props.id);

        try {
            const response =
                await axios.get(`http://localhost:8080/api/oauth/kakao?code=${props.code}&state=${props.id}&browser=${props.browser}&device=${props.device}`);
            console.log(response.data);
            console.log(response.data.data.accessToken);
            window.localStorage.setItem('accessToken', response.data.data.accessToken);

            if(response.status == 200) {
                return response.data; 
            } else {
                throw new Error("로그인 실패"); 
            }
        } catch (error) {
            console.log(error.response.data);
            throw error.response.data;
        }
    }
);

