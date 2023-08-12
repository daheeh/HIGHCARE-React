
import EmpMain from './empMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApvMain from './approval/mainpage';
import BizList from './approval/bizList';
import Biz1 from './approval/biz1';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
          <header className="App-header">
            <EmpMain />
          </header>
        </div>
    <div>
      <nav>
      </nav>
      <Routes>
        <Route path="/approval/mainpage" element={<ApvMain />} />
        <Route path="/approval" element={<BizList />} />
        <Route path="/approval/biz1" element={<Biz1 />} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
