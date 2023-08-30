import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApvMenu from '../AprovalNav';
import './ApprovalBox.css';
import '../Approval.css';
import { callApvWriteBoxAPI } from '../../../apis/ApprovalAPICalls';

function WriteBox() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    console.log("WriteBox empNo : ", empNo);

    const dispatch = useDispatch();

    const results = useSelector(state => state.approval);
    const [selectedStatus, setSelectedStatus] = useState('결재진행중');

    const totalPages = Math.ceil((results && results.length) / itemsPerPage);

    useEffect(() => {
        dispatch(callApvWriteBoxAPI({ empNo, apvStatus: '결재진행중' }));
        console.log('WriteBox results : ', results);
    }, []);

    const handleMenuItemClick = (apvStatus) => {
        setSelectedStatus(apvStatus);
    }


    useEffect(() => {
        if (selectedStatus === '긴급') {
            dispatch(callApvWriteBoxAPI({ empNo, apvStatus: '결재진행중' }));
        } else {
            dispatch(callApvWriteBoxAPI({ empNo, apvStatus: selectedStatus }));
        }
    }, [selectedStatus]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <section>
            <ApvMenu />
            <div>
                <div className="apvApvtitle">결재함</div>
                <div className="apvTopMenu">
                    <ul className="apvTopMenuUl">
                        <li onClick={() => handleMenuItemClick('결재예정')}
                            className={selectedStatus === '결재예정' ? 'clicked' : ''}
                        >결재 예정</li>
                        <li onClick={() => handleMenuItemClick('결재진행중')}
                            className={selectedStatus === '결재진행중' ? 'clicked' : ''}
                        >결재 진행중</li>
                        <li onClick={() => handleMenuItemClick('결재완료')}
                            className={selectedStatus === '결재완료' ? 'clicked' : ''}
                        >결재 완료</li>
                        <li onClick={() => handleMenuItemClick('결재반려')}
                            className={selectedStatus === '결재반려' ? 'clicked' : ''}
                        >결재 반려</li>
                        <li onClick={() => handleMenuItemClick('긴급')}
                            className={selectedStatus === '긴급' ? 'clicked' : ''}
                        >긴급</li>
                    </ul>
                </div>
                <div className='apvTableContainer'>
                    <table className="apvBoxresultTable">
                        <tbody>
                            <tr>
                                <th className='column1'>문서번호</th>
                                <th className='column2'>문서제목</th>
                                <th className='column3'>분류</th>
                                <th className='column4'>작성일자</th>
                            </tr>
                            {results && results
                                .filter(result => selectedStatus === '긴급' ? result.isUrgency === 'T' : true)
                                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                .map((result) => (
                                    <tr key={result.apvNo}>
                                        <td>{result.apvNo}</td>
                                        <td>{result.title}</td>
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
        </section >
    );
}

export default WriteBox;

