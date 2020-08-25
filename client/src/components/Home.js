import React from "react";
import '../css/Home.css';
import HomeMain from './Home_main';
import HomeBottomLeft from './Home_bottom_left';
import HomeBottomRight from './Home_bottom_right';

const Home = (props) => {
    return (
        <div>
            <HomeMain />
            <div id='homeBottom'>
                <HomeBottomLeft />
                <HomeBottomRight />
            </div>
        </div>
    )
}

export default Home;