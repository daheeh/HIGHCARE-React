import {
    GET_MYPAGE_SELECT,      // 조회
    POST_MYPAGE_PROFILE,    // 프로필 
} from '../modules/MypageModule';

export const callProfilesSelectAPI = ({ empNo }) => {

    console.log('[callProfilesSelectAPI] callProfilesSelectAPI Call');

    const requestURL = `http://localhost:8080/api/mypage/profile/${empNo}`;

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

            console.log('[callProfilesSelectAPI] callProfilesSelectAPI Result : ', result.data);

            dispatch({ type: GET_MYPAGE_SELECT, payload: result.data});
        }catch(error) {
            console.error('[callProfilesSelectAPI] Error in callProfilesSelectAPI', error);
        }
    };
};


export const callMypageProfileAPI = ({formDate}) => {

    console.log('[MypageApiCalls] MypageApiCalls Call');

    const requestURL = `http://localhost:8080/api/mypage/insert`;

    return async (dispatch, getState) => {
        try{
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(formDate),

            })
            .then(response => response.json());

            console.log('[MypageApiCalls] MypageApiCalls Result : ', result.data);

            dispatch({ type: POST_MYPAGE_PROFILE, payload: result.data });

        } catch(error) {
            console.error('[MypageApiCalls] Error in MypageApiCalls : ', error)
        }
    }
};

