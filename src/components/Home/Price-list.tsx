import React from "react";
//import "./content.scss";

const Price :React.FC = () => {
    return(
    <div className="price-list">
      <div className="container">
        <h2 className="title price-list_title">How Much Does it Cost</h2>
        <p>Honest pricing, no surprises.</p>
        <div className="row banner">
          <div className="banner_item yellow colllum">
            <h3 className="title banner-title">PERSONAL</h3>
            <span className="price"><sup>$</sup>10<sub>/MO</sub></span>
            <a>5 recommendations</a> 
            <a>2 perks</a>
            <a>Unlimited data</a>
            <button type="button" className="button_secondary">
              Sign Up
            </button>
          </div>
          <div className="banner_item pink colllum">
            <h3 className="title banner-title">AGENCY</h3>
            <span className="price"><sup>$</sup>20<sub>/MO</sub></span>
            <a>10 recommendations</a> 
            <a>5 perks</a> 
            <a>Unlimited data</a>
            <button type="button" className="button_secondary">
              Sign Up
            </button>
          </div>
          <div className="banner_item purple colllum">
            <h3 className="title banner-title">ENTERPRISE</h3>
            <span className="price"><sup>$</sup>49<sub>/MO</sub></span>
            <a>All lower deals +</a>
            <a>Unlimited recommendations </a>
            <a>Unlimited perks</a>
            <button type="button" className="button button_secondary">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price