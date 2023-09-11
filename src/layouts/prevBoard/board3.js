import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    callNoticeAPI
} from '../../apis/BulletinAPICall';
function Board3() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notice = useSelector(state => state.noticeReducer);
    const noticeList = notice.data;
 
    useEffect(
        () =>{
            dispatch(callNoticeAPI());
        },[]
        );

        const onClickTableTr = (bulletinCode) => {
            navigate(`/bulletin/thread/${bulletinCode}`, { replace: false });
        }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>이름</th>
                    <th >작성일</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(noticeList)  && noticeList.map(
                    (board) => (
                        <tr
                        key={board.bulletinCode}
                        onClick={ () => onClickTableTr(board.bulletinCode) }>
                    <td>{board.title}</td>
                    <td>{board.bulletinEmployee.empName}</td>
                    <td>{board.modifiedDate}</td>
                       
                        </tr>))
                
            }
                </tbody>
        </table>
    )

}

export default Board3; 
