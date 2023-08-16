import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {

  return (
      <div>
          <p>관리자 메인</p>
          <Link to="management/user">회원관리</Link>
          <Link to="management/system/log">로그관리</Link>
      </div>
    ); 
}

export default AdminPage;