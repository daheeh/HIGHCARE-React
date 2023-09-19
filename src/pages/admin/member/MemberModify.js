import { useEffect, useInsertionEffect, useState } from "react";
import MemberModifyStyle from "./MemberModify.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { accountStatus } from "./MemberList";
import { ModifyInfoAPI, WithDrawInfoAPI } from "../../../apis/MemberAPICalls";
import { SendAndArchive } from "@mui/icons-material";
import { AdminNav } from "../AdminNav";

// 계정상태 유형 변경 
function MemberModify() {

    

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // 선택멤버 
    const selectMember = useSelector(state => state.members.selectMember);
    const { empNo } = useParams();

    console.log("selectMember", selectMember);

    const [member, setMember] = useState([]);

    const [inputDisabled, setInputDisabled] = useState(true);
    const [radioStatus, setRadioStatus] = useState(null);
    const [accstat, setAccstat] = useState('');
    const [sendData, setSendData] = useState('');

    const [data, setData] = useState({
        id: '',
        empNo: empNo,
        name: '',
        jobName: '',
        deptName: '',
        phone: '',
        email: '',
        status: '',
        method: ''
    });


    useEffect(() => {

        // const fetchData = () => {  // 선택 멤버 정보 
            setMember(selectMember);
            setData({ ...data, id: selectMember?.memberId })
            // 선택멤버 계정 정보 
            setAccstat(accountStatus(selectMember?.accessManager));

        // }
        // fetchData();

    }, []);

    // 정보수정 활성화 버튼 
    const modifyActiveBtnClick = async () => {
        setInputDisabled(!inputDisabled);
    }

    // 라디오버튼 
    const handleRadioChange = (e) => {
        setRadioStatus(e.target.id);
        console.log('1');
        setData({ ...data, status: e.target.id })
        console.log('2');
        console.log('data===>', data);
    }

    const infoChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }



    // 수정버튼 
    const modifyAccountStatus = async () => {
        if (data.status) {
            console.log("radiiosstaut ", radioStatus);
            if (radioStatus == 'isWithDraw') {
                data.method = 'delete'
                await dispatch(WithDrawInfoAPI(data));
                navigate(-1);

            } else {
                data.method = 'put'
                 await dispatch(ModifyInfoAPI(data));
                 navigate(-1);
                //  window.location.reload();
            }
            
        }
    }

    return (
        <section>
      <AdminNav />

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
                    <input type="text" name="name" id="modify" required disabled={inputDisabled} defaultValue={member?.employee?.name} onBlur={infoChange} />
                </div>
                <div>
                    <div className="label" htmlFor="">직급</div>
                    <input type="text" name="jobName" id="modify" required disabled={inputDisabled} defaultValue={member?.employee?.jobCode.jobName} onBlur={infoChange} />
                </div>
                <div>
                    <div className="label" htmlFor="">부서</div>
                    <input type="text" name="deptName" id="modify" required disabled={inputDisabled} defaultValue={member?.employee?.deptCode.deptName} onBlur={infoChange} />
                </div>
                <div>
                    <div className="label" htmlFor="">연락처</div>
                    <input type="text" name="phone" id="modify" required disabled={inputDisabled} defaultValue={member?.employee?.phone} onBlur={infoChange} />
                </div>
                <div>
                    <div className="label" htmlFor="">아이디</div>
                    <input type="text" name="memberId" required disabled defaultValue={member?.memberId} />
                </div>
                <div>
                    <div className="label" htmlFor="">이메일</div>
                    <input type="text" name="email" id="modify" required disabled={inputDisabled} defaultValue={member?.employee?.email} onBlur={infoChange} />
                </div>
                <div>
                    <div className="label" htmlFor="">계정상태</div>
                    <input type="text" name="accountStatus" id="accountStatus" required disabled defaultValue={accstat} />
                </div>

                <br />
                <p>계정상태를 변경합니다.</p>
                <div>
                    {/* 계정 잠금N, 비활성화N, 만료N, 탈퇴N, USER */}
                    <label htmlFor="user">정상</label>
                    <input type="radio" name="status" id="user" onChange={handleRadioChange} />

                    {/* 계정 잠금Y, 비활성화N, 만료N, 탈퇴N, PREV */}
                    <label htmlFor="isLock">잠금</label>
                    <input type="radio" name="status" id="isLock" onChange={handleRadioChange} />

                    {/* 계정 잠금N, 비활성화Y, 만료N, 탈퇴N, PREV */}
                    <label htmlFor="isInActive">차단</label>
                    <input type="radio" name="status" id="isInActive" onChange={handleRadioChange} />

                    {/* 계정 잠금N, 비활성화N, 만료Y, 탈퇴N, PREV */}
                    <label htmlFor="isExpired">만료</label>
                    <input type="radio" name="status" id="isExpired" onChange={handleRadioChange} />

                    {/* 계정 잠금N, 비활성화N, 만료N, 탈퇴Y, DRAW */}
                    <label htmlFor="isWithDraw" style={{ color: 'red' }}>탈퇴(확정)</label>
                    <input type="radio" name="status" id="isWithDraw" onChange={handleRadioChange} />
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




        </section>

    );
}

export default MemberModify;