import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callPmInsertAPI } from '../../apis/PmAPICalls';
import './pm-member.css';
import PmNav from './pmNav';

function PmMemberInsert() {

  const authes = useSelector(state => state.authes);
  const empNo = authes.empNo;


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState('');

  const [form, setForm] = useState({
    empName: '',
    empEmail: '',
    phone: '',
    residentNo: '',
    startDate: '',
    endDate: '',
    isResignation: '',
    deptcode: '',
    jobcode: '',
    address: '',
    education: '',
    telephone: '',
    certification: [],
    military:[{
        status: '',
        isWheter: ''
      }],
    career: [{
        name: '',
        history: '',
        startDate: '',
        endDate: '',
        job: ''
      }]
  });

  console.log("form : ", form);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
        ...form,
        [name]: value,
    });
    
}


     
  const pmSubmission = async () => {
    setType('resist');
    if (empNo !== undefined) {
      try {
        const formData = {
          ...form,
        };
        console.log('------------------>', formData);
        const response = await dispatch(callPmInsertAPI({ formData }));
        console.log("-----------------------------------response", response.status);
        if (response.status === 200) {
          if (response.data === 'stSuceess') {
            window.alert("등록하였습니다");
          } else {
            window.alert("이미 등록이 완료되었습니다. ");
          }
          window.location.reload();
        } else {
          window.alert("다시 시도해 주세요.");
        }
      } catch (error) {
        console.error("API error:", error);
        window.alert("API 요청 중 오류가 발생했습니다.");
      }
    } else {
      window.alert("재로그인 요청");
    }
  };

	return (
<section>
<PmNav/>
<div className="apv-navibox">
        <div className="pm-de-top">
            <div className="pm-div-font">사원 등록</div>
            </div>
            <br />
            <div>
                    <div className="pm-section">
                        <div className='div4'>
                        <div className='div5'>
                        <div className="pm-photobox"></div>
                        <div>
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">이름</div>
                            <input 
                            type='text'
                            className="pm-input"
                            name="empName"
                            value={form.empName}
                            onChange={onChangeHandler}
                            />
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">주민등록번호</div>
                            <input className="pm-input"
                                name="residentNo"
                                value={form.residentNo}
                                onChange={onChangeHandler}
                            />
                            </div>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">전화번호</div>
                            <input 
                            className="pm-input"
                            name="phone"
                            value={form.phone}
                            onChange={onChangeHandler}
                            />
                            </div>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">최종학력</div>
                            <input 
                            className="pm-input"
                            name="education"
                            value={form.education}
                            onChange={onChangeHandler}
                            />
                            </div>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">주소</div>
                            <input 
                            className="pm-input"
                            name="address"
                            value={form.address}
                            onChange={onChangeHandler}
                            />
                            </div>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">이메일</div>
                            <input 
                            className="pm-input"
                            name="empEmail"
                            value={form.empEmail}
                            onChange={onChangeHandler}
                            />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                <div>
                  <div className="pm-contents">
                    <div className="pm-titleboxs">입사정보</div>
                    <table>
                      <thead>
                        <tr>
                          <th className="pm-test2">부서</th>
                          <th className="pm-test2">직급</th>
                          <th className="pm-test2">부서전화번호</th>
                          <th className="pm-test2">입사일</th>
                          <th className="pm-test4">퇴사일</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td  className="pm-test8">
                            <input 
                            className="pm-input"
                            name="deptName"
                            value={form.deptName}
                            onChange={onChangeHandler}
                            /></td>
                          <td className="pm-test8">
                          <input 
                            className="pm-input"
                            name="jobName"
                            value={form.jobName}
                            onChange={onChangeHandler}
                            /></td>
                          <td className="pm-test8">
                            <input 
                            className="pm-input"
                            name="telephone"
                            value={form.telephone}
                            onChange={onChangeHandler}
                            /></td>
                          <td className="pm-test8">
                            <input 
                            className="pm-input"
                            name="startDate"
                            value={form.startDate}
                            onChange={onChangeHandler}
                            /></td>
                          <td className="pm-test9">
                            <input 
                            className="pm-input"
                            name="endDate"
                            value={form.endDate}
                            onChange={onChangeHandler}
                            /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="pm-contents">
                    <div className="pm-titleboxs">병역사항</div>
                    <table>
                      <thead>
                        <tr>
                          <th className="pm-test2">기간</th>
                          <th className="pm-test2" >병역기간</th>
                          <th className="pm-test2">병역상태</th>
                          <th className="pm-test4">공란</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td className="pm-tests"> <input 
                            className="pm-input"
                            name="milStartDate"
                            value={form.military.milStartDate}
                            onChange={onChangeHandler}
                            /></td>
                            <td className="pm-tests"><input 
                                className="pm-input"
                                name="milEndDate"
                                value={form.military.milEndDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests"><input 
                                    className="pm-input"
                                    name="status"
                                    value={form.military.status}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-test9"></td>
                          </tr>
                      </tbody>
                      <tbody>
                          <tr>
                            <td className="pm-tests"> <input 
                            className="pm-input"
                            name="milStartDate"
                            value={form.military.milStartDate}
                            onChange={onChangeHandler}
                            /></td>
                            <td className="pm-tests"><input 
                                className="pm-input"
                                name="milEndDate"
                                value={form.military.milEndDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests"><input 
                                    className="pm-input"
                                    name="status"
                                    value={form.military.status}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-test9"></td>
                          </tr>
                      </tbody>
                      <tbody>
                          <tr>
                            <td className="pm-tests"> <input 
                            className="pm-input"
                            name="milStartDate"
                            value={form.military.milStartDate}
                            onChange={onChangeHandler}
                            /></td>
                            <td className="pm-tests"><input 
                                className="pm-input"
                                name="milEndDate"
                                value={form.military.milEndDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests"><input 
                                    className="pm-input"
                                    name="status"
                                    value={form.military.status}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-test9"></td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="pm-contents">
                    <div className="pm-titleboxs">경력사항</div>
                    <table>
                      <thead>
                        <tr>
                          <th className="pm-test2">회사명</th>
                          <th className="pm-test2">직위</th>
                          <th className="pm-test2">근속년수</th>
                          <th className="pm-test2">입사일</th>
                          <th className="pm-test4">퇴사일</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                          <tr>
                            <td className="pm-tests">
                                <input 
                                    className="pm-input"
                                    name="carName"
                                    value={form.career.name}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-tests">
                                <input 
                                    className="pm-input"
                                    name="carJob"
                                    value={form.career.job}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-tests">
                                <input 
                                    className="pm-input"
                                    name="history"
                                    value={form.career.history}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-tests">
                                <input 
                                    className="pm-input"
                                    name="carStartDate"
                                    value={form.career.startDate}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-test9">
                                <input 
                                    className="pm-input"
                                    name="carEndDate"
                                    value={form.career.endDate}
                                    onChange={onChangeHandler}
                                    /></td>
                        </tr>
                    </tbody>
                    <tbody>
                       
                          <tr>
                            <td className="pm-tests">
                                <input 
                                    className="pm-input"
                                    name="carName"
                                    value={form.career.name}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-tests">
                                <input 
                                    className="pm-input"
                                    name="carJob"
                                    value={form.career.job}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-tests">
                                <input 
                                    className="pm-input"
                                    name="history"
                                    value={form.career.history}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-tests">
                                <input 
                                    className="pm-input"
                                    name="carStartDate"
                                    value={form.career.startDate}
                                    onChange={onChangeHandler}
                                    /></td>
                            <td className="pm-test9">
                                <input 
                                    className="pm-input"
                                    name="carEndDate"
                                    value={form.career.endDate}
                                    onChange={onChangeHandler}
                                    /></td>
                        </tr>
                    </tbody>
                    <tbody>
                       
                       <tr>
                         <td className="pm-tests">
                             <input 
                                 className="pm-input"
                                 name="carName"
                                 value={form.career.name}
                                 onChange={onChangeHandler}
                                 /></td>
                         <td className="pm-tests">
                             <input 
                                 className="pm-input"
                                 name="carJob"
                                 value={form.career.job}
                                 onChange={onChangeHandler}
                                 /></td>
                         <td className="pm-tests">
                             <input 
                                 className="pm-input"
                                 name="history"
                                 value={form.career.history}
                                 onChange={onChangeHandler}
                                 /></td>
                         <td className="pm-tests">
                             <input 
                                 className="pm-input"
                                 name="carStartDate"
                                 value={form.career.startDate}
                                 onChange={onChangeHandler}
                                 /></td>
                         <td className="pm-test9">
                             <input 
                                 className="pm-input"
                                 name="carEndDate"
                                 value={form.career.endDate}
                                 onChange={onChangeHandler}
                                 /></td>
                     </tr>
                 </tbody>
                    </table>
                </div>
                </div>

                
                <div>
                  <div className="pm-contents-last">
                    <div className="pm-titleboxs">자격증</div>
                    <table>
                      <thead>
                        <tr>
                          <th className="pm-test2">자격증이름</th>
                          <th className="pm-test2">발급기관</th>
                          <th className="pm-test2">발급일</th>
                          <th className="pm-test2">만료일</th>
                          <th className="pm-test4">활용수준</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerName"
                                value={form.certification.name}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="institution"
                                value={form.certification.institution}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerStartDate"
                                value={form.certification.startDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerEndDate"
                                value={form.certification.endDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-test9">
                                <input 
                                className="pm-input"
                                name="cerStatus"
                                value={form.certification.cerStatus}
                                onChange={onChangeHandler}
                                /></td>
                          </tr>
                      </tbody>
                      <tbody>
                          <tr>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerName"
                                value={form.certification.name}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="institution"
                                value={form.certification.institution}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerStartDate"
                                value={form.certification.startDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerEndDate"
                                value={form.certification.endDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-test9">
                                <input 
                                className="pm-input"
                                name="cerStatus"
                                value={form.certification.cerStatus}
                                onChange={onChangeHandler}
                                /></td>
                          </tr>
                      </tbody>
                      <tbody>
                          <tr>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerName"
                                value={form.certification.name}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="institution"
                                value={form.certification.institution}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerStartDate"
                                value={form.certification.startDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-tests">
                                <input 
                                className="pm-input"
                                name="cerEndDate"
                                value={form.certification.endDate}
                                onChange={onChangeHandler}
                                /></td>
                            <td className="pm-test9">
                                <input 
                                className="pm-input"
                                name="cerStatus"
                                value={form.certification.cerStatus}
                                onChange={onChangeHandler}
                                /></td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
                    <h6 className="pm-font"> 상기 내용은 사실과 다름없음을 확인합니다.</h6>
                    <h6 className="pm-font">년      월      일</h6>
                    <h6 className="pm-font2">작성자:     (인)</h6>
                    </div>
                </div>
            </div>
            <input onClick={pmSubmission} type="button" value="사원 등록 하기" className="pm-work-button"></input>
            </div>
            <br></br>
    </section>
	);
}

export default PmMemberInsert;



