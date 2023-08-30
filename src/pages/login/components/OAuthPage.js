import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { OauthLoginAPI } from '../../../apis/OAuthApiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { decodeJwt } from '../../../utils/decodeJwt';
import { callLogoutAPI } from '../../../apis/AuthAPICalls';
import { useNavigate } from 'react-router-dom';


function OAuthPage() {  

  const navigate = useNavigate();


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);


  // **you can access the token like this**
  // const accessToken = gapi.auth.getToken().access_token;
  // console.log(accessToken);

  const dispatch = useDispatch(); 

  const id = decodeJwt(window.localStorage.getItem("accessToken")).sub;

  const data = {
    providerId: '',
    provider: '',
    email: '',
    name: '',

    id:id,
  }

  const onSuccess = async (response) => {
    console.log('SUCCESS 응답', response);
    console.log('provider name : ', response.tokenObj.idpId);
    console.log('구글아이디 : ', response.googleId);
    console.log('구글이메일 : ', response.profileObj.email);
    console.log('구글닉네임 : ', response.profileObj.name);
    console.log('원래회원 id : ', data.id);

    data.provider = response.tokenObj.idpId;
    data.providerId = response.googleId;
    data.email = response.profileObj.email;
    data.name = response.profileObj.name;
    
    

    await dispatch(OauthLoginAPI(data));
    await navigate("/");


  };
  const onFailure = (response) => {
    console.log('FAILED', response);
  };

  const onLogoutSuccess = async () => {
    console.log('SUCESS LOG OUT');
    await dispatch(callLogoutAPI());
    await navigate("/");

};

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="구글연동하기"
      />
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
}

export default OAuthPage;