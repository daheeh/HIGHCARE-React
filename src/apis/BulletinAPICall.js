
import {
    GET_BOARD
} from '../modules/BoardMocule';

// export const callBulletinAPI = ({categoryCode, currentPage}) => {
   export const callBulletinAPI = () => {
//    const requestURL = `http://localhost:8080/bulletin/${categoryCode}?offset=${currentPage}`;
   const requestURL = `http://localhost:8080/bulletin/board`;

   return async (dispatch, getState) => {
    const result = await fetch(requestURL,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    })
    .then(response => response.json());
    if(result.status === 200){
        console.log('result.data', result.data);
        dispatch({ type: GET_BOARD,  payload: result.data });
    }

   }

}