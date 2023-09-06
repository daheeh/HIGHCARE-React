// import React from 'react';
// import './pm-member.css'
// import PmNav from './pmNav';

// function PmMemberResist() {
// 	return (
// <section>
// <PmNav/>
// <div className="apv-navibox">
//         <div className="pm-de-top">
//             <div className="pm-div-font">사원 상세 조회</div>
//             </div>
//             <br />
//             <div>
//                     <div class="pm-section">
//                         <div className='div4'>
//                         <div className='div5'>
//                         <div className="pm-photobox"></div>
//                         <div>
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">이름</div>
//                             <input className="pm-input"/>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">주민등록번호</div>
//                             <input className="pm-input"/>
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">전화번호</div>
//                             <input className="pm-input"/>
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">생년월일</div>
//                             <input className="pm-input"/>
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">주소</div>
//                             <input className="pm-input"/>
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">이메일</div>
//                             <input className="pm-input"/>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div>
//                         <div>
//                         <div className="pm-content2">
//                             <div className="pm-titlebox">가족</div>
//                             <div>
//                                 <div className="pm-titlefontbox">관계</div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">성명</div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">생년월일</div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">학력</div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox4">연락처</div>
//                                 <div className="pm-titlefontbox3"></div>
//                                 <div className="pm-titlefontbox3"></div>
//                                 <div className="pm-titlefontbox3"></div>
//                             </div>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="pm-content2">
//                                 <div className="pm-titlebox">학력사항</div>
//                                 <div>
//                                     <div className="pm-titlefontbox">재학기간</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">학교명</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">전공</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">졸업일</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox4">성적</div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                 </div>
//                                 </div>
//                             </div>

//                         <div>
//                             <div className="pm-content2">
//                                 <div className="pm-titlebox">경력사항</div>
//                                 <div>
//                                     <div className="pm-titlefontbox">근무기간</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">회사명</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">직위</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">담당업무</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox4">퇴사사유</div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                 </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className="pm-content2">
//                                     <div className="pm-titlebox">기타사항</div>
//                                     <div>
//                                         <div className="pm-titlefontbox">자격증이름</div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-titlefontbox">발급기관명</div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-titlefontbox">발급일자</div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-titlefontbox">만료일자</div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-titlefontbox4">활용수준</div>
//                                         <div className="pm-titlefontbox3"></div>
//                                         <div className="pm-titlefontbox3"></div>
//                                         <div className="pm-titlefontbox3"></div>
//                                     </div>
//                                     </div>
//                                 </div>
//                     </div>
//                     <h6 className="pm-font"> 상기 내용은 사실과 다름없음을 확인합니다.</h6>
//                     <h6 className="pm-font">년      월      일</h6>
//                     <h6 className="pm-font2">작성자:     (인)</h6>
//                 </div>
//             </div>
//             </div>
//             <br></br>
//                 <div className="paging">
//                     <span>1</span>
//                     <span>2</span>
//                     <span>3</span>
//                     <span>4</span>
//                     <span>5</span>
//                 </div>
//         </div>
//     </section>
// 	);
// }

// export default PmMemberResist;





///////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { callPmInsertAPI } from '../../apis/PmAPICalls';
// import './pm-member.css'
// import PmNav from './pmNav';

// function PmMemberInsert() {

//     const authes = useSelector(state => state.authes);
//     const empNo = authes.empNo;
//     console.log("empNo : ", empNo);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [type, setType] = useState('');
    

//     const [employeeData, setEmployeeData] = useState({
//         empName: '',
//         empEmail: '',
//         phone: '',
//         residentNo: '',
//         startDate: '',
//         endDate: '',
//         isResignation: '',
//         deptcode: '',
//         jobcode: '',
//         address: '',
//         education: '',
//         telephone: ''
//       });
      
//       const [certificationData, setCertificationData] = useState({
//         cerName: '',
//         cerStartDate: '',
//         cerEndDate: '',
//         institution: '',
//         cerNo: ''
//       });
      
