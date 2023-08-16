import { Outlet } from "react-router-dom";
import Footer from "../commons/Footer";
import Header from "../commons/Header"
import LeftNavibar from "../commons/leftnavibar"
import LayoutCSS from "./Layout.module.css"
import EmpMain from "../js/approval/empMain";
import ManageTest from "../pages/managed/mng-test";


function Layout() {

    return (
        <>
            <Header/>
            <LeftNavibar/>
            <main className={ LayoutCSS.main }>
                <div style={{display:'flex', alignItems:'end', borderBottom:'1px solid lightgray'}}>
                    <EmpMain/>
                    <ManageTest/>
                </div>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Layout;