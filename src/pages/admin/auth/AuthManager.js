import AuthCategory from "./components/AuthCategory";
import AuthSetting from "./components/AuthSetting";
import AuthUser from "./components/AuthUser";
import AuthSytle from "./AuthManager.module.css"
import { AdminNav } from "../AdminNav";

function AuthManager() {

    return (
        <section>
            <AdminNav />

            <div style={{ marginTop: 20 }} className={AuthSytle.Auth}>
                <div>

                    <AuthCategory />
                </div>
                <div>
                    <AuthUser />
                    <AuthSetting />
                </div>
            </div>
        </section>
    );

}

export default AuthManager; 