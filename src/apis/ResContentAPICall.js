import{
    GET_CONTENT
} from '../modules/resContentModule';


export const callResContentAPI = ({resourceCode}) => {
    const requestURL = `http://localhost:8080/res/content?resourceCode=${resourceCode}`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }     
        })
        .then(response => response.json());

        dispatch({type: GET_CONTENT, payload: result});
        
    };

}