import { useSelector } from 'react-redux';
import {
    GET_MYPAGE_SELECT,      // 조회
    POST_MYPAGE_PROFILE,    // 프로필 
    GET_MYPAGE_ANNSELECT,    // 연차조회
    GET_MYPAGE_MANSELECT     // 근태조회
} from '../modules/MypageModule';

export const callMypageProfileSelectAPI = (empNo) => {

    console.log('[callMypageProfileSelectAPI Call]');

    const requestURL = `http://localhost:8080/api/mypage/profile/${empNo}`;
    console.log("리퀘스트유알엘",requestURL);

    return async (dispatch, getState) => {
        try{
            const result = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    "Accept": "*/*",
                    "Content-Type": "application/json",

                },
                // body: JSON.stringify(),

            })
            .then(response => response.json());

            console.log('[MypageApiCalls] MypageApiCalls Result : ', result);

            dispatch({ type: GET_MYPAGE_SELECT, payload: result });

        } catch(error) {
            console.error('[MypageApiCalls] Error in MypageApiCalls : ', error)
        }
    }
};

export const callProfileInsertAPI = ({form}) => {

    console.log('[callProfileInsertAPI] callProfileInsertAPI Call  {}', form.get('profileImage'));

    const requestURL = `http://localhost:8080/api/mypage/update`;

    return async (dispatch, getState) => {

        try{
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    "Accept": "*/*",
                    "Access-Control-Allow-Origin": "*"
                },
                body: form
            })
            .then(response => response.json());

            console.log('[callProfileInsertAPI] callProfileInsertAPI Result : ', result);

            dispatch({ type: POST_MYPAGE_PROFILE, payload: result.data});
        }catch(error) {
            console.error('[callProfilesSelectAPI] Error in callProfilesSelectAPI', error);
        }
    };
};
// 특정 사원의 정보를 조회하고 검색하는 식별자
export const callAnnSelectAPI = (empNo) => {

    console.log('[callAnnSelectAPI Call]', empNo);

    const requestURL = `http://localhost:8080/api/mypage/anselect/${empNo}`;
    console.log("RequestURL : ", requestURL);

    return async (dispatch, getState) => {

        try{
            const result = await fetch(requestURL, {
                
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }

            })
            .then(response => response.json());

            console.log('[callAnnSelectAPI] callAnnSelectAPI Result : ', result);

            dispatch({ type: GET_MYPAGE_ANNSELECT, payload: result.data });

        } catch(error) {
            console.log('[callAnnSelectAPI Call] Error in', error)
        }
        
        

    }
};

export const callManSlectAPI = (empNo) => {

    console.log('callManSlectAPI Call');

    const requestURL = `http://localhost:8080/api/mypage/manselect/${empNo}`;

    return async (dispatch, getState) => {

        try{
            const result = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }

            })
            .then(response => response.json());

            console.log('[callManSlectAPI] callManSlectAPI Result : ', result);

            dispatch({ type: GET_MYPAGE_MANSELECT, payload: result });

        } catch(error) {
            console.log('[callManSlectAPI Call] Error in', error)
        }
        
    }
}






