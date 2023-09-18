import { useState } from "react";
import axios from "axios";
import SocialOauth from "./components/LoginGoogle";

const config = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
    },
};


function Myinfo() {

    const [user, setUser] = useState(null);

    const getUser = async () => {
        let res = await axios.get("http://highcare.coffit.today:8080/api/admin/", config);
        setUser(res.data);
    };

    return (
        <>
            <div>
                <SocialOauth/>                
            </div>

            {/* <div>
                <SocialButton socialNetwork={"kakao"}>
                    카카오 계정 연동하기
                </SocialButton>
            </div>
            <div>
                <SocialButton socialNetwork={"naver"}>
                    네이버 계정 연동하기
                </SocialButton>
            </div> */}
        </>
    );
}

export default Myinfo;
