import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ApvFileList({ files, onRemoveFile, data }) {

    const approval = useSelector(state => state.approval);
    const isEditMode = approval.apvLines ? true : false;

    if (isEditMode) {
        return (
            <div>
                <h3>첨부파일 목록 :</h3>
                <ul>
                    {data?.apvFiles.map((file, index) => ( // data를 활용하여 파일 목록을 추출
                        <li key={index}>
                            <a href={file.url} target="_blank" rel="noopener noreferrer" download>
                                {file.originalFileName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );

    } else {
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
}

export default ApvFileList;
