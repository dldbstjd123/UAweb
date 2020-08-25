import React from "react";
import { MdPermContactCalendar, MdCall, MdPhoneIphone, MdEmail } from "react-icons/md";
import '../css/Home_bottom_left.css';


const Home_bottom_left = (props) => {
    return (
        <div id='container'>
            <div id='titleContainer'>
                <div id="title">고객센터</div>
                <MdPermContactCalendar color="white" size="30px" />
            </div>
            <div className='contentContainer'>
                <MdCall color="white" size='30px'/>
                <div>02-868-1154</div>
            </div>
            <div className='contentContainer'>
                <MdPhoneIphone color="white" size='30px'/>
                <div>02-868-1154</div>
            </div>
            <div id='text'>
                견적문의 및 궁금하신 사항은 전화주시면 빠른 답변 및 상담을 해 드리겠습니다.
            </div>
            <div className='contentContainer'>
                <MdEmail color="white" size='30px'/>
                <div>kevin@unitechauto.co.kr</div>
            </div>
        </div>
    )
}

export default Home_bottom_left;