export const handleDocumentClick = (apvNo, results, navigate) => {
    const selectResult = results.find(result => result.apvNo === apvNo);

    if (selectResult) {
        const title = selectResult.title;

        let action = '';
        switch (title) {

            case '회의록':
                action = `/approval/biz2/${apvNo}`;
                break;
            case '출장신청서':
                action = `/approval/biz3/${apvNo}`;
                break;
            case '공문':
                action = `/approval/biz4/${apvNo}`;
                break;

            case '연차신청서':
                action = `/approval/hrm1/${apvNo}`;
                break;
            case '기타휴가신청서':
                action = `/approval/hrm2/${apvNo}`;
                break;
            case '서류발급신청서':
                action = `/approval/hrm3/${apvNo}`;
                break;


            case '지출결의서':
                action = `/approval/exp1/${apvNo}`;
                break;
            case '출장경비정산서':
                action = `/approval/exp4/${apvNo}`;
                break;
            case '경조금신청서':
                action = `/approval/exp6/${apvNo}`;
                break;
            case '법인카드사용보고서':
                action = `/approval/exp7/${apvNo}`;
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