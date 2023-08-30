import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import TreeView from "../pm/treeview";

function ApvLineTree({ onSelect, selectedEmployees }) {
    const treeview = useSelector((state) => state.treeview);

    const [empNoArray, setEmpNoArray] = useState([]);
    const [selectedLine, setSelectedLine] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [empInfo, setEmpInfo] = useState([]);

    const authes = useSelector(state => state.authes);
    console.log("authes.empNo : ", authes.empNo);

    useEffect(() => {
        if (empInfo !== null && empInfo !== undefined) {
            console.log('tree empInfo view : ', empInfo);
            const empNo = empInfo.empNo; // Assuming empInfo has an empNo property

            if (empNo !== authes.empNo) {
                if (!empNoArray.includes(empNo) && selectedLine.length < 3) {
                    setEmpNoArray(prevEmpNoArray => [...prevEmpNoArray, empNo]);

                    setSelectedLine(prevSelectedEmployees => [
                        ...prevSelectedEmployees,
                        {
                            degree: prevSelectedEmployees.length + 1,
                            employee: empInfo,
                        },
                    ]);
                }
            } 
        }
        console.log('ApvLineTree - selectedLine : ', selectedLine);
    }, [treeview, empNoArray, selectedLine, empInfo, authes]);



    const handleDoubleClick = (index) => {
        setSelectedLine((prevSelectedEmployees) => {
            const updatedSelectedEmployees = [...prevSelectedEmployees];
            updatedSelectedEmployees.splice(index, 1);
            return updatedSelectedEmployees;
        });
    };

    const handleMoveUp = (index) => {
        if (index > 0) {
            setSelectedLine((prevSelectedEmployees) => {
                const updatedSelectedEmployees = [...prevSelectedEmployees];
                const temp = updatedSelectedEmployees[index];
                updatedSelectedEmployees[index] = updatedSelectedEmployees[index - 1];
                updatedSelectedEmployees[index - 1] = temp;

                updatedSelectedEmployees[index].degree = index + 1;
                updatedSelectedEmployees[index - 1].degree = index;

                return updatedSelectedEmployees;
            });
        }
    };

    const handleCompleteSelection = () => {
        onSelect(selectedLine);
        console.log('ApvLineTree - selectedLine : ', selectedLine);

    };

    const handleEmployeeSelect = (selectedEmployee, index) => {
        console.log('selectedEmployee.empNo : ', selectedEmployee.empNo);
        const empNoExists = selectedLine.some(emp => emp.employee.empNo === selectedEmployee.empNo);

        if (selectedEmployee.empNo === authes.empNo) {
            return;
        }

        if (!empNoExists && selectedLine.length < 3) {
            setEmpNoArray(prevEmpNoArray => [...prevEmpNoArray, selectedEmployee.empNo]);

            setSelectedLine(prevSelectedEmployees => {
                const updatedSelectedEmployees = [...prevSelectedEmployees];
                const existingIndex = updatedSelectedEmployees.findIndex(emp => emp.employee.empNo === selectedEmployee.empNo);

                if (existingIndex === -1) {
                    updatedSelectedEmployees[index] = {
                        degree: index,
                        employee: selectedEmployee,
                    };
                }

                return updatedSelectedEmployees;
            });
        }
    };

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, index) => {
        dragItem.current = index;
        e.target.style.backgroundColor = '#FFC338';
        setActiveIndex(null); // Reset the clicked item index when dragging starts
    };

    const dragEnter = (e, index) => {
        dragOverItem.current = index;
    };

    const dragEnd = (e) => {
        e.target.style.backgroundColor = ''; // Reset the background color
    };

    const drop = (e) => {
        e.preventDefault(); // Prevent default drop behavior
        const updatedSelectedLine = [...selectedLine];
        const dragItemValue = updatedSelectedLine[dragItem.current];
        updatedSelectedLine.splice(dragItem.current, 1);
        updatedSelectedLine.splice(dragOverItem.current, 0, dragItemValue);
        dragItem.current = null;
        dragOverItem.current = null;
        setSelectedLine(updatedSelectedLine);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default drag over behavior
    };

    useEffect(() => {
        setSelectedLine([]);
    }, []);

    console.log('empInfo', empInfo);
    return (
        <div className="apvLineTreeContainer">
            <div className="apvLineTree1">
                <TreeView setEmpInfo={setEmpInfo} onSelect={(selectedEmployees) => handleEmployeeSelect(selectedEmployees)} />
            </div>
            <div className="apvLineTreeBox">
                <div className="apvLineTreeBoxTitle">결재라인</div>
                {selectedLine.map((emp, index) => (
                    <div
                        className={`apvLineTreeSelected ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleMoveUp(index)
                            setActiveIndex(index)
                        }}
                        onDoubleClick={() => handleDoubleClick(index)}
                        draggable
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={dragEnd}
                        onDragOver={handleDragOver}
                        onDrop={drop}
                    >
                        <div className="apvLineTreeSelected1">{`결재라인 ${emp.degree}`}</div>
                        <div className="apvLineTreeSelected2">{`${emp.employee.empNo}`}</div>
                    </div>
                ))}
            </div>
            <button onClick={handleCompleteSelection}>선택완료</button>
        </div>
    );
}

export default ApvLineTree;