import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function HrmList() {

    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState([
        'approval/hrm1',
        'approval/hrm2',
        'approval/hrm3',
        'approval/hrm4',
        'approval/hrm5',
        'approval/hrm6',
        'approval/hrm7',
    ]);

    const linkTextMapping = {
        'approval/hrm1': '연차신청서',
        'approval/hrm2': '기타휴가신청서',
        'approval/hrm3': '서류발급신청서',
        'approval/hrm4': '시말서xx',
        'approval/hrm5': '연장근무신청서',
        'approval/hrm6': '사직서xx',
        'approval/hrm7': '기안서',
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
            <div className="listTitle">인사</div>

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

export default HrmList;