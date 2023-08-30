import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {



  return (

      <section>
			<div className="leftMenu">
				<div className="leftMenu2">

					<div className="mainTitle">
						<Link to="/admin">운영관리</Link>
					</div>
					<div className="apvNaviBox">
						<div className="apvNaviBoxEmp"></div>
						<div className="apvNaviBoxMainTitle">
							<Link to="member">회원관리</Link>
						</div>
						<ul className="apvNaviBoxUl">   
							<Link to="member"><li>회원목록</li></Link>
							<Link to="member/auth"><li>권한설정</li></Link>
							<Link to="member/log"><li>접속로그</li></Link>
							<Link to=""><li>메뉴</li></Link>
							<Link to=""><li>메뉴</li></Link>

						</ul>
						<div className="apvNaviBoxEmp"></div>
						<div className="apvNaviBoxEmp"></div>
						<div className="apvNaviBoxMainTitle">시스템관리</div>
						<ul className="apvNaviBoxUl">   
              <li>시스템로그</li>
							<li></li>
							<li></li>
							<li></li>
							<li></li> 

						</ul>
					</div>
				</div>
			</div>
		</section>
    ); 
}

export default AdminPage;