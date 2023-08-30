import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { log } from "loglevel";

export const OauthLoginAPI = createAsyncThunk(
    'oauth/regist',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/oauth/regist`, data,
                {
                    headers: {
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

export const kakaoAuth = createAsyncThunk(
    'kakao/request',
    async () => {
        console.log("kakaoAuth start");
        try {
            const response = 
            await axios.get(`http://kauth.kakao.com/oauth/authorize?
                            client_id="aad8685798054dd9e7932b5ce49f5df5"
                            &redirect_uri='http://localhost:3000'
                            &response_type=code`
                ,{
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    }
                }
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            throw error.response.data;
        }
    }
);