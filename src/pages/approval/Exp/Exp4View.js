import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalExp.css';
import '../Approval.css';
import ApvFileList from '../ApvFileList';
import { callApvViewAPI } from '../../../apis/ApprovalAPICalls';
import { useReactToPrint } from 'react-to-print';

function Exp4View() {
    const authes = useSelector((state) => state.authes);
    const empNo = authes.empNo;
    const ref = useRef();
    console.log("Exp4View empNo : ", empNo);
    console.log("ref = ", ref);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { apvNo } = useParams();
    const [data, setData] = useState(null);
    const [refData, setRefData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await dispatch(callApvViewAPI({ apvNo }));
                setData(data);
                console.log('data : ', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [apvNo, dispatch]);
    
    useEffect(() => {
        if (data && data.refApvNo) {
            const fetchRefData = async () => {
                try {
                    const refData = await dispatch(callApvViewAPI({ apvNo: data.refApvNo }));
                    console.log('refData : ', refData);
    
                    // Now you can use refData directly here for any processing on this page.
                    // For example, you can access refData properties like refData.someProperty.
                } catch (error) {
                    console.error('Error fetching refData:', error);
                }
            };
    
            fetchRefData();
        }
    }, [data, dispatch]);
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await dispatch(callApvViewAPI({ apvNo }));
    //             setData(data);
    //             console.log('data : ', data);

    //             if (data.refApvNo) {
    //                 const refData = await dispatch(callApvViewAPI({ apvNo: data.refApvNo }));
    //                 console.log('refData : ', refData);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [apvNo, dispatch]);



    const renderApvExpForm = (data) => {
        return (
            <>
                {data?.apvExpForms.map((form, index) => (
                    <div className="apvContentDetailExp1Content" key={index}>
                        <div className="apvContentDetailExp1List">
                            <div className="column21">
                                <input
                                    className="input1"
                                    name={`apvExpForms[${index}].details`}
                                    value={form.details || ''}
                                    readOnly
                                />
                            </div>
                            <div className="column22">
                                <input
                                    className="input1"
                                    name={`apvExpForms[${index}].account`}
                                    value={form.account || ''}
                                    readOnly
                                />
                            </div>
                            <div className="column23">
                                <input
                                    className="input1"
                                    type="number"
                                    name={`apvExpForms[${index}].amount`}
                                    value={form.amount || ''}
                                    readOnly
                                />
                            </div>
                            <div className="column24">
                                <input
                                    className="input1"
                                    name={`apvExpForms[${index}].comment`}
                                    value={form.comment || ''}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };


    return (
        <section>
            <ApvMenu />
            <div>
                <ApvSummitBar
                    data={data}
                    ref={ref}
                />
                <div className="containerApv" ref={ref}>
                    <div className="apvApvTitle">출장경비정산서</div>
                    <ApvSummitLine
                        mode="view"
                        selectedEmployees={data?.apvLines || []}
                        authes={authes}
                        data={data}
                    />
                    <div className="apvContent">
                        <div className="apvContentTitleExp1">
                            <div className="column1">출장신청서 번호</div>
                            <div className="column2">
                                <div>{refData? refData.apvNo : ''}</div>
                            </div>
                            <div className="column3">출장기간</div>
                            <div className="column4">
                                {refData ? `${refData.apvBusinessTrips[0].startDate}~${refData.apvBusinessTrips[0].endDate}` : ''}
                            </div>
                        </div>
                        <div className="apvContentTitleExp1-3">
                            <div className="column45">출장목적</div>
                            <div className="column46">
                                <div>{refData? refData.apvBusinessTrips[0].purpose : ''}</div>
                            </div>
                        </div>
                        <div className="apvContentTitleExp1">
                            <div className="column1">출장지</div>
                            <div className="column2">{refData? refData.apvBusinessTrips[0].location : ''}</div>
                            <div className="column3">동반자</div>
                            <div className="column4">{refData? refData.apvBusinessTrips[0].tripAttendees : ''}</div>
                        </div>
                        <div className="apvContentDetail">내역</div>
                        <div className="apvContentDetailExp1Title">
                            <div className="column11">내역</div>
                            <div className="column12">계정과목</div>
                            <div className="column13">금액</div>
                            <div className="column14">적요</div>
                        </div>

                        <div className="apvContentDetailExp1Content">
                            {renderApvExpForm(data)}
                        </div>
                        <div className="apvContentDetailExp1Total">
                            <div className="column31">합계</div>
                            <div className="column32">{data?.totalAmount || ''}</div>
                        </div>
                        <div className="apvContentTitleExp1-2">
                            <div className="column41">예금주</div>
                            <div className="column42">
                                <input className="input1" placeholder="예금주 입력"
                                    name='sharedProperties.accountHolder' value={data?.apvExpForms[0].accountHolder} />
                            </div>
                            <div className="column43">은행</div>
                            <div className="column44">
                                <input className="input1" placeholder="은행 입력"
                                    name='sharedProperties.bank' value={data?.apvExpForms[0].bank} />
                            </div>
                        </div>
                        <div className="apvContentTitleExp1-3">
                            <div className="column45">계좌번호</div>
                            <div className="column46">
                                <input className="input1" placeholder="계좌번호 입력"
                                    name='sharedProperties.accountNumber' value={data?.apvExpForms[0].accountNumber} />
                            </div>
                        </div>

                        <div className="apvContentDetail3">위와 같이 지급을 요청합니다.</div>
                    </div>
                    <ApvFileList files={data?.apvFiles || []} data={data} />
                </div>
            </div>
        </section>
    );
}

export default Exp4View;