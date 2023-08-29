import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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