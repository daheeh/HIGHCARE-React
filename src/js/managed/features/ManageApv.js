import { Route, Routes } from "react-router-dom";
import LoginPage from "../../login/pages/logins";
import AdminPage from "../../admin/AdminPage"
import { Step1, Step2, Step2pass } from "../../login/pages/findaccount";
import ManageTest from "../pages/mng-test";
import MngUser from "../pages/MngUser";
import MngLog from "../pages/MngLog";

function ManageApv(){

    return (

        <div>

            <Routes>
                <Route path="/" element={<ManageTest />}/>
                
                <Route path="/login" element={<LoginPage />} />
                <Route path="/login/findaccount/step1" element={<Step1 />} />
                <Route path="/login/findaccount/step2" element={<Step2 />} />
                <Route path="/login/findaccount/pass-reset" element={<Step2pass />} />

            </Routes>
            <Routes>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/management/user" element={<MngUser />} />
                <Route path="/admin/management/system/log" element={<MngLog />} />
                
                
            </Routes>
        </div>

    )
}

export default ManageApv;