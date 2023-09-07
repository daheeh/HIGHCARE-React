// // 업로드

// export const uploadFiles = async (files) => {
//     const formData = new FormData();
//     files.forEach((file, index) => {
//         formData.append(`file${index}`, file);
//     });

//     try {
//         const response = await fetch('/your-file-upload-api', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             return true; // File upload succeeded
//         } else {
//             console.error('File upload failed');
//             return false; // File upload failed
//         }
//     } catch (error) {
//         console.error('Error uploading files:', error);
//         return false; // File upload failed
//     }
// };
