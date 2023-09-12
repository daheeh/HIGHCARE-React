import React, { useEffect, useState, forwardRef } from 'react';
import Modal from 'react-modal';
import ApvLineTree from './ApvLineTree';
import ApvRefLineTree from './ApvRefLineTree';
import PdfDocument from './PdfDocument';
import { useReactToPrint } from 'react-to-print';
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


const ApvSummitBar = forwardRef(({ onSubmit, updateIsUrgency, setSelectedEmployees, setRefSelectedEmployees, fileList, updateFileList, data }, ref) => {
    const [isUrgency, setIsUrgency] = useState('F');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFileModalOpen, setIsFileModalOpen] = useState(false);
    const [isLineModalOpen, setIsLineModalOpen] = useState(false);
    const [isRefModalOpen, setIsRefModalOpen] = useState(false);
    const [selectedLine, setSelectedLine] = useState([]);
    // const [refSelectedLine, setRefSelectedLine] = useState([]);



    const htmlCode = ref?.current;
    console.log("htmlCode" + htmlCode);

    const handleEmergencyClick = () => {
        const newIsUrgency = isUrgency === 'F' ? 'T' : 'F';
        setIsUrgency(newIsUrgency);
        updateIsUrgency(newIsUrgency);
        console.log('isUrgency:', isUrgency);
    };

    const handleModalOpen = (modalType) => {
        if (modalType === 'line') {
            setIsLineModalOpen(true);
        } else if (modalType === 'ref') {
            setIsRefModalOpen(true);
        }
    };

    const handleModalClose = (modalType) => {
        if (modalType === 'line') {
            setIsLineModalOpen(false);
        } else if (modalType === 'ref') {
            setIsRefModalOpen(false);
        }
    };

    const [selectedFile, setSelectedFile] = useState([]);

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



    const handleCompleteSelection = (selectedData) => {
        setSelectedEmployees(selectedData);
        console.log('ApvSummitBar111 - selectedData:', selectedData);
        setIsLineModalOpen(false);
    };

    const handleRefSelection = (refSelectedData) => {
        setRefSelectedEmployees(refSelectedData)

        console.log('ApvSummitBar222 - refSelectedData:', refSelectedData);
        setIsRefModalOpen(false);
    };



    const handleClick = async () => {
        const dateToSend = [];
        onSubmit(dateToSend);

    };

    const handleExportToPdf = (ref) => {
        const dynamicFileName = `${data.title}_${data.apvNo}.pdf`;

        html2canvas(ref.current).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4'); // 'p'는 세로 방향
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            // 수평 크기를 고정
            const aspectRatio = canvas.width / canvas.height;
            const imgWidth = pageWidth;
            const imgHeight = imgWidth / aspectRatio;

            if (data.title === '공문') {
                pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else {
                pdf.addImage(imgData, 'JPEG', 0, 20, imgWidth, imgHeight);
            }

            pdf.save(dynamicFileName);
        });
    }

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
                {/* Button to open "결재선" modal */}
                <button onClick={() => handleModalOpen('line')}>결재선</button>
                {/* "결재선" modal */}
                {isLineModalOpen && (
                    <Modal
                        isOpen={isLineModalOpen}
                        onRequestClose={handleModalClose}
                        style={modalStyles}
                    >
                        <ApvLineTree onSelect={handleCompleteSelection} />
                        <button onClick={() => handleModalClose('line')}>닫기</button>
                    </Modal>
                )}

                {/* Button to open "결재참조" modal */}
                <button onClick={() => handleModalOpen('ref')}>결재참조</button>
                {/* "결재참조" modal */}
                {isRefModalOpen && (
                    <Modal
                        isOpen={isRefModalOpen}
                        onRequestClose={() => handleModalClose('ref')}
                        style={modalStyles}
                    >
                        {/* ApvRefLineTree 컴포넌트에 handleRefSelection 콜백 함수와 setRefSelectedEmployees 함수 전달 */}
                        <ApvRefLineTree onSelect={handleRefSelection} />
                        <button onClick={() => handleModalClose('ref')}>닫기</button>
                    </Modal>
                )}
                <button onClick={() => handleExportToPdf(ref)}>PDF로 내보내기</button>

            </div>
        </div >
    );
})

export default ApvSummitBar;