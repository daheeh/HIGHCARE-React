
// 프론트엔드 코드

export const handleSubmission = async (event, submissionData) => {

    console.log("handleSubmission");
    console.log("handleSubmission submissionData : ", submissionData);

    // event.preventDefault();

    const { formData, selectedEmployees, refSelectedEmployees, navigate, fileList, APIPoint, dispatch } = submissionData;

    if (formData.empNo) {
        try {
            const combinedSelectedEmployees = {
                selectedEmployees,
                refSelectedEmployees,
            }
            
            // formData 및 selectedEmployees를 단일 객체로 결합
            const attachedFiles = fileList;
            const requestData = {
                formData,
                combinedSelectedEmployees,
                attachedFiles,
            };

            console.log("handleSubmission requestData : ", requestData);
            console.log("handleSubmission attachedFiles : ", attachedFiles);

            // 결합된 데이터를 API로 전송
            const response = await dispatch(APIPoint({requestData}));


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


