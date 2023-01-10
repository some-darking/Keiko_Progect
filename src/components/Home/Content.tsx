import React from "react";
import Hero from './Hero';
import Subsribe from "./Subsribe";
import Features from "./Features";
import Companies from "./Companies";
import Testimonial from "./Testimonials";
import Price from "./Price-list";
import "../../index.scss";
import "./content.scss";

const Home :React.FC = () => {
    return(
    <div id="content" className="site-content">
        <Hero/>
        <Subsribe/>
        <Features/>
        <Companies/>
        <Testimonial/>
        <Price/> 
    </div>
);
}

export default Home;