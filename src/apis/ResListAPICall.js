import{
    GET_LISTRES
} from '../modules/resLIstModule';


export const callResListAPI = ({categoryCode}) => {
    const requestURL = `http://localhost:8080/res/resList?categoryCode=${categoryCode}`;
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

        dispatch({type: GET_LISTRES, payload: result});
        
    };

}