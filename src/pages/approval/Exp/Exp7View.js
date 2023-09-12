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

function Exp1View() {
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

    const [amounts, setAmounts] = useState([0]);
    const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);

    const renderApvCorpCard = (data) => {
        return (
            <>
                {data?.apvCorpCards.map((form, index) => (
                    <div className="apvContentDetailExp1Content" key={index}>
                        <div className="apvContentDetailExp1List">
                            <div className="column21">
                                <input
                                    className="input1"
                                    name={`apvCorpCards[${index}].details`}
                                    value={form.details || ''}
                                    readOnly
                                />
                            </div>
                            <div className="column22">
                                <input
                                    className="input1"
                                    name={`apvCorpCards[${index}].account`}
                                    value={form.account || ''}
                                    readOnly
                                />
                            </div>
                            <div className="column23">
                                <input
                                    className="input1"
                                    type="number"
                                    name={`apvCorpCards[${index}].amount`}
                                    value={form.amount || ''}
                                    readOnly
                                />
                            </div>
                            <div className="column24">
                                <input
                                    className="input1"
                                    name={`apvCorpCards[${index}].cardComment`}
                                    value={form.cardComment || ''}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    if (!data) {
        return ;
      }
    
        if (!authes || data.apvLines.every(emp => emp.empNo !== authes.empNo)) {
        return <div className='apvNoUser'>권한이 없습니다</div>;
      }

    return (
        <section>
            <ApvMenu />
            <div>
                <ApvSummitBar
                    data={data}
                    ref={ref}
                />
                <div className="containerApv" ref={ref}>
                    <div className="apvApvTitle">법인카드사용보고서</div>
                    <ApvSummitLine
                        mode="view"
                        selectedEmployees={data?.apvLines || []}
                        authes={authes}
                        data={data}
                    />
                    <div className="apvContent">
                        <div className="apvContentTitleExp1">
                            <div className="column1">카드번호</div>
                            <div className="column2">
                                <input className="input1"
                                    name='sharedProperties.cardNo' value={data?.apvCorpCards[0].cardNo} readOnly />
                            </div>
                            <div className="column3">결제월</div>
                            <div className="column4">
                                <input className="input1"
                                    name='sharedProperties.paymentMonth' value={data?.apvCorpCards[0].paymentMonth} readOnly />
                            </div>
                        </div>
                        <div className="apvContentDetail">내역</div>
                        <div className="apvContentDetailExp1Title">
                            <div className="column11">내역</div>
                            <div className="column12">계정과목</div>
                            <div className="column13">금액</div>
                            <div className="column14">적요</div>
                        </div>

                        <div className="apvContentDetailExp1Content">
                            {renderApvCorpCard(data)}
                        </div>
                        <div className="apvContentDetailExp1Total">
                            <div className="column31">합계</div>
                            <div className="column32">{data?.totalAmount || ''}</div>
                        </div>
                        <div className="apvContentDetail3">위와 같이 법인카드 사용내역을 보고합니다.</div>
                    </div>
                    <ApvFileList files={data?.apvFiles || []} data={data} isEditMode={false} />
                </div>
            </div>
        </section>
    );
}

export default Exp1View;