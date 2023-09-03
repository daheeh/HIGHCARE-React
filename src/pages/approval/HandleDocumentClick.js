export const handleDocumentClick = (apvNo, results, navigate) => {
    const selectResult = results.find(result => result.apvNo === apvNo);

    if (selectResult) {
        const title = selectResult.title;

        let action = '';
        switch (title) {
            case '지출결의서':
                action = `/approval/exp1/${apvNo}`;
                break;
            case '경조금신청서':
                action = `/approval/exp3/${apvNo}`;
                break;
            case '연차신청서':
                action = `/approval/hrm1/${apvNo}`;
                break;
            case '기타휴가신청서':
                action = `/approval/hrm2/${apvNo}`;
                break;
            default:
                action = `/approval/biz1/${apvNo}`;
                break;
        }
        navigate(action);
    } else {
        console.error(`No result found for apvNo: ${apvNo}`);
    }
};