import { BrowserRouter as Router} from 'react-router-dom';
import RouteApv from './js/approval/routeApv';
import LeftNavibar from './js/commons/leftnavibar';
import Footer from './Footer';
import ManageApv from './js/managed/features/ManageApv';

function App() {
  return (
    
    <Router>
        <header style={{height: 100}}><h1>HICARE 로고</h1></header>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ display: 'flex' }}>
            <LeftNavibar />
            <div style={{ flex: 1 }}>
              <RouteApv />
              <ManageApv />
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