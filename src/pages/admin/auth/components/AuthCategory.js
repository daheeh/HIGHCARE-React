import AuthSytle from "../AuthManager.module.css"

function AuthCategory(){

    return ( 

        <div className={AuthSytle.AuthCategoryBox}>
            <div>관리자 권한 설정</div>
            <div className={AuthSytle.CategoryList}> 
                <div>권한 목록 <button>추가</button></div>
                <div>기본 관리자(모든 권한)
                     
                </div>
                <div>인사관리자(추가용임)</div>
            </div>
        </div>

    );

}

export default AuthCategory; 