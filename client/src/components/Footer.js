import React, { useState } from "react";
import '../css/Footer.css';


const Footer = (props) => {
    let d = new Date();
    let n = d.getFullYear();
    let [currentYear, setCurrentYear] = useState(n)




    return (
        <div id='footer'>
            <div className='footerTop'>
                <div>업체명 : 유니텍오토</div>
                <div>대표자 : 이광식</div>
                <div>사업자번호 : 113-86-55090</div>
                <div>Tel : 02-868-1154</div>
            </div>
            <div className='footerTop'>
                <div>주소 : 서울특별시 구로구 새말로31 롯데 111-302</div>
                <div>E-mail : kevin@unitechauto.co.kr</div>
            </div>
            <div>All page contents cannot be copied without permission.</div>
            <div>Copyright © 유니텍오토 {currentYear} All rights reserved.</div>
        </div>
    )
}

export default Footer;