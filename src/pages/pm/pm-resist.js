import React, { useEffect, useState } from 'react';
import './pm-member.css'
import PmNav from './pmNav';
import { useDispatch, useSelector } from 'react-redux';
import { callPmMemberAPI } from '../../apis/PmAPICalls';

function PmMemberResist() {
  const dispatch = useDispatch();
  const resist = useSelector(state => state.pmmem);

  console.log('----------',resist);

  const empinfo = useSelector(state => state.authes);
  const empNum = empinfo.empNo;
  const department = empinfo.dept;

  console.log('================================================empnNum>>>>',empNum);

  useEffect(() => {
    dispatch(callPmMemberAPI(empNum));
  },[]);

  return (
    <div className='marginbox'>
    <section>
      <PmNav/>
      <div className="apv-navibox">
        <div className="pm-de-top">
          <div className="pm-div-font">사원 상세 조회</div>
        </div>                                    
        <br />
        <div>
          <div className="pm-section">
            <div className='div4'>
              <div className='div5s'>
                <div className="pm-photobox"></div>
                <div>
                  <div className="pm-content">
                    <div className="pm-memberinfo-title">이름</div>
                    { resist?.empName && resist?.empName }
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">주민등록번호</div>
                      { resist?.residentNo && resist?.residentNo }
                    </div>
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">전화번호</div>
                      { resist.phone && resist.phone }
                    </div>
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">최종학력</div>
                      { resist?.education && resist?.education }
                    </div>
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">주소</div>
                      { resist?.address && resist?.address }
                    </div>
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content-last">
                      <div className="pm-memberinfo-title">이메일</div>
                      { resist?.empEmail && resist?.empEmail }
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
                          <td className="pm-test8">{department || ''}</td>
                          <td className="pm-test8">{resist.job?.name || ''}</td>
                          <td className="pm-test8">{ resist?.telephone || '' }</td>
                          <td className="pm-test8">{ resist?.startDate || '' }</td>
                          <td className="pm-test9">{ resist?.endDate || '' }</td>
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
                      {resist.military && [...resist.military, null, null, null].slice(0, 3).map((item, index) => (
                          <tr key={index}>
                            <td className="pm-tests">{item?.status || ''}</td>
                            <td className="pm-tests">{item?.status || ''}</td>
                            <td className="pm-tests">{item?.status || ''}</td>
                            <td className="pm-test9">{item?.status || ''}</td>
                          </tr>
                        ))}
                      {/* {Array.isArray(resist.military) ? (
                        resist.military.map((item, index) => (
                          <tr key={index}>
                            <td className="pm-tests">{item?.status || ''}</td>
                            <td className="pm-tests">{item?.status || ''}</td>
                            <td className="pm-tests">{item?.status || ''}</td>
                            <td className="pm-test9">{item?.status || ''}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="pm-tests">{resist.military?.status || ''}</td>
                          <td className="pm-tests">{resist.military?.status || ''}</td>
                          <td className="pm-tests">{resist.military?.status || ''}</td>
                          <td className="pm-test9">{resist.military?.status || ''}</td>
                        </tr>
                      )} */}
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
                      {resist.career && [...resist.career, null, null, null].slice(0, 3).map((item, index) => (
                          <tr key={index}>
                            <td className="pm-tests">{item?.name || ''}</td>
                            <td className="pm-tests">{item?.job || ''}</td>
                            <td className="pm-tests">{item?.history || ''}</td>
                            <td className="pm-tests">{item?.startDate || ''}</td>
                            <td className="pm-test9">{item?.endDate || ''}</td>
                          </tr>
                        ))}
                      {/* {Array.isArray(resist.career) ? (
                        resist.career.slice(0, 3).map((item, index) => (
                          <tr key={index}>
                            <td className="pm-tests">{item?.name || ''}</td>
                            <td className="pm-tests">{item?.job || ''}</td>
                            <td className="pm-tests">{item?.history ? item.history + '년' : ''}</td>
                            <td className="pm-tests">{item?.startDate || ''}</td>
                            <td className="pm-test9">{item?.endDate || ''}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="pm-tests">{resist.career?.name || ''}</td>
                          <td className="pm-tests">{resist.career?.job || ''}</td>
                          <td className="pm-tests">{resist.career?.history ? resist.career.history + '년' : ''}</td>
                          <td className="pm-tests">{resist.career?.startDate || ''}</td>
                          <td className="pm-test9">{resist.career?.endDate || ''}</td>
                        </tr>
                      )} */}
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
                          <th className="pm-test2">자격증명</th>
                          <th className="pm-test2">발급기관</th>
                          <th className="pm-test2">발급일</th>
                          <th className="pm-test2">만료일</th>
                          <th className="pm-test4">활용수준</th>
                        </tr>
                      </thead>
                      <tbody>
                      {resist.certification && [...resist.certification, null, null, null].slice(0, 3).map((item, index) => (
                          <tr key={index}>
                            <td className="pm-test10">{item?.name || ''}</td>
                            <td className="pm-test10">{item?.institution || ''}</td>
                            <td className="pm-test10">{item?.startDate || ''}</td>
                            <td className="pm-test10">{item?.startDate || ''}</td>
                            <td className="pm-test10">{item?.status || ''}</td>
                          </tr>
                        ))}
                      {/* {Array.isArray(resist.certification) ? (
                        resist.certification.slice(0, 3).map((item, index) => (
                          <tr key={index}>
                            <td className="pm-tests">{item?.name || ''}</td>
                            <td className="pm-tests">{item?.institution || ''}</td>
                            <td className="pm-tests">{item?.startDate || ''}</td>
                            <td className="pm-tests">{item?.endDate || ''}</td>
                            <td className="pm-test9">상</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="pm-tests">{resist.certification?.name || ''}</td>
                          <td className="pm-tests">{resist.certification?.institution || ''}</td>
                          <td className="pm-tests">{resist.certification?.startDate || ''}</td>
                          <td className="pm-tests">{resist.certification?.endDate || ''}</td>
                          <td className="pm-test9">상</td>
                        </tr>
                      )} */}
                      {/* {Array.isArray(resist.certification) ? (
  resist.certification.slice(0, 3).map((item, index) => (
    <tr key={index}>
      <td className="pm-tests">{item?.name || ''}</td>
      <td className="pm-tests">{item?.institution || ''}</td>
      <td className="pm-tests">{item?.startDate || ''}</td>
      <td className="pm-tests">{item?.endDate || ''}</td>
      <td className="pm-test9">상</td>
    </tr>
  ))
) : (
  [...Array(3)].map((_, index) => (
    <tr key={index}>
      <td className="pm-tests">{resist.certification?.name || ''}</td>
      <td className="pm-tests">{resist.certification?.institution || ''}</td>
      <td className="pm-tests">{resist.certification?.startDate || ''}</td>
      <td className="pm-tests">{resist.certification?.endDate || ''}</td>
      <td className="pm-test9">상</td>
    </tr>
  ))
)} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            <h6 className="pm-font"> 상기 내용은 사실과 다름없음을 확인합니다.</h6>
            <h6 className="pm-font">2023년      09월      17일</h6>
            <h6 className="pm-font2">작성자:     (인)</h6>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </section>
    </div>
  );
}

export default PmMemberResist;
