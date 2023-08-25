import React, { useEffect, useState } from "react";
import { Tree, getBackendOptions, MultiBackend } from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import './pm-member.css'
import { GET_MEMBER, GET_TREEVIEW_MEMBER } from "../../modules/TreeModule";
import { useDispatch } from "react-redux";
import memberSlice, { memberset, selectAction } from "../../modules/memberSlice";

const initialData = [
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
      "text": "김나경사원",
      "deptNmae": "시스템운영팀",
      "jobNmae": "사원",
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
    },
  
]
;

function TreeView() {
  const [selectedNode, setSelectedNode] = useState(null);

  const [empNo, setEmpNo] = useState(0);

  const dispatch = useDispatch();

  useEffect(()=> {
    console.log("empNo : ", empNo);
  }, [selectedNode])


  const handleNodeClick = (node) => {
    // await console.log("node : ", node);
    setSelectedNode(node);
    setEmpNo(node.empNo);
    // await setInfo({
      // empNo: node.empNo,
      // deptName: node.deptName,
      // jobName: node.jobName,
      // name: node.name
      // empNo: node.id,
    // })
    // dispatch 
  };

  const employeeSelect = () => {
    dispatch({ type: GET_MEMBER, payload: empNo});  // treeview getmember 리듀서

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
            onClick={() => handleNodeClick(node)} // 클릭 이벤트 핸들러 추가
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
