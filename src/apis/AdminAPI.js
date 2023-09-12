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
        console.log("menugrouplist request start....");
        try {
            const response = await axios.get('http://localhost:8080/api/admin/menugroup',
                {
                    headers: {
                        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    }
                }
            );
            console.log("menuGroups---- : ", response);
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

export const deleteManager = createAsyncThunk(
    'delete/menuManagers',
    async (ids) => {
        console.log('넘겨받은 ids : ', ids);
        try {
            const response = await axios.delete(`http://localhost:8080/api/admin/managers?ids=${ids}`, {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
                },
            });
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const selectAccess = createAsyncThunk(
    'select/access',
    async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/admin/access`, {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
                },
            });
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const selectAccessByDateRange = createAsyncThunk(
    'selectDateRange/access',
    async (days) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/admin/access?start=${days.startdate}&end=${days.enddate}`, {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
                },
            });
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const selectSearchMemberLog = createAsyncThunk(
    'selectSearchMemberLog/access',
    async (searchKeyword) => {
        try {
            // 검색어를 사용하여 새로운 API 요청
            const response = await axios.get(`http://localhost:8080/api/admin/access/search?keyword=${searchKeyword}`, {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
                },
            });

            // 검색 결과를 상태에 저장
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
)