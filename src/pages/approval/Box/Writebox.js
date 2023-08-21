import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApvMenu from '../AprovalNav';
import './ApprovalBox.css';
import '../Approval.css';
import { callApprovalAPI } from '../../../apis/ApprovalAPICalls';

function WriteBox() {

    const dispatch = useDispatch();
    const results = useSelector(state => state.results); 

    useEffect(() => {
        dispatch(callApprovalAPI({ apvStatus: '결재예정' }));
    }, [dispatch]);

    const handleMenuItemClick = (apvStatus) => {
        dispatch(callApprovalAPI({ apvStatus }));
    };

    return (

        
        <section>
            <ApvMenu />
            <div>
                <div className="apvApvtitle">결재함</div>
                <div className="apvTopMenu">
                    <ul className="apvTopMenuUl">
                        <li onClick={() => handleMenuItemClick('결재예정')}>결재 예정</li>
                        <li onClick={() => handleMenuItemClick('결재진행중')}>결재 진행중</li>
                        <li onClick={() => handleMenuItemClick('결재완료')}>결재 완료</li>
                        <li onClick={() => handleMenuItemClick('결재반려')}>결재 반려</li>
                        <li onClick={() => handleMenuItemClick('결재참조')}>결재 참조</li>
                    </ul>
                </div>
                <div>
                    <table className="apvBoxresultTable">
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.apvNo}</td>
                                    <td>{result.title}</td>
                                    <td>{result.category}</td>
                                    <td>{result.writeDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="paging">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WriteBox;

