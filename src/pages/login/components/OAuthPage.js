import { gapi } from 'gapi-script';
import React, { useEffect, useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { OauthLoginAPI, kakaoAuth } from '../../../apis/OAuthApiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { decodeJwt } from '../../../utils/decodeJwt';
import { callLogoutAPI } from '../../../apis/AuthAPICalls';
import { useNavigate } from 'react-router-dom';
import '../social-login.css'



function OAuthPage() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const id = decodeJwt(window.localStorage.getItem("accessToken"))?.sub; 
  // const [id, setId] = useState('');
  //   setId(decodeJwt(window.localStorage.getItem("accessToken"))?.sub);


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const data = {
    providerId: '',
    provider: '',
    email: '',
    name: '',

    id: id,
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
    await navigate("/", { replace: true }); 


  };
  const onFailure = (response) => {
    console.log('FAILED', response);
  };

  const onLogoutSuccess = async () => {
    console.log('SUCESS LOG OUT');
    await dispatch(callLogoutAPI());
    await navigate("/", { replace: true }); 

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

      <div htmlFor="kakao" id=""
        style={{ minHeight: '100px' }}>

        <p>카카오 로그인 </p>
        <button style={{ width: 100 }} id="kakaolabel"
          onClick={ () => {
            const kakaoUrl =`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_AUTH_CLIENT_ID}&redirect_uri=http://localhost:3000/login/oauth/kakao&response_type=code&state=${id}`;
            window.location.href = kakaoUrl;
            
          }} />
        <p>카카오 로그아웃</p>
        <button style={{ width: 100 }} id="kakaolabel"
          onClick={ () => {
            const kakaoUrl =`https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_AUTH_CLIENT_ID}&logout_redirect_uri=http://localhost:3000/logout`;
            window.location.href = kakaoUrl;
            
          }} />

      </div>

    </div>

  );
}

export default OAuthPage;