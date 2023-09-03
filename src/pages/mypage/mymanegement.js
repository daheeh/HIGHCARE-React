import React from 'react';
import "./mymanegement.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from "react";
// import { callManSlectAPI } from '../../api/MypageApiCalls';
// import { Navigate, useNavigate } from "react-router-dom";

function MyManegement() {

    // const dispatch = useDispatch();

    return (

        <div classNameName="packing">
            <div>
                <h1 className="title">근태조회</h1>
            </div>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>출근시간</th>
                        <th>퇴근시간</th>
                        <th>총근무시간</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>

                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>

                    </tr>
                    <tr>
        

                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>

                    </tr>
                    <tr>

                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>

                    </tr>
                    <tr>
             
                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>

                    </tr>
                    <tr>
                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>
                        <td className="column2"></td>

                    </tr>
                </tbody>
            </table>
        </div>

    )

}


export default MyManegement;