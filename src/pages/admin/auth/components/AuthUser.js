// import { useState } from "react";
// import AuthSytle from "../AuthManager.module.css"

// function Modal({ isOpen, onClose }) {

//     //2. 관리자 목록 
    
//     if (!isOpen) return null;

//     return (
//         <div className={AuthSytle.ModalOverlay}>
//             <div className={AuthSytle.Modal}>
//                 <span className={AuthSytle.CloseButton} onClick={onClose}>
//                     &times;
//                 </span>
//                 <h2>모달 내용</h2>
//                 <p>모달 내용을 여기에 추가하세요.</p>
//             </div>
//         </div>
//     );
// }

// function AuthUser({code}) {

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     console.log('code : ', {code});
//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };


//     return (

//         <div className={AuthSytle.AuthUserBox}>
//             <div>기본 관리자(모든 권한)</div>
//             <div>
//             <button onClick={openModal}>추가</button>
//                 <button>삭제</button>
//             </div>
//             <div style={{ display: 'flex' }}>
//                 <div><input type="checkbox"></input></div>
//                 <div>이름</div>
//                 <div>이메일</div>
//                 <div>부서</div>
//                 <div>직급</div>
//                 <div>등록일</div>
//             </div>
//             <Modal isOpen={isModalOpen} onClose={closeModal} />

//         </div>


//     );


// }

// export default AuthUser; 