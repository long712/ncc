import React from "react";
import "./index.css";

const SlideBar = () => {
  return (
    <div className="slide-bar-container">
      <ul style={{ padding: "0", margin: "0px" }} className="slider">
        <li className="slide-bar-item">
          <a href="#" className="nav-slide-bar-item">
            home
          </a>
        </li>
        <li className="slide-bar-item">
          <a href="#" className="nav-slide-bar-item">
            services
          </a>
        </li>
        <li className="slide-bar-item">
          <a href="#" className="nav-slide-bar-item">
            news
          </a>
        </li>
        <li className="slide-bar-item">
          <a href="#" className="nav-slide-bar-item">
            blog
          </a>
        </li>
        <li className="slide-bar-item">
          <a href="#" className="nav-slide-bar-item">
            contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SlideBar;
