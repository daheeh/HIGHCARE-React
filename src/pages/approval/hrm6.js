import React from 'react';
import ApvMenu from './apvMenu';
import ApvSummitBar from './apvSmmitbar';
import ApvSummitLine from './apvSummitline'; 
import './approvalHrm.css';
import './approval.css';

function Hrm6() {
    return (
        <html lang="ko">
            <head>
                <title>사직서</title>
            </head>
            <body>
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
            </body>
        </html>
    );
}

export default Hrm6;
