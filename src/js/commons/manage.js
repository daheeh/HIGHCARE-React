import { Link, Route, Router, Routes } from "react-router-dom";
import LoginPage from "../login/pages/logins";
import AdminPage from "../admin/admins"
import { Step1, Step2, Step2pass } from "../login/pages/findaccount";
import LeftNavibar from "./leftnavibar";
import ManageTest from "./mng-test";

function Manage(){

    return (

        <div>

            <Routes>
                <Route path="/" element={<ManageTest />}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/login/findaccount/step1" element={<Step1 />} />
                <Route path="/login/findaccount/step2" element={<Step2 />} />
                <Route path="/login/findaccount/pass-reset" element={<Step2pass />} />
            </Routes>
        </div>

    )
}

export default Manage;