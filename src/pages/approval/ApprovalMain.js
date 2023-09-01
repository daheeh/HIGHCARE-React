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
    const approvalMain = useSelector(state => state.approval);

    const [counts, setCounts] = useState({
        countTodayInProgress: 0,
        countTodayUrgency: 0,
        countInProgress: 0,
        countUrgency: 0,
        countNewReceive: 0,
        countRejected: 0,
    });

    useEffect(() => {
        async function fetchcounts() {
            try {
                const response = await fetch(`http://localhost:8080/api/approval/main?empNo=${empNo}`, {
                    method: "GET",
                    headers: {
                        "Accept": "*/*",
                        "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                    },
                });

                const responseData = await response.json();
                setCounts(responseData.data);
                console.log('responseData.data : ', responseData.data);

            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        }

        fetchcounts();
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
                        <div className="cell1">{counts ? counts.countTodayInProgress : 0}</div>
                        <div className="cell2">{counts ? counts.countTodayUrgency : 0}</div>
                    </div>

                    <div className="apvMainBox">
                        <div className="apvMainBoxRightBox">
                            <div className="apvMainBoxRight">
                                <div className="row1">결재 진행중</div>
                                <div className="row2">{counts ? counts.countInProgress : 0}</div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">긴급</div>
                                <div className="row2">{counts ? counts.countUrgency : 0}</div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">신규 수신</div>
                                <div className="row2">{counts ? counts.countNewReceive : 0}</div>
                            </div>
                            <div className="apvMainBoxRight">
                                <div className="row1">결재 반려 </div>
                                <div className="row2">{counts ? counts.countRejected : 0}</div>
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