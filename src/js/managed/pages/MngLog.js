import React from "react";
import MngLogCss from "./MngLog.module.css"
import MngUserCss from "./MngUser.module.css"



function MngLog(){

    return(

   

        <div>
            <div className={MngLogCss.title}>멤버 접근로그</div>

            <div className={MngLogCss.searchbox}>
                <div style={{width:80, marginLeft:20, fontSize:20}}>이 름 :</div>
                <input type="search"/>
                <button>검 색</button>
            </div>  
            <div className={MngLogCss.searchbox}>
                <select >
                    <option value="7d" selected>최근 7일간</option>
                    <option value='1m'>최근 한 달간</option>
                    <option value='1y'>최근 1년 간</option>
                    <option value='self'>직접 입력</option>
                </select>  
                <input type="date"/>부터
                <input type="date"/>까지
            </div>  
                
            <div className={MngLogCss.loglist}>
                    <div>시간</div>         
                    <div>이름</div>
                    <div>이메일</div>
                    <div>계정아이디</div>
                    <div>부서</div>
                    <div>상태</div>
                    <div>유형</div>
                    <div>디바이스</div>
                    <div>브라우저</div>
                    
            </div>

            <div className={MngUserCss.paging}>
                <div style={{justifyContent:'', marginLeft:'600px', display:'flex', marginTop:30}}>                        
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

        </div>




    )


}

export default MngLog;
