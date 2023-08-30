import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import OAuthPage from "../../login/components/OAuthPage";


function ModifyInfo() {

    

    // selector state를 통해 리듀서에 접근 
    const loginMember = useSelector(state => state.authes);
    const dispatch = useDispatch();  // action을 보낼 수 있다. 


    useEffect(() => {
    }, []);



  return (

    <div>
      <OAuthPage />

      
    </div>

  );
}


export default ModifyInfo;