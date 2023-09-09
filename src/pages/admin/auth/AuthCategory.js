import { Fragment, useEffect, useState } from "react";
import AuthSytle from "./AuthManager.module.css"
import { useDispatch, useSelector } from "react-redux";
import { insertMenuManagers, selectMenuGroupList } from "../../../apis/AdminAPI";
import TreeView from "../../pm/treeview"
import { callTreeviewOneAPI } from "../../../apis/PmAPICalls";
import { memberByTreeview, resetMemberAction } from "../../../modules/memberSlice";
import { allMemberListApi } from "../../../apis/MemberAPICalls";

// 권한분류별 카테고리 섹션 
export function AuthCategory() {

    const dispatch = useDispatch();
    // 메뉴 메뉴그룹 리스트 불러오기 
    const menuGroupList = useSelector(state => state.admins.menuGroupList);

    console.log("menuGroup : ", menuGroupList);
    // 권한분류별 선택한 메뉴그룹을 담을 상태값  
    const [menuManagers, setMenuManagers] = useState('');

    useEffect(() => {

        (async => {
            // 새로고침, 카테고리 이동시 트리뷰에 선택하여 추가한 멤버 리셋 
            dispatch(resetMemberAction());
            // 메뉴그룹 리스트 api 요청 
            dispatch(selectMenuGroupList());
            // 전체회원리스트 api 요청 
            dispatch(allMemberListApi());

            return menuGroupList.menulist;
        })();
        // 권한분류(메뉴그룹별) 카테고리 이동시 리렌더링 
    }, [menuManagers]);

    // 메뉴그룹별 클릭시 선택한 메뉴코드 전달 
    const menuGroupClick = (code) => {
        // 선택한 메뉴그룹 코드에 따라 메뉴리스트에서 정보 추출하여 담기  
        setMenuManagers([...menuGroupList].filter(menu => menu.groupCode == code)[0]);
    }

    return (
        <section>
            <div className={AuthSytle.AuthCategoryBox}>
                <div>권한 분류</div>
                <div className={AuthSytle.CategoryList}>

                    {/* 그룹리스트 순회하며 권한분류 관리자 카테고리 리스트 출력하기 */}
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
                {/* 선택한 메뉴그룹 정보 매니저 섹션으로 전달 */}
                <AuthUser menuManagers={menuManagers} />
            </div>
        </section>
    );
}

