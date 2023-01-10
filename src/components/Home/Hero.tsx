import React from "react";
//import "./content.scss";

const Hero :React.FC = ()  => { 
const text:string = 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the for World of Grammar.'
    return(
    <React.Fragment>
        <div className="hero">
            <div className="container">
            <div className="row hero_row">
                <div className="colllum">
                    <object className="svg_rect" type="image/svg+xml" data="../../../img/hero.svg" >
                    </object>
                </div>
                <div className="hero_colllum colllum">
                    <h1 className="title">THE BEST TECH STARTUP</h1>
                    <p>{text}</p>
                    <button type="button" className="button_primary button_hero">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
    );
}
export default Hero