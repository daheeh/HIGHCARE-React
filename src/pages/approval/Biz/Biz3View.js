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

function Biz3View() {
  const authes = useSelector((state) => state.authes);
  const empNo = authes.empNo;
  const ref = useRef();

  console.log("Biz2View empNo : ", empNo);
  console.log("ref = ", ref);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { apvNo } = useParams();

  const [data, setData] = useState(null);

  function generateTimeOptions() {
    const options = [];
    const interval = 10;
    for (let minutes = 0; minutes < 1440; minutes += interval) {
      const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
      const mins = (minutes % 60).toString().padStart(2, '0');
      const time = `${hours}:${mins}`;
      options.push(<option key={time} value={time}>{time}</option>);
    }
    return options;
  }

  const calculateTravelDuration = () => {
    const startDate = new Date(
      `${data?.apvBusinessTrips[0].startDate} ${data?.apvBusinessTrips[0].startTime}`
    );
    const endDate = new Date(
      `${data?.apvBusinessTrips[0].endDate} ${data?.apvBusinessTrips[0].endTime}`
    );

    const startTime = data?.apvBusinessTrips[0].startTime;
    const endTime = data?.apvBusinessTrips[0].endTime;

    const timeDiffMillis = endDate - startDate;

    if (timeDiffMillis >= 86400000) {
      const days = Math.floor(timeDiffMillis / 86400000);
      return `${days} 박 ${days + 1} 일`;
    } else {
      const hours = Math.floor(timeDiffMillis / 3600000);
      const minutes = Math.floor((timeDiffMillis % 3600000) / 60000);
      return `${hours} 시간 ${minutes} 분`;
    }
  }

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

  if (!authes || !data || data.apvLines.every(emp => emp.empNo !== authes.empNo)) {
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
          <div className="apvApvTitle">출장신청서</div>
          <ApvSummitLine
            mode="view"
            selectedEmployees={data?.apvLines || []}
            authes={authes}
            data={data}
          />
          <div className="apvContent">
            <div className="apvContentTitle">
              <div className="column1">출장목적</div>
              <div className="column2">
                <input className="input1" placeholder="출장 목적 입력"
                  name='purpose' value={data?.apvBusinessTrips[0].purpose || ''}
                />
              </div>
            </div>
            <div className="apvContentTitleBiz3">
              <div className="column1">출장기간</div>
              <div className="column2">
                <input className="input1" name="startDate"
                  value={data?.apvBusinessTrips[0].startDate || ''} />
              </div>
              <div className="column2">
                <input className="input1" name="startTime"
                  value={data?.apvBusinessTrips[0].startTime || ''}/>
              </div>
              <div className="column3">~</div>
              <div className="column2">
                <input className="input1" name="endDate"
                  value={data?.apvBusinessTrips[0].endDate || ''}/>
              </div>
              <div className="column2">
                <input className="input1" name="endTime"
                  value={data?.apvBusinessTrips[0].endTime || ''}/>
              </div>
              <div className="column2">({calculateTravelDuration()})</div>
            </div>
            <div className="apvContentTitle">
              <div className="column1">출장지</div>
              <div className="column2">
                <input className="input1" name='location' value={data?.apvBusinessTrips[0].location || ''}
                />
              </div>
            </div>
            <div className="apvContentTitle">
              <div className="column1">동반자</div>
              <div className="column2">
              <input className="input1" name='location' value={data?.apvBusinessTrips[0].tripAttendees || ''}
                />
              </div>
            </div>
            <div className="apvContentDetail">상세내용
            </div>
            <div className="apvContentDetailComent">
              <textarea name='contents1' className='apvTextarea'value={data?.contents1}
              />
            </div>
          </div>
          <ApvFileList files={data?.apvFiles || []} data={data} />
        </div>
      </div>
    </section>
  );
}

export default Biz3View;
