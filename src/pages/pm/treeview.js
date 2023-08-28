import React, { useEffect, useState } from "react";
import { Tree, getBackendOptions, MultiBackend } from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import './pm-member.css'
import { GET_MEMBER, GET_TREEVIEW_MEMBER } from "../../modules/TreeModule";
import { useDispatch } from "react-redux";
import memberSlice, { memberset, selectAction } from "../../modules/memberSlice";

const initialData = [  
  {
    "id": 1,
    "text": "경영 지원 본부",
    "tel": null,
    "parent": 0,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 2,
    "text": "재경 본부",
    "tel": null,
    "parent": 0,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 3,
    "text": "보험 본부",
    "tel": null,
    "parent": 0,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 4,
    "text": "정보 시스템 본부",
    "tel": null,
    "parent": 0,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 5,
    "text": "기획팀",
    "tel": null,
    "parent": 1,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 6,
    "text": "인사총무팀",
    "tel": null,
    "parent": 1,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 7,
    "text": "보험 1팀",
    "tel": null,
    "parent": 3,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 8,
    "text": "보험 2팀",
    "tel": null,
    "parent": 3,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 9,
    "text": "보험 영업팀",
    "tel": null,
    "parent": 3,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 10,
    "text": "재무 회계팀",
    "tel": null,
    "parent": 2,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 11,
    "text": "시스템 운영팀",
    "tel": null,
    "parent": 4,
    "droppable": true,
    "name": null,
    "jobName": null
  },
  {
    "id": 777,
    "text": "조혜란 팀장",
    "tel": null,
    "parent": 4,
    "droppable": false,
    "name": "조혜란",
    "jobName": "팀장"
  },
  {
    "id": 10001,
    "text": "봄 팀장",
    "tel": null,
    "parent": 5,
    "droppable": false,
    "name": "봄",
    "jobName": "팀장"
  },
  {
    "id": 10002,
    "text": "여름 대리",
    "tel": null,
    "parent": 6,
    "droppable": false,
    "name": "여름",
    "jobName": "대리"
  },
  {
    "id": 10003,
    "text": "가을 부장",
    "tel": null,
    "parent": 7,
    "droppable": false,
    "name": "가을",
    "jobName": "부장"
  },
  {
    "id": 10004,
    "text": "겨울 대리",
    "tel": null,
    "parent": 8,
    "droppable": false,
    "name": "겨울",
    "jobName": "대리"
  },
  {
    "id": 10005,
    "text": "전아림 사원",
    "tel": null,
    "parent": 9,
    "droppable": false,
    "name": "전아림",
    "jobName": "사원"
  },
  {
    "id": 10006,
    "text": "황다혜 차장",
    "tel": null,
    "parent": 10,
    "droppable": false,
    "name": "황다혜",
    "jobName": "차장"
  },
  {
    "id": 10007,
    "text": "김나경 사원",
    "tel": null,
    "parent": 11,
    "droppable": false,
    "name": "김나경",
    "jobName": "사원"
  },
  {
    "id": 10008,
    "text": "홍다희 대리",
    "tel": null,
    "parent": 5,
    "droppable": false,
    "name": "홍다희",
    "jobName": "대리"
  },
  {
    "id": 10009,
    "text": "하이미 대리",
    "tel": null,
    "parent": 9,
    "droppable": false,
    "name": "하이미",
    "jobName": "대리"
  }
  
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
    setEmpNo(node.empNo);
    setJobName(node.jobName);
    setDeptName(node.deptName);
    

    const info = {
      empNo: node.empNo,
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
