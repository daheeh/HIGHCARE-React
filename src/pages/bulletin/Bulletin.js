import './Bullentin.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import {
    callBulletinAPI
} from '../../apis/BulletinAPICall'
function Bulletin(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const boards = useSelector(state => state.boardReducer);

    console.log('boards', boards);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    useEffect(
        () =>{
            setStart((currentPage - 1) * 5);
            // dispatch(callBulletinAPI({
            //     categoryCode: params.categoryCode,
            //     currentPage: currentPage
            // }));
            dispatch(callBulletinAPI());
        }
        ,[currentPage]
        );

    return (
        <div className="content-bullentin-main">
        <h1 className="content-title">인기 게시판</h1>
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="제목 입력하세요."/>
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
        <div className="main-catagory">
            <span>최근글</span>
            <span>인기글</span>
        </div>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th className="title-head">제목</th>
                    <th>이름</th>
                    <th>조회수</th>
                    <th>댓글수</th>
                    <th className="date-head">작성일</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(boards)&& boards.map(
                    (board) => (
                <tr>
                    <td className="no">{board.bulletinCode}</td>
                    <td className="title">{board.title}</td>
                    <td className="name">1</td>
                    <td className="view">{board.views}</td>
                    <td className="comment-cnt">1</td>
                    <td className="date">{board.modifiedDate}</td>
                </tr>)
                )}
            </tbody>
        </table>
        <div className="write-bulletin">
            글쓰기
        </div>
    </div>
    )
}

export default Bulletin;