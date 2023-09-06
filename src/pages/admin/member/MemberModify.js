import { useEffect, useState } from "react";
import MemberModifyStyle from "./MemberModify.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { accountStatus } from "./MemberList";
import ModifyInfo from "./ModifyInfo";
import { ModifyInfoAPI } from "../../../apis/MemberAPICalls";

// 계정상태 유형 변경 
function MemberModify() {

    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const memberlist = useSelector(state => state.members.data);

    const { empNo } = useParams();

    const [member, setMember] = useState([]);

    const [inputDisabled, setInputDisabled] = useState(true);
    const [radioStatus, setRadioStatus ] = useState(null); 

    const [status, setStatus] = useState('');


    useEffect( () => {
        
        ( async () => {  // 선택 멤버 정보 
            await setMember(memberlist.filter(mem => mem.empNo == empNo)[0]);
        })();

        // 선택멤버 계정 정보 
        setStatus(accountStatus(member.accessManager))

    }, []);

    // 정보수정 활성화 버튼 
    const modifyActiveBtnClick = () => {
        setInputDisabled(!inputDisabled);
    }


    // 라디오버튼 
    const handleRadioChange  = (e) => {
        setRadioStatus(e.target.id); 
    }

    const params = {
        memberId: '',
        accountStatus:''
    };

    // 수정버튼 
    const modifyAccountStatus = () => {

        const data = {
            id: member.memberId,
            status: radioStatus,
            method: ''
        }

        console.log('status====> ', radioStatus);
        if(radioStatus === 'isWithDraw') {
            data.method = 'delete'
        } else {
            data.method = 'put'
        }

        if(radioStatus) {

            ( async () => {
                await dispatch(ModifyInfoAPI(data))
            })();
        }

    }

    return (
        <div>

            <div className={MemberModifyStyle.container} >

                <div>
                    <button style={{ marginRight: 0, width: 150, height: 40, background: 'gray', fontSize: 16 }}
                        onClick={modifyActiveBtnClick}>{inputDisabled ? `정보수정 활성화` : `정보수정 비활성화`}
                    </button>
                </div>
                <div>
                    <div className="label" htmlFor="">사번</div>
                    <input type="text" required disabled name="empNo" value={empNo} />
                </div>
                <div>
                    <div className="label" htmlFor="">이름</div>
                    <input type="text" name="name" id="modify" required disabled={inputDisabled} defaultValue={member.employee?.name} />
                </div>
                <div>
                    <div className="label" htmlFor="">직급</div>
                    <input type="text" name="jobName" id="modify" required disabled={inputDisabled} defaultValue={member.employee?.jobCode.jobName} />
                </div>
                <div>
                    <div className="label" htmlFor="">부서</div>
                    <input type="text" name="deptName" id="modify" required disabled={inputDisabled} defaultValue={member.employee?.deptCode.deptName} />
                </div>
                <div>
                    <div className="label" htmlFor="">연락처</div>
                    <input type="text" name="phone" id="modify" required disabled={inputDisabled} defaultValue={member.employee?.phone} />
                </div>
                <div>
                    <div className="label" htmlFor="">아이디</div>
                    <input type="text" name="memberId" required disabled defaultValue={member.memberId} />
                </div>
                <div>
                    <div className="label" htmlFor="">이메일</div>
                    <input type="text" name="mail" id="modify" required disabled={inputDisabled} defaultValue={member.employee?.email} />
                </div>
                <div>
                    <div className="label" htmlFor="">계정상태</div>
                    <input type="text" name="accountStatus" id="accountStatus" required disabled defaultValue={status} />
                </div>

                <br />
                <p>계정상태를 변경합니다.</p>
                <div>
                    {/* 계정 잠금N, 비활성화N, 만료N, 탈퇴N, USER */}
                    <label htmlFor="user">정상</label>
                    <input type="radio" name="accountStatus" id="user" onChange={handleRadioChange}/>

                    {/* 계정 잠금Y, 비활성화N, 만료N, 탈퇴N, PREV */}
                    <label htmlFor="isLock">잠금</label>
                    <input type="radio" name="accountStatus" id="isLock" onChange={handleRadioChange} />

                    {/* 계정 잠금N, 비활성화Y, 만료N, 탈퇴N, PREV */}
                    <label htmlFor="isInActive">차단</label>
                    <input type="radio" name="accountStatus" id="isInActive" onChange={handleRadioChange}/>

                    {/* 계정 잠금N, 비활성화N, 만료Y, 탈퇴N, PREV */}
                    <label htmlFor="isExpired">만료</label>
                    <input type="radio" name="accountStatus" id="isExpired" onChange={handleRadioChange}/>

                    {/* 계정 잠금N, 비활성화N, 만료N, 탈퇴Y, DRAW */}
                    <label htmlFor="isWithDraw" style={{color:'red'}}>탈퇴(확정)</label>
                    <input type="radio" name="accountStatus" id="isWithDraw" onChange={handleRadioChange}/>
                </div>

                <div>
                    {/* ALERT창 필수 
                    계정상태 필수 1개 선택해야함 
                */}
                    <button className={MemberModifyStyle.redbtn}
                        onClick={modifyAccountStatus}
                    >수정</button>

                    {/* 이전주소로 이동 */}
                    <button
                        onClick={() => { navigate(-1); }}
                    >취소</button>
                </div>

            </div>




        </div>

    );
}

export default MemberModify;