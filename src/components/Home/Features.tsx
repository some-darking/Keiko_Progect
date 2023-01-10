import React from "react";
//import "./content.scss";

const Features :React.FC = () => {
  const One:string = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Sematics, a large language ocean.'
  return(
    <div className="features">
      <div className="container">
      <h2 className="title features_title">OUR CLIENTS LOVE US BECAUSE</h2>
        <div className="row features_row row_one">
          <div className="colllum">
            <object className="features_svg svg_one" type="image/svg+xml" data="../../../img/design.svg" width="553" height="265">
            </object>
          </div>
          <div className="colllum features_colllum">
            <h3 className="title">Project One</h3>
            <p>{One}</p>
          </div>
        </div>
        <div className="row features_row row_two">
          <div className="colllum features_colllum">
            <h3 className="title">Project Two</h3>
            <p>{One}</p>
          </div>
          <div className="colllum">
            <object className="features_svg svg_two" type="image/svg+xml" data="../../../img/development.svg" width="472" height="364">
            </object>
          </div>
        </div>
        <div className="row features_row row_one">
          <div className="colllum">
            <object className="features_svg svg_three" type="image/svg+xml" data="../../../img/creations.svg" width="472" height="341">
            </object>
          </div>
          <div className="colllum features_colllum">
            <h3 className="title">Project Three</h3>
            <p>{One}</p>            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Features;