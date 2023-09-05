import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom";


export function AuthVarification() {

    const authes = useSelector(state => state.authes);

    const navigate = useNavigate();

    useEffect(() => {

        const roleString = authes.role;
        const adminRegex = /ADMIN/g;
        const isAdmin = adminRegex.test(roleString);
        console.log(isAdmin);

        try {
            if (!isAdmin) {
                alert("접속 권한 없음");
                navigate("/", { replace: true });
            }
        } catch (error) {
            // JSON 파싱에 실패한 경우 또는 다른 예외 처리
            alert("권한 정보를 읽을 수 없습니다.");
        }
    }, [])

    return <Outlet />




}



