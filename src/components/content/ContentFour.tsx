import React from "react";
import "../../css/Common.css";
import "../../css/ContentFour.css";
import infographic from "../../images/infographic_3.jpg";
import infographicTwo from "../../images/infographic_4_desktop.jpg";

const ContentFour: React.FC = (props) => {
  return (
    <div className="contentFourWrapper">
      <h1>Dry Skin, Dark Spots &amp; Fine Lines? Blame The Epidermis</h1>
      <div>
        <div>
          <p>Common Skin Issues Caused: “Age spots” &amp; Dry, flakey skin</p>
          <p>Why Does It Happen?</p>
          <p>
            Age spots” are caused by prolonged exposure to UV light from the sun
            - which may cause Vitamin E (a natural UV skin protector) levels to
            decrease.
          </p>
          <p>
            UV light may also increase the free radicals (cell-destroyers) in
            the skin’s epidermis level. This may lead to dryness and flaking as
            we age
          </p>
        </div>
        <img src={infographic} alt="UV rays on skin" />
      </div>
      <img src={infographicTwo} alt="Hyaluronic acid levels" />
      <p>
        Low hyaluronic acid levels is another big issue that causes dryness.
      </p>
      <p>
        Hyaluronic acid is a naturally-occurring substance in the skin that’s
        known for it’s amazing capacity to hold onto 1000x its weight in
        moisture.
      </p>
      <p>Simply put, it is what keeps the skin bouncy and supple.</p>
      <p>
        The bad news is that research suggests that hyaluronic acid levels
        decline over time… causing the skin to look pale and dry as years pass.
      </p>
    </div>
  );
};

export default ContentFour;
