import { useDispatch } from 'react-redux';
import { decodeJwt } from '../../utils/decodeJwt';
import './social-login.css'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { OauthLoginAPI, kakaoAuth } from '../../apis/OAuthApiCalls';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { callLogoutAPI } from '../../apis/AuthAPICalls';
import { useNavigate } from 'react-router-dom';
import { browserInfo, deviceInfo } from './logininfo';




function SocialLogin() {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: process.env.REACT_APP_GOOGLE_AUTH_SECRET_KEY,
        clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);


  // **you can access the token like this**
  // const accessToken = gapi.auth.getToken().access_token;
  // console.log(accessToken);

  const id = decodeJwt(window.localStorage.getItem("accessToken"))?.sub;

  const data = {
    providerId: '',
    provider: '',
    email: '',
    name: '',
    browser: browserInfo(),
    device: deviceInfo(), 

    id: id,
  }

  const onSuccess = async response => {
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
    // await navigate("/", { replace: true }); 


  };
  const onFailure = (response) => {
    console.log('FAILED', response);
  };

  const onLogoutSuccess = async () => {
    console.log('SUCESS LOG OUT');
    dispatch(callLogoutAPI());
    await navigate("/", { replace: true }); 

  };



  const renderGoogleCustomButton = ({ onClick, disabled }) => (
    <button
      onClick={() => {
        onClick(); // 기본 로그아웃 클릭 동작 실행
        // onLogoutSuccess(); // 커스텀 로그아웃 클릭 처리 실행
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

    <div className='social'>간편 로그인

      <div className="social-group">

        <input type="checkbox" hidden id="google" >

        </input>

        {/* <div htmlFor="google" id="googlelabel"> */}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="구글연동하기"
          render={renderGoogleCustomButton}
        />
        {/* <GoogleLogout
                        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
                        onLogoutSuccess={onLogoutSuccess}

                    /> */}
        {/* </div> */}

        <input type="checkbox" hidden id="kakao" />
        <div htmlFor="kakao" id="kakaolabel" >
          <div onClick={() => {
            const kakaoUrl =`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_AUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_BASIC_URL_FRONT}/login/oauth/kakao&response_type=code`;
            window.location.href = kakaoUrl;
          }}/>
          
        </div>



        {/* <input type="checkbox" hidden id="naver" /> */}
        {/* <div htmlFor="naver" id="naverlabel"> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default SocialLogin;