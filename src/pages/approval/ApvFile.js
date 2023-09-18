// ApvFile.js (파일 선택 및 업로드 컴포넌트)
import React, { useState } from 'react';

function ApvFile({ onFileUpload }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUploadClick = async () => {

        onFileUpload(selectedFile); // 업로드한 파일을 부모 컴포넌트에 알립니다.

    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUploadClick}>업로드</button>
        </div>
    );
}

export default ApvFile;
