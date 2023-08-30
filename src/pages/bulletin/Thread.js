import BoardStyle from './Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
    callBoardDetailAPI,
    callCommentAPI
} from '../../apis/BulletinAPICall'

function Thread(){
    const navigate = useNavigate();
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const bulletinCode = useParams().bulletinCode;
    const dispatch =useDispatch();
    const board = useSelector(state => state.boardtest);
    const boardDetail = board.detail;
    const boardList = board.data;
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageInfo = board.pageInfo;


    const pageNumber = [];
    if(pageInfo) {
        for(let i = 1; i<= pageInfo.pageEnd; i++){
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
            // setStart((currentPage - 1) * 5);
            console.log('마운트 됨boardDetail', boardDetail);
            console.log('bulletinCode', bulletinCode);
            dispatch(callBoardDetailAPI({
                bulletinCode: bulletinCode,
                currentPage: currentPage
            }));
        }
        ,[currentPage,start]
    );
    const onClickComment = () =>{
        dispatch(callCommentAPI({
            form:form
        }));
        setStart(start+1);

    }

    const changeContent = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    };

    const onClickUpdate = () =>{
        navigate(`/bulletin/mod/${bulletinCode}`,{ replace: false });
    }
    return (
        <>
            {  boardDetail &&
            
                <div className={BoardStyle.content_main}>
                    <h3>{boardDetail.title} </h3>
                    <div onClick={onClickUpdate}>수정</div>
                    <div className={BoardStyle.content_info}>
                        <span>{boardDetail.bulletinEmployee.empName}</span>
                        <span>{boardDetail.modifiedDate}</span>
                        조회수<span>{boardDetail.views}</span>
                    </div>
                    <div className={BoardStyle.content_main_main} dangerouslySetInnerHTML={{__html: boardDetail.content}}>
                        
                    </div>
                    
                    {
                        boardDetail.allowComments == 'N' && 
                        <div className={BoardStyle.comment_content}>
                            <div className={BoardStyle.comment_count}>
                                댓글이 허용되지 않은 게시물입니다.
                            </div>
                        </div>
                    }

                    {
                        boardDetail.allowComments == 'Y' && 
                        
                        <div className={BoardStyle.comment_content}>

                                <div className={BoardStyle.comment_count}>
                                    댓글{boardDetail.commentCnt}개
                                </div>
                            <div style={{display: 'flex'}}>
                                <input type="text" onChange={changeContent} name='content'/>
                                <div onClick={onClickComment}>등록</div>
                            </div>
                                {Array.isArray(boardList) && boardList.map(
                                    (boards) =>(
                                        <div className={BoardStyle.comment} >
                                                <span>{boards.bulletinEmployee.empName}</span>
                                        <span>{boards.modifiedDate}</span>
                                        
                                            <div className={BoardStyle.comment_detail}>
                                                {boards.commentContent}
                                            </div>
                                        </div>

                                    )
                                )}

                    
                            {/* <div className={BoardStyle.comment} >
                                <span>허유일</span>
                                <span>2023-08-12</span>
                                <span>댓글</span>
                                <div className={BoardStyle.comment_detail}>
                                    잘보고 갑니다
                                    <div style={{display: 'none'}}>
                                        <div className={BoardStyle.comment_comment}>
                                            잘보고 갑니다
                                        </div>
                                        <div className={BoardStyle.reply_add} style={{display: 'flex'}}>
                                            <input type="text"/>
                                            <div>등록</div>
                                        </div>
                                    </div>
                                </div>
                                    </div> */}

                            {/* <div style={{display: 'flex'}}>
                                <input type="text" onChange={changeContent} name='content'/>
                                <div onClick={onClickComment}>등록</div>
                            </div> */}

                        </div> 
                    }
                                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
                                    { Array.isArray(board) &&
                                        <button 
                                        onClick={() => setCurrentPage(currentPage - 1)} 
                                        disabled={currentPage === 1}>&lt;</button>
                                    }
                                    {pageNumber.map((num) => (
                                        <li key={num} onClick={() => setCurrentPage(num)}>
                                            <button
                                                style={ currentPage === num ? {backgroundColor : 'orange' } : null}>
                                                {num}
                                            </button>
                                        </li>
                                    ))}
                                    { Array.isArray(board) && pageInfo != null &&
                                    <button 
                                        onClick={() => setCurrentPage(currentPage + 1)} 
                                        disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}>
                                        &gt;
                                    </button>
                                    }
                                </div>
                </div>
            }
        </>
    )
}

export default Thread;