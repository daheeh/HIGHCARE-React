import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OAuthPage from "../../login/components/OAuthPage";
import { Link, useNavigate } from "react-router-dom";
import { Step2pass } from "../../login/findaccount";
import { ModifyPass } from "./ModifyPass";
import { decodeJwt } from "../../../utils/decodeJwt";


function ModifyInfo() {


  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  const resetPasswordClick = () => {

    navigate("/modifyinfo/password");
  }



  return (

    <div style={{ textAlign: 'center' }}>
      <OAuthPage />
      <button style={{ width: 150, height: 50 }}
        onClick={resetPasswordClick}

      >
          비밀번호 수정
      </button>
    </div>

  );
}


export default ModifyInfo;