import React, { useState } from 'react';

function ApvFile({ onFileUpload }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            onFileUpload(selectedFile);
            setSelectedFile(null); // Clear the selected file
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} hidden/>
            <button onClick={handleUpload} hidden></button>
        </div>
    );
}

export default ApvFile;
