import React from "react";
import "./Footer.css";
import facebook from "../assets/img/facebook-icon.png";
import instagram from "../assets/img/instagram-icon.png";
import linkedin from "../assets/img/linkedin-icon.png";
import phone from "../assets/img/phone-icon.png";
import mail from "../assets/img/mail-icon.png";

//function med footer
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* række med ikoner */}
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <img className="footericon" src={facebook}></img>
              </li>
              <li>
                <img className="footericon" src={instagram}></img>
              </li>
              <li>
                <img className="footericon" src={linkedin}></img>
              </li>
              <li>
                <img className="footericon" src={phone}></img>
              </li>
              <li>
                <img className="footericon" src={mail}></img>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Foodsaviour. Foodsaviour ApS – CVR:
            12345678
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
