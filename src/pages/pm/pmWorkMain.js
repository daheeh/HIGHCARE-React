import React, { useEffect, useState } from 'react';
import './pm-member.css'
import PmNav from './pmNav';
import { useDispatch, useSelector } from 'react-redux';
import { callMgStartAPI, callManagementAPI, callMgEndAPI } from '../../apis/PmAPICalls';
// import { callManagementAPI } from '../../apis/PmAPICalls';
// import { callMgEndAPI } from '../../apis/PmAPICalls';

import { useNavigate } from 'react-router-dom';
import { async } from '@dabeng/react-orgchart';


function PmWorkMain() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const empName = authes.name;

    const deptName = authes.dept;
    const jobName = authes.job;


    console.log("empNo : ", empNo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const result = useSelector(state => state.manage);
    console.log("------------------------}}>", result);


    const [pageEnd, setPageEnd] = useState(1);
    const pageInfo = result.pageInfo;

    const pageNumber = [];
    if (pageInfo) {
        for (let i = 1; i <= pageInfo.pageEnd; i++) {
            pageNumber.push(i);
        }
    }

    const [type, setType] = useState('');
    const [formData, setFormData] = useState({

        empNo: '',
        empName: '',
        manDate: '',
        deptName: '',
        jobName: '',
        startTime: '',
        endTime: '',
        status: '',
        workTime: '',
        totalWorkTime: '',
    })

    useEffect(() => {
        // Redux action을 dispatch하여 API 호출 및 데이터 업데이트 수행
        dispatch(callManagementAPI({ currentPage }));
        // 여기 result.data로 변경한것을 result로 다시변경
        if (result.manage) {
            console.log("result >>>>>222: ", result.manage);
            let status = type === 'start'? '출근' : '퇴근';
           
            setFormData(form => ({
              ...form, 
              empNo:empNo,
              empName: empName,
              manDate: '',
              deptName: deptName,
              jobName:  jobName,
              startTime: '',
              endTime: '',
              status: status,
              workTime: '',
              totalWorkTime: '',
            }));
          }
          console.log("form ==============================: ", formData);

    }, [currentPage]);



    const pmSubmission = async () => {
        setType('start');

        if (empNo !== 0) {
			try {
				const response = await dispatch(callMgStartAPI({ formData }));
                // window.location.reload();
                console.log("-----------------------------------response", response.status);
                if (response.status === 200) {
                    if (response.data === 'stSuceess') {

                        window.alert("출근하였습니다");
                        // window.location.reload();
                    } else {
                        window.alert("이미 출근이 완료되었습니다. ");

                    }
                    window.location.reload();
                } else {
                    window.alert("다시 시도해 주세요.");
                }

            } catch (error) {
                console.error("API error:", error);
                window.alert("API 요청 중 오류가 발생했습니다.");
            }
        } else {
            window.alert("재로그인 요청");
        }
    };

    const endSubmission = async () => {
        setType('end');


        if (empNo !== undefined) {
            try {
                const response = await dispatch(callMgEndAPI({ formData }));
                console.log("-----------------------------------response", response);
                if (response.status === 200) {
                    if (response.data === 'success') {

                        window.alert("퇴근하였습니다");

                    } else {
                        window.alert("이미 퇴근 완료 되었습니다. ");

                    }
                    window.location.reload();
                } else {
                    window.alert("다시 시도해 주세요.");
                }
                window.location.reload();
            } catch (error) {
                console.error("API error:", error);
                window.alert("API 요청 중 오류가 발생했습니다.");
            }
        } else {
            window.alert("재로그인 요청");
        }
    };

    return (

        <div className='mainmargin-pm'>
            <section>
                <div className="pm-workin-box-main">
                    <input onClick={pmSubmission} type="button" value="출근" className="pm-work-button2-main"></input>
                    <input onClick={endSubmission} type="button" value="퇴근" className="pm-work-button2-main"></input>
                </div>
                <div>

                </div>
                <div className="margin-main">
                    <div className="pm-workin-box2-main">
                        <h2 className='pmmainfont'>
                            
                            <div style={{color:'#10479A'}}> {result.user && result.user.startTime} </div>
                        </h2>
                    </div>
                    <div className="pm-workin-box2-main2">
                        <h2 className='pmmainfont'>
                            
                            <div style={{color:'#10479A'}}>{result.user && result.user.endTime} </div>
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PmWorkMain;
