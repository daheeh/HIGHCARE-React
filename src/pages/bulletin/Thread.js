import BoardStyle from './Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Comment from './Comment';
import {
    callBoardDetailAPI
} from '../../apis/BulletinAPICall'

function Thread(){
    const board = useSelector(state => state.boardtest);
    const boardDetail = board.data;
    const navigate = useNavigate();
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const bulletinCode = useParams().bulletinCode;
    const dispatch =useDispatch();
    const [start, setStart] = useState(0);



    const onClickUpdate = () =>{
        if(boardDetail.bulletinEmployee.empNo == empNo){
            navigate(`/bulletin/mod/${bulletinCode}`,{ replace: false });
        }else{
            alert('권한이 없습니다.');
        }
    }
    useEffect(
        ()=>{
            dispatch(callBoardDetailAPI({
                bulletinCode: bulletinCode,
            }));
        }
        ,[]
    );
    return (
        <>
            {  boardDetail &&
            
                <div className={BoardStyle.content_main}>
                    <h2>{boardDetail.title} </h2>
                    <div style={{display : "flex"}}>
                    <div className={BoardStyle.content_info}>
                        <span>{boardDetail.empName}</span>
                        <span>{boardDetail.modifiedDate}</span>
                        조회수<span>{boardDetail.views}</span>
                    </div>
                    <div onClick={onClickUpdate} style={{marginLeft: "auto", marginRight:"20px", fontSize:"14px", padding:"3px", height:"20px"}} className={BoardStyle.comment_ok}>수정</div>
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
                        <Comment bulletinCode ={bulletinCode}/>
                        </div>
                    }
                    </div>
            }
        </>
    )
}

export default Thread;