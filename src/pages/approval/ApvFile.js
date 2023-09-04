import React, { useState } from 'react';

export function ApvFile({ onFileUpload }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            // 선택한 파일을 부모 컴포넌트에 전달
            onFileUpload(selectedFile);
            setSelectedFile(null); // 선택한 파일 초기화
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>업로드</button>
        </div>
    );
}

export default ApvFile;
