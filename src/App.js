
import EmpMain from './empMain';
import './App.css';
import AdminTest from './admin/admin-test';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="">
        <header className="">
          
          <EmpMain />
          <AdminTest/>
        </header>
        <Routes>
          <Route path="/*" element={<EmpMain />} />
          <Route path="/admin/*" element={<AdminTest />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
