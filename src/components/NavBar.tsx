import React from "react";
import "../css/NavBar.css";
import "../css/Button.css";
import mainSiteLogo from '../images/logo_mainsite.png';

const NavBar: React.FC = (props) => {

  return (
    <div className="navBarWrapper">
      <img src={mainSiteLogo} alt="site logo" />
      <ul>
        <li><a href="#how-it-works" data-scroll>How It Works</a></li>
        <li><a href="#ingredients" data-scroll>Ingredients</a></li>
        <li><a href="#reviews" data-scroll>Reviews</a></li>
        <li><a href="#faq" data-scroll>FAQ</a></li>
        <li><a href="https://www.betterbodyco.cc/#smile-home">Claim Points</a></li>
      </ul>
      <button id="navbarBtn">Buy Now</button>
    </div>
  );
};

export default NavBar;
