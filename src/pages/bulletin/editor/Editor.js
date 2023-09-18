import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useRef } from "react";
import axios from 'axios';
import ImageResize from "quill-image-resize-module-react";
import { useState } from "react";
Quill.register('modules/ImageResize', ImageResize);

// const Editor = ({ placeholder, value, ...rest }) => {
    const Editor = props => {
        const [content, setContent] = useState("")

    const toolbarOptions = [
        ["link", "image", "video"],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
    ];
    
    
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
                    const res = await axios.post('http://highcare.coffit.today:8080/uploadImage', formData);

                    quillRef.current.getEditor().deleteText(range.index, 1);
                    quillRef.current.getEditor().insertEmbed(range.index, "image", res.data);
                    console.log("resdate : " ,res.data)
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
            // {...rest}
            ref={quillRef}
            // value={value || ""}
            value={props.value}
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={props.getValue}
            // placeholder={placeholder}
            preserveWhitespace
            style={{height:"600px"}}
        ></ReactQuill>
    );
};

export default Editor;
