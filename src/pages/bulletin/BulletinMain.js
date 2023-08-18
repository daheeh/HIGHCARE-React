import { Outlet } from "react-router-dom";
import BulletinNav from "./BulletinNav";
import Bulletin from "./Bulletin";

function BulletinMain(){
    return (
        <>
            <div style={{display:'flex'}}>
            <BulletinNav />
            <Bulletin />
            </div>
            <Outlet/>
        </>
    )
}

export default BulletinMain;