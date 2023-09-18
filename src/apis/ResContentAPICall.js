import{
    GET_CONTENT
} from '../modules/resContentModule';


export const callResContentAPI = ({resourceCode}) => {
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/res/content?resourceCode=${resourceCode}`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }     
        })
        .then(response => response.json());

        dispatch({type: GET_CONTENT, payload: result});
        
    };

}