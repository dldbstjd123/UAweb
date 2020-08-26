import React from "react";
import '../css/About.css';

import AboutCard from "./About_Card";

const About = (props) => {
let title1 = <div><div>항상 고객과 함께하는{"\n"}저희 <span style={{fontFamily: 'Do Hyeon'}}>유니텍오토 </span>홈페이지 방문을 환영합니다.</div></div>
    let content1 = <div><br /><div>안녕하십니까.</div><br /><div>당사는 국내 최대의 수입상용차(Scania, Volvo, Man, Mercedes Benz, Iveco)부품, 국산상용차(현대 트라고, 파워텍, 타타대우 차세대 등)부품, 선박엔진, 발전소 부품, 버스부품, 승용차 부품, 각종장비부품 등을 취급하는 회사로 엔진에서 작은 볼트까지 모든 부품을 공급하고 있습니다.</div><br /><div>끊임없이 변화하는 시장에서 고객만족을 위해 엄선된 최고 품질의 부품으로 엔진소리가 들리는 모든 도로와 사업장에서 저희 <span style={{fontFamily: 'Do Hyeon'}}>유니텍오토</span> 주식회사는 항상 함께하고 있습니다.</div><br /><div>당사는 순정부품 혹은 그에 준하는 OEM(Original Equipment Manufacture)제품을 생산하는 생산업체들과 국내공급계약을 체결하여 순정부품 및 OEM제품을 해외로부터 직수입하여 공급함으로 양질의 부품을 경쟁력 있는 가격으로 공급하고 있습니다.</div><br /><div>또한 품질대비 저렴한 가격을 원하시는 고객을 위해서 순정부품과 OEM제품 이외에도 국내 및 국외에서 검증된 고품질의 자동차 부품을 약 150여 사의 외국부품전문 생산업체로부터 다양한 브랜드 제품도 수입하여 공급해 드리고 있습니다.</div><br /><div>또한 한국의 앞선 자동차산업 기술력으로 생산된 다양한 종류의 국내자동차 부품을 독일 등 전 세계에 수출도 적극적으로 행하고 있습니다.</div><br /><div><span style={{fontFamily: 'Do Hyeon'}}>유니텍오토</span> 주식회사는 고객의 안전과 편의를 위해 최선을 다하며 귀중한 고객님들의 운송사업번창, 여행의 길잡이가 되도록 노력하겠으며 운송업 종사자들의 하루하루의 값진 노력이 도로 위에서 안전한 아름다운 추억으로 승화하는 그 노정에 저희 유니텍오토주식회사는 함께 걷는 동반자의 역할을 수행하겠습니다.</div><br /><div>고객만족을 사훈으로 직원 모두가 혼연일체가 되어 고객의 의견에 귀를 기울이며, 정직한 마음으로 고객만족을 위해 최선을 다하겠습니다.</div><br /><div>앞으로도 계속 고객 여러분의 뜨거운 성원과 격려를 부탁드립니다.</div><br /><div>감사합니다.</div><br /><div style={{fontFamily: 'Do Hyeon', fontSize:'20px'}}>유니텍오토   이광식</div></div>
    let title2 = "경영철학"
    let content2 = <div><br /><div><span style={{fontFamily: 'Do Hyeon'}}>유니텍오토</span> 대표이사 이광식은 언제나 그의 마음속엔 "완벽한 부품, 완벽한 안전(Perfect parts, Perfect safety)"이라는 경영철학을 가지고 있습니다.</div><br /><div>종업원들은 모두 이 경영철학에 맞추어 완벽하고 안전한 부품을 찾아 고객들에게 공급하고자 노력을 하고 있습니다.</div><br /><div>따라서 <span style={{fontFamily: 'Do Hyeon'}}>유니텍오토</span> 주식회사는 완성차 차량에 장착되는 순정부품과 순정부품을 생산하는 기업에서 순정부품과 동일한 재질로 생산하여 부품의 성능, 보증기간 등이 순정부품에 뒤지지 않는 OEM(Original Equipment Manufacture)제품을 우선적으로 공급하고자 노력을 하고 있습니다.</div><br /><div>또한 당사는 다양한 고객의 요구에 부응하고자 세계 각국으로부터 다양한 브랜드의 고품질 제품을 수입하여 당사 기술진 및 협력업체의 도움을 받아 엄격한 품질 테스트와 도로주행 검증을 거쳐 순정부품과 OEM 제품대비 품질면에서 뒤지지 않는 우수한 품질의 부품을 합리적이로 경쟁력있는 가격으로 공급하고 있습니다.</div><br /><div>품질은 <span style={{fontFamily: 'Do Hyeon'}}>유니텍오토</span>주식회사의 최고의 가치이며 동 경영철학에 맞추어 전문가들에 의하여 엄선된 부품은 고객들의 완벽한 도로주행과 안전 그리고 도로 위에서의 아름다운 추억만들기에 당사가 언제나 늘 함께 동행하겠습니다.</div><br /><div style={{textAlign:'center'}}><img src="images/trucks.png" /></div></div>
    console.log(content1)
    return (
        <div id='aboutContainer'>
            <AboutCard title={title1} content={content1}/>
            <AboutCard title={title2} content={content2}/>
        </div>
    )
}

export default About;