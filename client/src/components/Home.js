import React, {useState, useEffect} from "react";
import '../css/Home.css';
import Loading from './Loading'
import HomeMain from './Home_main';
import HomeBottomLeft from './Home_bottom_left';
import HomeBottomRight from './Home_bottom_right';

const Home = (props) => {
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        setLoading(false)
    }, [])

    if(loading){
        return (
            <Loading />
        )
    }else{
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
}

export default Home;