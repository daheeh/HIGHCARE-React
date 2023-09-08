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
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const boards = useSelector(state => state.boardtest);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);
    const categoryCode = useParams().categoryCode;
     const boardList = boards.data;
    const pageInfo = boards.pageInfo;
    const [content, setContent] = useState('');

    const pageNumber = [];
    if(pageInfo) {
        for(let i = 1; i<= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () =>{
            setStart((currentPage - 1) * 5);
            dispatch(callBulletinAPI({
                categoryCode: categoryCode,
                currentPage: currentPage,
                content: content,
                empNo: empNo
            }));
        }
        ,[categoryCode,currentPage,content]
        );
    const title = categoryCode==1?'전체게시판':(categoryCode==2?'인기게시판':(categoryCode==3?'자유게시판':(categoryCode==4?'공지사항':'나의 글보기')));
    
    const onClickTableTr = (bulletinCode) => {
        navigate(`/bulletin/thread/${bulletinCode}`, { replace: false });
    }

    const handleOnKeyPress = e => {
        if(e.key === 'Enter'){
            setContent(e.target.value);
        }
    }

    const buttonOnClick = () =>{
        setContent(document.getElementById('inputValue').value);
    }
   return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>{title}</h1>
        <div className={BoardStyle.wrap}>
            <div className={BoardStyle.search}>
                <input type="text" id='inputValue' className={BoardStyle.searchTerm} placeholder="제목 입력하세요."onKeyPress={handleOnKeyPress}  />
                <button type="submit" className={BoardStyle.searchButton} onClick={buttonOnClick}>
                    <i></i>
                </button>
            </div>
        </div>
        <table className={BoardStyle.tbodye}>
        <thead>
                <tr>
                    <th>No</th>
                    <th className={BoardStyle.title_head}>제목</th>
                    <th>이름</th>
                    <th>조회수</th>
                    <th className={BoardStyle.date_head}>작성일</th>
                </tr>
            </thead>
            <tbody>
    
                {Array.isArray(boardList)&& boardList.map(
                    (board) => (
                <tr className={BoardStyle.trtr}
                        key={board.bulletinCode}
                        onClick={ () => onClickTableTr(board.bulletinCode) }

                >
                    <td className={BoardStyle.no}>{board.bulletinCode}</td>
                    <td className={BoardStyle.title}>{board.title}</td>
                    <td className={BoardStyle.name}>{board.bulletinEmployee.empName}</td>
                    <td className={BoardStyle.view}>{board.views}</td>
                  
                    <td className={BoardStyle.date}>{board.modifiedDate}</td>
                </tr>)
                )}
            </tbody>
        </table>
            {/* <div className={BoardStyle.write_bulletin}>
            글쓰기
        </div> */}
        <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }} className={BoardStyle.pagingButton}>
            { Array.isArray(boardList) &&
            <button 
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
                
                className={BoardStyle.pagingButtona}
            >
                &lt;
            </button>
            }
            {pageNumber.map((num) => (
            <li key={num} onClick={() => setCurrentPage(num)} className={BoardStyle.pagingButton}>
                <button
                    style={ currentPage === num ? {backgroundColor : '#10479A' } : {backgroundColor : '#f4f4f4',color : 'black' } }
                >
                    {num}
                </button>
            </li>
            ))}
            { Array.isArray(boardList) && pageInfo != null &&
            <button 
                onClick={() => setCurrentPage(currentPage + 1)} 
                disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}
                className={BoardStyle.pagingButtona}


            >
                &gt;
            </button>
            }
        </div>

    </div>
    )
}

export default BulletinBoard;