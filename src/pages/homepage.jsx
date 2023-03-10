import React from "react";
import "../static/css/homepage.css";
import zygonlogo from "../static/svg/zygonlogo.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Homepage() {
  return (<>
    <Header />
    <div className="homepage">
      <div className="homepage_body">
        <div>
          <img className="hero_image" src={zygonlogo} alt="zygonlogo" />
        </div>
        <div className="body_header">
          <p>
            Zygon provides a platform for students to exhibit and develop their talents . This gives them the chance to explore their fields of interest beyond the classroom experience. Each year, a wide variety of artistic and other creative talents are identified and recognized through a two - day long series of performances.The medley of stalls and performances is a definite go. A colorful extravaganza of music, dance and drama which marks the high point of each academic year, make a vibrant college environment.
          </p>
        </div>
        <div className="body_links">
          <div className="links">
            <h2>Events</h2>
          </div>
          <div className="links">
            <h2>Gallery</h2>
          </div>
          <div className="links">
            <h2>FAQ</h2>
          </div>
          <div className="links">
            <h2>Team</h2>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
  </>
  );
}
