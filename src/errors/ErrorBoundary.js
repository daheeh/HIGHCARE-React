import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const errorService = (error, errorInfo) => {

  const log = ({ error, errorInfo }) => {
    // 여기에 실제 로깅 로직을 구현합니다.
    // 예를 들어, 외부 서버 API를 호출하여 에러를 보낼 수 있습니다.
    // 또는 로깅 라이브러리를 사용하여 에러를 기록할 수 있습니다.

    // 예시: 콘솔에 에러 로그 출력
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);

  }
}


export const ErrorComponent = ({ error, resetErrorBoundary }) => {

  const islogin = useSelector(state => state.members.status);
  const navigate = useNavigate();

  return (
    <div>
      <div role="alert" style={{textAlign:'center'}}>
        <h1>404 잘못된 주소 접근입니다.</h1>
        <h3 sytle>메인페이지로 이동하시겠습니까?</h3>            
        <div style={{color:'red'}}onClick={() => navigate("/")}>메인페이지로 이동하기</div>
      </div>



    </div>

  );
};
