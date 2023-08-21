import './Bullentin.css';

function Thread(){
    return (
        <div className="content-main">
            <h3> 안녕하세요</h3>
            <div className="content-info">
                <span>허유일</span>
                <span>2023-08-12</span>
                조회수<span>1050</span>
            </div>
            <div className="content-main-main">
                내용
            </div>
        <div className="comment-content">
                <div className="comment-count">
                    댓글 1개
                </div>
            <div className="comment">
                <span>허유일</span>
                <span>2023-08-12</span>
                <span>댓글</span>
                <div className="comment-detail">
                    잘보고 갑니다
                    <div style={{display: 'none'}}>
                        <div className="comment-comment">
                            잘보고 갑니다
                        </div>
                        <div className="reply-add" style={{display: 'flex'}}>
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
    )
}

export default Thread;