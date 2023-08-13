
import EmpMain from './empMain';
<<<<<<< HEAD
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RouteApv from './js/approval/routeApv';
import './App.css';
>>>>>>> 4c460d820d6ced41c090b4c967bfc219be3b6b1c

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="">
        <header className="">
          
          <EmpMain />
        </header>
        <Routes>
          <Route path="/*" element={<EmpMain />} />
        </Routes>
      </div>
    </Router>


=======
      <Routes>
        <Route path="/" element={<EmpMain />} />
      </Routes>
    </Router>,
    <RouteApv />
>>>>>>> 4c460d820d6ced41c090b4c967bfc219be3b6b1c
  );
}

export default App;
