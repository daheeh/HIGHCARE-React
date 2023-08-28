import React, { useEffect, useState } from "react";
import { Tree, getBackendOptions, MultiBackend } from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import './pm-member.css'
import { GET_MEMBER, GET_TREEVIEW_MEMBER } from "../../modules/TreeModule";
import { useDispatch } from "react-redux";
import memberSlice, { memberset, selectAction } from "../../modules/memberSlice";

const initialData = [  
      // {
//   "id": 0,
//   "parent": null,
//   "droppable": true,
//   "text": "하이케어",
//   "jobName": "대리",
//   "name": "0"
// },
// {
//   "id": 1,
//   "parent": 0,
//   "droppable": true,
//   "text": "경영 지원 본부",
//   "jobName": null,
//   "name": null
// },
// {
//   "id": 2,
//   "parent": 0,
//   "droppable": true,
//   "text": "재경 본부",
//   "jobName": null,
//   "name": null
// },
// {
//   "id": 3,
//   "parent": 0,
//   "droppable": true,
//   "text": "보험 본부",
//   "jobName": null,
//   "name": null
// },
// {
//   "id": 4,
//   "parent": 0,
//   "droppable": true,
//   "text": "정보 시스템 본부",
//   "jobName": "팀장",
//   "name": "조혜란"
// },
// {
//   "id": 5,
//   "parent": 1,
//   "droppable": true,
//   "text": "기획팀",
//   "jobName": "팀장",
//   "name": "봄"
// },
// {
//   "id": 6,
//   "parent": 1,
//   "droppable": true,
//   "text": "인사총무팀",
//   "jobName": "대리",
//   "name": "여름"
// },
// {
//   "id": 7,
//   "parent": 3,
//   "droppable": true,
//   "text": "보험 1팀",
//   "jobName": "부장",
//   "name": "가을"
// },
// {
//   "id": 8,
//   "parent": 3,
//   "droppable": true,
//   "text": "보험 2팀",
//   "jobName": "대리",
//   "name": "겨울"
// },
// {
//   "id": 9,
//   "parent": 3,
//   "droppable": true,
//   "text": "보험 영업팀",
//   "jobName": "사원",
//   "name": "전아림"
// },
// {
//   "id": 10,
//   "parent": 2,
//   "droppable": true,
//   "text": "재무 회계팀",
//   "jobName": "사원",
//   "name": "테스트"
// },
// {
//   "id": 7,
//   "parent": 4,
//   "droppable": true,
//   "text": "김나경",
//   "jobName": "사원",
//   "name": "김나경"
// }

  {
      "id": 0,
      "parent": null,
      "droppable": true,
      "text": "하이케어"
    },
    {
      "id": 1,
      "parent": 0,
      "droppable": true,
      "text": "경영 지원 본부"
    },
    {
      "id": 2,
      "parent": 0,
      "droppable": true,
      "text": "재경 본부"
    },
    {
      "id": 3,
      "parent": 0,
      "droppable": true,
      "text": "보험 본부"
    },
    {
      "id": 4,
      "parent": 0,
      "droppable": true,
      "text": "정보 시스템 본부"
    },
    {
      "id": 5,
      "parent": 1,
      "droppable": true,
      "text": "기획팀"
    },
    {
      "id": 6,
      "parent": 1,
      "droppable": true,
      "text": "인사총무팀"
    },
    {
      "id": 7,
      "parent": 3,
      "droppable": true,
      "text": "보험 1팀"
    },
    {
      "id": 8,
      "parent": 3,
      "droppable": true,
      "text": "보험 2팀"
    },
    {
      "id": 9,
      "parent": 3,
      "droppable": true,
      "text": "보험 영업팀"
    },
    {
      "id": 10,
      "parent": 2,
      "droppable": true,
      "text": "재무 회계팀"
    },
    {
      "id": 11,
      "parent": 4,
      "droppable": true,
      "text": "시스템 운영팀"
    },
    
    {
      "id": 12,
      "parent": 11,
      "droppable": true,
      "text": "김나경부장",
      "deptName": "시스템운영팀",
      "jobName": "부장",
      "name": "김나경",
      "empNo": 555555
    },
    {
      "id": 14,
      "parent": 5,
      "droppable": true,
      "text": "봄 팀장"
    },
    {
      "id": 15,
      "parent": 5,
      "droppable": true,
      "text": "홍다희 대리"
    },
    {
      "id": 16,
      "parent": 6,
      "droppable": true,
      "text": "여름 대리"
    },
    {
      "id": 17,
      "parent": 6,
      "droppable": true,
      "text": "허유일 사원"
    },
    {
      "id": 18,
      "parent": 10,
      "droppable": true,
      "text": "황다혜 차장"
    },
    {
      "id": 19,
      "parent": 10,
      "droppable": true,
      "text": "테스트 사원"
    },
    {
      "id": 20,
      "parent": 7,
      "droppable": true,
      "text": "유승제 사장"
    },
    {
      "id": 21,
      "parent": 7,
      "droppable": true,
      "text": "가을 부장"
    },
    {
      "id": 22,
      "parent": 8,
      "droppable": true,
      "text": "사계절 사원"
    },
    {
      "id": 23,
      "parent": 8,
      "droppable": true,
      "text": "겨울 대리"
    },
    {
      "id": 24,
      "parent": 9,
      "droppable": true,
      "text": "하이미 대리"
    },
    {
      "id": 25,
      "parent": 9,
      "droppable": true,
      "text": "전아림 사원"
    },    {
      "id": 26,
      "parent": 11,
      "droppable": true,
      "text": "봄 팀장",
      "deptName": "시스템운영팀",
      "jobName": "팀장",
      "name": "봄",
      "empNo": 1111
    },
    {
      "id": 27,
      "parent": 11,
      "droppable": true,
      "text": "가을 대리",
      "deptName": "시스템운영팀",
      "jobName": "대리",
      "name": "가을",
      "empNo": 3333
    },
    {
      "id": 28,
      "parent": 11,
      "droppable": true,
      "text": "겨울 사원",
      "deptName": "시스템운영팀",
      "jobName": "사원",
      "name": "겨울",
      "empNo": 4444
    },
  
]
;

