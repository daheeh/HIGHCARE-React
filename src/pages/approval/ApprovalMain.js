import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApvMenu from './AprovalNav';
import ApvMyList from './ApvMyList';
import HrmList from './Hrm/HrmList';
import ExpList from './Exp/ExpList';
import BizList from './Biz/BizList';
import './Approval.css';

function ApvMain() {

    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    console.log("ApvMain empNo : ", empNo);

    const dispatch = useDispatch();
    const writeMain = useSelector(state => state.approval);

    const [writeCounts, setWriteCounts] = useState({
        countInProgress: 0,
        countUrgency: 0,
        countRejected: 0,
    });

    useEffect(() => {
        async function fetchCounts() {
            try {
                const response = await fetch(`http://localhost:8080/api/approval/writeMain?empNo=${empNo}`, {
					method: "GET",
					headers: {
						"Accept": "*/*",
						"Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
						'Content-Type': 'application/json',
						"Access-Control-Allow-Origin": "*",
					},
				});
            
                const responseData = await response.json(); 
                setWriteCounts(responseData.data);



            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        }

        fetchCounts();
    }, [empNo]);


    return (

        <section>
            <ApvMenu />
            <div>
                <div className="apvMain">
                    <div className="apvMainToday">
                        <div className="header">TODAY</div>
                        <div className="cell1">결재진행중</div>
                        <div className="cell2">긴급</div>
                        <div className="cell1">결재진행중 개수</div>
                        <div className="cell2">긴급 개수</div>
                    </div>

                    <div className="apvMainBox">
                        <div className="apvMainBoxRightBox">
                            <div className="apvMainBoxRight">
                                <div className="row1">결재 진행중</div>
                                <div className="row2">{writeCounts ? writeCounts.countInProgress : 0}개</div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">긴급</div>
                                <div className="row2">{writeCounts ? writeCounts.countUrgency : 0}개</div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">신규 수신</div>
                                <div className="row2">100개</div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">결재 반려 </div>
                                <div className="row2">{writeCounts ? writeCounts.countRejected : 0}개</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="apvMainList">
                    <div className="apvMainListMy">
                        <div className="apvMainListLTitle">최근 결재 양식</div>
                        <ApvMyList />
                    </div>
                    <div className="apvMainListList">
                        <div className="apvMainListRTitle">탬플릿 양식</div>
                        <div className="apvMainListRmList">
                            <HrmList />
                            <div className="apvMainListRListEmp"></div>
                            <ExpList />
                            <div className="apvMainListRListEmp"></div>
                            <BizList />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ApvMain;