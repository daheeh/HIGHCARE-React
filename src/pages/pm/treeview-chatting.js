import React, { useEffect, useState } from "react";
import { Tree, getBackendOptions, MultiBackend } from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import './pm-member.css'
import { useDispatch, useSelector } from "react-redux";
import { callTreeviewOneAPI } from '../../apis/PmAPICalls';

function TreeViewChatting({setEmpInfo}) {

  const dispatch = useDispatch();
  const result = useSelector(state => state.treeview);

  const [selectedNode, setSelectedNode] = useState({
    empNo: '',
    empName: '',
    jobName: '',
    deptName: ''
  });
  
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
  

  const employeeSelect = () => {
      // 사용할 때 필요한 정보를 알아서 찾아가세요(일단어떻게 쓸지몰라서 콘솔에 찍는걸로만해놓음)
      setEmpInfo(selectedNode);
      console.log(selectedNode);
  }

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
          >
            {node.droppable && (
              <span onClick={onToggle}>{isOpen ? "[▼]" : "[▶]"}</span>
            )}
            {node.text}
          </div>
        )}
      />
      
      {/* {selectedNode && (
        <div className="selectedNodeInfo">
          <h2>선택한 노드 정보</h2>
          <pre>{JSON.stringify(selectedNode, null, 2)}</pre>
          <button onClick={employeeSelect}> 사원 선택</button>
        </div>
      )} */}
      
    </DndProvider>
  );
}

export default TreeViewChatting;

