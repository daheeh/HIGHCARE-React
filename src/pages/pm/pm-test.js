import { Link } from "react-router-dom";
import PmNav from './pmNav';

function PmTest(){
    return(
        <section>
            <PmNav/>
            <div className="pmmainbox">
                <h1 className="pmmainbox-font"><Link to="/pm/pm-resist-insert">사원 조회</Link></h1>
            <div className="pm-de">
            </div>
            </div>
            <div className="pmmainbox">
                <h1 className="pmmainbox-font"><Link to="/pm/pm-resist-insert">사원 조회</Link></h1>
            <div className="pm-de">
            </div>
            </div>
            <div className="pmmainbox">
                <h1 className="pmmainbox-font"><Link to="/pm/pm-resist-insert">사원 조회</Link></h1>
            <div className="pm-de">
            </div>
            </div>
            <div></div>
        </section>
    )
}

export default PmTest;