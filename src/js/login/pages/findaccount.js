import Identification from '../features/identification.js';
import StepHeader from '../features/stepheader.js';
import {LoginOfPass, PassReset } from '../features/idcheck.js';


function Step1() {

  return (

    <div className="findAccount">
      <div className="find-step-container">

        <StepHeader funcname={'step1'} />
        <Identification />
      </div>
      <div className="">
      </div>
    </div>

  );

}

function Step2() {
  return (

    <div className="findAccount">
      <div className="find-step-container">

        <StepHeader funcname={'step2'} />
        <LoginOfPass />
      </div>

    </div>

  );

}


function Step2pass() {
  return (

    <div className="findAccount">
      <div className="find-step-container">

        <StepHeader funcname={'step2pass'} />
        <PassReset/>      
      </div>
    </div>

  );

}




export {Step1, Step2, Step2pass};