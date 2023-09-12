import BoardStyle from './Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import './Comment.css';

import {
    callCommentAPI,
    callCommentDeleteAPI,
    callCommentUpdateAPI,
    callCommentDetailAPI
} from '../../apis/BulletinAPICall'

function Comment({bulletinCode}){
    const navigate = useNavigate();
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const dispatch =useDispatch();
    const comments = useSelector(state => state.commentReducer);
    const boardList = comments.data;
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const pageInfo = comments.pageInfo;
    const pageNumber = [];
    if(pageInfo) {
        for(let i = pageInfo.pageStart; i<= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }


    const [form, setForm] = useState({
        bulletinCode : bulletinCode,
        content: '',
        empNo: empNo

    });
    useEffect(
        ()=>{
            dispatch(callCommentDetailAPI({
                bulletinCode: bulletinCode,
                currentPage: currentPage
            }));  
            setStart(0);
        }
        ,[start,currentPage]
    )
    const onClickComment = () =>{
        
        dispatch(callCommentAPI({
            form:form
        }));
        setStart(start +1);
        document.getElementById(`comment_abc`).value = '';

    }

    const changeContent = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    };



    const onCLickDelete = (commentCode,BempNo) => {
        if(empNo == BempNo){
        if(window.confirm("댓글을 삭제 하시겠습니까?")){
        dispatch(callCommentDeleteAPI({
            commentCode : commentCode
        }));
        
        setStart(start +1);
    } }else{
        alert('권한이 없습니다')
    }
    }

    const onClickCommentUpdate = (commentCode, AempNo) => {
        var className = document.getElementById(`comment${commentCode}`).className;
        let CommentValue = document.getElementById(`comment${commentCode}`).value;
        if(AempNo ==empNo){
        if(className == 'comment_mod'){
            if(window.confirm("댓글을 수정 하시겠습니까?")){
            dispatch(callCommentUpdateAPI({
                commentCode : commentCode,
                commentContent : CommentValue
            }));
            
            document.getElementById(`comment${commentCode}`).className = 'comment_detail';
            document.getElementById(`comment${commentCode}`).readOnly = true;
            document.getElementById(`update${commentCode}`).innerHTML = ' 수정';
            setStart(start +1);
        } 
        }else{
            document.getElementById(`comment${commentCode}`).className = 'comment_mod';
            document.getElementById(`comment${commentCode}`).readOnly = false;
            document.getElementById(`update${commentCode}`).innerHTML = ' 등록';

        }}else{
            alert('권한이 없습니다.')
        }
}
const dataRe = (data) => {
    var dateObj = new Date(data);

    var year = dateObj.getFullYear(); 
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    var formattedDate = year + '년 ' + month + '월 ' + day + '일';

    return formattedDate;
}

return (
    <>
              <div className={BoardStyle.comment_count}>
                댓글{comments.total}개
            </div>
            <div className={BoardStyle.comment_content}>

        <div style={{display: 'flex'}}>
            <textarea onChange={changeContent} className={BoardStyle.comment_add} rows={2} name='content' id='comment_abc'></textarea>
            {/* <input type="text" onChange={changeContent} name='content'/> */}
            <div onClick={onClickComment} className={BoardStyle.comment_ok} style={{margin:"auto", marginLeft:"10px"}}>등록</div>
        </div>
            {Array.isArray(boardList) && boardList.map(
                (boards) =>(
                    <div className={BoardStyle.comment} >
                            <span>{boards.bulletinEmployee.empName } </span>
                    <span>{dataRe( boards.modifiedDate)} </span>
                    <span onClick={() => onClickCommentUpdate (boards.commentCode ,boards.bulletinEmployee.empNo) } id={`update${boards.commentCode}`}> 수정</span>
                    <span key={boards.commentCode} onClick={() => onCLickDelete(boards.commentCode ,boards.bulletinEmployee.empNo)}> 삭제</span>
                    <br></br>
                        <textarea className="comment_detail" readOnly defaultValue={boards.commentContent}  id={`comment${boards.commentCode}`} key={boards.commentContent}>
                        </textarea>
                        <br></br>

                    </div>
                )
            )}

        </div> 
                    <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }} className={BoardStyle.pagingButton}>
                                    { Array.isArray(boardList) &&
                                        <button 
                                        onClick={() => setCurrentPage(currentPage - 1)} 
                                        disabled={currentPage === 1
                                        }
                className={BoardStyle.pagingButtona}
                >&lt;</button>
                                    }
                                    {pageNumber.map((num) => (
                                        <li key={num} onClick={() => setCurrentPage(num)} className={BoardStyle.pagingButton}>
                                            <button
                                       style={ currentPage === num ? {backgroundColor : '#10479A' } : {backgroundColor : '#f4f4f4',color : 'black' } }
                                       >                  {num}
                                            </button>
                                        </li>
                                    ))}
                                    { Array.isArray(boardList) && pageInfo != null &&
                                    <button 
                                        onClick={() => setCurrentPage(currentPage + 1)} 
                                        disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}
                className={BoardStyle.pagingButtona}>
                                        &gt;
                                    </button>
                                    }
   </div>
    </>
 )
                                }

                                export default Comment;