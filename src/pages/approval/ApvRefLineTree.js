import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import TreeView from "../pm/treeview";

function ApvRefLineTree({ onSelect, refSelectedEmployees }) {
    const treeview = useSelector((state) => state.treeview);

    const [refEmpNoArray, setRefEmpNoArray] = useState([]);
    const [refSelectedLine, setRefSelectedLine] = useState([]);

    const [activeIndex, setActiveIndex] = useState(null);
    const [empInfo, setEmpInfo] = useState([]);

    const authes = useSelector(state => state.authes);
    console.log("authes.empNo : ", authes.empNo);


    useEffect(() => {
        if (empInfo !== null && empInfo !== undefined) {
            console.log('tree empInfo view : ', empInfo);
            const empNo = empInfo.empNo;

            if (empNo !== authes.empNo) {
                if (!refEmpNoArray.includes(empNo)) {
                    setRefEmpNoArray(prevRefEmpNoArray => [...prevRefEmpNoArray, empNo]);

                    setRefSelectedLine(prevRefSelectedEmployees => [
                        ...prevRefSelectedEmployees,
                        {
                            // apvLineNo:'',
                            degree: 9,
                            isApproval: 'R',
                            isReference: 'T',
                            apvDate: '',
                            empNo: empNo,
                            empName: empInfo.empName,
                            jobName: empInfo.jobName,
                            deptName: empInfo.deptName,
                        },
                    ]);
                }
            }
        }
        console.log('ApvRefLineTree - refSelectedLine : ', refSelectedLine);
    }, [treeview, refEmpNoArray, refSelectedLine, empInfo, authes]);



    const handleDoubleClick = (index) => {
        setRefSelectedLine((prevRefSelectedEmployees) => {
            const updatedRefSelectedEmployees = [...prevRefSelectedEmployees];
            updatedRefSelectedEmployees.splice(index, 1);
            return updatedRefSelectedEmployees;
        });
    };

    const handleMoveUp = (index) => {
        if (index > 0) {
            refSelectedLine((prevRefSelectedEmployees) => {
                const updatedRefSelectedEmployees = [...prevRefSelectedEmployees];
                const temp = updatedRefSelectedEmployees[index];
                updatedRefSelectedEmployees[index] = updatedRefSelectedEmployees[index - 1];
                updatedRefSelectedEmployees[index - 1] = temp;

                updatedRefSelectedEmployees[index].degree = index + 1;
                updatedRefSelectedEmployees[index - 1].degree = index;

                return updatedRefSelectedEmployees;
            });
        }
    };

    const handleRefSelection = () => {
        onSelect(refSelectedLine);
        console.log('ApvLineTree - refSelectedLine : ', refSelectedLine);
    };

    const handleRefEmployeeSelect = (refSelectedEmployee, index) => {
        console.log('refSelectedEmployee.empNo : ', refSelectedEmployee.empNo);
        const empNoExists = refSelectedLine.some(emp => emp.empNo === refSelectedEmployee.empNo);

        if (refSelectedEmployee.empNo === authes.empNo) {
            return;
        }

        if (!empNoExists) {
            setRefEmpNoArray(prevRefEmpNoArray => [...prevRefEmpNoArray, refSelectedEmployee.empNo]);

            setRefSelectedLine(prevRefSelectedEmployees => {
                const updatedRefSelectedEmployees = [...prevRefSelectedEmployees];
                const existingIndex = updatedRefSelectedEmployees.findIndex(emp => emp.empNo === refSelectedEmployee.empNo);

                if (existingIndex === 0) {
                    updatedRefSelectedEmployees[index] = {
                        degree: 9,
                        isApproval: 'R',
                        isReference: 'T',
                        apvDate: '',
                        empNo: empInfo.empNo,
                        empName: empInfo.empName,
                        jobName: empInfo.jobName,
                        deptName: empInfo.deptName,
                    };
                }

                return updatedRefSelectedEmployees;
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
        const updatedRefSelectedLine = [...refSelectedLine];
        const dragItemValue = updatedRefSelectedLine[dragItem.current];
        updatedRefSelectedLine.splice(dragItem.current, 1);
        updatedRefSelectedLine.splice(dragOverItem.current, 0, dragItemValue);
        dragItem.current = null;
        dragOverItem.current = null;
        setRefSelectedLine(updatedRefSelectedLine);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        setRefSelectedLine([]);
    }, []);

    console.log('empInfo', empInfo);
    return (
        <div className="apvLineTreeContainer">
            <div className="apvLineTree1">
                <TreeView setEmpInfo={setEmpInfo} onSelect={(refSelectedEmployees) => handleRefEmployeeSelect(refSelectedEmployees)} />
            </div>
            <div className="apvLineTreeBox">
                <div className="apvLineTreeBoxTitle">결재참조</div>
                {refSelectedLine.slice(0).map((emp, index) => (
                    <div
                        className={`apvLineTreeSelected ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleMoveUp(index + 1)
                            setActiveIndex(index)
                        }}
                        onDoubleClick={() => handleDoubleClick(index + 1)}
                        draggable
                        onDragStart={(e) => dragStart(e, index + 1)}
                        onDragEnter={(e) => dragEnter(e, index + 1)}
                        onDragEnd={dragEnd}
                        onDragOver={handleDragOver}
                        onDrop={drop}
                    >
                        <div className="apvLineTreeSelected2">{`${emp.deptName} ${emp.empName} ${emp.jobName}`}</div>
                    </div>
                ))}
            </div>
            <button onClick={handleRefSelection}>선택완료</button>
        </div>
    );
}

export default ApvRefLineTree;