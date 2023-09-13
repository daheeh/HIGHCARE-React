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

function Biz2View() {
  const authes = useSelector((state) => state.authes);
  const empNo = authes.empNo;
  const ref = useRef();

  console.log("Biz2View empNo : ", empNo);
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
          <div className="apvApvTitle">회의록</div>
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
                  value={data?.apvMeetingLogs[0].meetingTitle || ''}
                  readOnly
                />
              </div>
            </div>
            <div className="apvContentBiz2">
              <div className="column1">회의일자</div>
              <div className="column2">
                <input className="input1" type="date" placeholder="날짜 입력"
                  name="meetingDate"
                  value={data?.apvMeetingLogs[0].meetingDate} />
              </div>
            </div>
            <div className="apvContentBiz2">
              <div className="column1">회의장소</div>
              <div className="column2">
                <input className="input2" placeholder="회의장소 입력"
                  name='location' value={data?.apvMeetingLogs[0].location}
                />
              </div>
            </div>
            <div className="apvContentBiz2">
              <div className="column1">참석자</div>
              <div className="column2">
                <input className="input2" placeholder="참석자 입력"
                  name='participants' value={data?.apvMeetingLogs[0].participants}
                />
              </div>
            </div>
            <div className="apvContentBiz2Last">
              <div className="column1">회의내용</div>
              <div><textarea placeholder="회의 내용 작성" name='contents1' className='apvTextarea'
                value={data?.contents1}
              />
              </div>
            </div>
          </div>
          <ApvFileList files={data?.apvFiles || []} data={data} isEditMode={false} />
        </div>
      </div>
    </section>
  );
}

export default Biz2View;
