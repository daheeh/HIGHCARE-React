import BoardStyle from './Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
    callBoardDetailAPI
} from '../../apis/BulletinAPICall'

function Thread(){
    const bulletinCode = useParams().bulletinCode;
    const dispatch =useDispatch();
    const board = useSelector(state => state.boardtest);
    const boardDetail = board.data;

    useEffect(
        ()=>{
            dispatch(callBoardDetailAPI({
                bulletinCode: bulletinCode
            }));
        }
        ,[]
    );

    console.log('bulletinCode', bulletinCode);
    return (
        <>
        {  boardDetail &&
        <div className={BoardStyle.content_main}>
            <h3>{boardDetail.title} </h3>
            <div className={BoardStyle.content_info}>
                <span>{boardDetail.bulletinEmployee.empName}</span>
                <span>{boardDetail.modifiedDate}</span>
                조회수<span>{boardDetail.views}</span>
            </div>
            <div className={BoardStyle.content_main_main}>
                {boardDetail.content}
            </div>
        <div className={BoardStyle.comment_content}>
                <div className={BoardStyle.comment_count}>
                    댓글 1개
                </div>
            <div className={BoardStyle.comment}>
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
            </div>
            <div style={{display: 'flex'}}>
                <input type="text"/>
                <div>등록</div>
            </div>
            </div> 
        </div>
}
        </>
    )
}

export default Thread;