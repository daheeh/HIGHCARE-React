import { Outlet } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header"
import LeftNavibar from "../components/commons/leftnavibar"
import LayoutCSS from "./Layout.module.css"
import ManageTest from "../pages/admin/managed/mng-test";
// import EmpMain from "../pages/approval/empMain";



function Layout() {

    return (
        <>
        {/* 에러바운더리 추가하기 */}
        
            <Header/>
            <LeftNavibar/>
            <main className={ LayoutCSS.main }>
                <div style={{display:'flex', alignItems:'end', borderBottom:'1px solid lightgray'}}>
                    {/* <ManageTest/> */}
                </div>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Layout;