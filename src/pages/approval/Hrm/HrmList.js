import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function HrmList() {


    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState([
        'hrm1',
        'hrm2',
        'hrm3',
        'hrm4',
        'hrm5',
        'hrm6',
        'hrm7',
    ]);

    const linkTextMapping = {
        hrm1: '연차신청서',
        hrm2: '기타휴가신청서',
        hrm3: '서류발급신청서',
        hrm4: '시말서xx',
        hrm5: '연장근무신청서',
        hrm6: '사직서xx',
        hrm7: '기안서',

    };
    


    const dragStart = (e, position) => {
        dragItem.current = position;
        e.target.style.backgroundColor = '#FFC338';
    }

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        
        
    }
        
    const drop = (e) => {
        e.target.style.backgroundColor = '#f4f4f4';
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

            { list.map((item, idx) => (
                <div>
                <Link to={`/${item}`} key={idx}>
                    <div
                        draggable
                        onDragStart={(e) => dragStart(e, idx)}
                        onDragEnter={(e) => dragEnter(e, idx)}
                        onDragEnd={drop}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        {linkTextMapping[item]}
                    </div>
                </Link>
                </div>
            ))}
        </div>

    );
}

export default HrmList;