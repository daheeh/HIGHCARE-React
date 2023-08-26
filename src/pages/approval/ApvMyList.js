import React, { useState } from 'react';

function ApvMyList() {
    const [droppedLinks, setDroppedLinks] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        const link = e.dataTransfer.getData('link');

        if (droppedLinks.length < 8) {
            setDroppedLinks([...droppedLinks, link]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        // <div
        //     className="apvMainMy"
        //     onDrop={handleDrop}
        //     onDragOver={handleDragOver}
        // >
        //     {droppedLinks.map((link, index) => (
        //         <div key={index} className="droppedItem">
        //             {link}
        //         </div>
        //     ))}
        // </div>
        <div></div>
    );
}

export default ApvMyList;
