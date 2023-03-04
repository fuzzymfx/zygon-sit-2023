import React from "react";
import "../static/css/homepage.css";
import logo from "../static/svg/zygonheaderlogo.svg";
import siliconlogo from "../static/images/SiliconTech.png";
import zygonlogo from "../static/svg/zygonlogo.svg";
export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage_header">
        <div className="row">
          <div className="col col-1">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="col col-2">
            <img className="logo" src={siliconlogo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="homepage_body">
        <div>
          <img className="hero_image" src={zygonlogo} alt="zygonlogo" />
        </div>
        <div className="body_header">
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </h4>
        </div>
        <div className="body_links">
          <div className="links">
            <h3>Section 1</h3>
          </div>
          <div className="links">
            <h3>Section 2</h3>
          </div>
          <div className="links">
            <h3>Section 3</h3>
          </div>
          <div className="links">
            <h3>Section 4</h3>
          </div>
          <div className="links">
            <h3>Section 5</h3>
          </div>
        </div>
      </div>
      <div className="homepage_footer">
        <h4>Developed by SiliconTech</h4>
      </div>
    </div>
  );
}
