import './Bullentin.css';
function Bulletin(){
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
                    <th>부서</th>
                    <th>이름</th>
                    <th>조회수</th>
                    <th>댓글수</th>
                    <th className="date-head">작성일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="no">1</td>
                    <td className="title">제목 1</td>
                    <td className="department">부서 </td>
                    <td className="name">이름 </td>
                    <td className="view">100</td>
                    <td className="comment-cnt">5</td>
                    <td className="date">2023-08-05</td>
                </tr>
            </tbody>
        </table>
        <div className="write-bulletin">
            글쓰기
        </div>
    </div>
    )
}

export default Bulletin;