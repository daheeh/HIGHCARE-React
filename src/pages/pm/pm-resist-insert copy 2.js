import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callPmInsertAPI } from "../../apis/PmAPICalls";
import "./pm-member.css";
import PmNav from "./pmNav";

function PmMemberInsert() {
  const authes = useSelector((state) => state.authes);
  const empNo = authes.empNo;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState("");

  const [tableData, setTableData] = useState([]);

  // const pmSubmission = async () => {
  //   setType("resist");
  //   if (empNo !== undefined) {
  //     try {
  //       const formData = {};
  //       console.log("------------------>", formData);
        
  //       console.log(
  //         "-----------------------------------response",
  //         response.status
  //       );
  //       if (response.status === 200) {
  //         if (response.data === "stSuceess") {
  //           window.alert("등록하였습니다");
  //         } else {
  //           window.alert("이미 등록이 완료되었습니다. ");
  //         }
  //         window.location.reload();
  //       } else {
  //         window.alert("다시 시도해 주세요.");
  //       }
  //     } catch (error) {
  //       console.error("API error:", error);
  //       window.alert("API 요청 중 오류가 발생했습니다.");
  //     }
  //   } else {
  //     window.alert("재로그인 요청");
  //   }
  // };

  const onSumbitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await dispatch(callPmInsertAPI({ formData }));

    console.log(response);
  }
  const authSubmission = async () => {};

  return (
    <section>
      <PmNav />
      <div className="apv-navibox">
        <div className="pm-de-top">
          <div className="pm-div-font">사원 등록</div>
        </div>
        <br />
        <form onSubmit={onSumbitHandler}>
          <div className="pm-section">
            <div className="div4" >
              <div className="div5">
                <div className="pm-photobox"></div>
                <div>
                  <div className="pm-content">
                    <div className="pm-memberinfo-title">이름</div>
                    <input type="text" className="pm-input" name="empName" />
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">주민등록번호</div>
                      <input className="pm-input" name="residentNo" />
                    </div>
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">전화번호</div>
                      <input className="pm-input" name="phone" />
                    </div>
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">최종학력</div>
                      <input className="pm-input" name="education" />
                    </div>
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">주소</div>
                      <input className="pm-input" name="address" />
                    </div>
                  </div>
                  <div className="pm-flex">
                    <div className="pm-content">
                      <div className="pm-memberinfo-title">이메일</div>
                      <input className="pm-input" name="empEmail" />
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
                          <td className="pm-test8">
                            <input className="pm-input" name="deptName" />
                          </td>
                          <td className="pm-test8">
                            <input className="pm-input" name="jobName" />
                          </td>
                          <td className="pm-test8">
                            <input className="pm-input" name="telephone" />
                          </td>
                          <td className="pm-test8">
                            <input className="pm-input" name="startDate" />
                          </td>
                          <td className="pm-test9">
                            <input className="pm-input" name="endDate" />
                          </td>
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
                          <th className="pm-test2">병역기간</th>
                          <th className="pm-test2">병역상태</th>
                          <th className="pm-test4">공란</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2].map((item) => {
                          return <tr key={item}>
                            <td className="pm-tests">
                              {" "}
                              <input className="pm-input" name={'military['+item+'].startDate'} />
                            </td>
                            <td className="pm-tests">
                              <input className="pm-input" name={'military['+item+'].endDate'} />
                            </td>
                            <td className="pm-tests">
                              <input className="pm-input" name={'military['+item+'].status'} />
                            </td>
                            <td className="pm-test9"></td>
                          </tr>;
                        })}
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
                      {[0, 1, 2].map((item) => {
                        return <tr key={item}>
                          <td className="pm-tests">
                            <input className="pm-input" name={'career['+item+'].name'} />
                          </td>
                          <td className="pm-tests">
                            <input className="pm-input" name={'career['+item+'].job'} />
                          </td>
                          <td className="pm-tests">
                            <input className="pm-input" name={'career['+item+'].history'} />
                          </td>
                          <td className="pm-tests">
                            <input className="pm-input" name={'career['+item+'].startDate'} />
                          </td>
                          <td className="pm-test9">
                            <input className="pm-input" name={'career['+item+'].endDate'} />
                          </td>
                        </tr>
                      })}
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
                      {[0, 1, 2].map((item) => {
                        return <tr key={item}>
                          <td className="pm-tests">
                            <input className="pm-input" name={'certification['+item+'].name'} />
                          </td>
                          <td className="pm-tests">
                            <input className="pm-input" name={'certification['+item+'].institution'}  />
                          </td>
                          <td className="pm-tests">
                            <input className="pm-input" name={'certification['+item+'].startDate'}   />
                          </td>
                          <td className="pm-tests">
                            <input className="pm-input" name={'certification['+item+'].endDate'} />
                          </td>
                          <td className="pm-test9">
                            <input className="pm-input" name={'certification['+item+'].status'}  />
                          </td>
                        </tr>
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <h6 className="pm-font">
                {" "}
                상기 내용은 사실과 다름없음을 확인합니다.
              </h6>
              <h6 className="pm-font">년 월 일</h6>
              <h6 className="pm-font2">작성자: (인)</h6>
            </div>
          </div>
          <button
          value="사원 등록 하기"
          className="pm-work-button"
        >사원 등록 하기</button>
        </form>
        {/* <input
          onClick={pmSubmission}
          type="button"
          value="사원 등록 하기"
          className="pm-work-button"
        ></input>
        <input
          onClick={authSubmission}
          type="button"
          value="가입 신청"
          className="pm-work-button"
        ></input> */}
      </div>
      <br></br>
    </section>
  );
}

export default PmMemberInsert;
