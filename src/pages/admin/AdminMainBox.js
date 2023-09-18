import { useDispatch, useSelector } from "react-redux";
import MemberListCss from "./member/MemberList.module.css"
import { allMemberListApi } from "../../apis/MemberAPICalls";
import { useEffect, useState } from "react";
import { accountStatus, roleCode } from "./member/MemberList";


export function AdminMain1() {

    const dispatch = useDispatch();
    let memberList = useSelector(state => state.members.data);
    let [membercount, setMemberCount] = useState(0);

    useEffect(() => {

        if (Array.isArray(memberList)) {

            let preCount = 0;
            memberList.map((member) => {
                member.roleList.some(role => {
                    if (roleCode(role.authCode).includes('임시회원')) {
                        preCount++;
                    }
                });
            });
            // 데이터 처리 완료 후 상태 업데이트
            setMemberCount(preCount);
        }

    }, [memberList]);


    return (
        <>
            <div>
                <div> 현재 : {membercount}명 </div>
            </div>
            {Array.isArray(memberList) &&
                memberList
                    .filter((member) =>
                        member.roleList.some((role) =>
                            roleCode(role.authCode ? role.authCode : '').includes('임시회원')
                        )
                    )
                    .map((member) => {
                        return (
                            <div style={{ maxWidth: 1000 }}
                                key={member.empNo} className={MemberListCss.category}>
                                <div>{member.empNo}</div>
                                <div>{member.employee.name}</div>
                                <div>{member.employee.jobCode.jobName}</div>
                                <div>{member.employee.deptCode.deptName}</div>
                                <div>{member.memberId}</div>
                                <div>{member.employee.email}</div>
                            </div>
                        )
                    })}
        </>
    )
}

export function AdminMain2() {

    const dispatch = useDispatch();
    let mem = useSelector(state => state.members);
    const memberList = mem.data;
    let [membercount, setMemberCount] = useState(0);

    useEffect(() => {

        if (Array.isArray(memberList)) {

            let preCount = 0;
            memberList.map((member) => {
                if (member.accessManager?.isInActive == 'Y') {
                    preCount++;
                }
            });
            // 데이터 처리 완료 후 상태 업데이트
            setMemberCount(preCount);
        }

    }, [memberList]);


    return (
        <>
            <div>
                <div> 현재 : {membercount}명 </div>
            </div>
            {Array.isArray(memberList) &&
                memberList
                    .filter((member) =>
                        member.accessManager?.isInActive == 'Y'
                    )
                    .map((member) => {
                        return (
                            <div style={{ maxWidth: 1000 }}
                                key={member.empNo} className={MemberListCss.category}>
                                <div>{member.empNo}</div>
                                <div>{member.employee.name}</div>
                                <div>{member.employee.jobCode.jobName}</div>
                                <div>{member.employee.deptCode.deptName}</div>
                                <div>{member.memberId}</div>
                                <div>{member.employee.email}</div>
                            </div>
                        )
                    })}
        </>
    )

}