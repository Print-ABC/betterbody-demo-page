import React from "react";
import "../../css/Common.css";
import "../../css/ContentTen.css";
import Button from "../Button";
import infographic from "../../images/infographic_2.jpg";

const ContentTen: React.FC = (props) => {
  return (
    <div className="contentTenWrapper">
      <h1>
        Why Most Collagen Products Don’t Work For Ladies Going Through Menopause
        (In The Long Run)
      </h1>
      <img src={infographic} alt="Collagen products" />
      <p>
        - Many collagen products are only paying attention to the top 2 layers
        of the skin.
      </p>
      <p>
        This means if there aren’t skin-specific probiotic strains in those
        products to support hypodermis nutrient absorption, those skin creams or
        collagen can only give a temporary lift before the skin starts sagging
        again.
      </p>
      <p>
        Most ladies who truly care about their skin want a long-term solution.
      </p>
      <p>NOT a band-aid.</p>
      <p>
        That’s why we target the ROOT CAUSE of menopausal skin issues… i.e poor
        gut health.
      </p>
      <p>
        We added in specific probiotic strains that support gut health and
        better absorption of vitamins, minerals and antioxidants needed to keep
        skin looking healthy &amp; vibrant.
      </p>
      <p>And we didn’t just stop there...</p>
      <p>
        Radiancy also includes cherry blossom extract that supports “glycation”
        (the breakdown of skin structure due to high levels of sugar).
      </p>
      <p>
        This ensures that ladies who are transitioning to a healthier diet will
        see enhanced benefits and get faster results as they make Radiancy part
        of their skin &amp; health routine.
      </p>
      <Button id="tryRadiancyBtn" value="Try Radiancy" />
    </div>
  );
};

export default ContentTen;
