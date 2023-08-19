import { Link } from "react-router-dom";
import MemberListCss from "./MemberList.module.css"


function MemberList(){
    
    return(

        <div>
            <div>회원 통합관리</div>
            <div>
                <div>현재 멤버 수: {}명 </div>
                <div>정상 {}명 / 임시 {}명 / 차단 {}명</div>
            </div>
            <div className={MemberListCss.crudBtn}>
                    {/* 임시회원상태만 클릭시 회원등록확정 alert창 띄워지고 권한 일반회원으로 변경됨 */}
                    <button>회원등록</button>
                <Link to="modify">
                    {/* 체크박스 선택된 회원의 정보 수정 페이지 이동(1개만 선택되어야함) */}
                    <button>회원수정</button>
                </Link>

            </div>
            <div className={MemberListCss.category}>
                    <input type="checkbox"/>
                    <div>사원번호</div>
                    <div>이름</div>         
                    <div>
                        <select name="jobCode">
                        <option value="null" disabled hidden selected>직급</option>
                            <option >{}</option>
                        </select>     
                    </div>  
                    <div>
                        <select name="deptCode">
                            <option value="null" disabled hidden selected>부서</option>
                            <option >{}</option>
                        </select>
                    </div>       
                    <div>이메일</div> 
                    <div>
                        <select name="authCode">
                            <option value="null" disabled hidden selected>유형</option>
                            <option >{}</option>
                        </select>        
                    </div>       
                    <div>
                        <select name="accountStatus">
                            <option value="null" disabled hidden selected>계정상태</option>
                            <option >{}</option>
                        </select>
                    </div>      
            </div>
            <div className={MemberListCss.category}>
                    <input type="checkbox"/>
                    <div>{}</div>         
                    <div>{}</div>         
                    <div>{}</div>         
                    <div>{}</div>         
                    <div>{}</div>         
                    <div>{}</div>         
                    <div>{}</div>         
                    
            </div>

            <div>

            </div>
            <div className={MemberListCss.paging} style={{marginLeft:500}}>
                <div style={{justifyContent:'', display:'flex'}}>                        
                    <button>
                    <div className={MemberListCss.leftbtn}/>
                    </button>
                    <button>
                    <div className={MemberListCss.centerbtn}/>
                    </button>
                    <button>
                    <div className={MemberListCss.rightbtn}/>
                    </button>
                </div>
            </div>
                <div style={{justifyContent:'', marginLeft:'400px', display:'flex', alignItems:'flex-end'}}>
                    <div>
                        <select style={{marginRight:10}}>
                            <option value="nameAndMail" selected>이름+이메일</option>
                            <option value="empno" >사원번호</option>
                        </select>  
                    </div>
                    <div>
                        <input type="search"></input>
                        <button style={{fontSize:16, width:70, height:24}}>검색</button>
                    </div>
                </div>
                        
        </div>
    );
}

export default MemberList; 