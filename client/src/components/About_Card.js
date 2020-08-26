import React from "react";
import '../css/AboutCard.css';


const AboutCard = (props) => {
    return (
        <div id='aboutCardContainer'>
            <div id='aboutCardTitle'>{props.title}</div>
            <div id='aboutCardContent'>{props.content}</div>
        </div>
    )
}



export default AboutCard;