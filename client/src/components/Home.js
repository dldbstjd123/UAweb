import React from "react";
import '../css/Home.css';
import HomeMain from './Home_main';
import HomeBottomLeft from './Home_bottom_left';

const Home = (props) => {
    return (
        <div id='background'>
            <HomeMain />
            <HomeBottomLeft />
        </div>
    )
}

export default Home;