import{
    GET_RES,
    POST_RES,
    POST_RESR,
    PUT_RES,
    PUT_RESR
} from '../modules/reservationModule';

export const callResAPI = () => {
    const requestURL = `http://localhost:8080/res/res`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(Response => Response.json());

        dispatch({type: GET_RES, payload: result});
    }
}

export const callResAddAPI = ({form})=>{
    const requestURL = `http://localhost:8080/res/category`;
    return async(dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
                "Accept": "*/*" ,
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify({
                name: form.name
            })
        })
        .then(response => response.json());
        dispatch({type: POST_RES, payload: result});
    };
}

export const callResRegistAPI = ({form}) => {
    const requestURL = `http://localhost:8080/res/regist`;
    console.log('form : ' , form)
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Accept": "*/*" ,
                "Access-Control-Allow-Origin": "*" 
            },
            body: form
        })
        .then(response => response.json());
        
  
    if(result.status == 500){
        alert(result.message);
    }else{
        alert(result.message);
    dispatch({type: POST_RESR, payload: result});
    }    
}
    
}

export const callResModAPI = ({form})=> {
    const requestURL = `http://localhost:8080/res/modRes`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Accept": "*/*" ,
                "Access-Control-Allow-Origin": "*" ,
            },
            body: form
        })
        .then(response => response.json());

        alert(result.message);
        dispatch({type: PUT_RES, payload: result});
    }


}

export const callDeleteAPI = ({resourceCode})=>{
    const requestURL = `http://localhost:8080/res/deleteRes`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Accept": "*/*" ,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                resourceCode: resourceCode,
          
            })
        })
        .then(response => response.json());

        alert(result.message);
        dispatch({type: PUT_RES, payload: result});

    }

}