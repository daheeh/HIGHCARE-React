import { useState } from "react";
import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import initialData from "./highcare-TreeView.json";

function TreeView() { 
  const [treeData, setTreeData] = useState(initialData); 
 
  const handleDrop = () => undefined;
  
  return (

    <DndProvider backend={MultiBackend} options={getBackendOptions()}> 
      <Tree
        tree={treeData}
        rootId={0}
        onDrop={handleDrop} 
        canDrop={() => undefined}
        render={(node, { depth, isOpen, onToggle }) => (
          <div style={{ marginLeft: depth * 10 }}>
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
