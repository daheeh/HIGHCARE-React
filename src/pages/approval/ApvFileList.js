import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ApvFileList({ files, onRemoveFile, data, isEditMode }) {

    const approval = useSelector(state => state.approval);
    // const isEditMode = approval && approval.apvLines ? true : false;

    const handleFileDownload = (fileName) => {
        // 파일 다운로드 API를 호출하는 코드
        fetch(`http://localhost:8080/api/approval/download/${fileName}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken'),
            },
        })
            .then((response) => {
                // API 호출이 성공하면 파일을 다운로드
                response.blob().then((blob) => {
                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = fileName;
                    a.target = '_blank';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                });
            })
            .catch((error) => {
                console.error('파일 다운로드 에러: ', error);
            });
    };

    console.log("ApvFileList : : : : data", data);
    console.log("ApvFileList : : : : files", files);

    if (!isEditMode) {
        return (
            <div>
                <h3>첨부파일 목록 :</h3>
                <ul>
                    {files?.map((file, index) => (
                        <li className="fileList" key={index}>
                            <a
                                href={`/download/${file.originalFileName}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleFileDownload(file.originalFileName);
                                }}
                            >{file.name}</a>
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
                    {files?.map((file, index) => (
                        <li className="fileList" key={index}>
                            {file.name}
                            <button className="apvBtn2" onClick={() => onRemoveFile(index)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );

    }
}

export default ApvFileList;
