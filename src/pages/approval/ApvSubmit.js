import { uploadFiles } from './ApvFileUpload';

export const handleSubmission = async (event, submissionData) => {

    console.log('handleSubmission - submissionData', submissionData);

    // event.preventDefault();
    const { formData, selectedEmployees, navigate, fileList, APIPoint, dispatch } = submissionData;

    console.log('handleSubmission - submissionData', submissionData);
    console.log('handleSubmission - selectedEmployees', selectedEmployees);
    console.log('handleSubmission - formData', formData);



    if (formData.empNo) {
        try {
            // 파일 업로드
            if (fileList.length > 0) {
                const fileUploadSuccess = await uploadFiles(fileList);

                if (!fileUploadSuccess) {
                    console.error("업로드 오류");
                    window.alert("파일 업로드 오류");
                    return; // 파일 업로드가 실패하면 제출을 진행x
                }
            }

            // 제출 진행
            const attachedFiles = fileList;
            const response = await dispatch(APIPoint({formData, selectedEmployees, attachedFiles}));

            if (response.status === 200) {
                if (response.data === "기안 상신 실패") {
                    window.alert("결재 등록 실패");
                } else {
                    window.alert("결재 등록 성공");
                    navigate('/approval');
                }
            } else {
                window.alert("결재 등록 중 오류가 발생했습니다.");
            }
        } catch (error) {
            console.error("API 오류:", error);
            window.alert("API 요청 중 오류가 발생했습니다.");
        }
    } else {
        window.alert("로그인 정보가 없습니다.");
        navigate('/approval');
    }
};

