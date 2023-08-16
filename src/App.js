import { BrowserRouter, Route, BrowserRouter as Routes} from 'react-router-dom';
import ApvMain from './js/approval/mainpage';
import Biz1 from './js/approval/biz1';
import Biz2 from './js/approval/biz2';
import Biz3 from './js/approval/biz3';
import Biz4 from './js/approval/biz4';
import Biz4Offcial from './js/approval/biz4Offcial';
import Biz5 from './js/approval/biz5';
import Exp1 from './js/approval/exp1';
import Exp2 from './js/approval/exp2';
import Exp3 from './js/approval/exp3';
import Exp4 from './js/approval/exp4';
import Exp5 from './js/approval/exp5';
import Exp6 from './js/approval/exp6';
import Exp7 from './js/approval/exp7';
import Hrm1 from './js/approval/hrm1';
import Hrm2 from './js/approval/hrm2';
import Hrm3 from './js/approval/hrm3';
import Hrm4 from './js/approval/hrm4';
import Hrm5 from './js/approval/hrm5';
import Hrm6 from './js/approval/hrm6';
import Hrm7 from './js/approval/hrm7';
import ReceiveBox from './js/approval/receivebox';
import WriteBox from './js/approval/writebox';


import Layout from "./layouts/Layout";
import MainLayOut from "./layouts/MainLayOut";
import Login from "./pages/login/Login";
import Step1 from "./pages/login/findaccount";
import Step2 from "./pages/login/findaccount";
import Step2pass from "./pages/login/findaccount";
import AdminPage from "./pages/admin/AdminPage";
import MngUser from "./pages/managed/MngUser";
import MngLog from "./pages/managed/MngLog";


function App() {
  return (


        
  <BrowserRouter>
    <Routes>
      
      {/* 라우트 설정 */}
      <Route path="/" element={<Layout />}>
      <Route index element={<MainLayOut />}/>
        <Route path="approval/mainpage" element={<ApvMain />} ></Route>
        {/* <Route path="approval" element={<ApvMain />} >      </Route> */}

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

        


      </Route>
      {/* 다른 라우트 설정 추가 */}
    </Routes>
</BrowserRouter>
);
}

export default App;