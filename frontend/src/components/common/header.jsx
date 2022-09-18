import React from "react";
import Top_img from "../../assets/img/top_img.png";
import logo from "../../assets/img/Hunger-Captian-logo.png";
import divider from "../../assets/img/divider.png";





const Header = () => {
  return (
    <div>
      <header>
        <div className="main-img">
          <img src={Top_img} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="slogan">
          <h2>
            Good food is <br />
            The Foundation of <br />
            <span style={{color:"#E1A700"}}>GENUINE HAPPINESS</span>
          </h2>
        </div>
        <div className="divider">
          <img src= {divider} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
