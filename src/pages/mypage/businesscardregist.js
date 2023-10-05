// import { useDispatch, useSelector } from "react-redux";
// import "./profile.css";
// import { useEffect, useState, useRef } from "react";
// import { decodeJwt } from "../../utils/decodeJwt";

// // import "./mymain.css";

// import { callMypageProfileSelectAPI } from '../../apis/MypageApiCalls';
// import { callProfileInsertAPI } from '../../apis/MypageApiCalls';
// import MypageNav from './MypageNav';


// function Businesscard() {


//     <MypageNav />
//     const dispatch = useDispatch();
//     const employee = useSelector(state => state.authes); 

//     const id = decodeJwt(window.localStorage.getItem("accessToken")).sub;
//     const mypage = useSelector(state => state.mypage);


//     console.log("아이디 : ", id);
//     console.log("마이페이지에 담긴 정보 : ", mypage);

//     useEffect(
//         () => {
//             dispatch(callMypageProfileSelectAPI(employee.empNo));
//             /// empNo로 불러오기

//         }
//         , []); // 빈배열이면 랜더링 한번 되고 Apicalls를 준다.  

//     return (

//         <>
//             <section>
//                 <MypageNav />
//                 {/* <!-- 아이디 주민번호 입사일 직급 --> */}
//                 <div className="profile-form">
//                     <div className="double">
//                         <div className="content">

//                             <div >
//                             </div>
//                             <h3>이름</h3>
//                             <input type="text" name="user_name" id="user_name" className="text-field"
//                                  maxLength="20"/>
//                             <h3>직급</h3>
//                             <input type="text" name="user_name" id="user_name" className="text-field"
//                               maxLength="20" />
//                             <h3>회사</h3>
//                             <input type="text" name="user_name" id="user_name" className="text-field"
//                               maxLength="20" />
//                         </div>

//                         <div className="content2">
//                         <h3>전화번호</h3>
//                             <input type="tel" id="user_ph" className="text-field" maxLength="16" />
//                             <h3>회사</h3>
//                             <div className="email-form">
//                                 <input type="text" name="user_name" id="user_name" className="text-field" maxLength="20" />
//                             </div>
//                             <h3>주소</h3>
//                             <div className="address-form">
//                                 <input type="text" name="user_name" id="user_name" className="text-field" maxLength="20"/>
//                                 <br /><br />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </section>
//         </>
//     )
// }


// export default Businesscard;