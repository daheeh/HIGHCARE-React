
function StepHeader({funcname}){

    console.log(funcname);

    const nameTitle = {
        'step1':'아이디 | 비밀번호 찾기',
        'step2' : '아이디 확인',
        'step2pass' : '비밀번호 재설정'
    }

    return (
        <div>
            <div>{nameTitle[funcname]}</div>
            <div className="borderLine"></div>
            <div className="text-flex">
                <div className={ funcname === 'step1' ? 'step1' : 'step2'} >STEP1. 본인 확인</div>
                <div className={ funcname === 'step1' ? 'step2' : 'step1'}>STEP2. 정보 확인</div>
            </div>
        </div>
    );
}

export default StepHeader;