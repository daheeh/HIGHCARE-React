import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ApvMyList({show}) {
    const authes = useSelector((state) => state.authes);
    const empNo = authes.empNo;

    // const dispatch = useDispatch();
    // const apvMyList = useSelector((state) => state.approval);

    const [formData, setFormDate] = useState([]);

    useEffect(() => {
        async function fetchCounts() {
            try {
                const response = await fetch(`http://localhost:8080/api/approval/apvList?empNo=${empNo}`, {
                    method: 'GET',
                    headers: {
                        Accept: '*/*',
                        Authorization: 'Bearer ' + window.localStorage.getItem('accessToken'),
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                });

                const responseData = await response.json();

                setFormDate(responseData.data);
                console.log(responseData.data);
            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        }

        fetchCounts();
    }, [empNo]);

    return (
        show ?
            <>
                {formData && formData.length > 0 &&
                    formData.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            </>
            :
            <div className="apvMainListRList">
                {formData && formData.length > 0 &&
                    formData.map((item, index) => (
                        <div className='dragList' key={index}>{item}</div>
                    ))}
            </div>
    );
}

export default ApvMyList;
