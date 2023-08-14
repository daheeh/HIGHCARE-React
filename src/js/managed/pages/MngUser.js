import "../css/mngUser.css"

function MngUser(){
    
    return(

        <div className=".mng-mem">
            <div>멤버 통합관리</div>
            <div>
                <div>현재 멤버 수: {}명 </div>
                <div>정상 {}명 / 임시 {}명 / 중지된멤버 {}명</div>
            </div>
            <div className="mng-mem-crud-btn">
                <button>회원추가</button>
                <button>회원수정</button>
                <button>회원삭제</button>
            </div>
            <div className="mng-user-list-category">
                    <input type="checkbox"/>
                    <div>이름</div>         
                    <div>사원번호</div>
                    <div>
                        <select className="jobCode" name="jobCode">
                        <option value="null" disabled hidden selected>직급</option>
                            <option >{}</option>
                        </select>     
                    </div>  
                    <div>
                        <select className="deptCode" name="deptCode">
                            <option value="null" disabled hidden selected>부서</option>
                            <option >{}</option>
                        </select>
                    </div>       
                    <div>이메일</div> 
                    <div>
                        <select className="authCode" name="authCode">
                            <option value="null" disabled hidden selected>유형</option>
                            <option >{}</option>
                        </select>        
                    </div>       
                    <div>계정상태</div>  
            </div>
            <div className="mng-user-list-category-2">
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
            <div className="mng-paging">
                <div style={{justifyContent:'center', display:'flex'}}>                        
                    <button>
                        <div className="leftbtn"/>
                    </button>
                    <button>
                        <div className="centerbtn"/>
                    </button>
                    <button>
                        <div className="rightbtn"/>
                    </button>
                </div>
                <div style={{justifyContent:'center', display:'flex'}}>
                    <div>
                        <select className="searchCode" name="searchCode">
                            <option value="nameAndMail" disabled hidden selected>이름+이메일</option>
                            <option >{}</option>
                        </select>  
                    </div>
                    <div>
                        <input type="search"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MngUser; 