import React, { useEffect, useState, forwardRef } from 'react';
import Modal from 'react-modal';
import ApvLineTree from './ApvLineTree';
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