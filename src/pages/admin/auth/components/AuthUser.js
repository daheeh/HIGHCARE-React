import AuthSytle from "../AuthManager.module.css"


function AuthUser() {

    return (

        <div className={AuthSytle.AuthUserBox}>
            <div>기본 관리자(모든 권한)</div>
            <div><button>추가</button><button>삭제</button></div>
            <div style={{display:'flex'}}>
                <div><input type="checkbox"></input></div>
                <div>이름(이메일)</div>
                <div>부서</div>
                <div>직급</div>
                <div>관리자 등록일</div>
            </div>
        </div>


    );


}

export default AuthUser; 