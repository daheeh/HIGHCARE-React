import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useRef } from "react";
import axios from 'axios';
import ImageResize from "quill-image-resize-module-react";

Quill.register('modules/ImageResize', ImageResize);

const Editor = ({ placeholder, value, ...rest }) => {
    const toolbarOptions = [
        ["link", "image", "video"],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
    ];
    
    
    // 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "background",
        "color",
        "link",
        "image",
        "video",
        "width",
    ];
    
    const modules = {
        toolbar: {
            container: toolbarOptions,
        }, ImageResize: {
            parchment: Quill.import('parchment')
        }
    
    };
    // quill 에디터 컴포넌트 ref
    const quillRef = useRef(null);

    useEffect(() => {
        const handleImage = () => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.click();
            input.onchange = async () => {
                const file = input.files;
                const formData = new FormData();

                if (file) {
                    formData.append("multipartFiles", file[0]);
                }
                // 현재 커서 위치 저장
                const range = quillRef.current.getEditor().getSelection(true);


                try {
                    console.log('file[0]',file[0]);
                    console.log('file : ',file);
                    console.log(formData);
                    // 필자는 파이어 스토어에 저장하기 때문에 이런식으로 유틸함수를 따로 만들어줬다 
                    // 이런식으로 서버에 업로드 한뒤 이미지 태그에 삽입할 url을 반환받도록 구현하면 된다 
                    const res = await axios.post('http://localhost:8080/uploadImage', formData);

                    // 정상적으로 업로드 됐다면 로딩 placeholder 삭제
                    quillRef.current.getEditor().deleteText(range.index, 1);
                    // 받아온 url을 이미지 태그에 삽입
                    quillRef.current.getEditor().insertEmbed(range.index, "image", res.data);
                    console.log("resdate : " ,res.data)
                    // 사용자 편의를 위해 커서 이미지 오른쪽으로 이동
                    quillRef.current.getEditor().setSelection(range.index + 1);
                } catch (e) {
                    quillRef.current.getEditor().deleteText(range.index, 1);
                }
            };
        };

        if (quillRef.current) {
            const toolbar = quillRef.current.getEditor().getModule("toolbar");
            toolbar.addHandler("image", handleImage);
        }
    }, []);

    return (
        <ReactQuill
            {...rest}
            ref={quillRef}
            value={value || ""}
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder={placeholder}
            preserveWhitespace
        ></ReactQuill>
    );
};

export default Editor;
