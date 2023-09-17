import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export function AccountStatusVerify() {

    const authes = useSelector(state => state.authes);

    const navigate = useNavigate();

    useEffect(() => {

        const roleString = authes.role;
        const restrictedRoles = ["PRE", "DRAW"];
        
        try {
            // restrictedRoles 포함되지 않는 경우에만 접속을 허용
            if (restrictedRoles.some((role) => roleString.includes(role))) {
                alert("접속 권한 없음");
                navigate("/login", { replace: true });
            }
        } catch (error) {
            alert("권한 정보를 읽을 수 없습니다.");
        }
    }, [])

    return <Outlet />;

}