//       const [militaryData, setMilitaryData] = useState({
//         status: '',
//         isWheter: ''
//       });
      
//       const [careerData, setCareerData] = useState({
//         carNo: '',
//         carName: '',
//         history: '',
//         carStartDate: '',
//         carEndDate: '',
//         carJob: ''
//       });

//     // const [formData, setFormData] = useState({
//     //     empName : '',
//     //     empEmail : '',
//     //     phone : '',
//     //     residentNo: '',
//     //     startDate : '',
//     //     endDate : '',
//     //     isResignation : '',
//     //     deptcode : '',
//     //     jobcode : '',
//     //     address : '',
//     //     education : '',
//     //     telephone : '',


//     //     cerName : '',
//     //     cerStartDate : '',
//     //     cerEndDate : '',
//     //     institution : '',
//     //     cerNo : '',

//     //     status : '',
//     //     isWheter : '',

//     //     carNo : '',
//     //     carName : '',
//     //     history : '',
//     //     carStartDate : '',
//     //     carEndDate : '',
//     //     carJob : ''

//     // })

//     const handleEmpNameChange = (e) => {
//         setEmployeeData({ ...employeeData, empName: e.target.value });
//     };

//     const handleCertNameChange = (e) => {
//     setCertificationData({ ...certificationData, cerName: e.target.value });
//     };

//     const handleMilitaryStatusChange = (e) => {
//         setMilitaryData({ ...militaryData, status: e.target.value });
//     };

//     const handleCareerNoChange = (e) => {
//         setCareerData({ ...careerData, carNo: e.target.value });
//     };

//     const onChangeHandler = (e) => {
//         const { name, value } = e.target;
//         setFormData((pmFormData) => ({
//             ...pmFormData,
//             [name]: value,
//         }));
//     }

//     const pmSubmission = async () => {
//         setType('resist');
//         if (empNo !== undefined) {
// 			try {
// 				const response = await dispatch(callPmInsertAPI({ formData }));
//                 console.log("-----------------------------------response", response.status);
// 				if (response.status === 200) {
//                     if(response.data === 'stSuceess'){

//                         window.alert("등록하였습니다");
                    
//                     } else {
//                         window.alert("이미 등록이 완료되었습니다. ");
                        
//                     }
//                     window.location.reload();
// 				} else {
// 					window.alert("다시 시도해 주세요.");
// 				}
// 			} catch (error) {
// 				console.error("API error:", error);
// 				window.alert("API 요청 중 오류가 발생했습니다.");
// 			}
// 		} else {
//             window.alert("재로그인 요청");
// 		}
// 	};

