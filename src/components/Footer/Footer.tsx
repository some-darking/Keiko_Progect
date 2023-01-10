import React from "react";
import "./footer.scss";

const Footer :React.FC = () => {
const text = 'Keiko Corp. the greatest start up of all time Bruno the CEO of Keiko Corp has built the fastest growing tech start up in Silicon Valley.'

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_group1-column footer_column column">
          <div className="footer_title">
            <h5 className="title">Group1</h5>
          </div>
          <div className="footer_list">
            <div className="footer_part"><a>Home</a></div>
            <div className="footer_part"><a>Features</a></div>
            <div className="footer_part"><a>Pricing</a></div>
            <div className="footer_part"><a>Team</a></div>
            <div className="footer_part"><a>Contact Us</a></div>
          </div>
        </div>
        <div className="footer_group2-column footer_column column">
          <div className="footer_title">
            <h5 className="title">Group2</h5>
          </div>
          <div className="footer_list">
            <div className="footer_part"><a>Privacy Policy</a></div>
            <div className="footer_part"><a>Terms</a></div>
            <div className="footer_part"><a>FAQ</a></div>
            <div className="footer_part"><a>Support</a></div>
          </div>
        </div>
        <div className="footer_about-column footer_column column">
          <div className="footer_title">
            <h5 className="title">About Us</h5>
          </div>
          <div className="footer_list">
            <div className="footer_part">
              <a>{text}</a>
            </div>
          </div>
        </div>
        <div className="footer_social-column footer_column column">
          <div className="footer_title">
            <h5 className="title">Follow Us</h5>
          </div>
          <div className="footer_list">
            <div className="footer_part">
              <object className="footer_svg" type="image/svg+xml" data="../../../img/Footer.svg" width="130" >
              </object> 
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright"><a>© 2020 Keiko Corp. All Rights Reserved</a></div>
    </footer>
  )
}

export default Footer;