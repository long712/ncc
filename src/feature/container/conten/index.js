import React from "react";
import "./index.css";
import icon1 from "../../../asset/img/css-icon 1.png";
import icon2 from "../../../asset/img/html-icon 1.png";
import icon3 from "../../../asset/img/url-icon 1.png";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content">
        <div className="content-above">
          <b style={{ fontSize: "18px", fontWeight: "700" }}>
            Lorem ipsum dolor sit asmet?
          </b>
          <p
            style={{
              width: "972px",
              margin: "auto",
              paddingTop: "18px",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
        <div className="content-below">
          <div style={{ textAlign: "start", maxWidth: "470px" }}>
            <b className="title-content-below">Lorem ipsum dolor sit amet</b>
            <p style={{ paddingTop: "18px" }}>
              <div className="nav-content-below">
                <img
                  src={icon1}
                  width="128px"
                  style={{ paddingRight: "16px", paddingBottom: "6px" }}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
              </div>
              <p>
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                est ullamcorper id. Aenean consequat condimentum velit ut
                tempor. Nam porta massa in metus bibendum congue. Pellentesque
                ultrices vestibulum mattis
              </p>
            </p>
          </div>
          <div
            style={{
              textAlign: "start",
              maxWidth: "470px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <b className="title-content-below">Lorem ipsum dolor sit amet</b>
            <p style={{ paddingTop: "18px" }}>
              <div className="nav-content-below">
                <img
                  src={icon2}
                  width="128px"
                  style={{ paddingRight: "16px", paddingBottom: "6px" }}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
              </div>
              <p>
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                est ullamcorper id. Aenean consequat condimentum velit ut
                tempor. Nam porta massa in metus bibendum congue. Pellentesque
                ultrices vestibulum mattis
              </p>
            </p>
          </div>
          <div
            style={{
              textAlign: "start",
              maxWidth: "470px",
            }}
          >
            <b className="title-content-below">Lorem ipsum dolor sit amet</b>
            <p style={{ paddingTop: "18px" }}>
              <div className="nav-content-below">
                <img
                  src={icon3}
                  width="128px"
                  style={{ paddingRight: "16px", paddingBottom: "6px" }}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
              </div>
              <p>
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                est ullamcorper id. Aenean consequat condimentum velit ut
                tempor. Nam porta massa in metus bibendum congue. Pellentesque
                ultrices vestibulum mattis
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
