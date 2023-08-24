import { useSelector } from 'react-redux';
import {
    GET_MYPAGE_SELECT,      // 조회
    POST_MYPAGE_PROFILE,    // 프로필 
} from '../modules/MypageModule';

export const callMypageProfileAPI = (empNo) => {

    console.log('[MypageApiCalls] MypageApiCalls Call');

    const requestURL = `http://localhost:8080/api/mypage/profile/${empNo}`;

    return async (dispatch, getState) => {
        try{
            const result = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",

                },
                // body: JSON.stringify(),

            })
            .then(response => response.json());

            console.log('[MypageApiCalls] MypageApiCalls Result : ', result);

            dispatch({ type: POST_MYPAGE_PROFILE, payload: result });

        } catch(error) {
            console.error('[MypageApiCalls] Error in MypageApiCalls : ', error)
        }
    }
};

export const callProfilesSelectAPI = (emp) => {

    console.log('[callProfilesSelectAPI] callProfilesSelectAPI Call  {}', emp);

    const requestURL = `http://localhost:8080/api/mypage/profile/1`;
     

    return async (dispatch, getState) => {

        try{
            const result = await fetch(requestURL, {
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }
            })
            .then(response => response.json());

            console.log('[callProfilesSelectAPI] callProfilesSelectAPI Result : ', result);

            dispatch({ type: GET_MYPAGE_SELECT, payload: result});
        }catch(error) {
            console.error('[callProfilesSelectAPI] Error in callProfilesSelectAPI', error);
        }
    };
};




