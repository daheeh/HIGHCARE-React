import '../css/social-login.css'

function SocialLogin(){

    return (

    <div className='social'>간편 로그인

        <div className="social-group">
            
            <input type="checkbox" hidden id="google"/>
            <div htmlFor="google" id="googlelabel">
            </div>
            <input type="checkbox" hidden id="kakao"/>
            <div htmlFor="kakao" id="kakaolabel">
            </div>
            <input type="checkbox" hidden id="naver"/>
            <div htmlFor="naver" id="naverlabel">
            </div>
        </div>
    </div>
    )    
}

export default SocialLogin;