// 트리뷰 모달창 
function Modal({ isOpen, onClose }) {

    const dispatch = useDispatch();

    // 트리뷰에서 불러온 사원정보를 담을 상태값 
    const [empInfo, setEmpInfo] = useState([]);
    // 전체회원 정보 불러오기 
    const memberList = useSelector(state => state.members.data);

    if (!isOpen) return null;

    // 트리뷰 사원선택완료 버튼 클릭 이벤트 
    const selectCompleteClick = () => {
        onClose();
        console.log('empinfo : ', empInfo);

        console.log('memberList : ', memberList);
        memberList.forEach(member => {
            if (empInfo.empNo == member.empNo) {
                // 선택한 사원번호를 통해 회원정보에서 정보를 추출하여 트리뷰멤버 리듀서에 저장한다. 
                dispatch(memberByTreeview(member));
            }
        });
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

// 매니져 섹션 
function AuthUser({ menuManagers }) {

    const dispatch = useDispatch();

    // 회원 계정정보 불러오기 
    const accountList = useSelector(state => state.members.data);
    // 트리뷰에서 선택한 회원정보 리듀서에서 불러오기 
    const treeviewMember = useSelector(state => state.members.treeviewMember);

    // 트리뷰에서 불러온 회원정보를 담을 상태값 
    const [memberByTreeview, setMemberByTreeview] = useState('');


    useEffect(() => {
        // 트리뷰에서 선택했던 멤버 초기화하기 
        setMemberByTreeview('');
        (async => {
            // 트리뷰 api 요청 
            dispatch(callTreeviewOneAPI());
        })();
    }, []);


    useEffect(() => {
        // 트리뷰 선택멤버가 변경될 때마다 추가 매니저 정보 변경하기  
        setMemberByTreeview(treeviewMember);
    }, [dispatch, treeviewMember])


    console.log('memberByTreeview ', memberByTreeview);

    // 트리뷰 모달창 상태값 
    const [isModalOpen, setIsModalOpen] = useState(false);


    // 선택한 매니저들 아이디 배열 상태 관리 
    const [managerIds, setManagerIds] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        // 트리뷰 재선택시 마다 기존 매니저아이디 배열과 isChecked 상태를 초기화한다. 
        setManagerIds([]);
    };

    // 매니저 체크박스 선택 유무에 따라 매니저들의 아이디를 담거나 뺀다. 
    const managerCheckBoxClick = (e, managerId) => {
        // isChecked 상태값을 바로 사용
        const isChecked = e.target.checked;

        if (isChecked) {
            setManagerIds((prevIds) => [...prevIds, managerId]);
        } else {
            setManagerIds((prevIds) => prevIds.filter((id) => id !== managerId));
        }
    }

    return (

        <>
            <div className={AuthSytle.AuthUserBox}>
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <div>{menuManagers.groupName ? menuManagers.groupName : `공통`} 관리자</div>
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
                                <tr key={manager.menuCode} >
                                    <td><input type="checkbox"
                                        checked={managerIds.some(id => id == manager.id)}
                                        onClick={(e) => managerCheckBoxClick(e, manager.id)} /></td>
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
                                            return ''; // 일치하지 않는 경우 ''반환
                                        })}
                                    <td>{manager.registDate && manager.registDate.toString()}</td>
                                </tr>
                            ))}

                        {memberByTreeview?.empNo > 0 && (
                            <tr >
                                <td><input type="checkbox"
                                    checked={managerIds.some(id => id == memberByTreeview.memberId)}
                                    onClick={(e) => managerCheckBoxClick(e, memberByTreeview.memberId)} /></td>
                                <td>{memberByTreeview.employee?.name}</td>
                                <td>{memberByTreeview.memberId}</td>
                                <td>{memberByTreeview.employee?.email}</td>
                                <td>{memberByTreeview.employee?.deptCode?.deptName}</td>
                                <td>{memberByTreeview.employee?.jobCode?.jobName}</td>
                                <td>{new Date().toISOString().slice(0, 10)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            {/* 메뉴권한 설정 섹션에 매니저 아이디 배열을 넘긴다 */}
            <AuthSetting managerIds={managerIds} />
        </>
    );
}

// 메뉴권한 설정 섹션 : 매니저는 허용된 starUrl의 특정 api 요청만 가능하다. 
function AuthSetting({ managerIds }) {
    const dispatch = useDispatch();


    console.log("넘겨받은 매니저 아이디 확인 managerIds : ", managerIds);

    // 메뉴권한 목록들 
    const menuGroupList = useSelector(state => state.admins.menuGroupList);

    // 설정된 메뉴코드들을 배열로 관리할 상태값 
    const [menuCodes, setMenuCodes] = useState([]);

    // 메뉴리스트에서 전체 메뉴코드만 추출하여 담음(공통 체크박스 선택시 사용됨)
    const allGroupCodes = menuGroupList.map((menugroup) => menugroup.groupCode);

    let isChecked = ''; 
    // 메뉴코드 체크박스 선택유무에 따라 선택된 메뉴코드들을 배열에 담는다. 
    function menuCheckBoxClick(e, groupCode) {
        isChecked = e.target.checked;

        // "M1(공통)" 그룹 체크박스가 선택되면 나머지 그룹의 체크 상태를 변경
        if (groupCode === 'M1') {
            if (isChecked) {
                setMenuCodes(allGroupCodes); // 모든 그룹을 선택
            } else {
                setMenuCodes([]); // 모든 그룹을 해제
            }
        }
        else { // 나머지 그룹 체크박스 선택시 

            if (isChecked) {
                setMenuCodes((prevIds) => [...prevIds, groupCode]);
            }
            else {
                setMenuCodes((prevIds) => prevIds.filter((id) => id !== groupCode));
            }
        }
    }

    const [sendData, setSendData] = useState({
        "groupCode": [],
        "id": [],
    })

    useEffect(() => {
        setSendData({
            "groupCode": menuCodes,
            "id": managerIds
        })
    }, [managerIds, menuCodes])
    console.log("sendData : ", sendData);


    // 선택한 매니저 정보와 선택한 메뉴그룹들 api insert 요청 
    const saveManagerClick = () => {

        dispatch(insertMenuManagers(sendData));
    }


    return (
        <div className={AuthSytle.AuthSettingBox}>
            {managerIds.length > 0 && (
                <>
                    <div>
                        <div>권한 설정</div>
                        <div>사이트에서 사용하는 각각의 메뉴를 설정/관리합니다.</div>
                    </div>
                    <div>
                    </div>
                    <div className={AuthSytle.settingList}>

                        {/* 등록된 메뉴그룹 리스트를 출력한다. */}
                        {Array.isArray(menuGroupList) && menuGroupList.length > 0 && menuGroupList.map(
                            (menugroup) => (
                                <div key={menugroup.groupCode} className={AuthSytle.Category}>
                                    <label htmlFor={menugroup.groupCode}>
                                        <input
                                            type="checkbox"
                                            className={AuthSytle.Category}
                                            id={menugroup.groupCode}
                                            checked={menuCodes.includes(menugroup.groupCode)}
                                            onChange={(e) => menuCheckBoxClick(e, menugroup.groupCode)}
                                        />
                                        {menugroup.groupName}
                                    </label>
                                </div>
                            )
                        )}

                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button onClick={saveManagerClick}>저장</button>
                        <button>취소</button></div>
                </>
            )}

        </div>
    )

}


