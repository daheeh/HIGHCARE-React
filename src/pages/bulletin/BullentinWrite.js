import './Bullentin.css';

function BullentinWrite(){
    return (
        <div className="bullentin-main">
            <div className="bullentin-category">
                <span>
                    게시판 선택
                </span>
                <select></select>
            </div>
            <div style={{width: '96%'}} className="write-title">
                <span>제목</span>
                <input type="text" style={{width: '70%'}}/>
            </div>
            <div id="summernote"></div>
            <div className="permit">
                <span>댓글허용</span>
                <input type="radio" name="write-comment" value="ok"/>예
                <input type="radio" name="write-comment" value="no"/>아니오
            </div>
            <div className="registration">
                <button>수정</button>
                <button>삭제</button>
                <button>등록</button>
                <button>취소</button>
            </div>
        </div>
    )
}

export default BullentinWrite;