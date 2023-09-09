import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const selectJobList = createAsyncThunk(
    'select/jobs',
    async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/admin/job',
                {
                    headers: {
                        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    }
                }
            );
            console.log(response);
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
)

export const selectDepartmentsList = createAsyncThunk(
    'select/departments',
    async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/admin/department',
                {
                    headers: {
                        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    }
                }
            );
            console.log(response);
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
)

export const selectMenuGroupList = createAsyncThunk(
    'select/menuGroups',
    async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/admin/menugroup',
                {
                    headers: {
                        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    }
                }
            );
            console.log(response);
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
)

export const selectMenuManagers = createAsyncThunk(
    'select/menuManagers',
    async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/admin/managers`,
                {
                    headers: {
                        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    }
                });
            console.log(response);
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
)

export const insertMenuManagers = createAsyncThunk(
    'insert/menuManagers',
    async (sendData) => {
        console.log('넘겨받은 sendData : ', sendData);
        try {
            const response = await axios.post(`http://localhost:8080/api/admin/managers`, sendData,
                {
                    headers: {
                        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    }
                });
            console.log(response);
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
)