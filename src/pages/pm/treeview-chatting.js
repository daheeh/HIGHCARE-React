import React, { useEffect, useState } from "react";
import { Tree, getBackendOptions, MultiBackend } from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import './pm-member.css'
import { useDispatch, useSelector } from "react-redux";
import { callTreeviewOneAPI } from '../../apis/PmAPICalls';

function TreeViewChatting({setEmpInfo, handleAddPartnerInWebSocket}) {

  const dispatch = useDispatch();
  const result = useSelector(state => state.treeview);

  const [selectedNode, setSelectedNode] = useState({
    empNo: '',
    empName: '',
    jobName: '',
    deptName: ''
  });
  
  const [selectedTreeviewEmployee, setselectedTreeviewEmployee] = useState(null);

  console.log('-----------------------------------> ', result);
  useEffect(() => {
      dispatch(callTreeviewOneAPI());
 
  },[]);

  const handleNodeClick = (node) => {

    setSelectedNode({
      ...selectedNode,
      empNo: node.id,
      empName: node.name,
      jobName: node.jobName,
      deptName: node.deptName
    })
  };
  
  // 최하위 노드(사원)를 더블클릭 했을 때 해당 노드 정보 selectedTreeviewEmployee 상태변수에 저장
  const handleNodeDoubleClick = (node) => {
    if (!node.children || node.children.length === 0) {
      const selectedEmployee ={
        empNo: node.id,
        empName: node.name,
        jobName: node.jobName,
        deptName: node.deptName,
      };
      setselectedTreeviewEmployee(selectedEmployee); 
      handleAddPartnerInWebSocket(selectedEmployee.empNo);
      console.log('[TreeviewChatting] call handleAddPartner ===================> ', selectedEmployee.empNo);
      console.log("selectedEmployee ====================> " ,selectedEmployee);
    }
  };

  useEffect(() => {
    if (selectedTreeviewEmployee) {
      setEmpInfo(selectedTreeviewEmployee); // 상위 컴포넌트로 선택한 사원 정보 전달
    }
  }, [selectedTreeviewEmployee]);


  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <Tree
        tree={result}
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
            onDoubleClick={() => handleNodeDoubleClick(node)} // 더블 클릭 이벤트 추가 
          >
            {node.droppable && (
              <span onClick={onToggle}>{isOpen ? "[▼]" : "[▶]"}</span>
            )}
            {node.text}
          </div>
        )}
      />

      
    </DndProvider>
  );
}

export default TreeViewChatting;

