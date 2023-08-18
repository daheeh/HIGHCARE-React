import { Outlet } from "react-router-dom";
import BulletinNav from "./BulletinNav";


function BulletinMain(){
    return (
        <>
            <div style={{display:'flex',width: '100vw'}}>
            <BulletinNav />
            <Outlet />
            </div>
        </>
    )
}

export default BulletinMain;