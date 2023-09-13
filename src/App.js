import Layout from "./layouts/Layout";
import MainLayOut from "./layouts/MainLayOut";
import AdminPage from "./pages/admin/AdminPage";
import { Step1, Step2, Step2pass } from "./pages/login/findaccount"
import ReceiveBox from './pages/approval/Box/Receivebox';
import WriteBox from './pages/approval/Box/Writebox';
import Biz1 from './pages/approval/Biz/Biz1';
import Biz1View from './pages/approval/Biz/Biz1View';
import Biz2 from './pages/approval/Biz/Biz2';
import Biz2View from './pages/approval/Biz/Biz2View';
import Biz3 from './pages/approval/Biz/Biz3';
import Biz3View from './pages/approval/Biz/Biz3View';
import Biz4 from './pages/approval/Biz/Biz4';
import Biz4Offcial from './pages/approval/Biz/Biz4Offcial';
import Exp1 from './pages/approval/Exp/Exp1';
import Exp1View from './pages/approval/Exp/Exp1View';
import Exp4 from './pages/approval/Exp/Exp4';
import Exp4View from './pages/approval/Exp/Exp4View';
import Exp6 from './pages/approval/Exp/Exp6';
import Exp6View from './pages/approval/Exp/Exp6View';
import Exp7 from './pages/approval/Exp/Exp7';
import Exp7View from './pages/approval/Exp/Exp7View';
import Hrm1 from './pages/approval/Hrm/Hrm1';
import Hrm1View from './pages/approval/Hrm/Hrm1View';
import Hrm2 from './pages/approval/Hrm/Hrm2';
import Hrm2View from './pages/approval/Hrm/Hrm2View';
import Hrm3 from './pages/approval/Hrm/Hrm3';
import Hrm3View from './pages/approval/Hrm/Hrm3View';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import SecondTree from "./pages/pm/secondTree";
import PmMemberInsert from "./pages/pm/pm-resist-insert"
import Mypage from "./pages/mypage/mypage";
import Customerlog from "./pages/mypage/Customerlog";
import BulletinMain from "./pages/bulletin/BulletinMain";
import BulletinBoard from "./pages/bulletin/BulletinBoard";
import Thread from "./pages/bulletin/Thread";
import BullentinWrite from "./pages/bulletin/BullentinWrite";
import BullentinMod from "./pages/bulletin/BullentinMod";
import ReservationMain from "./pages/reservation/ReservationMain";
import Reservation from "./pages/reservation/Reservation";
import ReservationStatus from "./pages/reservation/ReservationStatus";
import MyReservationStatus from "./pages/reservation/MyReservationStatus";
import ResourceAdd from "./pages/reservation/ResourceAdd";
import Reserve from "./pages/reservation/Reserve";
import MemberModify from "./pages/admin/member/MemberModify";
import AuthManager from "./pages/admin/auth/AuthManager";
import MemberList from "./pages/admin/member/MemberList";
import MemberLog from "./pages/admin/log/MemberLog";
import MemberRequest from "./pages/admin/member/MemberRequest";
import Profile from "./pages/mypage/profile";
import ModifyInfo from "./pages/admin/member/ModifyInfo";
import MypageAnnual from "./pages/mypage/myannual";
import MyManegement from "./pages/mypage/mymanegement";
import Myinfo from "./pages/login/Myinfo";
import { CallbackKakao } from "./pages/login/components/CallbackKakao";
import { TokenVerification } from "./pages/admin/auth/TokenVerification";
import { AuthVarification } from "./pages/admin/auth/AuthVerification";
import ResourceMod from "./pages/reservation/ResourceMod";
import { BadRequestErrorPage, ForbiddenErrorPage, ServerErrorPage, UnauthorizedErrorPage } from "./errors/ErrorPages";
import { PageNotFound } from "./errors/pageNotFound";
import { ModifyPass } from "./pages/admin/member/ModifyPass";
import { AccountStatusVerify } from "./pages/admin/auth/AccountStatusVerify";



