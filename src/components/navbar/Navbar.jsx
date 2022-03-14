import React, { useState } from "react";
import "./navbar.css";

export const Navbar = ({ obj }) => {
  const [flag, setFlag] = useState();
  return (
    <div className="navbarMain">
      <div className="navbarWrapper" style={obj}>
        <div className="navbarLeft">
          <ul className="navbarLeftList">
            <li className="navbarLogo">
              <img src="https://i.ibb.co/xM6Vjq5/download.png" alt="Klara" />
            </li>
            <li
              onMouseOver={() => {
                setFlag((prev) => !prev);
              }}
            >
              Shop
            </li>
            <li
              onMouseOver={() => {
                setFlag(false);
              }}
            >
              How it Works
            </li>
            <li
              onMouseOver={() => {
                setFlag(false);
              }}
            >
              Pay in 4
            </li>
            <li
              onMouseOver={() => {
                setFlag(false);
              }}
            >
              The Shopping App
            </li>
            <li
              onMouseOver={() => {
                setFlag(false);
              }}
            >
              Help
            </li>
          </ul>
        </div>
        <div className="navbarRight">
          <div className="navbarRightLogin">
            <button className="navbarRightLoginBtn">LOG IN</button>
          </div>
          <div className="navbarRightApp">
            {" "}
            <button className="navbarRightAppBtn">GET THE APP</button>
          </div>
        </div>
      </div>
      <div>
        {" "}
        {flag ? (
          <div className="shopOption">
            <div className="col-3">
              <h3>Deals</h3>
              <h3>Trends</h3>
              <h3>Klarna Stores</h3>
              <h3>Browser Extension</h3>
              <h3>In-Stores</h3>
              <h3>Rewards Club</h3>
            </div>
            <div className="col-3">
              <h5>Categories</h5>
              <p>Auto</p>
              <p>Beauty</p>
              <p>Black owned Bussiness</p>
              <p>Clothes & Fashion</p>
              <p>Electronics</p>
              <p>Home</p>
              <p>Luxury</p>
              <p>Toys & Entertainment</p>
            </div>
            <div className="col-3">
              <h5>featured stores</h5>
              <div className="col-2">
                <div className="logo">
                  <img
                    src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
                    alt=""
                  />
                </div>
                <div>Bed Bath & Beyond</div>
              </div>
              <div className="col-2">
                <div className="logo">
                  <img
                    src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
                    alt=""
                  />
                </div>
                <div>Macy's</div>
              </div>
              <div className="col-2">
                <div className="logo">
                  <img
                    src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
                    alt=""
                  />
                </div>
                <div>Shepora</div>
              </div>
              <div className="col-2">
                <div className="logo">
                  <img
                    src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
                    alt=""
                  />
                </div>
                <div>H & M</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