function TreeView() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [empNo, setEmpNo] = useState(0);
  const [jobName, setJobName] = useState("");
  const [deptName, setDeptName] = useState("");
  
  const [info, setInfo] = useState(0);
  const dispatch = useDispatch();


  const handleNodeClick = (node) => {
    setSelectedNode(node);
    setEmpNo(node.id);
    setJobName(node.jobName);
    setDeptName(node.deptName);
    

    const info = {
      empNo: node.id,
      deptName: node.deptName,
      jobName: node.jobName,
      name: node.name,
    };
    setInfo(info);
  };

  const employeeSelect = () => {
    dispatch({ type: GET_MEMBER, payload: info});

  }


  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <Tree
        tree={initialData}
        rootId={0}
        render={(node, { depth, isOpen, onToggle }) => (
          <div
            className={`customNode ${node.droppable ? "parent" : "subNode"}`}
            style={{
              marginLeft: `${depth * 20}px`,
              width: node.droppable ? "200px" : "140px",
              cursor: "pointer",
            }}
            onClick={() => handleNodeClick(node)} 
          >
            {node.droppable && (
              <span onClick={onToggle}>{isOpen ? "[▼]" : "[▶]"}</span>
            )}
            {node.text}
          </div>
        )}
      />
      
      {selectedNode && (
        <div className="selectedNodeInfo">
          <h2>선택한 노드 정보</h2>
          <pre>{JSON.stringify(selectedNode, null, 2)}</pre>
          <button onClick={employeeSelect}> 사원 선택</button>
        </div>
      )}
    </DndProvider>
  );
}

export default TreeView;