// 	return (
// <section>
// <PmNav/>
// <div className="apv-navibox">
//         <div className="pm-de-top">
//             <div className="pm-div-font">사원 등록</div>
//             </div>
//             <br />
//             <div>
//                     <div className="pm-section">
//                         <div className='div4'>
//                         <div className='div5'>
//                         <div className="pm-photobox"></div>
//                         <div>
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">이름</div>
//                             <input 
//                             type='text'
//                             className="pm-input"
//                             name="empName"
//                             value={formData.empName}
//                             onChange={onChangeHandler}
//                             />
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">주민등록번호</div>
//                             <input className="pm-input"
//                                 name="resistNo"
//                                 value={formData.resistNo}
//                                 onChange={onChangeHandler}
//                             />
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">전화번호</div>
//                             <input 
//                             className="pm-input"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={onChangeHandler}
//                             />
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">최종학력</div>
//                             <input 
//                             className="pm-input"
//                             name="education"
//                             value={formData.education}
//                             onChange={onChangeHandler}
//                             />
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">주소</div>
//                             <input 
//                             className="pm-input"
//                             name="address"
//                             value={formData.address}
//                             onChange={onChangeHandler}
//                             />
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">이메일</div>
//                             <input 
//                             className="pm-input"
//                             name="empEmail"
//                             value={formData.empEmail}
//                             onChange={onChangeHandler}
//                             />
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div>
//                         <div>
//                         <div className="pm-content2">
//                             <div className="pm-titlebox">입사정보</div>
//                             <div>
//                                 <div className="pm-titlefontbox">부서</div>
//                                 <div className="pm-titlefontbox2">
//                                 <input 
//                             className="pm-input"
//                             name="deptName"
//                             value={formData.deptName}
//                             onChange={onChangeHandler}
//                             />
//                                 </div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">직급</div>
//                                 <div className="pm-titlefontbox2">
//                                 <input 
//                             className="pm-input"
//                             name="jobName"
//                             value={formData.jobName}
//                             onChange={onChangeHandler}
//                             />
//                                 </div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">부서전화번호</div>
//                                 <div className="pm-titlefontbox2">
//                                 <input 
//                             className="pm-input"
//                             name="telephone"
//                             value={formData.telephone}
//                             onChange={onChangeHandler}
//                             />
//                                 </div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">입사일</div>
//                                 <div className="pm-titlefontbox2">
//                                 <input 
//                             className="pm-input"
//                             name="startDate"
//                             value={formData.startDate}
//                             onChange={onChangeHandler}
//                             />
//                                 </div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox4">퇴사일</div>
//                                 <div className="pm-titlefontbox3">
//                                 <input 
//                             className="pm-input"
//                             name="endDate"
//                             value={formData.endDate}
//                             onChange={onChangeHandler}
//                             />
//                                 </div>
//                                 <div className="pm-titlefontbox3"></div>
//                                 <div className="pm-titlefontbox3"></div>
//                             </div>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="pm-content2">
//                                 <div className="pm-titlebox">병역사항</div>
//                                 <div>
//                                     <div className="pm-titlefontbox">병역기간</div>
//                                     <div className="pm-titlefontbox2">
//                             <input 
//                             className="pm-input"
//                             name="milStartDate"
//                             value={formData.milStartDate}
//                             onChange={onChangeHandler}
//                             />
//                                 </div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">병역기간</div>
//                                     <div className="pm-titlefontbox2">
//                                     <input 
//                                 className="pm-input"
//                                 name="milEndDate"
//                                 value={formData.milEndDate}
//                                 onChange={onChangeHandler}
//                                 />
//                                     </div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">병역상태</div>
//                                     <div className="pm-titlefontbox2">
//                                     <input 
//                                     className="pm-input"
//                                     name="status"
//                                     value={formData.status}
//                                     onChange={onChangeHandler}
//                                     />
//                                     </div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">사유</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox4">사유</div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                 </div>
//                                 </div>
//                             </div>

