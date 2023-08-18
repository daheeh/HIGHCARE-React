import { Outlet } from "react-router-dom";
import ReservationNav from "./ReservationNav";

function ReservationMain(){
    return (
        <>
            <div style={{display:'flex',width: '100vw'}}>
                <ReservationNav />
                <Outlet /> 
            </div>
        </>
    )
}

export default ReservationMain;