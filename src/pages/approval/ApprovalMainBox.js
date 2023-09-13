import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ApvMainBox({ showCounts }) {

    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    console.log("ApvMain empNo : ", empNo);

    const [counts, setCounts] = useState({
        countTodayInProgress: 0,
        countTodayUrgency: 0,
        countInProgress: 0,
        countUrgency: 0,
        countNewReceive: 0,
        countRejected: 0,
    });

    useEffect(() => {
        if(empNo){

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
    }
    }, [empNo]);

    return (
        showCounts ?
            <>
                <div className="apvMainBox1">
                    <div className="apvMainBox2">
                        <div className="row1">결재 진행중</div>
                        <div className="row2">{counts ? counts.countInProgress : 0}</div>
                    </div>
                    <div className="apvMainBox2">
                        <div className="row1">긴급</div>
                        <div className="row2">{counts ? counts.countUrgency : 0}</div>
                    </div>
                    <div className="apvMainBox2">
                        <div className="row1">신규 수신</div>
                        <div className="row2">{counts ? counts.countNewReceive : 0}</div>
                    </div>
                </div>
            </>
            :
            <>
                <div className="apvMain">
                    <div className="apvMainToday">
                        <div className="header">TODAY</div>
                        <div className="cell1">결재진행중</div>
                        <div className="cell2">긴급</div>
                        <div className="cell1">{counts ? counts.countTodayInProgress : 0}</div>
                        <div className="cell2">{counts ? counts.countTodayUrgency : 0}</div>
                    </div>

                    <div className="apvMainBox10">
                        <div className="apvMainBoxRightBox10">
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
            </>
    );
}

export default ApvMainBox;
