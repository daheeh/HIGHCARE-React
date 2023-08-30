import BoardStyle from './Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


import {
    callBulletinAPI
} from '../../apis/BulletinAPICall';

function Bulletin(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boards = useSelector(state => state.boardtest);
    const params = useParams();
    console.log('boards', boards);

    var categoryCode;
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    useEffect(
        () =>{
            setStart((currentPage - 1) * 5);
            dispatch(callBulletinAPI({
                categoryCode: categoryCode,
                currentPage: currentPage
            }));
            // dispatch(callBulletinAPI());
            
        }
    
        );

    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>인기 게시판</h1>
        <div className={BoardStyle.wrap}>
            <div className={BoardStyle.search}>
                <input type="text" className={BoardStyle.searchTerm} placeholder="제목 입력하세요."/>
                <button type="submit" className={BoardStyle.searchButton}>
                    <i></i>
                </button>
            </div>
        </div>
 
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th className={BoardStyle.title_head}>제목</th>
                    <th>이름</th>
                    <th>조회수</th>
                    <th>댓글수</th>
                    <th className={BoardStyle.date_head}>작성일</th>
                </tr>
            </thead>
            <tbody>
    
                {Array.isArray(boards)&& boards.map(
                    (board) => (
                <tr>
                    <td className={BoardStyle.no}>{board.bulletinCode}</td>
                    <td className={BoardStyle.title}>{board.title}</td>
                    <td className={BoardStyle.name}>1</td>
                    <td className={BoardStyle.view}>{board.views}</td>
                    <td className={BoardStyle.comment_cnt}>1</td>
                    <td className={BoardStyle.date}>{board.modifiedDate}</td>
                </tr>)
                )}
            </tbody>
        </table>
        <div className={BoardStyle.write_bulletin}>
            글쓰기
        </div>
    </div>
    )
}

export default Bulletin;