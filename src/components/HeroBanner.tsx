import React from "react";
import "../css/HeroBanner.css";
import Button from "./Button";

const NavBar: React.FC = (props) => {
  return (
    <div className="heroBanner">
      <Button id="tryRadiancyBtn" value="Try Radiancy" />
    </div>
  );
};

export default NavBar;
