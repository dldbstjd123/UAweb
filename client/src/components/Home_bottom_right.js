import React from "react";
import { GiTruck } from "react-icons/gi";
import '../css/Home_bottom_left.css';


const Home_bottom_right = (props) => {
    return (
        <div id='container'>
            <div id='titleContainer'>
                <div id="title">취급브랜드</div>
                <GiTruck color="white" size="30px" />
            </div>
            <div id='text'>
            수입상용차(Scania, Volvo, Man, Mercedes Benz, Iveco)부품, 국산상용차(현대 트라고, 파워텍, 타타대우 차세대 등)부품, 선박엔진, 발전소 부품, 버스부품, 승용차 부품, 각종장비부품 등을 취급하는 회사로 엔진에서 작은 볼트까지 모든 부품을 공급하고 있습니다.
            </div>
            
        </div>
    )
}

export default Home_bottom_right;