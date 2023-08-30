import React from 'react';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine'; 
import './ApprovalHrm.css';
import '../Approval.css';

function Hrm6() {
    return (

        <section>
            <ApvMenu />
            <div>
                <ApvSummitBar />
                <div className="container">
                    <div className="apv-apvtitle">사직서</div>
                    <ApvSummitLine />
                    <div className="apv-content">
                        
                    </div>
                </div>
            </div>									
        </section>

    );
}

export default Hrm6;
