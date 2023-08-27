import React, { useState } from "react";
import { useSelector } from "react-redux";
import TreeView from "../pm/treeview";

function ApvLineTree({ onSelect }) {
    const treeview = useSelector((state) => state.treeview);
    const empNo = treeview;

    console.log('treeview : ', empNo);

    const [selectedLine, setSelectedLine] = useState([{
        degree: '',
        empNo: '',
    }]);

    const handleEmployeeSelect = (selectedEmployee) => {
        const updatedEmployee = {
            ...selectedEmployee,
            empNo: empNo,
            degree: selectedLine.length + 1,
        };

        setSelectedLine((prevSelectedEmployees) => [
            ...prevSelectedEmployees,
            updatedEmployee,
        ]);

        console.log('Selected Employees:');
        selectedLine.forEach((employee, index) => {
            console.log(`{degree ${index + 1}, empNo ${employee.empNo}}`);
        });
    };

    const handleMoveUp = (index) => {
        // ... (same as your existing code)
    };

    const handleMoveDown = (index) => {
        // ... (same as your existing code)
    };

    const handleCompleteSelection = () => {
        onSelect(selectedLine);
    };

    return (
        <div className="apvLineTreeContainer">
            <div className="apvLineTree1">
                <TreeView onSelect={handleEmployeeSelect} />
            </div>
            <div className="apvLineTreeBox">
                결재라인
                {selectedLine.map((employee, index) => (
                    <div className="apvLineTreeSelected" key={index}>
                        <span>{`결재라인 ${employee.degree}: ${employee.empNo}`}</span>
                        <button onClick={() => handleMoveUp(index)}>▲</button>
                        <button onClick={() => handleMoveDown(index)}>▼</button>
                    </div>
                ))}
            </div>
            <button onClick={handleCompleteSelection}>선택완료</button>
        </div>
    );
}

export default ApvLineTree;
