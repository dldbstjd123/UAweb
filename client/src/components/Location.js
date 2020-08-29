import React, { Component } from 'react';
import { GoLocation } from "react-icons/go";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import Loading from "./Loading";
import '../css/Location.css';

const { kakao } = window

class Location extends Component {
    constructor(props){
        super(props)
        this.state = {loading:true}
        console.log('Location page');
    }
    
    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=060f8ddba9d1ccbaf301400fc2d590f1&autoload=false";
        document.head.appendChild(script);

        script.onload = async () => {
            var doit = await kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.LatLng(37.5031, 126.88469)
                });

                //creating marker on the map
                var markerPosition = new kakao.maps.LatLng(37.5031, 126.88469);
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
                //creating markder description
                var iwContent = '<div id="mapDescription">유니텍오토<br><a href="https://map.kakao.com/link/map/Unitech Auto,37.5031, 126.88469" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Unitech Auto,37.5031, 126.88469" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                    iwPosition = new kakao.maps.LatLng(37.5031, 127.88469); //인포윈도우 표시 위치입니다

                var infowindow = new kakao.maps.InfoWindow({
                    position: iwPosition,
                    content: iwContent
                });
                infowindow.open(map, marker);
                

            });
            console.log(this.state.loading)
            this.setState({loading: false})
            console.log(this.state.loading)
            
        };
    }
    
    render() {
        return (
            <div id='locationContainer'>
                <div id='locationCardContainer'>
                    <div className="locationCardDescriptions"><GoLocation color="white" size="20px"/><div>서울특별시 구로구 새말로31 롯데 111-302</div></div>
                    <div className="locationCardDescriptions"><FiPhone color="white" size="20px"/><div>02-868-1154</div></div>
                    <div className="locationCardDescriptions"><HiOutlineMail color="white" size="20px"/><div>kevin@unitechauto.co.kr</div></div>
                </div>
                <div className="map" id="map"></div>
                {this.state.loading ? <Loading /> : <div id='footerDistance'></div>}
            </div>

        );
    }
}

export default Location;