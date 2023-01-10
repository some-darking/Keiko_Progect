import React from "react";
//import "./content.scss";

const Subsribe :React.FC = () => {
  const textCenter = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  const Prefix = '“Your email address is safe with us. We never share your email address.”'
  return(
    <div className="subscribe">
      <div className="container">
        <div className="colllum subscribe_collum">
          <div className="icon">
            <object className="svg_icon" type="image/svg+xml" data="../../../img/Books.svg" width="22.72" height="20.69">
            </object>
          </div>
          <h2 className="subscribe_title title">Never miss an update</h2>
          <span className="text-center">{textCenter}</span>
          <div className="subscribe_button button">
            <input
              type="text"
              className="input_primary"
              placeholder="Type your email"></input>
            <button
            type="button"
            className="button_primary">Subscribe</button>
          </div>
          <a>{Prefix}</a>
        </div>
      </div>
    </div>
  )
}
export default Subsribe;