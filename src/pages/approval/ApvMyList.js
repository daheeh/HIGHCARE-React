import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ApvMyList() {

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

    return (

        <div className="apvMainMy">
            {formData !== null && formData.slice(0, 10).map((item) => (
                <div key={item.apvNo}>{item.title}</div>
            ))}

        </div>

    );
}

export default ApvMyList;
