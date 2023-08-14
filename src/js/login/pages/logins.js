import Login from '../features/login';
import SocialLogin from '../features/social-login';
import React from 'react';

function LoginPage() {


  return (

    <div className="">
      <div className="">
        <Login />
      </div>
      <div className="">
        <SocialLogin />
      </div>
    </div>

  );
}


export default LoginPage;