import React from "react";
import "../../css/Common.css";
import "../../css/ContentFive.css";
import infographic from "../../images/infographic_5.jpg";
import infographicTwo from "../../images/infographic_6.jpg";

const ContentFive: React.FC = (props) => {
  return (
    <div className="contentFiveWrapper">
      <h1>Deep Sagging &amp; Wrinkles? It’s Likely Your Dermis...</h1>
      <p>Common Skin Issues Caused: “Age spots” &mp; Dry, flakey skin</p>
      <p>Why Does It Happen?</p>
      <p>
        Wrinkles and sagging skin are a result of 2 factors in the dermis layer:
      </p>
      <div>
        <img src={infographic} alt="Collagen levels" />
        <div>
          <p>1. Low collagen levels</p>
          <p>
            If the skin was a mattress, collagen are the springs that are
            holding it up. The higher the number of springs, the more even the
            surface of the mattress.
          </p>
          <p>
            However, as we age, collagen levels drop… which leads to lesser
            support to hold up the skin.
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>2. High glycation levels</p>
          <p>Glycation is one of the main causes of skin aging.</p>
          <p>
            It occurs when excess sugar we ingest reacts with collagen - and
            binds to it.
          </p>
          <p>
            It’s like rust coating the springs (collagen) in the mattress
            (skin), and over time, the springs get destroyed — leading to uneven
            support for the skin.
          </p>
          <p>
            Low collagen and high glycation collectively lead to deep wrinkles
            and sagging skin as we age.
          </p>
        </div>
        <img src={infographicTwo} alt="Glycation levels" />
      </div>
    </div>
  );
};

export default ContentFive;
