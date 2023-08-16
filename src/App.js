import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteApv from './js/approval/routeApv';
import './App.css';
import Manage from './js/commons/manage';
import LeftNavibar from './js/commons/leftnavibar';
import Footer from './Footer';
import MypagemainTest from './js/mypage/mypagemain-test';
import Mypage from './js/mypage/mypage';

function App() {
  return (
    
    <Router>
        <header style={{height: 100}}><h1>HICARE 로고</h1></header>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ display: 'flex' }}>
            <LeftNavibar />
            <div style={{ flex: 1 }}>
              <RouteApv />
              <Manage />
              {/* 비지니스 연결 */}
              <MypagemainTest />
            </div>
          </div>
          <div style={{ display: 'flex'}}>
          </div> 
            <Footer />
            
        </div>
    </Router>
  );
}

export default App;