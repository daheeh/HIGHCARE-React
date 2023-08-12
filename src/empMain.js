import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ApvMain from './approval/mainpage';

function AppLayout({ children }) {
    return (
        <div>
            <nav>
                <p>전자결재</p>
                <Link to="/approval/mainpage">Electronic payment main</Link>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
}

function EmpMain() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />} />
                <Route path="/approval/mainpage" element={<ApvMain />} />
            </Routes>
        </Router>
    );
}

export default EmpMain;