import BoardStyle from './Bullentin.module.css';
import EditorA from './editor/EditorA';
function BullentinWrite(){
    return (
        <div className={BoardStyle.bullentin_main}>
            <div className={BoardStyle.bullentin_category}>
                <span>
                    게시판 선택
                </span>
                <select></select>
            </div>
            <div style={{width: '96%'}} className={BoardStyle.write_title}>
                <span>제목</span>
                <input type="text" style={{width: '70%'}}/>
            </div>
            <EditorA/>
            <div className={BoardStyle.permit}>
                <span>댓글허용</span>
                <input type="radio" name="write-comment" value="ok"/>예
                <input type="radio" name="write-comment" value="no"/>아니오
            </div>
            <div className={BoardStyle.registration}>
                <button>수정</button>
                <button>삭제</button>
                <button>등록</button>
                <button>취소</button>
            </div>
        </div>
    )
}

export default BullentinWrite;