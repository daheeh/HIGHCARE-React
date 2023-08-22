import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header"
import LeftNavibar from "../components/commons/leftnavibar"
import LayoutCSS from "./Layout.module.css"
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent, errorService } from "../errors/ErrorBoundary";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoginVerify from "../utils/LoginVerify";
import { decodeJwt } from "../utils/decodeJwt";
// import EmpMain from "../pages/approval/empMain";



function Layout() {

        
    return (
        <>
        
            {/* 에러바운더리 추가하기 */}
                {/* <MyErrorProneComponent /> */}


                {/* 엑세스토큰 만료 에러  */}

                <Header />
                <LeftNavibar />
                <main className={LayoutCSS.main}>
                    <div style={{ display: 'flex', alignItems: 'end', borderBottom: '1px solid lightgray' }}>
                    </div>
                    <Outlet />
                </main>
                <Footer />

        </>
    );
}

export default Layout;