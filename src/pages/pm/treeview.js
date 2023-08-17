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


//------------------------------------------------------------------------- 걍 네모박스만 만든버전전
// import React, { useState } from "react";
// import { Tree, getBackendOptions, MultiBackend } from "@minoru/react-dnd-treeview";
// import { DndProvider } from "react-dnd";
// import initialData from "./highcare-TreeView.json";
// import './pm-member.css'

// function TreeView() {
//   const [treeData, setTreeData] = useState(initialData);

//   const handleDrop = () => undefined;

//   return (
//     <DndProvider backend={MultiBackend} options={getBackendOptions()}>
//       <Tree
//         tree={treeData}
//         rootId={0}
//         onDrop={handleDrop}
//         canDrop={() => undefined}
//         render={(node, { depth, isOpen, onToggle }) => (
//           <div className={`tree-node ${node.droppable ? "droppable" : ""}`} style={{ marginLeft: depth * 20 }}>
//             <div className={`node-box ${node.parent === 0 ? "parent-box" : "child-box"}`}>
//               <span className={`toggle-icon ${isOpen ? "open-icon" : "closed-icon"}`} onClick={onToggle}>
//                 {node.droppable ? (isOpen ? "▼" : "▶") : ""}
//               </span>
//               {node.text}
//             </div>
//           </div>
//         )}
//       />
//     </DndProvider>
//   );
// }

// export default TreeView;

//-------------------------------------------------------이건 가운데정렬된 트리뷰^^
// import React, { useState } from "react";
// import { Tree, getBackendOptions, MultiBackend } from "@minoru/react-dnd-treeview";
// import { DndProvider } from "react-dnd";
// import initialData from "./highcare-TreeView.json";
// import './pm-member.css'

// function TreeView() {
//   const [treeData, setTreeData] = useState(initialData);

//   const handleDrop = () => undefined;

//   return (
//     <div className="tree-container">
//       <DndProvider backend={MultiBackend} options={getBackendOptions()}>
//         <Tree
//           tree={treeData}
//           rootId={0}
//           onDrop={handleDrop}
//           canDrop={() => undefined}
//           render={(node, { depth, isOpen, onToggle }) => (
//             <div className="tree-node">
//               <div className={`node-box ${node.parent === 0 ? "parent-box" : "child-box"}`} style={{ marginLeft: depth * 20 }}>
//                 {node.droppable && (
//                   <span className={`toggle-icon ${isOpen ? "open-icon" : "closed-icon"}`} onClick={onToggle} />
//                 )}
//                 {node.text}
//               </div>
//             </div>
//           )}
//         />
//       </DndProvider>
//     </div>
//   );
// }

// export default TreeView;







