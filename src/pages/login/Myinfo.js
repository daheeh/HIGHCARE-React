import { useState } from "react";
import axios from "axios";
import SocialLogin from "./social-login";
import SocialOauth from "./components/LoginGoogle";

const config = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
    },
};


function Myinfo() {

    const [user, setUser] = useState(null);

    const getUser = async () => {
        let res = await axios.get("http://localhost:8080/api/admin/", config);
        setUser(res.data);
    };

    return (
        <>
            <div>
                <h1>user : {user}</h1>
                <button onClick={getUser}>유저정보 가져오기</button>
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
