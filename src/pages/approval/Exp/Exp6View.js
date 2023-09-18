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

function Exp6View() {
    const authes = useSelector((state) => state.authes);
    const empNo = authes.empNo;
    const ref = useRef();

    console.log("Exp1View empNo : ", empNo);
    console.log("ref = ", ref);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { apvNo } = useParams();

    const [data, setData] = useState(null);

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

    if (!data) {
        return ;
      }
    
        if (!authes || data.apvLines.every(emp => emp.empNo !== authes.empNo)) {
        return <div className='apvNoUser'>권한이 없습니다</div>;
      }

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
                    <div className="apvApvTitle">경조금신청서</div>
                    <ApvSummitLine
                        mode="view"
                        selectedEmployees={data?.apvLines || []}
                        authes={authes}
                        data={data}
                    />
                    <div className="apvContent">
                        <div className="apvContentTitleExp6">
                            <div className="column1">경조분류</div>
                            <div className="column2">
                                <input className="input1" type="type"
                                    name="familyDate"
                                    value={data?.apvFamilyEvents[0].type} />
                            </div>
                            <div className="column3">경조일자</div>
                            <div className="column4">
                                <input className="input1" type="date"
                                    name="familyDate"
                                    value={data?.apvFamilyEvents[0].familyDate} />
                            </div>
                        </div>
                        <div className="apvContentTitleExp1-3">
                            <div className="column45">지급액</div>
                            <div className="column46">{data?.apvFamilyEvents[0].payment} 원</div>

                        </div>
                        <div className="apvContentTitleExp1-2">
                            <div className="column41">예금주</div>
                            <div className="column42">
                                <input className="input1"
                                    name='accountHolder' value={data?.apvFamilyEvents[0].accountHolder}
                                />
                            </div>
                            <div className="column43">은행</div>
                            <div className="column44">
                                <input className="input1"
                                    name='bank' value={data?.apvFamilyEvents[0].bank}
                                />
                            </div>
                        </div>
                        <div className="apvContentTitleExp1-3">
                            <div className="column45">계좌번호</div>
                            <div className="column46">
                                <input className="input1"
                                    name='accountNumber' value={data?.apvFamilyEvents[0].accountNumber}
                                />
                            </div>
                        </div>

                        <div className="apvContentTitleExp1-4">
                            <div className="column45">화환여부 (150,000원 차감)</div>
                            <div className="column50">
                                <input className="checkbox" type='checkbox'
                                    checked={data?.apvFamilyEvents[0].isSendingWreath === "T"} readOnly />
                            </div>
                        </div>
                        <div className="apvContentDetail3">화환 수령 정보</div>
                        <div className="apvContentTitleExp1-2">
                            <div className="column41">수령자</div>
                            <div className="column42">
                                <input className="input1"
                                    name='sendingName' value={data?.apvFamilyEvents[0].sendingName}
                                />
                            </div>
                            <div className="column43">수령자 연락처</div>
                            <div className="column44">
                                <input className="input1"
                                    name='sendingPhone' value={data?.apvFamilyEvents[0].sendingPhone}
                                />
                            </div>
                        </div>
                        <div className="apvContentTitleExp1-3">
                            <div className="column45">수령지</div>
                            <div className="column46">
                                <input className="input1"
                                    name='sendingAddress' value={data?.apvFamilyEvents[0].sendingAddress}
                                />
                            </div>
                        </div>
                        <div className="apvContentTitleExp1-3">
                            <div className="column45">요청사항</div>
                            <div className="column46">
                                <input className="input1"
                                    name='requestsNote' value={data?.apvFamilyEvents[0].requestsNote}
                                />
                            </div>
                        </div>
                        <div className="apvContentDetail3">위와 같이 지급을 요청합니다.</div>
                    </div>
                    <ApvFileList files={data?.apvFiles || []} data={data} isEditMode={false} />
                </div>
            </div>
        </section>
    );
}

export default Exp6View;