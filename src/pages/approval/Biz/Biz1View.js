import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Document, Page, Text, pdf } from '@react-pdf/renderer'; // pdf 함수를 사용하기 위해 필요한 import 문
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine';
import './ApprovalBiz.css';
import '../Approval.css';
import { callApvViewAPI } from '../../../apis/ApprovalAPICalls';

// React PDF 스타일 정의
const styles = {
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
  },
};

function Biz1View() {
  const authes = useSelector((state) => state.authes);
  const empNo = authes.empNo;
  console.log("Biz1View empNo : ", empNo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { apvNo } = useParams();

  const [data, setData] = useState(null);

  // PDF 데이터를 생성하는 함수 정의
  const generatePdfData = () => {
    const pdfContent = (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.content}>{data?.contents1}</Text>
          <Text style={styles.content}>{data?.contents2}</Text>
        </Page>
      </Document>
    );

    const pdfBlob = pdf(pdfContent).toBlob(); // PDF 생성을 위해 pdf 함수 사용

    return pdfBlob;
  };

  useEffect(() => {
    // PDF 데이터를 생성하고 ApvSummitBar 컴포넌트에 전달
    const pdfData = generatePdfData();
    ApvSummitBar.onGeneratePdf(pdfData);
  }, [data]);

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

  return (
    <section>
      <ApvMenu />
      <div>
        <ApvSummitBar
          data={data}
          currentPage={<Biz1View />}
        />
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
                rows="9"
                value={data?.contents1 || ''}
                readOnly
              />
            </div>
            <div className="apvContentDetail2">-아래-</div>
            <div className="apvContentDetailComent2">
              <textarea
                rows="9"
                value={data?.contents2 || ''}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Biz1View;
