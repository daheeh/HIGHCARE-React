import EmpMain from './empMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteApv from './js/approval/routeApv';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmpMain />} />
      </Routes>
    </Router>,
    <RouteApv />
  );
}

export default App;