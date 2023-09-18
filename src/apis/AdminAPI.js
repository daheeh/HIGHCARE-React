import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const selectJobList = createAsyncThunk(
    'select/jobs',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/admin/job`,
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
            const response = await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/admin/department`,
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
            const response = await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/admin/menugroup`,
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
            const response = await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/admin/managers`,
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
            const response = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/admin/managers`, sendData,
                {
                    headers: {
                        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    }
                });
            console.log(response);
            alert(response.data.data);
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
            const response = await axios.delete(`${process.env.REACT_APP_BASIC_URL}/api/admin/managers?ids=${ids}`, {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
                },
            });
            console.log(response);
            alert(response.data.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const selectAccess = createAsyncThunk(
    'select/access',
    async (paging) => {
        console.log("paging===========> ",paging);
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/admin/access?page=${paging.page}&size=${paging.size}`, {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
                },
            });
            console.log("[selectAccess]",response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const selectAccessByDateRange = createAsyncThunk(
    'selectDateRange/access',
    async (paging) => {
        console.log("paging : ", paging);

        try {
            const response = await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/admin/access/date?start=${paging.data.startdate}&end=${paging.data.enddate}&page=${paging.page}&size=${paging.size}`, {
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
    async (paging) => {
        console.log("paging : ", paging);
        try {
            // 검색어를 사용하여 새로운 API 요청
            const response = await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/admin/access/search?keyword=${paging.data}&page=${paging.page}&size=${paging.size}`, {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
                },
            });

            // 검색 결과를 상태에 저장
            console.log("search response : ", response);
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
)