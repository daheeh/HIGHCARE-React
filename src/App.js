
import EmpMain from './empMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApvMain from './approval/mainpage';
import BizList from './approval/bizList';
import Biz1 from './approval/biz1';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmpMain />} />
        <Route path="/approval/mainpage" element={<ApvMain />} />
        <Route path="/approval" element={<BizList />} />
        <Route path="/approval/biz1" element={<Biz1 />} />
      </Routes>
    </Router>
  );
}

export default App;
