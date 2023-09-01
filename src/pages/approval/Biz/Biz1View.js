import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvBiz1ViewAPI } from '../../../apis/ApprovalAPICalls';

function Biz1View() {

    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    console.log("Biz1View empNo : ", empNo);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { apvNo } = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await dispatch(callApvBiz1ViewAPI({ apvNo }));
                setData(data);
                console.log('data : ', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [apvNo, dispatch]);

    return (

        <section>
            <ApvMenu />
            <div>
                <div className="containerApv">
                    <div className="apvApvTitle">기안서</div>
                    <ApvSummitLine
                        mode="view"
                        selectedEmployees={data?.apvLines || []}
                        authes={authes}
                        data={data}
                    />
                    <div className="apvContent">
                        <div className="apvContentTitle">
                            <div className="column1">제목</div>
                            <div className="column2">
                                <input className="input2" value={data?.title || ''} readOnly />
                            </div>
                        </div>
                        <div className="apvContentDetail">상세내용</div>
                        <div className="apvContentDetailComent">
                            <textarea rows="9" value={data?.contents1 || ''} readOnly />
                        </div>
                        <div className="apvContentDetail2">-아래-</div>
                        <div className="apvContentDetailComent2">
                            <textarea rows="9" value={data?.contents2 || ''} readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Biz1View;