//                         <div>
//                             <div className="pm-content2">
//                                 <div className="pm-titlebox">경력사항</div>
//                                 <div>
//                                     <div className="pm-titlefontbox">회사명</div>
//                                     <div className="pm-titlefontbox2">
//                                     <input 
//                                     className="pm-input"
//                                     name="carName"
//                                     value={formData.carName}
//                                     onChange={onChangeHandler}
//                                     />
//                                     </div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">직위</div>
//                                     <div className="pm-titlefontbox2">
//                                     <input 
//                                     className="pm-input"
//                                     name="carJob"
//                                     value={formData.carJob}
//                                     onChange={onChangeHandler}
//                                     />
//                                     </div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">근속년수</div>
//                                     <div className="pm-titlefontbox2"> <input 
//                                     className="pm-input"
//                                     name="history"
//                                     value={formData.history}
//                                     onChange={onChangeHandler}
//                                     /></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox">입사일</div>
//                                     <div className="pm-titlefontbox2">
//                                     <input 
//                                     className="pm-input"
//                                     name="carStartDate"
//                                     value={formData.carStartDate}
//                                     onChange={onChangeHandler}
//                                     />
//                                     </div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 <div>
//                                     <div className="pm-titlefontbox4">퇴사일</div>
//                                     <div className="pm-titlefontbox3">
//                                     <input 
//                                     className="pm-input"
//                                     name="carEndDate"
//                                     value={formData.carEndDate}
//                                     onChange={onChangeHandler}
//                                     />
//                                     </div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                 </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className="pm-content2">
//                                     <div className="pm-titlebox">기타사항</div>
//                                     <div>
//                                         <div className="pm-titlefontbox">자격증이름</div>
//                                         <div className="pm-titlefontbox2">
//                                         <input 
//                                         className="pm-input"
//                                         name="cerName"
//                                         value={formData.cerName}
//                                         onChange={onChangeHandler}
//                                         />
//                                         </div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-titlefontbox">발급기관명</div>
//                                         <div className="pm-titlefontbox2">
//                                         <input 
//                                         className="pm-input"
//                                         name="institution"
//                                         value={formData.institution}
//                                         onChange={onChangeHandler}
//                                         />
//                                         </div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-titlefontbox">발급일자</div>
//                                         <div className="pm-titlefontbox2">
//                                         <input 
//                                         className="pm-input"
//                                         name="cerStartDate"
//                                         value={formData.cerStartDate}
//                                         onChange={onChangeHandler}
//                                         />
//                                         </div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-titlefontbox">만료일자</div>
//                                         <div className="pm-titlefontbox2">
//                                         <input 
//                                         className="pm-input"
//                                         name="cerEndDate"
//                                         value={formData.cerEndDate}
//                                         onChange={onChangeHandler}
//                                         />
//                                         </div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-titlefontbox4">활용수준</div>
//                                         <div className="pm-titlefontbox3">
//                                         <input 
//                                         className="pm-input"
//                                         name="cerStatus"
//                                         value={formData.cerStatus}
//                                         onChange={onChangeHandler}
//                                         />
//                                         </div>
//                                         <div className="pm-titlefontbox3"></div>
//                                         <div className="pm-titlefontbox3"></div>
//                                     </div>
//                                     </div>
//                                 </div>
//                     </div>
//                     <h6 className="pm-font"> 상기 내용은 사실과 다름없음을 확인합니다.</h6>
//                     <h6 className="pm-font">년      월      일</h6>
//                     <h6 className="pm-font2">작성자:     (인)</h6>
//                 </div>
//             </div>
//             </div>
//             <input onClick={pmSubmission} type="button" value="사원 등록 하기" className="pm-work-button"></input>
//             <br></br>
//                 <div className="paging">
//                     <span>1</span>
//                     <span>2</span>
//                     <span>3</span>
//                     <span>4</span>
//                     <span>5</span>
//                 </div>
//         </div>
//     </section>
// 	);
// }

// export default PmMemberInsert;



// import React, { useEffect, useState } from 'react';
// import './pm-member.css'
// import PmNav from './pmNav';
// import { useDispatch, useSelector } from 'react-redux';
// import { callPmMemberAPI } from '../../apis/PmAPICalls';

// function PmMemberResist() {

    
//     const dispatch = useDispatch();
//     const resist = useSelector(state => state.pmmem);

//     console.log(resist);


//     const empinfo = useSelector(state => state.authes);
//     const empNum = empinfo.empNo;

//     console.log(empNum);

//     useEffect(() => {
//         dispatch(callPmMemberAPI(empNum));
//     },[]);

