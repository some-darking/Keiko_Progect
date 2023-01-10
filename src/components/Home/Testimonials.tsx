import React from "react";
//import "./content.scss";

const Testimonial :React.FC = () => {
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis leo vel quis mi. Rutrum risus purus tincidunt faucibus vestibulum. Id fusce tempus eu, volutpat.'

  return(
    <div className="testimonials">
      <div className="container">
        <h2 className="title">Testimonials</h2>
        <p className="subtitle">Don’t take our word for it, see what our customers said.</p>
        <div className="review row">
          <div className="review_item colllum">
            <div className="review_item-content">
              <div className="review_item-content_comment">{text}</div>
            </div>
            <div className="review_item-user">
            <object className="review_item-user_svg" type="image/svg+xml" data="../../../img/Photo2.svg" >
            </object>
            <div className="user">
              <h4 className="user_name">Petrov Andrey</h4>
              <p>Lead Developer at Netflix</p>
              </div>
            </div>
          </div>
          <div className="review_item colllum">
            <div className="review_item-content">
            <div className="review_item-content_comment">{text}</div>
            </div>
            <div className="review_item-user">
            <object className="review_item-user_svg" type="image/svg+xml" data="../../../img/team1.svg" >
            </object>
            <div className="user">
              <h4 className="user_name">Kristin Watson</h4>
              <p>Lead Developer at Netflix</p>
              </div>
            </div>
          </div>
          <div className="review_item colllum">
            <div className="review_item-content">
            <div className="review_item-content_comment">{text}</div>
            </div>
            <div className="review_item-user">
            <object className="review_item-user_svg" type="image/svg+xml" data="../../../img/Photo1.svg" width="100">
            </object>
            <div className="user">
              <h4 className="user_name">Kristofer Cook</h4>
              <p>Lead Developer at Netflix</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Testimonial;