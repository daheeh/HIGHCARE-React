import AuthCategory from "./components/AuthCategory";
import AuthSetting from "./components/AuthSetting";
import AuthUser from "./components/AuthUser";
import AuthSytle from "./AuthManager.module.css"

function AuthManager(){

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