import { Route, Routes } from "react-router-dom";
import Mypage from "./mypage.js";
import Businesscardregist from "./businesscardregist.js";

function MypagemainTest() {
    return(
        <div>
            
            <Routes>
                <Route path="/" element={<Mypage />} />
                {/* <Route path="/" elment={<Businesscardmanage />}/> */}
                <Route path="/mypage/businesscard/regist" element={<Businesscardregist />}/>
                
            </Routes>
   
         </div>   
    )
}

export default MypagemainTest;