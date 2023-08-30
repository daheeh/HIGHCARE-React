import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ApvMyList() {
    // const [droppedLinks, setDroppedLinks] = useState([]);

    // const handleDrop = (e) => {
    //     e.preventDefault();
    //     const link = e.dataTransfer.getData('link');

    //     if (droppedLinks.length < 8) {
    //         setDroppedLinks([...droppedLinks, link]);
    //     }
    // };

    // const handleDragOver = (e) => {
    //     e.preventDefault();
    // };

    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;

    const dispatch = useDispatch();
    const apvMyList = useSelector(state => state.approval);

    const [formData, setFormDate] = useState([{
        apvNo: '',
        title: '',
        writeDate: '',
        apvStatus: '',
        isUrgency: '',
        category: '',
        empNo: empNo,
        contents1: '',
        contents2: '',
    }]);

    useEffect(() => {
        // async function fetchCounts() {
        //     try {
        //         const response = await fetch(`http://localhost:8080/api/approval/apvList?empNo=${empNo}`, {
        //             method: "GET",
        //             headers: {
        //                 "Accept": "*/*",
        //                 "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
        //                 'Content-Type': 'application/json',
        //                 "Access-Control-Allow-Origin": "*",
        //             },
        //         });

        //         const responseData = await response.json();

        //         setFormDate(responseData.data);



        //     } catch (error) {
        //         console.error('Error fetching counts:', error);
        //     }
        // }

        // fetchCounts();
    }, [empNo]);

    return (

        <div className="apvMainMy">
            {formData !== null && formData.slice(0, 10).map((item) => (
                <div key={item.apvNo}>{item.title}</div>
            ))}

        </div>

    );
}

export default ApvMyList;
