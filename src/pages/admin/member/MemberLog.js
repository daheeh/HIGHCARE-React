import React from "react";
import MemberLogStyle from "./MemberLog.module.css"
import MemberListCss from "./MemberList.module.css"
import { TokenVerification } from "../auth/TokenVerification";
import { AuthVarification } from "../auth/AuthVerification";
import { AdminNav } from "../AdminNav";



function MemberLog() {
    // TokenVerification();
    // AuthVarification();


    return (

        <section>
            <AdminNav/>
            <div style={{ marginTop: 20 }}>

                <div className={MemberLogStyle.title}>회원 접속로그</div>

                <div className={MemberLogStyle.searchbox}>
                    <div style={{ width: 80, marginLeft: 20, fontSize: 20 }}>이 름 :</div>
                    <input type="search" />
                    <button>검 색</button>
                </div>
                <div className={MemberLogStyle.searchbox}>
                    <select >
                        <option value="7d" selected>최근 7일간</option>
                        <option value='1m'>최근 한 달간</option>
                        <option value='1y'>최근 1년 간</option>
                        <option value='self'>직접 입력</option>
                    </select>
                    <input type="date" />부터
                    <input type="date" />까지
                </div>

                <div className={MemberLogStyle.loglist}>
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

                <div className={MemberListCss.paging}>
                    <div style={{ justifyContent: '', marginLeft: '600px', display: 'flex', marginTop: 30 }}>
                        <button>
                            <div className={MemberListCss.leftbtn} />
                        </button>
                        <button>
                            <div className={MemberListCss.centerbtn} />
                        </button>
                        <button>
                            <div className={MemberListCss.rightbtn} />
                        </button>
                    </div>
                </div>

            </div>
        </section>

    )


}

export default MemberLog;