// 	return (
// <section>
// <PmNav/>
// <div className="apv-navibox">
//         <div className="pm-de-top">
//             <div className="pm-div-font">사원 상세 조회</div>
//             </div>
//             <br />
//             <div>
//                     <div className="pm-section">
//                         <div className='div4'>
//                         <div className='div5'>
//                         <div className="pm-photobox"></div>
//                         <div>
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">이름</div>
//                             { resist.empName && resist.empName }
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">주민등록번호</div>
//                             { resist.residentNo && resist.residentNo }
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">전화번호</div>
//                             { resist.phone && resist.phone }
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">최종학력</div>
//                             { resist.education && resist.education }
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">주소</div>
//                             { resist.address && resist.address }
//                             </div>
//                         </div>
//                         <div className="pm-flex">
//                             <div className="pm-content">
//                             <div className="pm-memberinfo-title">이메일</div>
//                             { resist.empEmail && resist.empEmail }
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div>
//                         <div>
//                         <div className="pm-content2">
//                             <div className="pm-titlebox">입사정보</div>
//                             <div>
//                                 <div className="pm-titlefontbox">부서</div>
//                                 <div className="pm-titlefontbox2">{resist.job.name ? resist.job.name : null}</div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div> 
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">직급</div>
//                                 <div className="pm-titlefontbox2">{resist.job.name ? resist.job.name : null}</div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">부서전화번호</div>
//                                 <div className="pm-titlefontbox2">{ resist.telephone && resist.telephone }</div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox">입사일</div>
//                                 <div className="pm-titlefontbox2">{ resist.startDate && resist.startDate }</div>
//                                 <div className="pm-titlefontbox2"></div>
//                                 <div className="pm-titlefontbox2"></div>
//                             </div>
//                             <div>
//                                 <div className="pm-titlefontbox4">퇴사일</div>
//                                 <div className="pm-titlefontbox3">{ resist.endDate && resist.endDate } </div>
//                                 <div className="pm-titlefontbox3"></div>
//                                 <div className="pm-titlefontbox3"></div>
//                             </div>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="pm-content2">
//                                 <div className="pm-titlebox">병역사항</div>
//                                 {resist.military.map((item, index) => (
//                                 <div>
//                                     <div className="pm-titlefontbox">기간</div>
//                                     <div className="pm-titlefontbox2">{item.status ? item.status : null}</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 ))}

//                                 {resist.military.map((item, index) => (
//                                 <div>
//                                     <div className="pm-titlefontbox">병역기간</div>
//                                     <div className="pm-titlefontbox2">{item.status ? item.status : null}</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 ))}

//                                 {resist.military.map((item, index) => (
//                                 <div>
//                                     <div className="pm-titlefontbox">병역상태</div>
//                                     <div className="pm-titlefontbox2">{item.status ? item.status : null}</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 ))}
//                                 {resist.military.map((item, index) => (
//                                 <div>
//                                     <div className="pm-titlefontbox">공란</div>
//                                     <div className="pm-titlefontbox2">{item.status ? item.status : null}</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 ))}
//                                 {resist.military.map((item, index) => (
//                                 <div>
//                                     <div className="pm-titlefontbox4">공란</div>
//                                     <div className="pm-titlefontbox3">{item.status ? item.status : null}</div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                 </div>
//                                 ))}
//                                 </div>
//                             </div>

//                         <div>
//                             <div className="pm-content2">
//                                 <div className="pm-titlebox">경력사항</div>
                                
