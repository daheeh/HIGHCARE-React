import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom";

// 임시비밀번호 검증 
export function TempPwdVerify() {

    const authes = useSelector(state => state.authes);
    const navigate = useNavigate();

    useEffect(() => {

            if (authes.isTempPwd === 'Y') {
                alert("임시비밀번호 상태입니다. 비밀번호를 변경해주세요.");
                navigate("/modifyinfo/password", { replace: true });
            }

    }, [])

    return <Outlet />




}



