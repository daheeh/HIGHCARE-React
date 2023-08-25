import BoardStyle from './Bullentin.module.css';
function Thread(){
    return (
        <div className={BoardStyle.content_main}>
            <h3> 안녕하세요</h3>
            <div className={BoardStyle.content_info}>
                <span>허유일</span>
                <span>2023-08-12</span>
                조회수<span>1050</span>
            </div>
            <div className={BoardStyle.content_main_main}>
                내용
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
    )
}

export default Thread;