import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function ExpList() {

    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState([
        'approval/exp1',
        'approval/exp2',
        'approval/exp3',
        'approval/exp4',
        'approval/exp5',
        'approval/exp6',
        'approval/exp7',
    ]);

    const linkTextMapping = {
        'approval/exp1': '지출결의서(단건)',
        'approval/exp2': '지출결의서(다건)',
        'approval/exp3': '구매품의서xx',
        'approval/exp4': '출장경비신청서',
        'approval/exp5': '개인경비신청서xx',
        'approval/exp6': '경조금신청서',
        'approval/exp7': '법인카드사용보고서',

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
        e.target.style.backgroundColor = '#f4f4f4';
        e.target.querySelector('.childDiv').style.backgroundColor = '#f4f4f4'; 
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
            <div className="listTitle">지출</div>

            {list.map((item, idx) => (
                <div className='dragList'
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

export default ExpList;