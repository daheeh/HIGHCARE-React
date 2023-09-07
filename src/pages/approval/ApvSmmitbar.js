import React, { useEffect, useState, forwardRef } from 'react';
import Modal from 'react-modal';
import ApvLineTree from './ApvLineTree';
import ApvFile from './ApvFile';
import ApvFileList from './ApvFileList';
import PdfDocument from './PdfDocument';
import { useReactToPrint } from 'react-to-print';
import { current } from 'immer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '500px',
        maxHeight: '70vh',
        overflow: 'auto',
    },
};



const ApvSummitBar = forwardRef(({ onSubmit, updateIsUrgency, setSelectedEmployees, fileList, updateFileList, data }, ref) => {
    const [isUrgency, setIsUrgency] = useState('F');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFileModalOpen, setIsFileModalOpen] = useState(false);
    const htmlCode = ref?.current;
    console.log("htmlCode" + htmlCode);

    const handleEmergencyClick = () => {
        const newIsUrgency = isUrgency === 'F' ? 'T' : 'F';
        setIsUrgency(newIsUrgency);
        updateIsUrgency(newIsUrgency);
        console.log('isUrgency:', isUrgency);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        console.log('ApvSummitBar - selectedEmployees (inside useEffect):', setSelectedEmployees);
    }, [setSelectedEmployees]);



    const [selectedFile, setSelectedFile] = useState([]);
    // const [attachedFiles, setAttachedFiles] = useState([]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    // 업데이트된 handleUploadClick 함수
    const handleUploadClick = () => {
        if (selectedFile) {
            const newFileList = [...fileList, selectedFile];
            updateFileList(newFileList); // Update fileList in the parent component
            console.log('파일 업로드됨:', selectedFile.name);
            console.log('fileList??', newFileList);
            setSelectedFile(null); // Reset selectedFile
        }
    };

    // 여기서 업로드한 파일을 처리
    const handleFileUpload = async (fle) => {
        if (selectedFile) {
            const newFileList = [...fileList, selectedFile];
            updateFileList(newFileList); // Update fileList in the parent component
            console.log('파일 업로드됨:', selectedFile.name);
            console.log('fileList??', newFileList);
            setSelectedFile(null); // Reset selectedFile
        }
    }

    // 업로드 파일 삭제
    const handleRemoveFile = (fileIndex) => {
        const updatedFileList = fileList.filter((_, index) => index !== fileIndex);
        updateFileList(updatedFileList); // Update fileList in the parent component
    };

    // 파일 업로드 모달 창 열기
    const handleFileModalOpen = () => {
        setIsFileModalOpen(true);
    };

    // 파일 업로드 모달 창 닫기
    const handleFileModalClose = () => {
        setIsFileModalOpen(false);
    };

    useEffect(() => {
        console.log('ApvSummitBar - selectedEmployees (inside useEffect):', setSelectedEmployees);
    }, [setSelectedEmployees]);

    // useEffect(() => {
    //     console.log('ApvSummitBar - fileList (inside useEffect):', fileList);
    // }, [setFileList]);

    const handleCompleteSelection = (selectedData) => {
        setSelectedEmployees(selectedData);
        console.log('ApvSummitBar - selectedData:', selectedData);
        console.log('ApvSummitBar - selectedEmployees:', setSelectedEmployees);
        setIsModalOpen(false);
    };


    const handleClick = async () => {
        const dateToSend = [];
        onSubmit(dateToSend);

    };

    // const generatePdfData = () => {
    //     return pdf(<PdfDocument data={data} currentPage={currentPage} />).toBlob();
    // };



    const handleExportToPdf = (ref) => {
        // const pdfBlob = pdf(currentPage).toBlob();

        // // PDF Blob을 데이터 URL로 변환
        // const pdfDataUrl = URL.createObjectURL(pdfBlob);

        // // 새로운 탭에서 PDF 열기
        // window.open(pdfDataUrl);

        // // 새로운 탭이 열린 후 URL 객체 정리
        // URL.revokeObjectURL(pdfDataUrl);

        html2canvas(ref.current).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0, 200, 280);
            pdf.save("download.pdf")
        })
    };

    // const handleExportToPdf = () => {
    //     if (generatePdfData) {
    //       const pdfBlob = generatePdfData(); // Generate the PDF Blob using generatePdfData function
    //       // Create a URL for the Blob
    //       const pdfUrl = URL.createObjectURL(pdfBlob);

    //       // Create a downloadable link
    //       const downloadLink = document.createElement('a');
    //       downloadLink.href = pdfUrl;
    //       downloadLink.download = 'document.pdf'; // Specify the desired file name
    //       downloadLink.click();

    //       // Clean up the URL object after the download link is clicked
    //       URL.revokeObjectURL(pdfUrl);
    //     } else {
    //       console.error('PDF 생성 콜백이 사용 가능하지 않습니다.');
    //     }
    //   };




    return (
        <div className="apvTopBar">
            <div>
                <button className="summit" onClick={handleClick} enctype="multipart/form-data">제출</button>
                <button className={isUrgency === 'T' ? 'emergencyActive' : ''} onClick={handleEmergencyClick}>긴급</button>
                <button onClick={handleFileModalOpen}>파일첨부</button>
                {isFileModalOpen && (
                    <Modal isOpen={isFileModalOpen} onRequestClose={handleFileModalClose} style={modalStyles}>
                        <div>
                            <div>
                                <input type="file" onChange={handleFileChange} />
                                <button className="apvBtn2" onClick={handleUploadClick}>업로드</button>
                            </div>
                            <div>
                                <h3>첨부된 파일 목록:</h3>
                                <ul>
                                    {fileList.map((file, index) => (
                                        <li key={index}>
                                            {file.name}
                                            <button className="apvBtn2" onClick={() => handleRemoveFile(index)}>삭제</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="apvBtn2" onClick={handleFileModalClose}>닫기</button>
                        </div>
                    </Modal>
                )}
                <button onClick={handleModalOpen}>결재선</button>
                {isModalOpen && <div className="modalOverlay" />}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleModalClose}
                    style={modalStyles}
                >
                    <ApvLineTree onSelect={handleCompleteSelection} />
                </Modal>
                <button>설정</button>
                <button onClick={() => handleExportToPdf(ref)}>PDF로 내보내기</button>
                
            </div>
        </div >
    );
})

export default ApvSummitBar;