import { useSelector } from 'react-redux';
import {
    GET_MYPAGE_SELECT,      // 조회
    POST_MYPAGE_PROFILE,    // 프로필 
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
                    "Accept": "*/*",
                    "Content-Type": "application/json",

                },

            })
            .then(response => response.json());

            console.log('[callMypageProfileSelectAPI Result]: ', result);

            // dispatch({ type: POST_MYPAGE_PROFILE, payload: result });
            dispatch({ type: GET_MYPAGE_SELECT, payload: result });

        } catch(error) {
            console.error('[callMypageProfileSelectAPI] Error in callMypageProfileSelectAPI : ', error)
        }
    }
};

export const callProfileInsertAPI = ({form}) => {

    console.log('[callProfileInsertAPI] callProfileInsertAPI Call  {}', form);

    // const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/mypage/insert`;
     const requestURL = `http://localhost:8080/api/mypage/update`;
    // const requestURL = `http://:8080/api/mypage/insert`;
     

    return async (dispatch, getState) => {

        try{
    
            // const formData = new FormData();
            // formData.append("prifileImage", form.image);
            console.log(form);
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
  
                    "Accept": "*/*",
                    "Access-Control-Allow-Origin": "*"
                },
                body: form
            })
            .then(response => response.json());

            console.log('[callProfileInsertAPI] callProfileInsertAPI Result : ', result);

            dispatch({ type: POST_MYPAGE_PROFILE, payload: result});
        }catch(error) {
            console.error('[callProfilesSelectAPI] Error in callProfilesSelectAPI', error);
        }
    };
};




