import MngUserCss from "./MngUser.module.css"

function MngUser(){
    
    return(

        <div>
            <div>멤버 통합관리</div>
            <div>
                <div>현재 멤버 수: {}명 </div>
                <div>정상 {}명 / 임시 {}명 / 중지된멤버 {}명</div>
            </div>
            <div className={MngUserCss.crudBtn}>
                <button>회원추가</button>
                <button>회원수정</button>
                <button>회원삭제</button>
            </div>
            <div className={MngUserCss.category}>
                    <input type="checkbox"/>
                    <div>이름</div>         
                    <div>사원번호</div>
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
                    <div>계정상태</div>  
            </div>
            <div className={MngUserCss.category}>
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
            <div className={MngUserCss.paging}>
                <div style={{justifyContent:'center', display:'flex'}}>                        
                    <button>
                    <div className={MngUserCss.leftbtn}/>
                    </button>
                    <button>
                    <div className={MngUserCss.centerbtn}/>
                    </button>
                    <button>
                    <div className={MngUserCss.rightbtn}/>
                    </button>
                </div>
            </div>
                <div style={{justifyContent:'center', display:'flex', alignItems:'flex-end'}}>
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

export default MngUser; 