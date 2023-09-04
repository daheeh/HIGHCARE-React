import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ApvLineTree from './ApvLineTree';
import ApvFile from './ApvFile';
import ApvFileList from './ApvFileList';
import { uploadFiles } from './ApvFileUpload';

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


function ApvSummitBar({ onSubmit, updateIsUrgency, setSelectedEmployees }) {
    const [isUrgency, setIsUrgency] = useState('F');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFileModalOpen, setIsFileModalOpen] = useState(false);
    const [fileList, setFileList] = useState([]); // 첨부된 파일 목록

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



    const [selectedFile, setSelectedFile] = useState(null);
    const [attachedFiles, setAttachedFiles] = useState([]);


    // 여기서 업로드한 파일을 처리
    const handleFileUpload = (file) => {
        if (file) {
            setFileList([...fileList, file]);
            console.log('파일 업로드됨:', file.name);
        }
    };

    // 업로드 파일 삭제
    const handleRemoveFile = (fileIndex) => {
        const updatedFileList = fileList.filter((_, index) => index !== fileIndex);
        setFileList(updatedFileList);
    };

    const handleFileModalOpen = () => {
        setIsFileModalOpen(true); // 파일 업로드 모달 창 열기
    };

    const handleFileModalClose = () => {
        setIsFileModalOpen(false); // 파일 업로드 모달 창 닫기
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
    


    return (
        <div className="apvTopBar">
            <div>
                <button className="summit" onClick={handleClick}>제출</button>
                <button className={isUrgency === 'T' ? 'emergencyActive' : ''} onClick={handleEmergencyClick}>긴급</button>

                <button onClick={handleFileModalOpen}>파일첨부</button>
                {isFileModalOpen && (
                    <Modal isOpen={isFileModalOpen} onRequestClose={handleFileModalClose} style={modalStyles}>
                        <ApvFile onFileUpload={handleFileUpload} />
                        {fileList.length > 0 && (
                            <div>
                                <h3>첨부된 파일 목록:</h3>
                                <ul>
                                    {fileList.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button onClick={handleFileModalClose}>닫기</button>
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
            </div>
        </div >
    );
}

export default ApvSummitBar;