//                                 {resist.career.map((item, index) => (            
//                                 <div>
//                                     <div className="pm-titlefontbox">회사명</div>
//                                     <div className="pm-titlefontbox2">{item.name}</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 ))}  
//                                 {resist.career.map((item, index) => (     
//                                 <div>
//                                     <div className="pm-titlefontbox">직위</div>
//                                     <div className="pm-titlefontbox2">{item.job}</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 ))} 
//                                 {resist.career.map((item, index) => (  
//                                 <div>
//                                     <div className="pm-titlefontbox">근속년수</div>
//                                     <div className="pm-titlefontbox2">{item.history}년</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                   ))}
//                                    {resist.career.map((item, index) => (  
//                                 <div>
//                                     <div className="pm-titlefontbox">입사일</div>
//                                     <div className="pm-titlefontbox2">{item.startDate}</div>
//                                     <div className="pm-titlefontbox2"></div>
//                                     <div className="pm-titlefontbox2"></div>
//                                 </div>
//                                 ))}
//                                  {resist.career.map((item, index) => (  
//                                 <div>
//                                     <div className="pm-titlefontbox4">퇴사일</div>
//                                     <div className="pm-titlefontbox3">{item.endDate}</div>
//                                     <div className="pm-titlefontbox3"></div>
//                                     <div className="pm-titlefontbox3"></div>
//                                 </div>
//                                  ))}
//                                 </div>
//                             </div>
//                             {/* <div>
//                                 <div className="pm-content2">
//                                     <div className="pm-titlebox">기타사항
//                                     <div className='pm-test6'>
//                                     <div>
//                                         <div className="pm-test1">자격증이름</div>
//                                         <div className="pm-test2">발급기관명</div>
//                                         <div className="pm-test2">발급일자</div>
//                                         <div className="pm-test2">만료일자</div>
//                                         <div className="pm-test2">활용수준</div>
//                                     </div>
//                                     <div>
//                                         <div className="pm-test3"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                     </div>
//                                     </div>
//                                     </div>
//                                 </div> 
//                                 <div style={{display: 'flex'}}>
//                             <div className="pm-titlebox" style={{ rowsapn : 3 , 'writing-mode': 'tb-rl'}}>입사정보</div>
//                                 <div  className="pm-titlefontbox">부서</div>
//                                 <div className="pm-titlefontbox">직급</div>
//                                 <div className="pm-titlefontbox">부서전화번호</div>
//                                 <div className="pm-titlefontbox">입사일</div> 
//                                 <div className="pm-titlefontbox">퇴사일</div>
//                                 <div className="pm-titlefontbox">퇴사일</div>
//                             </div>
                           
//                                 */}
//                             <div>
//                                 <table>
//                                     <tr>
//                                         <th></th>
//                                     </tr>
//                                 </table>
//                                 <div className="pm-content2">
//                                     <div className="pm-titlebox">기타사항</div>
//                                     {resist.certification.map((item, index) => (  
//                                     <div>
//                                         <div className="pm-titlefontbox">자격증이름</div>
//                                         <div className="pm-titlefontbox2">{item.name}</div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                      ))}
//                                       {resist.certification.map((item, index) => (  
//                                     <div>
//                                         <div className="pm-titlefontbox">발급기관명</div>
//                                         <div className="pm-titlefontbox2">{item.institution}</div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                       ))}
//                                       {resist.career.map((item, index) => (  
//                                     <div>
//                                         <div className="pm-titlefontbox">발급일자</div>
//                                         <div className="pm-titlefontbox2">{item.startDate}</div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                      ))}
//                                       {resist.career.map((item, index) => (  
//                                     <div>
//                                         <div className="pm-titlefontbox">만료일자</div>
//                                         <div className="pm-titlefontbox2">{item.endDate}</div>
//                                         <div className="pm-titlefontbox2"></div>
//                                         <div className="pm-titlefontbox2"></div>
//                                     </div>
//                                      ))}
//                                       {resist.career.map((item, index) => (  
//                                     <div>
//                                         <div className="pm-titlefontbox4">활용수준</div>
//                                         <div className="pm-titlefontbox3">상</div>
//                                         <div className="pm-titlefontbox3"></div>
//                                         <div className="pm-titlefontbox3"></div>
//                                     </div>
//                                       ))}
//                                     </div>
//                                 </div>
//                     </div>
//                     <h6 className="pm-font"> 상기 내용은 사실과 다름없음을 확인합니다.</h6>
//                     <h6 className="pm-font">년      월      일</h6>
//                     <h6 className="pm-font2">작성자:     (인)</h6>
//                 </div>
//             </div>
//             </div>
//             <br></br>
//                 <div className="paging">
//                     <span>1</span>
//                     <span>2</span>
//                     <span>3</span>
//                     <span>4</span>
//                     <span>5</span>
//                 </div>
//         </div>
//     </section>
// 	);
// }

// export default PmMemberResist;
