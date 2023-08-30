// import React, { useState } from 'react';
// import { VscClose } from 'react-icons/vsc';

// function ApvFile() {

//     //화면에 출력되는 파일
//     const [selectedImages, setSelectedImages] = useState([]);
//     //서버에 보내지는 파일
//     const [selectedFiles, setSelectedFiles] = useState(null as any);

//     const onSelectFile = (e: any) => {
//         e.preventDefault();
//         e.persist();
//         //선택한 파일 
//         const selectedFiles = e.target.files;
//         //선택한 파일들을 fileUrlList에 넣어준다. 
//         const fileUrlList = [...selectedFiles];
// // 
//         // 업로드되는 파일에는 url이 있어야 한다. filePath로 보내줄 url이다.
//         //획득한 Blob URL Address를 브라우져에서 그대로 호출 시에 이미지는 표시가 되고 ,
//         //일반 파일의 경우 다운로드를 할 수 있다.
//         for (let i = 0; i < selectedFiles.length; i++) {
//             const nowUrl = URL.createObjectURL(selectedFiles[i]);
//             fileUrlList.push(nowUrl[i]);
//         }

//         setSelectedFiles(fileUrlList);

//         //Array.from() 은 문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메서드이다.
//         const selectedFileArray: any = Array.from(selectedFiles);

//         //브라우저 상에 보여질 파일 이름
//         const imageArray = selectedFileArray.map((file: any) => {
//             return file.name;
//         });

//         // 첨부파일 삭제시
//         setSelectedImages((previousImages: any) => previousImages.concat(imageArray));
//         e.target.value = '';
//     };

//     //브라우저상에 보여질 첨부파일
//     const attachFile =
//         selectedImages &&
//         selectedImages.map((image: any) => {
//             return (
//                 <S.DivImg key={image}>
//                     <div>{image}</div>
//                     <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>
//                         <VscClose size='30' />
//                     </button>
//                 </S.DivImg>
//             );
//         });


//     return (
//         <div>                <tbody>
//             <tr>
//                 <td>첨부파일</td>
//                 <td>
//                     {selectedImages.length !== 0 ? (
//                         <div>{attachFile}</div>
//                     ) : (
//                         <div>파일을 첨부할 수 있습니다.</div>
//                     )}
//                     <div >업로드</div>
//                     {selectedImages.length !== 0 ? (
//                         ''
//                     ) : (
//                         <input
//                             type='file'
//                             name='images'
//                             onChange={onSelectFile}
//                             accept='.png, .jpg,image/*'
//                         />
//                     )}
//                 </td>
//             </tr>
//         </tbody>

//         </div >
//     );
// }

// export default ApvFile;