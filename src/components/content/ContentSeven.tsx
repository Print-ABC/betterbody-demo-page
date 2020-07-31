import React from "react";
import "../../css/Common.css";
import "../../css/ContentSeven.css";
import Button from "../Button";
import iconOne from "../../images/icons_1.1.png";
import iconTwo from "../../images/icons_1.2.png";
import iconThree from "../../images/icons_1.3.png";

const ContentSeven: React.FC = (props) => {
  return (
    <div className="contentSevenWrapper">
      <h1>
        Thankfully, There’s A Natural Way To Support Gut Health For Radiant,
        Supple Skin…
      </h1>
      <p>And nothing boosts gut health better than probiotics!</p>
      <p>
        Lots of ladies know that probiotics are great for gut health, immunity
        and digestive function…
      </p>
      <p>
        But not many know that there are SPECIAL strains that have
        skin-restoration capabilities:
      </p>
      <div>
        <div>
          <img src={iconOne} alt="Lactobacillus reuteri (L.Reuteri)" />
          <h6>Lactobacillus reuteri (L.Reuteri)</h6>
          <p>
            is found naturally in our digestive tract. Additional studies have
            shown that it can manage skin issues such as eczema.
          </p>
        </div>
        <div>
          <img src={iconTwo} alt="Lactobacillus lactis (L.Lactis)" />
          <h6>Lactobacillus lactis (L.Lactis)</h6>
          <p>
            has been shown to support skin hydration and elasticity… and most
            importantly, promote hypodermic (Skin base) health for better
            regulation of nutrients to skin cells.
          </p>
        </div>
        <div>
          <img src={iconThree} alt="Bacillus coagulans (B. Coagulans)" />
          <h6>Bacillus coagulans (B. Coagulans)</h6>
          <p>
            is a robust probiotic found in small amounts in fermented foods.
            Research indicates consumption of B. Coagulans produces anti-free
            radical chemicals &amp; supports production of ceramides — which
            combats sagging and wrinkles.
          </p>
        </div>
      </div>
      <Button id="tryRadiancyBtn" value="Try Radiancy" />
    </div>
  );
};

export default ContentSeven;
