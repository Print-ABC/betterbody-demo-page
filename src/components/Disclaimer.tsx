import React from "react";
import "../css/Disclaimer.css";
import "../css/Button.css";
import Button from "./Button";

const Disclaimer: React.FC = (props) => {
  return (
    <div className="disclaimerWrapper">
      <h1>Disclaimer</h1>
      <p>
        These statements have not been evaluated by the Food and Drug
        Administration. This product is not intended to diagnose, treat, cure or
        prevent any diseases. The testimonials presented apply only to the
        individuals depicted, cannot be guaranteed, and should not be considered
        typical. Every testimonial on this website is from a real customer who
        used the product Radiancy, and/or nutrition advice listed on the
        website. Results were self-reported by the customer. You should assume
        that any results shown in testimonials, advertisements, stories, blog
        posts, articles, forums or anywhere else on this site or our associated
        websites are not typical. Results may vary from person to person.
      </p>
      <Button id="seeRefBtn" value="Click Here To See References" />
    </div>
  );
};

export default Disclaimer;
