import AuthCategory from "./components/AuthCategory";
import AuthSetting from "./components/AuthSetting";
import AuthUser from "./components/AuthUser";
import AuthSytle from "./AuthManager.module.css"
import { decodeJwt } from "../../../utils/decodeJwt";
import LoginVerify from "../../../utils/LoginVerify";

function AuthManager(){

    const token = decodeJwt(window.localStorage.getItem("accessToken"));    

    LoginVerify(token);
    return ( 

        <div className={AuthSytle.Auth}>
            <div>
                
                <AuthCategory/>
            </div>
            <div>
                <AuthUser/>
                <AuthSetting/>
            </div>
        </div>
    );

}

export default AuthManager; 