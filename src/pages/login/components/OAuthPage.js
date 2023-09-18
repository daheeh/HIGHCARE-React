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



     dispatch(OauthLoginAPI(data));
     navigate("/", { replace: true });


  };
  const onFailure = (response) => {
    console.log('FAILED', response);
  };

  const onLogoutSuccess = async () => {
    console.log('SUCESS LOG OUT');
    await dispatch(callLogoutAPI());
    await navigate("/", { replace: true });

  };


  const renderGoogleCustomButton = ({ onClick, disabled }) => (
    <button
      onClick={() => {
        onClick(); // 기본 로그아웃 클릭 동작 실행
        onLogoutSuccess(); // 커스텀 로그아웃 클릭 처리 실행
      }}
      disabled={disabled}
      style={{
        background: `url('/images/google.png') center no-repeat`,
        backgroundSize: 'contain',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        // padding: '8px 16px',
        cursor: 'pointer',
        width: '200px'
      }}
    >
    </button>
  );

  return (
    <div style={{textAlign:'center', alignContent:'center'}}>
      <div className='social-group'>

        <p>구글 계정과 연동하기</p>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="구글연동하기"
          render={renderGoogleCustomButton}

        />
        <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
        onLogoutSuccess={onLogoutSuccess}
      />


        {/* <input type="checkbox" hidden id="kakaolabel" /> */}

        {/* <div id="kakaolabel" > */}

        <p>카카오 계정과 ß연동하기</p>
        <div id="kakaolabel" onClick={() => {
          const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_AUTH_CLIENT_ID}&redirect_uri=http://localhost:3000/login/oauth/kakao&response_type=code&state=${id}`;
          window.location.href = kakaoUrl;
        }} />
      </div>
      {/* </div> */}


     {/* <p>카카오 로그아웃</p>
        <button style={{ width: 100 }} id="kakaolabel"
          onClick={ () => {
            const kakaoUrl =`https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_AUTH_CLIENT_ID}&logout_redirect_uri=http://localhost:3000/logout`;
            window.location.href = kakaoUrl;
            
          }} />  */}
    </div>


  );
}

export default OAuthPage;