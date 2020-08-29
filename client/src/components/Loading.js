import React from "react";
import '../css/Loading.css';

const Loading = (props) => {
    return (
        <div id='loadingSection'>
            <svg id='loadingSVG' width="50%" height="50%" viewBox="0 0 100 100" >
                <circle id="loadingCircle" cx="50" cy="50" r="10" />
            </svg>
        </div>
    )
}

export default Loading;