

import {
    GET_BOARD
    ,GET_BOARDS
    ,GET_BOARDD
    ,GET_THREAD
    ,POST_BOARD
    ,POST_REGISTER
    ,PUT_BOARD
    ,PUT_BOARDS
} from '../modules/BoardModule';

import{
     GET_COMMENT
    ,PUT_COMMENT
    ,PUT_COMMENTS,
    POST_REGISTERS

} from '../modules/commentModule';

import{
    GET_NOTICE
} from '../modules/NoticeModule';

export const callNoticeAPI = () => {
    const requestURL = `${process.env.REACT_APP_BASIC_URL_FRONT}/bulletin/notice`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        if(result.status === 200){
            console.log('result.data', result.data);
            dispatch({ type: GET_NOTICE,  payload: result});
        }
       };
}


export const callBulletinAPI = ({categoryCode, currentPage,content,empNo}) => {
//    export const callBulletinAPI = () => {
   const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/board?categoryCode=${categoryCode}&currentPage=${currentPage}&content=${content}&empNo=${empNo}`;
//    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/board`;

   return async (dispatch, getState) => {
    const result = await fetch(requestURL,{
        method: "GET",
        headers: {
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
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
export const callBoardDetailSAPI = ({bulletinCode})=>{
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/thr?bulletinCode=${bulletinCode}`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        if(result.status === 200){
        dispatch({ type: GET_THREAD,  payload: result});
        }
    };
}
export const callBoardDetailAPI = ({bulletinCode})=>{
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/thread?bulletinCode=${bulletinCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        if(result.status === 200){
        dispatch({ type: GET_BOARDD,  payload: result});
        }
    };
}

export const callCommentDetailAPI = ({bulletinCode, currentPage})=>{
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/comment?bulletinCode=${bulletinCode}&currentPage=${currentPage}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        if(result.status === 200){
        dispatch({ type: GET_COMMENT,  payload: result.data});
        }
    };
}


export const callBulletinNavAPI= ()=>{
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/boardTitle`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
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
   const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/boardAdd`;

   return async (dispatch, getState) => {

    const result = await fetch(requestURL, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
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
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/insertBoard`;
    console.log("form : " , form)
    return async (dispatch, getState) => {
        
   
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
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
            alert('글작성에 성공했습니다')
            dispatch({ type: POST_REGISTER, payload: result});
        } 
    };
}

export const callCommentAPI = ({form}) =>{
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/insertComment`;
    console.log("form : ", form)
    return async (dispatch, getState) =>{

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
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
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/updateBoard`;

    return async (dispatch, getState) => {
        const result = await  fetch(requestURL, {
            method: "PUT",
            headers:{
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
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
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/deleteBoard`;

    return async (dispatch, getState) => {
        const result = await  fetch(requestURL, {
            method: "PUT",
            headers:{
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
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


export const callCommentDeleteAPI = ({commentCode}) =>{
    const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/deleteComment`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: "PUT",
            headers:{
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"  
            },
            body: JSON.stringify({
                commentCode: commentCode
            })
        })
        .then(response => response.json());
        if(result.statue === 201){
            dispatch({type: PUT_COMMENT, payload: result});
        }
    }
}
export const callCommentUpdateAPI = ({commentCode,commentContent})=>{
        const requestURL = `${process.env.REACT_APP_BASIC_URL}/bulletin/updateComment`;
        return async (dispatch, getState) => {
            const result = await fetch(requestURL,{
                method: "PUT",
                headers:{
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                    "Content-Type": "application/json",
                    "Accept": "*/*"  
                },
                body: JSON.stringify({
                    commentCode: commentCode,
                    commentContent: commentContent
                })
            })
            .then(response => response.json());
            if(result.statue === 201){
                dispatch({type: PUT_COMMENTS, payload: result});
            }
        }
}