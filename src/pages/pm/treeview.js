import React, { useState } from "react";
import { Tree, getBackendOptions, MultiBackend } from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import initialData from "./highcare-TreeView.json";
import './pm-member.css'

function TreeView() {
  const [treeData, setTreeData] = useState(initialData);

  const handleDrop = () => undefined;

return (
  <DndProvider backend={MultiBackend} options={getBackendOptions()}>
    <Tree
      tree={treeData}
      rootId={0}
      onDrop={handleDrop}
      render={(node, { depth, isOpen, onToggle }) => (
          <div
            className={`customNode ${node.droppable? "parent" : "subNode"}`}
            style={{
              marginLeft: `${depth * 20}px`,
              width: node.droppable? "200px" : "140px",
              
            }}
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

export default TreeView;
              






