import React from "react";
import '../css/Home.css';
import Home_main from './Home_main';
import Home_bottom_left from './Home_bottom_left';

const Home = (props) => {
    return (
    <div id='background'>
        <Home_main />
        <Home_bottom_left />
    </div>
    )
}

export default Home;