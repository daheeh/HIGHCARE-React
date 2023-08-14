import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {

  return (
      <div>
          <p>관리자 메인</p>;
          <Link to="management/user">회원관리</Link><br></br>
          <Link to="management/system">시스템운영관리</Link>
      </div>
    ); 
}

export default AdminPage;