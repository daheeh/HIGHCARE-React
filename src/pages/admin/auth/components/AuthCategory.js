import { Fragment, useEffect, useState } from "react";
import AuthSytle from "../AuthManager.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectMenuGroupList } from "../../../../apis/AdminAPI";
import TreeView from "../../../pm/treeview"
import {
    GET_TREEVIEW_ONE
} from '../../../..//modules/TreeModule';

export function AuthCategory() {

    // 1. 메뉴별 권한분류 
    const dispatch = useDispatch();

    const menuGroupList = useSelector(state => state.admins.menuGroupList);

    const [menuManagers, setMenuManagers] = useState('');

    useEffect(() => {
        (async => {
            dispatch(selectMenuGroupList());

            return menuGroupList.menulist;
        })();
    }, [menuManagers]);


    const menuGroupClick = (code) => {

        setMenuManagers([...menuGroupList].filter(menu => menu.groupCode == code)[0]);
    }



    return (
        <section>

            <div className={AuthSytle.AuthCategoryBox}>
                <div>권한 분류</div>
                <div className={AuthSytle.CategoryList}>
                    {Array.isArray(menuGroupList) && menuGroupList.length > 0 && menuGroupList.map(
                        (menugroup) => (
                            <div
                                className={AuthSytle.Category}
                                key={menugroup.groupCode}
                                onClick={() => menuGroupClick(menugroup.groupCode)}
                            >
                                {menugroup.groupName} 관리자
                            </div>
                        )
                    )}
                </div>
            </div>
            <div>

                <AuthUser menuManagers={menuManagers} />

                <AuthSetting />
            </div>
        </section>
    );
}


function Modal({ isOpen, onClose }) {

    const [empInfo, setEmpInfo] = useState([]);
    const dispatch = useDispatch();

    //2. 관리자 목록 

    if (!isOpen) return null;


    const selectCompleteClick = () => {
        onClose();
        console.log('empinfo : ', empInfo);
        dispatch({type: GET_TREEVIEW_ONE, payload: empInfo});

    }

    return (
        <div className={AuthSytle.ModalOverlay}>
            <div className={AuthSytle.Modal}>
                <span className={AuthSytle.CloseButton} onClick={onClose}>
                    &times;
                </span>
                <h2></h2>
                <TreeView setEmpInfo={setEmpInfo} />
                <button className={AuthSytle.modalCompleteBtn} onClick={selectCompleteClick}>선택완료</button>
            </div>
        </div>
    );
}
``
function AuthUser({ menuManagers }) {

    const accountList = useSelector(state => state.members.data);
    const memberByTreeview = useSelector(state => state.treeview);

    console.log('memberByTreeview ' , memberByTreeview);

    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <div className={AuthSytle.AuthUserBox}>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <div>{menuManagers.groupName} 관리자</div>
                <button onClick={openModal}>추가</button>
                <button>삭제</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>이메일</th>
                        <th>부서</th>
                        <th>직급</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody style={{ fontSize: 16 }}>
                    {Array.isArray(menuManagers.menulist) &&
                        menuManagers.menulist.map((manager) => (
                            <tr key={manager.menuCode}>
                                <td><input type="checkbox" /></td>
                                {Array.isArray(accountList) &&
                                    accountList.map((account) => {
                                        if (account?.memberId === manager.id) {
                                            return (
                                                <Fragment key={account.memberId}>
                                                    <td>{account.employee.name}</td>
                                                    <td>{account.memberId}</td>
                                                    <td>{account.employee.email}</td>
                                                    <td>{account.employee.deptCode.deptName}</td>
                                                    <td>{account.employee.jobCode.jobName}</td>
                                                </Fragment>
                                            );
                                        }
                                        return null; // 일치하지 않는 경우 null 반환
                                    })}
                                <td>{manager.registDate && manager.registDate.toString()}</td>
                            </tr>
                        ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                </tbody>
            </table>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}


function AuthSetting() {

    // 3. 관리자별 접근권한 각 매니저는 허용된 엔드포인트의 api 요청만 가능하다. 

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
            <div style={{ textAlign: 'center' }}><button>저장</button><button>취소</button></div>

        </div>
    )

}


