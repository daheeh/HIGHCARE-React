import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import ApvFileList from '../ApvFileList';
import { callApvViewAPI } from '../../../apis/ApprovalAPICalls';
import { useReactToPrint } from 'react-to-print';

function Biz1View() {
  const authes = useSelector((state) => state.authes);
  const empNo = authes.empNo;
  const ref = useRef();

  console.log("Biz1View empNo : ", empNo);
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
  return (
    <section>
      <ApvMenu />
      <div>
        <ApvSummitBar
          data={data}
          ref={ref}
        />
        <div className="containerApv" ref={ref}>
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
                <input
                  className="input2"
                  value={data?.title || ''}
                  readOnly
                />
              </div>
            </div>
            <div className="apvContentDetail">상세내용</div>
            <div className="apvContentDetailComent">
              <textarea
                className='apvTextarea'
                value={data?.contents1 || ''}
                readOnly
              />
            </div>
            <div className="apvContentDetail2">-아래-</div>
            <div className="apvContentDetailComent2">
              <textarea
                className='apvTextarea'
                value={data?.contents2 || ''}
                readOnly
              />
            </div>
          </div>
          <ApvFileList files={data?.apvFiles || []} data={data} />
        </div>
      </div>
    </section>
  );
}

export default Biz1View;