function App() {
  

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<MainLayOut />} />

          <Route path="login">
            <Route index element={<Login />} />
            <Route path="find/step1" element={<Step1 />} />
            <Route path="find/step2" element={<Step2 />} />
            <Route path="find/reset" element={<Step2pass />} />
          </Route>
          <Route path="/login/oauth/kakao" element={<CallbackKakao />} />
          <Route path="/logout" element={<MainLayOut />} />

          <Route path="/manager/member/request" element={<MemberRequest />} />


          {/* 여기부터 토큰(로그인 권한 인증) 유효성 체크 적용됨  */}
          <Route element={<AccountStatusVerify><TokenVerification /></AccountStatusVerify>} >
          

            <Route path="approval">
              <Route index element={<ApvMain />} />
              <Route path="receivebox" element={<ReceiveBox />} />
              <Route path="writebox" element={<WriteBox />} />

              <Route path="biz1" element={<Biz1 />} />
              <Route path="biz1/:apvNo" element={<Biz1View />} />
              <Route path="biz2" element={<Biz2 />} />
              <Route path="biz2/:apvNo" element={<Biz2View />} />
              <Route path="biz3" element={<Biz3 />} />
              <Route path="biz3/:apvNo" element={<Biz3View />} />
              <Route path="biz4" element={<Biz4 />} />
              <Route path="biz4/:apvNo" element={<Biz4Offcial />} />

              <Route path="exp1" element={<Exp1 />} />
              <Route path="exp1/:apvNo" element={<Exp1View />} />
              <Route path="exp4" element={<Exp4 />} />
              <Route path="exp4/:apvNo" element={<Exp4View />} />
              <Route path="exp6" element={<Exp6 />} />
              <Route path="exp6/:apvNo" element={<Exp6View />} />
              <Route path="exp7" element={<Exp7 />} />
              <Route path="exp7/:apvNo" element={<Exp7View />} />

              <Route path="hrm1" element={<Hrm1 />} />
              <Route path="hrm1/:apvNo" element={<Hrm1View />} />
              <Route path="hrm2" element={<Hrm2 />} />
              <Route path="hrm2/:apvNo" element={<Hrm2View />} />
              <Route path="hrm3" element={<Hrm3 />} />
              <Route path="hrm3/:apvNo" element={<Hrm3View />} />
            </Route>



            <Route path="/modifyinfo" element={<ModifyInfo />} />
            <Route path="/modifyinfo/password" element={<ModifyPass/>}/>
            <Route path="myinfo" element={<Myinfo />} />

            <Route path="/pm" element={<PmTest />} />
            <Route path="/pm/search" element={<PmMenu />} />
            <Route path="/pm/annual" element={<PmAnnual />} />
            <Route path="/pm/cal" element={<PmCalender />} />
            <Route path="/pm/de-resist" element={<PmResist />} />
            <Route path="/pm/department" element={<PmDepartment />} />
            <Route path="/pm/member-annual" element={<PmMemberAnnual />} />
            <Route path="/pm/pm-resist" element={<PmMemberResist />} />
            <Route path="/pm/work" element={<PmWork />} />
            <Route path="/pm/treeview" element={<TreeView />} />
            <Route path="/pm/secondTree" element={<SecondTree />} />
            <Route path="/pm/pm-resist-insert" element={<PmMemberInsert />} />

            <Route path="/bulletin" element={<BulletinMain />}>
              {/* <Route index element={<Bulletin />} /> */}

              <Route path="board/:categoryCode" element={<BulletinBoard />} />

              <Route path="thread" element={<Thread />} />

              <Route path="thread/:bulletinCode" element={<Thread />} />
              <Route path="mod/:bulletinCode" element={<BullentinMod />} />

              <Route path="bulletinWrite" element={<BullentinWrite />} />
            </Route>


            <Route path="/reservation" element={<ReservationMain />}>
              <Route index element={<Reservation />} />
              <Route path="status" element={<ReservationStatus />} />
              <Route path="mystatus" element={<MyReservationStatus />} />
              <Route path="add" element={<ResourceAdd />} />
              <Route path="reserve" element={<Reserve />} />
              <Route path="mod" element={<ResourceMod />} />
            </Route>
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mypage/mytemplate/customlog" element={<Customerlog />} />
            <Route path="/mypage/profile" element={<Profile />} />
            <Route path="/mypage/myannual" element={<MypageAnnual />} />


          </Route>
          {/* <Route path="*" element={<ErrorComponent error={"notExistUrl"} />} /> */}


          <Route path="/bulletin" element={<BulletinMain />}>
            {/* <Route index element={<Bulletin />} /> */}

            <Route path="board/:categoryCode" element={<BulletinBoard />} />

            <Route path="thread" element={<Thread />} />

            <Route path="thread/:bulletinCode" element={<Thread />} />
            <Route path="mod/:bulletinCode" element={<BullentinMod />} />

            <Route path="bulletinWrite" element={<BullentinWrite />} />
          </Route>


          <Route path="/reservation" element={<ReservationMain />}>
            <Route index element={<Reservation />} />
            <Route path="status" element={<ReservationStatus />} />
            <Route path="mystatus" element={<MyReservationStatus />} />
            <Route path="add" element={<ResourceAdd />} />
            <Route path="reserve" element={<Reserve />} />
          </Route>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/mytemplate/customlog" element={<Customerlog />} />

          <Route path="/mypage/profile" element={<Profile />} />
          <Route path="/mypage/annual" element={<MypageAnnual />} />
          <Route path="/mypage/mymanegement" element={<MyManegement />} />


        {/* ******************************여기부터 관리자 권한 필요 ****************************** */}

          <Route element={<AuthVarification />}>

            <Route path="/admin">
              <Route index element={<AdminPage />} />

              <Route path="member" element={<MemberList />} />
              <Route path="member/modify/:empNo" element={<MemberModify />} />
              <Route path="member/log" element={<MemberLog />} />
              <Route path="member/log/:name" element={<MemberLog />} />
              <Route path="member/auth" element={<AuthManager />} />
            </Route>

          </Route>
          {/* ******************************여기까지 관리자 권한 필요 ****************************** */}

          <Route path="/error/400" element={<BadRequestErrorPage/>}/>
          <Route path="/error/401" element={<UnauthorizedErrorPage/>}/>
          <Route path="/error/403" element={<ForbiddenErrorPage/>}/>
          <Route path="/error/404" element={<PageNotFound/>}/>
          <Route path="/error/500" element={<ServerErrorPage/>}/>

          </Route>

      </Routes>


    </BrowserRouter >

  );
}

export default App;
