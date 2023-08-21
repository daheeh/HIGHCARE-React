import './Bullentin.css'

function ResourceAdd(){
    return (
        <div className="content-bullentin-main">
        <h1 className="content-title">자원추가</h1>
        <div className="add-content">
            <div>
                <span>자원그룹</span>
                <select name="" id="">
                    <option value="">회의실</option>
                </select>
            </div>
            <div>
                <span>지역</span>
                <select name="" id="">
                    <option value="">서울</option>
                </select>
            </div>

            <div>
                <span>자원이름</span>
                <input type="text"/>
            </div>

            <div>
                <span>위치</span>
                <input type="text"/>
            </div>
            <div>
                <span>사용시간</span>
                <input type="text"/>
                ~
                <input type="text"/>
            </div>
            <div>
                <span>대표이미지</span>
                <input type="file"/>
            </div>
            <span>이용안내</span>
            <div id="summernote"></div>
            <div className="button-list">
            <button>등록</button>
            <button>취소</button>
            </div>
        </div>
    </div>
    )
}

export default ResourceAdd;