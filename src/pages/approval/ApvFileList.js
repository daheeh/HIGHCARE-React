import React from 'react';

function ApvFileList({ files, onRemoveFile }) {
    return (
        <div>
            <h3>첨부파일 목록 :</h3>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>
                        {file.name}
                        <button onClick={() => onRemoveFile(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ApvFileList;
