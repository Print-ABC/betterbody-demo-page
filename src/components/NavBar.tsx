import React from "react";
import "./common.css";
import "./NavBar.css";
import "./Button.css";
// import mainSiteLogo from '../../public/images/logo_mainsite.png';
import mainSiteLogo from './logo_mainsite.png';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = (props) => {

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
