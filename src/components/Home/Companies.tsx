import React from "react";
//import "./content.scss";
//import { ReactSVG } from 'react-svg'



const Companies :React.FC = () => {
    return(
        <div className="companies">
        <div className="container">
          <h2 className="title companies_title">You are in good company</h2>
          <p>We are funded with the world’s trusted brands</p>
          <div className="companies_logo">
            <object className="svg_companies" type="image/svg+xml" data="../../../img/Adobe_logo.svg" >
            </object>
            <object className="svg_companies" type="image/svg+xml" data="../../../img/Amazon_logo.svg" >
            </object>
            <object className="svg_companies" type="image/svg+xml" data="../../../img/Facebook_Logo.svg" >
            </object>
            <object className="svg_companies" type="image/svg+xml" data="../../../img/Google_logo.svg" >
            </object>
            <object className="svg_companies" type="image/svg+xml" data="../../../img/intel.svg" >
            </object>
            <object className="svg_companies" type="image/svg+xml" data="../../../img/samsung.svg" >
            </object>
          </div>
        </div>
      </div>

        );}

        export default Companies;