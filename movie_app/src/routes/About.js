import React from "react";
import "./About.css";
import mypic from "./tami2.png";




function About(props) {
    return (
        <div className="about__container">
            {/* <img src="./tami.jpg" alt="img"></img> */}
            <img src={mypic} alt="mypic" />
            <h1>Hi I am Tami</h1>
            < span >
                This is my first react page.
                And so happy
            </span >
            <h3>Happy recoding alnight🔥</h3>
            <span>2021 March</span>
        </div>

    );
}

export default About;

