import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';


function BizList() {


    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState([
        'approval/biz1',
        'approval/biz2',
        'approval/biz3',
        'approval/biz4',
        'approval/biz5',
    ]);

    const linkTextMapping = {
        'approval/biz1': '기안서',
        'approval/biz2': '회의록',
        'approval/biz3': '출장신청서',
        'approval/biz4': '공문',
        'approval/biz5': 'custom',
    };

    const dragStart = (e, position) => {
        dragItem.current = position;
        e.target.style.backgroundColor = '#FFC338';
        e.target.querySelector('.childDiv').style.backgroundColor = '#FFC338'; 

    }

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    }

    const drop = (e) => {
        e.target.style.backgroundColor = '';
        e.target.querySelector('.childDiv').style.backgroundColor = ''; 
        const newList = [...list];
        const dragItemValue = newList[dragItem.current];
        newList.splice(dragItem.current, 1);
        newList.splice(dragOverItem.current, 0, dragItemValue);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(newList);
    };

    
    return (
        <div className="apvMainListRList">
            <div className="listTitle">업무</div>

            {list.map((item, idx) => (
                <div className='dragList' key={idx}
                    draggable
                    onDragStart={(e) => dragStart(e, idx)}
                    onDragEnter={(e) => dragEnter(e, idx)}
                    onDragEnd={drop}
                    onDragOver={(e) => e.preventDefault()}>
                    <Link to={`/${item}`} key={idx}>
                        <div className='childDiv'>
                            {linkTextMapping[item]}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BizList;