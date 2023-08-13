
import EmpMain from './empMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApvMain from './js/approval/mainpage';
import Biz1 from './js/approval/biz1';
import Biz2 from './js/approval/biz2';
import Biz3 from './js/approval/biz3';
import Biz4 from './js/approval/biz4';
import Biz4Offcial from './js/approval/biz4Offcial';
import Biz5 from './js/approval/biz5';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmpMain />} />
        <Route path="/approval/mainpage" element={<ApvMain />} />
        <Route path="/approval/biz1" element={<Biz1 />} />
        <Route path="/approval/biz2" element={<Biz2 />} />
        <Route path="/approval/biz3" element={<Biz3 />} />
        <Route path="/approval/biz4" element={<Biz4 />} />
        <Route path="/approval/biz5" element={<Biz5 />} />
        <Route path="/biz4Offcial" element={<Biz4Offcial />} />
      </Routes>
    </Router>
  );
}

export default App;
