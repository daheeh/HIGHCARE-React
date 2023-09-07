import { useEffect, useState } from "react";
import MemberReqStyle from "./MemberRequest.module.css"
import { useDispatch, useSelector } from "react-redux";
import {  requestMember, selectMember } from "../../../apis/MemberAPICalls";
import { ReduxReset } from "../../../utils/ReduxReset";

// 가입요청 페이지 
function MemberRequest() {
  // 리로드시 이전 사원조회 리덕스 날리기 
  ReduxReset(`members`);

  // 매니저 권한만 접근 가능
  // 가입요청 - 사번, 이름, 이메일(비밀번호 부여) 
  // 사번조회해서 자동으로 정보 불러오고, 아이디(사번), 비번, 계정상태 등은 따로 지정하여 회원등록함
  // 지정된 메일로 임시비밀번호를 발송하고, 최초로그인시 비밀번호 변경창 띄움 
  // 사번조회 api 요청 후  받아온 직원 정보 뿌리고 지정이메일 작성하면 임시비밀번호 발송하기 
  // 임시회원으로 등록됨 
  const dispatch = useDispatch();
  const loadMember = useSelector(state => state.members);
  
  const { name, jobName, deptName, phone, email } = loadMember.data;
  const [ empNo, setEmpNo]  = useState("");
  const [ form, setForm ] = useState({
    empNo:'',
    name:'',
    jobName:'',
    deptName:'',
    phone:'',
    email:'',
  }); 


  useEffect(() => {

      console.log("loadMember : ", loadMember);
      setForm(({
        ...form, 
        empNo: empNo,
        name: name,
        jobName:  jobName,
        deptName: deptName,
        phone: phone,
        email: email,
      }));

  }, [loadMember, empNo]);
  

  const onChangeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  } 

  const memberSelectClick = async () => {
    setEmpNo(form.empNo)
    // requestMember(empNo, dispatch);
    await dispatch(selectMember(form.empNo));
    
  }
  
  const requestClick = () => {
    dispatch(requestMember(form));
  }
 

  return (
    <div>
      <div className={MemberReqStyle.container}>

        <div>
          <div className="label" htmlFor="name">사번</div>
          <input type="text" name="empNo" required
          placeholder="사원번호 입력"
            defaultValue={form.empNo||""}
            onChange={onChangeHandler}
          />
          <button name="selectbtn" onClick={memberSelectClick}>사번 조회</button>
        </div>
        <div>
          <div className="label" htmlFor="">이름</div>
          <input type="text" name="name" required disabled 
            value={form.name||""}
          />
        </div>
        <div>
          <div className="label" htmlFor="">직급</div>
          <input type="text" name="jobName" required disabled 
            value={form.jobName||""}
          />
        </div>
        <div>
          <div className="label" htmlFor="">부서</div>
          <input type="text" name="deptName" required disabled 
            value={form.deptName||""}
          />
        </div>
        <div>
          <div className="label" htmlFor="">연락처</div>
          <input type="text" name="phone" required disabled 
            value={form.phone||""}
          />
        </div>

          <p><br/>
            가입할 사원의 이메일주소를 정확히 입력하세요.<br/> (해당 이메일로 아이디와 임시비밀번호가 부여됩니다.)</p>
        <div>
          <div className="label" htmlFor="">이메일</div>
          <input type="mail" name="email" required
          onChange={onChangeHandler}
            placeholder="이메일주소 입력"
            defaultValue={form.email||""}
          />
        </div>
  
        <div>
          <button name="requestbtn" onClick={requestClick}>신청완료</button>
          {/* alert창 */}
        </div>

      </div>
    </div >
  );
}

export default MemberRequest;