// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const postTest = () => {

//     axios( {
//         method:'POST',
//         url: `https://highcare.coffit.today:8080/api/auth/test`,
//         data: {

//         }
//     }).then(res => {
//         console.log(res);
        
//     }).catch(error){

//     }
// }
export const BASIC_URL = "http://highcare.coffit.today:8080/api";
export const AUTH_URL = BASIC_URL + "/auth"; 
export const ADMIN_URL = BASIC_URL + "/admin"; 



