
import EmpMain from '../../empMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApvMain from './mainpage';
import Biz1 from './biz1';
import Biz2 from './biz2';
import Biz3 from './biz3';
import Biz4 from './biz4';
import Biz4Offcial from './biz4Offcial';
import Biz5 from './biz5';
import Exp1 from './exp1';
import Exp2 from './exp2';
import Exp3 from './exp3';
import Exp4 from './exp4';
import Exp5 from './exp5';
import Exp6 from './exp6';
import Exp7 from './exp7';
import ReceiveBox from './receivebox';
import WriteBox from './writebox';

function RouteApv() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmpMain />} />

        <Route path="/approval/mainpage" element={<ApvMain />} />

        <Route path="/approval/receivebox" element={<ReceiveBox />} />
        <Route path="/approval/writebox" element={<WriteBox />} />

        <Route path="/approval/biz1" element={<Biz1 />} />
        <Route path="/approval/biz2" element={<Biz2 />} />
        <Route path="/approval/biz3" element={<Biz3 />} />
        <Route path="/approval/biz4" element={<Biz4 />} />
        <Route path="/approval/biz5" element={<Biz5 />} />
        <Route path="/biz4Offcial" element={<Biz4Offcial />} />

        <Route path="/approval/exp1" element={<Exp1 />} />
        <Route path="/approval/exp2" element={<Exp2 />} />
        <Route path="/approval/exp3" element={<Exp3 />} />
        <Route path="/approval/exp4" element={<Exp4 />} />
        <Route path="/approval/exp5" element={<Exp5 />} />
        <Route path="/approval/exp6" element={<Exp6 />} />
        <Route path="/approval/exp7" element={<Exp7 />} />
      </Routes>
    </Router>
  );
}

export default RouteApv;
