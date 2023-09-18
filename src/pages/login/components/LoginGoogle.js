import axios from 'axios';
import React from 'react';
import GoogleAuthLogin from './OAuthPage';
import OAuthPage from './OAuthPage';


const SocialOauth = () => {

  return (
    <div>
      {/* <div id="kakao" className="kakao">
              <KakaoLogin 
              token="137e0846ccca1d617c49511778c8a04c"
              buttonText="Kakao"
              onSuccess={onSuccess}
              onFailure={onFailure}
              onLogout={console.info}
              getProfile="true"
              />
          </div> */}
      {/* <div id="google">
        <GoogleLogin
          clientId={"831001732147-ggsjpv73kps8bchv2s8k85790qm3iv76.apps.googleusercontent.com"}
          buttonText="Google"
          onSuccess={onSuccess2}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          redirectUri={"http://highcare.coffit.today:8080/api/oauth/jwt/google"}
        />
      </div> */}
      {/* <div id="facebook">
              <FacebookLogin
              appId="626075848384794"
              autoLoad={true}
              fields="name,email,picture"
              callback={onSuccess3}
              />
          </div> */}

          <OAuthPage />
          
    </div>

  );
};

// export default withRouter(LoginGoogle);
export default SocialOauth;