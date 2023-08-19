import AuthSytle from "../AuthManager.module.css"

function AuthSetting() {

    return (
        <div className={AuthSytle.AuthSettingBox}>

            <div>
                <div>권한 설정</div>
                <input type="checkbox" value='all' id="menumng"></input>
                <label htmlFor="menumng">메뉴관리</label>
                <div>사이트에서 사용하는 각각의 메뉴를 설정/관리합니다.</div>
            </div>
            <div className={AuthSytle.settingList}>
                <div>
                    <input type="checkbox" id='home'></input><label htmlFor="home">홈</label>
                </div>
                <div>
                    <input type="checkbox" id='approval'></input><label htmlFor="approval">전자결재</label>
                </div>
                <div>
                    <input type="checkbox" id='pm'></input><label htmlFor="pm">인사관리</label>
                </div>
                <div>
                    <input type="checkbox" id='admin'></input><label htmlFor="admin">시스템운영</label>
                </div>
                <div>
                    <input type="checkbox" id='reservation'></input><label htmlFor="reservation">시설예약</label>
                </div>
                <div>
                    <input type="checkbox" id='note'></input><label htmlFor="note">채팅/쪽지</label>
                </div>
                <div>
                    <input type="checkbox" id='etc'></input><label htmlFor="etc">**메뉴코드 리스트로 불러와야함</label>
                </div>
            </div>
        </div>
    )

}

export default AuthSetting;