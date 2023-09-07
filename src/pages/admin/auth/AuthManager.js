import { useState } from "react";
import AuthSytle from "./AuthManager.module.css";
import { AdminNav } from "../AdminNav";
import { AuthCategory, AuthUser, AuthSetting } from "./components/AuthCategory";

function AuthManager() {
  

  return (
    <section>
      <AdminNav />

      <div style={{ marginTop: 20 }} className={AuthSytle.Auth}>
        <div>
          <AuthCategory/>
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}

export default AuthManager;