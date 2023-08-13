import React from 'react';
import { Link } from 'react-router-dom';


function EmpMain() {
    return (

        <div>
        <nav>
            <p>전자결재</p>
            <Link to="/approval/mainpage">전자결재 메인페이지</Link>
        </nav>
    </div>
    );
}

export default EmpMain;