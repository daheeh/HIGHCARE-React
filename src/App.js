
import EmpMain from './empMain';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="">
        <header className="">
          
          <EmpMain />
        </header>
        <Routes>
          <Route path="/*" element={<EmpMain />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
