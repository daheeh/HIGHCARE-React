

import Layout from "./layouts/Layout";
import MainLayOut from "./layouts/MainLayOut";
import AdminPage from "./pages/admin/AdminPage";
import MngUser from "./pages/managed/MngUser";
import MngLog from "./pages/managed/MngLog";
import {Step1, Step2, Step2pass} from "./pages/login/findaccount"
import ReceiveBox from './pages/approval/receivebox';
import WriteBox from './pages/approval/writebox';
import Biz1 from './pages/approval/biz1';
import Biz2 from './pages/approval/biz2';
import Biz3 from './pages/approval/biz3';
import Biz4 from './pages/approval/biz4';
import Biz5 from './pages/approval/biz5';
import Biz4Offcial from './pages/approval/biz4Offcial';
import Exp1 from './pages/approval/exp1';
import Exp2 from './pages/approval/exp2';
import Exp3 from './pages/approval/exp3';
import Exp4 from './pages/approval/exp4';
import Exp5 from './pages/approval/exp5';
import Exp6 from './pages/approval/exp6';
import Exp7 from './pages/approval/exp7';
import Hrm1 from './pages/approval/hrm1';
import Hrm2 from './pages/approval/hrm2';
import Hrm3 from './pages/approval/hrm3';
import Hrm4 from './pages/approval/hrm4';
import Hrm5 from './pages/approval/hrm5';
import Hrm6 from './pages/approval/hrm6';
import Hrm7 from './pages/approval/hrm7';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ApvMain from "./pages/approval/mainpage";
import PmTest from "./pages/pm/pm-test";
import PmMenu from "./pages/pm/search";
import PmAnnual from "./pages/pm/annual";
import PmCalender from "./pages/pm/cal";
import PmResist from "./pages/pm/de-resist";
import PmDepartment from "./pages/pm/department";
import PmMemberAnnual from "./pages/pm/member-annual";
import PmMemberResist from "./pages/pm/pm-resist";
import PmWork from "./pages/pm/work";


function App() {
  return (

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout />}>
                <Route index element={<MainLayOut />}/>
                <Route path="/approval/mainpage" element={<ApvMain />} />
                <Route path="/approval/receivebox" element={<ReceiveBox />} />
                <Route path="/approval/writebox" element={<WriteBox />} />

                <Route path="/approval/biz1" element={<Biz1 />} />
                <Route path="/approval/biz2" element={<Biz2 />} />
                <Route path="/approval/biz3" element={<Biz3 />} />
                <Route path="/approval/biz4" element={<Biz4 />} />
                <Route path="/approval/biz5" element={<Biz5 />} />
                <Route path="/biz4Offcial" element={<Biz4Offcial />} />

                <Route path="/approval/exp1" element={<Exp1 />} />
                <Route path="/approval/exp2" element={<Exp2 />} />
                <Route path="/approval/exp3" element={<Exp3 />} />
                <Route path="/approval/exp4" element={<Exp4 />} />
                <Route path="/approval/exp5" element={<Exp5 />} />
                <Route path="/approval/exp6" element={<Exp6 />} />
                <Route path="/approval/exp7" element={<Exp7 />} />

                <Route path="/approval/hrm1" element={<Hrm1 />} />
                <Route path="/approval/hrm2" element={<Hrm2 />} />
                <Route path="/approval/hrm3" element={<Hrm3 />} />
                <Route path="/approval/hrm4" element={<Hrm4 />} />
                <Route path="/approval/hrm5" element={<Hrm5 />} />
                <Route path="/approval/hrm6" element={<Hrm6 />} />
                <Route path="/approval/hrm7" element={<Hrm7 />} />

                <Route path="/login" element={<Login />} />
                <Route path="/login/findaccount/step1" element={<Step1 />} />
                <Route path="/login/findaccount/step2" element={<Step2 />} />
                <Route path="/login/findaccount/pass-reset" element={<Step2pass />} />

                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/management/user" element={<MngUser />} />
                <Route path="/admin/management/system/log" element={<MngLog />} />

                <Route path="/pm" element={<PmTest />}/>
                <Route path="/pm/search" element={<PmMenu />}/>
                <Route path="/pm/annual" element={<PmAnnual />}/>
                <Route path="/pm/cal" element={<PmCalender />}/>
                <Route path="/pm/de-resist" element={<PmResist />}/>
                <Route path="/pm/department" element={<PmDepartment />}/>
                <Route path="/pm/member-annual" element={<PmMemberAnnual />}/>
                <Route path="/pm/pm-resist" element={<PmMemberResist />}/>
                <Route path="/pm/work" element={<PmWork />}/>
          </Route>

        </Routes>

      </BrowserRouter>

  );
}

export default App;