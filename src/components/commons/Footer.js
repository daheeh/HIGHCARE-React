import React from 'react';
import FooterCSS from './Footer.module.css';

function Footer(){
    return(   
        <footer>
            <div className={ FooterCSS.footerDiv }>
                서울 종로구 인사동길 12 대일빌딩, 하이케어 | Tel. 02-1234-5678 Fax.02-1234-8282 | 고유번호 100-01-12345
            <br/>
                개인정보 관리 책임 : 황다혜 부장 | 문의 : hdhye89@gmail.com | 이용약관 | Copyrightⓒ2023 by HIGH CARE GROUP All Rights Reserved.
            </div>
        </footer>
    );
}
export default Footer;