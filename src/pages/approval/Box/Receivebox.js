import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ApvMenu from '../AprovalNav';
import './ApprovalBox.css';
import '../Approval.css';
import { callApvReceiveBoxAPI } from '../../../apis/ApprovalAPICalls';
import { handleDocumentClick } from '../HandleDocumentClick';


function ReceiveBox() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    console.log("ReceiveBox empNo : ", empNo);

    const dispatch = useDispatch();

    const results = useSelector(state => state.approval);
    console.log('results : ', results);

    const [selectedStatus, setSelectedStatus] = useState('결재진행중');

    const totalPages = Math.ceil((results && results.length) / itemsPerPage);

    const handleMenuItemClick = (apvStatus) => {
        setSelectedStatus(apvStatus);
    }

    useEffect(() => {
        if (selectedStatus === '긴급') {
            dispatch(callApvReceiveBoxAPI({ empNo, apvStatus: '결재진행중' }));
        } else {
            dispatch(callApvReceiveBoxAPI({ empNo, apvStatus: selectedStatus }));
        }
    }, [selectedStatus]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const navigate = useNavigate();

    
    const handleDocumentClickInReceiveBox = (apvNo) => {
        handleDocumentClick(apvNo, results, navigate);
    };


    return (
        <section>
            <ApvMenu />
            <div>
                <div className="apvApvtitle">수신함</div>
                <div className="apvTopMenu">
                    <ul className="apvTopMenuUl">
                        <li onClick={() => handleMenuItemClick('결재진행중')}
                            className={selectedStatus === '결재진행중' ? 'clicked' : ''}
                        >결재 진행중</li>
                        <li onClick={() => handleMenuItemClick('결재완료')}
                            className={selectedStatus === '결재완료' ? 'clicked' : ''}
                        >결재 완료</li>
                        <li onClick={() => handleMenuItemClick('결재반려')}
                            className={selectedStatus === '결재반려' ? 'clicked' : ''}
                        >결재 반려</li>
                        <li onClick={() => handleMenuItemClick('결재참조')}
                            className={selectedStatus === '결재참조' ? 'clicked' : ''}
                        >결재 참조</li>
                        <li onClick={() => handleMenuItemClick('긴급')}
                            className={selectedStatus === '긴급' ? 'clicked' : ''}
                        >긴급</li>
                    </ul>
                </div>
                <div className='apvTableContainer'>
                    <table className="apvBoxresultTable">
                        <tbody>
                            <tr>
                                <th className="column11">문서번호</th>
                                <th className="column12">제목</th>
                                <th className="column13">작성자</th>
                                <th className="column14">문서분류</th>
                                <th className="column15">작성일자</th>
                            </tr>
                            {results && Array.isArray(results) && results
                                .filter(result => selectedStatus === '긴급' ? result.isUrgency === 'T' : true)
                                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                .map((result) => (
                                    <tr key={result.apvNo}>
                                        <td
                                            key={result.apvNo}
                                            onClick={() => handleDocumentClickInReceiveBox(result.apvNo)}
                                            style={{ cursor: 'pointer' }}
                                        >{result.apvNo}</td>
                                        <td>{result.title}</td>
                                        <td>{result.empName}</td>
                                        <td>{result.category}</td>
                                        <td>{result.writeDate}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="paging">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`pagingBtn ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </span>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default ReceiveBox;

