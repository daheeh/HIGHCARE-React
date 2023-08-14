import { useState } from "react";
import "../css/identification.css"
import { Link } from "react-router-dom";

function Identification(){

    const [authway, setAuthway] = useState('phone');
    const [showDiv, setShowDiv] = useState(true);

    const authHandler = (e) => {
        const selectAuth = e.target.value;
        setAuthway(selectAuth);
        setShowDiv(authway === 'email');
    }
    

    return (
        <div className="findAccount">
            <div className="find-step-container">
                
                <div className="authimage-flex">
                    <label htmlFor="phone" className="phoneimage"/>
                    <label htmlFor="email" className="emailimage"/>
                </div>
                <div className="authtext-flex">
                    <label htmlFor="phone">
                        <div  className="phonetxt">등록된 휴대폰으로 인증</div>
                    </label>
                    <label htmlFor="email">
                        <div className="emailtxt">등록된 이메일로 인증</div>
                    </label>
                </div>
                
                <div>
                    <label htmlFor="phone"></label>
                        <input 
                            hidden
                            type="radio"
                            name="phone"
                            id="phone"
                            value="phone"
                            checked={authway === 'phone'}
                            onChange={authHandler}
                        />
                    
                    <label htmlFor="email"></label>
                        <input 
                            hidden
                            type="radio"
                            name="email"
                            id="email"
                            value="email"
                            checked={authway === 'email'}
                            onChange={authHandler}
                        />
                </div>
                {showDiv && (   
                    phoneAuth()
                )}
                {!(showDiv) && (
                    emailAuth()
                )}
                <div className="nextbutton-container">
                    <Link to="/login/findaccount/step2">
                        
                    <button className="nextbtn">다음</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function phoneAuth(){
    return (     
        
        <div className="authbox"> 
            <div className="infobox">
                <div>
                    <div className="grid1">이 &nbsp; &nbsp; &nbsp; &nbsp;름</div>
                    <input className="name" type="text"/>
                </div>
                <div className="info-flex">
                    <div className="grid1">휴대전화</div>
                    <input className="localnumber" type="text" value="+82" disabled/>
                    <input className="phonenumber" type="text" placeholder="'-'제외 숫자만 입력"
                    />
                    <input className="authbutton" value="인증번호발송" type="button"/>
                </div>
                <div>
                    <div className="grid1"></div>
                    <input className="authnumber" type="text" placeholder="인증번호 6자리 숫자 입력"/>
                </div>
            </div>
    </div>
    );
}

function emailAuth(){
    return (     

        <div className="authbox"> 
            <div className="infobox">
            <div>
                <div className="grid1">이 &nbsp; &nbsp; &nbsp; &nbsp;름</div>
                <input className="name" type="text"/>
            </div>
            <div className="info-flex">
                <div className="grid1">메일주소</div>
                <input className="name" name="emailaddr" type="text" placeholder="'@'를 포함하여 정확히 입력" />
                <input className="authbutton" value="인증번호발송" type="button"/>
            </div>
            <div>
                <div className="grid1"></div>
                <input className="authnumber" type="text" placeholder="인증번호 6자리 숫자 입력"/>
            </div>
    </div>
    </div>

    
    );
}

export default Identification;