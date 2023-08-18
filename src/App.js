<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalMain from './js/modal/modalMain';
import './App.css';

function App() {
  return (
      <>
          <BrowserRouter>
            <Routes>
              <Route index element={ <ModalMain /> }/>
            </Routes>
          </BrowserRouter>
      </>
  )
}

export default App;
=======
=======
>>>>>>> f55037f1710decf60e8bcd1998e3498048d3d3a5

import Layout from "./layouts/Layout";
import MainLayOut from "./layouts/MainLayOut";
import AdminPage from "./pages/admin/AdminPage";
import MngUser from "./pages/managed/MngUser";
import MngLog from "./pages/managed/MngLog";
import {Step1, Step2, Step2pass} from "./pages/login/findaccount"

import ReceiveBox from './pages/approval/Box/Receivebox';
import WriteBox from './pages/approval/Box/Writebox';
import Biz1 from './pages/approval/Biz/Biz1';
import Biz2 from './pages/approval/Biz/Biz2';
import Biz3 from './pages/approval/Biz/Biz3';
import Biz4 from './pages/approval/Biz/Biz4';
import Biz5 from './pages/approval/Biz/Biz5';
import Biz4Offcial from './pages/approval/Biz/Biz4Offcial';
import Exp1 from './pages/approval/Exp/Exp1';
import Exp2 from './pages/approval/Exp/Exp2';
import Exp3 from './pages/approval/Exp/Exp3';
import Exp4 from './pages/approval/Exp/Exp4';
import Exp5 from './pages/approval/Exp/Exp5';
import Exp6 from './pages/approval/Exp/Exp6';
import Exp7 from './pages/approval/Exp/Exp7';
import Hrm1 from './pages/approval/Hrm/Hrm1';
import Hrm2 from './pages/approval/Hrm/Hrm2';
import Hrm3 from './pages/approval/Hrm/Hrm3';
import Hrm4 from './pages/approval/Hrm/Hrm4';
import Hrm5 from './pages/approval/Hrm/Hrm5';
import Hrm6 from './pages/approval/Hrm/Hrm6';
import Hrm7 from './pages/approval/Hrm/Hrm7';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ApvMain from "./pages/approval/ApprovalMain";
import PmTest from "./pages/pm/pm-test";
import PmMenu from "./pages/pm/search";
import PmAnnual from "./pages/pm/annual";
import PmCalender from "./pages/pm/cal";
import PmResist from "./pages/pm/de-resist";
import PmDepartment from "./pages/pm/department";
import PmMemberAnnual from "./pages/pm/member-annual";
import PmMemberResist from "./pages/pm/pm-resist";
import PmWork from "./pages/pm/work";
import TreeView from "./pages/pm/treeview";

// import Businesscardregist from "./pages/mypage/businesscardregist";
import Mypage from "./pages/mypage/mypage";
// import Customerlog from "./pages/mypage/customerlog";
import Worklog from "./pages/mypage/Worklog";
import Businesscardregist from "./pages/mypage/businesscardregist";
import Customerlog from "./pages/mypage/Customerlog";





function App() {
  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<MainLayOut />}/>
                      <Route path="approval">
                          <Route index element={<ApvMain />} />
                          <Route path="receivebox" element={<ReceiveBox />} />
                          <Route path="writebox" element={<WriteBox />} />

                          <Route path="biz1" element={<Biz1 />} />
                          <Route path="biz2" element={<Biz2 />} />
                          <Route path="biz3" element={<Biz3 />} />
                          <Route path="biz4" element={<Biz4 />} />
                          <Route path="biz5" element={<Biz5 />} />
                          <Route path="bizOffcial" element={<Biz4Offcial />} />

                          <Route path="exp1" element={<Exp1 />} />
                          <Route path="exp2" element={<Exp2 />} />
                          <Route path="exp3" element={<Exp3 />} />
                          <Route path="exp4" element={<Exp4 />} />
                          <Route path="exp5" element={<Exp5 />} />
                          <Route path="exp6" element={<Exp6 />} />
                          <Route path="exp7" element={<Exp7 />} />

                          <Route path="hrm1" element={<Hrm1 />} />
                          <Route path="hrm2" element={<Hrm2 />} />
                          <Route path="hrm3" element={<Hrm3 />} />
                          <Route path="hrm4" element={<Hrm4 />} />
                          <Route path="hrm5" element={<Hrm5 />} />
                          <Route path="hrm6" element={<Hrm6 />} />
                          <Route path="hrm7" element={<Hrm7 />} />
                      </Route>
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
                <Route path="/pm/treeview" element={<TreeView />}/>


                <Route path="/mypage" element={<Mypage />} />
                <Route path="/mypage/list/regist" element={<Businesscardregist />}/>
                <Route path="/mypage/mytemplate/customlog" element={ <Customerlog /> } />
                <Route path="/mypage/mytemplate/worklog" element={ <Worklog />} />


          </Route>

        </Routes>

      </BrowserRouter>

  );
}

<<<<<<< HEAD
export default App;
>>>>>>> f55037f1710decf60e8bcd1998e3498048d3d3a5
=======
export default App;
>>>>>>> f55037f1710decf60e8bcd1998e3498048d3d3a5
