import React, { useEffect, useState } from "react";
import MemberLogStyle from "./MemberLog.module.css"
import MemberListCss from "../member/MemberList.module.css"
import { TokenVerification } from "../auth/TokenVerification";
import { AuthVarification } from "../auth/AuthVerification";
import { AdminNav } from "../AdminNav";
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@mui/base";
import { selectAccess, selectAccessByDateRange, selectSearchMemberLog } from "../../../apis/AdminAPI";
import { roleCode } from "../member/MemberList";
import axios from "axios";



function MemberLog() {


    const dispatch = useDispatch();
    const accesses = useSelector(state => state.accesses);

    const accessList = accesses.accessList; 
    const searchMember = accesses.searchMember; 


    const [dateRange, setDateRange] = useState(0); 
    const [startDate, setStartDate] = useState(0);
    const [endDate, setEndDate] = useState(0);

    const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태 추가
    const [filteredAccessList, setFilteredAccessList] = useState([]); // 필터링된 결과를 저장할 상태 추가

    useEffect(() => {

        if(searchKeyword){

            dispatch(selectAccess());

        } 

    }, [filteredAccessList])

    useEffect(() => {
        if (dateRange === "self" && startDate && endDate) {
            // 직접 입력한 날짜 범위 계산 및 API 호출
            const startDateTime = new Date(startDate).toISOString();
            const endDateTime = new Date(endDate).toISOString();
            const days = {
                startdate: startDateTime,
                enddate : endDateTime,
            }
            dispatch(selectAccessByDateRange(days));
        } else {
            // 선택된 날짜 범위로 API 호출
            dispatch(selectAccess(dateRange));
        }
    }, [dateRange, startDate, endDate]);
    

    

    console.log("accessList ====> : ", accessList);
    console.log(Array.isArray(accessList));

    // 날짜 데이트 포맷
    const dateFormatter = (dateString) => {
        const dateObj = new Date(dateString);

        if (!isNaN(dateObj)) {
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            const hours = String(dateObj.getHours()).padStart(2, '0');
            const minutes = String(dateObj.getMinutes()).padStart(2, '0');
            // const seconds = String(dateObj.getSeconds()).padStart(2, '0');


            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
            // 만약 dateObj가 유효한 Date 객체일 때만 포맷팅된 날짜를 사용
            return <div>{formattedDate}</div>;
        } else {
            // 잘못된 형식의 경우 무시 또는 다른 처리를 수행
            return '-'; // 또는 다른 값을 반환하거나 아무것도 반환하지 않음
        }
    }


    // 날짜 범위가 변경될 때 호출되는 함수
    const handleDateRangeChange = (event) => {
        const selectedRange = event.target.value;
        setDateRange(selectedRange);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleSearchInputChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    // 검색 버튼 클릭 시 호출되는 함수
    const handleSearchClick = async () => {
        await selectSearchMemberLog(searchKeyword);
        setFilteredAccessList(searchMember);
    };

    return (

        <section>
            <AdminNav />
            <div style={{ marginTop: 20 }}>

                <div className={MemberLogStyle.title}>회원 접속로그</div>

                <div className={MemberLogStyle.searchbox}>
                    <div style={{ width: 80, marginLeft: 20, fontSize: 20 }}>이 름 :</div>
                    <input
                    type="search"
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                />
                <button onClick={handleSearchClick}>검 색</button>
                </div>
                <div className={MemberLogStyle.searchbox}>
                    <select onChange={handleDateRangeChange} value={dateRange}>
                        <option value="7">최근 7일간</option>
                        <option value="30">최근 한 달간</option>
                        <option value="365">최근 1년 간</option>
                        <option value="self">직접 입력</option>
                    </select>
                    {dateRange === "self" && (
                    <>
                        <input type="date" onChange={handleStartDateChange} value={startDate} />부터
                        <input type="date" onChange={handleEndDateChange} value={endDate} />까지
                    </>
                )}
                </div>

                <div className={MemberLogStyle.loglist}>
                    <div >시간</div>
                    <div>이름</div>
                    <div>이메일</div>
                    <div>계정아이디</div>
                    <div>부서</div>
                    <div>직급</div>
                    <div>유형</div>
                    <div>디바이스</div>
                    <div>브라우저</div>

                </div>
                {Array.isArray(accessList) && accessList.map(
                    (acc) => (
                        <div
                            key={acc.memberId} className={MemberLogStyle.loglist}
                        >
                            <div >{dateFormatter(acc.accessManager?.registDate)}</div>
                            <div>{acc.employee?.name}</div>
                            <div>{acc.employee.email}</div>
                            <div>{acc.memberId}</div>
                            <div>{acc.employee.deptCode.deptName}</div>
                            <div>{acc.employee.jobCode.jobName}</div>
                            <div>{acc.roleList.map(role => roleCode((role.authCode ? role.authCode : '')))[0]}</div>
                            <div>{acc.accessManager?.device ? acc.accessManager.device : ''}</div>
                            <div>{acc.accessManager?.browser ? acc.accessManager.browser : ''}</div>

                        </div>
                    ))}

                <div className={MemberListCss.paging}>
                    <div style={{ justifyContent: '', marginLeft: '600px', display: 'flex', marginTop: 30 }}>
                        <button>
                            <div className={MemberListCss.leftbtn} />
                        </button>
                        <button>
                            <div className={MemberListCss.centerbtn} />
                        </button>
                        <button>
                            <div className={MemberListCss.rightbtn} />
                        </button>
                    </div>
                </div>

            </div>
        </section>

    )


}

export default MemberLog;
