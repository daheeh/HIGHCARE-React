

import {
    GET_BOARD
    ,GET_BOARDS
    ,GET_BOARDD
    ,POST_BOARD
    ,POST_REGISTER
    ,POST_REGISTERS
    ,PUT_BOARD
    ,PUT_BOARDS
} from '../modules/BoardModule';

export const callBulletinAPI = ({categoryCode, currentPage}) => {
//    export const callBulletinAPI = () => {
   const requestURL = `http://localhost:8080/bulletin/board?categoryCode=${categoryCode}&currentPage=${currentPage}`;
//    const requestURL = `http://localhost:8080/bulletin/board`;

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
        dispatch({ type: GET_BOARD,  payload: result.data});
    }
   };

}

export const callBoardDetailAPI = ({bulletinCode, currentPage})=>{
    const requestURL = `http://localhost:8080/bulletin/thread?bulletinCode=${bulletinCode}&currentPage=${currentPage}`;

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
        dispatch({ type: GET_BOARDD,  payload: result.data});
        }
    };


}

export const callBulletinNavAPI= ()=>{
    const requestURL = `http://localhost:8080/bulletin/boardTitle`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        console.log('게시판 이름', result.data);

        dispatch({type: GET_BOARDS, payload: result.data});
    }
}

export const callBoardNameAddAPI = ({form}) => {
   const requestURL = `http://localhost:8080/bulletin/boardAdd`;

   return async (dispatch, getState) => {

    const result = await fetch(requestURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*" ,
            "Access-Control-Allow-Origin": "*" 
        },
        body: JSON.stringify({
            nameBoard: form.nameBoard
        })
    })
    .then(response => response.json());

    dispatch({type: POST_BOARD, payload: result});
   };
}

export const callRegisterAPI = ({form}) => {
    const requestURL = `http://localhost:8080/bulletin/insertBoard`;
    console.log("form : " , form)
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                categoryCode: form.categoryCode,
                content: form.content,
                title: form.title,
                allowComments: form.allowComments,
                empNo: form.empNo
            })
        })
        .then(response => response.json());

        if(result.status === 201){
            dispatch({ type: POST_REGISTER, payload: result});
        }
    }
}

export const callCommentAPI = ({form}) =>{
    const requestURL = `http://localhost:8080/bulletin/insertComment`;
    console.log("form : ", form)
    return async (dispatch, getState) =>{

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                bulletinCode : form.bulletinCode,
                content: form.content,
                empNo: form.empNo
            })
        })
        .then(response => response.json());

        if(result.status === 201){
            dispatch({ type: POST_REGISTERS, payload: result});
        }
    }
}
export const callUpdateAPI = ({form}) =>{
    const requestURL = `http://localhost:8080/bulletin/updateBoard`;

    return async (dispatch, getState) => {
        const result = await  fetch(requestURL, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                content: form.content,
                title: form.title,
                empNo: form.empNo,
                bulletinCode: form.bulletinCode
            })
        })
        .then(response => response.json());
        if(result.status === 201){
            dispatch({type: PUT_BOARD, payload: result});
        }
    }
}
export const callDeleteAPI = ({form}) =>{
    const requestURL = `http://localhost:8080/bulletin/deleteBoard`;

    return async (dispatch, getState) => {
        const result = await  fetch(requestURL, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({

                empNo: form.empNo,
                bulletinCode: form.bulletinCode
            })
        })
        .then(response => response.json());
        if(result.status === 201){
            dispatch({type: PUT_BOARDS, payload: result});
        }
    }


}