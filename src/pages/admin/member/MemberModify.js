import { useState } from "react";
import MemberModifyStyle from "./MemberModify.module.css"

// 계정상태 유형 변경 
function MemberModify() {

    const [memberNo, setMemberNo] = useState();


    return (
        <div>

            <div className={MemberModifyStyle.container}>

                <div>
                    <div className="label" htmlFor="">사번</div>
                    <input type="text" name="empNo" required disabled />
                </div>
                <div>
                    <div className="label" htmlFor="">이름</div>
                    <input type="text" name="name" required disabled />
                </div>
                <div>
                    <div className="label" htmlFor="">직급</div>
                    <input type="text" name="jobName" required disabled />
                </div>
                <div>
                    <div className="label" htmlFor="">부서</div>
                    <input type="text" name="deptName" required disabled />
                </div>
                <div>
                    <div className="label" htmlFor="">연락처</div>
                    <input type="text" name="phone" required disabled />
                </div>
                <div>
                    <div className="label" htmlFor="">이메일</div>
                    <input type="text" name="mail" required disabled />
                </div>

                <br />
                <p>계정상태를 변경합니다.</p>
                <div>
                    {/* 계정 잠금N, 비활성화N, 만료N, 탈퇴N, USER */}
                    <label htmlFor="user">정상</label>
                    <input type="radio" name="accountStatus" id="user" />
                    {/* 계정 잠금Y, 비활성화N, 만료N, 탈퇴N, TEMPORARY */}
                    <label htmlFor="temp">임시</label>
                    <input type="radio" name="accountStatus" id="temp" />
                    {/* 계정 잠금Y, 비활성화N, 만료N, 탈퇴N, TEMPORARY */}
                    <label htmlFor="user">잠금</label>
                    <input type="radio" name="accountStatus" id="lock" />
                    {/* 계정 잠금N, 비활성화Y, 만료N, 탈퇴N, TEMPORARY */}
                    <label htmlFor="block">차단</label>
                    <input type="radio" name="accountStatus" id="block" />
                    {/* 계정 잠금N, 비활성화N, 만료Y, 탈퇴N, TEMPORARY */}
                    <label htmlFor="expire">만료</label>
                    <input type="radio" name="accountStatus" id="expire" />
                    {/* 계정 잠금N, 비활성화N, 만료N, 탈퇴Y, WITHDRAW */}
                    <label htmlFor="withdraw">탈퇴확정</label>
                    <input type="radio" name="accountStatus" id="withdraw" />
                </div>

                <div>
                    {/* ALERT창 필수 
                    계정상태 필수 1개 선택해야함 
                */}
                    <button className={MemberModifyStyle.redbtn}>수정</button>

                    {/* 이전주소로 이동 */}
                    <button>취소</button>
                </div>

            </div>




        </div>

    );
}

export default MemberModify;