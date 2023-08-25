import BoardStyle from './Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
    callBulletinAPI
} from '../../apis/BulletinAPICall';
function BulletinBoard(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boards = useSelector(state => state.boardtest);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);
    const categoryCode = useParams().categoryCode;

    // const pageInfo = boards.pageInfo;

    // const pageNumber = [];
    // if(pageInfo) {
    //     for(let i = 1; i<= pageInfo.pageEnd; i++){
    //         pageNumber.push(i);
    //     }
    // }

    useEffect(
        () =>{
            setStart((currentPage - 1) * 5);
            dispatch(callBulletinAPI({
                categoryCode: categoryCode,
                currentPage: currentPage
            }));
            // dispatch(callBulletinAPI());
            
        }
        ,[categoryCode,currentPage]
        );
    console.log('categoryCode',categoryCode);
   const title = categoryCode==1?'전체게시판':(categoryCode==2?'인기게시판':(categoryCode==3?'자유게시판':'공지사항'));
    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>{title}</h1>
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
        {/* <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
            { Array.isArray(boards) &&
            <button 
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
       
            >
                &lt;
            </button>
            }
            {pageNumber.map((num) => (
            <li key={num} onClick={() => setCurrentPage(num)}>
                <button
                    style={ currentPage === num ? {backgroundColor : 'orange' } : null}
                >
                    {num}
                </button>
            </li>
            ))}
            { Array.isArray(boards) &&
            <button 
                onClick={() => setCurrentPage(currentPage + 1)} 
                disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}
            >
                &gt;
            </button>
            }
        </div> */}

    </div>
    )
}

export default BulletinBoard;