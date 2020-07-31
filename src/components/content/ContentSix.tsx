import React from "react";
import "../../css/Common.css";
import "../../css/ContentSix.css";
import infographic from "../../images/infographic_7.jpg";
import infographicTwo from "../../images/infographic_8_desktop.jpg";
import infographicThree from "../../images/infographic_9_desktop.jpg";

const ContentSix: React.FC = (props) => {
  return (
    <div className="contentSixWrapper">
      <h1>If Only More Ladies Knew This…</h1>
      <h1>They Could Easily Enjoy Radiant And Supple Skin!</h1>
      <p>
        Many ladies use skincare products that focus on the epidermis (outer
        skin), with a small percentage also focussing on the dermis (middle skin
        layer).
      </p>
      <img src={infographic} alt="Skin dermis layer" />
      <p>
        However, did you know that the hypodermis (Skin base) layer is probably
        the biggest influencer of skin health?
      </p>
      <p>Yet, so few ladies focus on this.</p>
      <p>
        The hypodermis serves as the “bridge” between the skin and major blood
        vessels in the body.
      </p>
      <p>When the hypodermis is healthy, there is:</p>
      <img src={infographicTwo} alt="Healthy hypodermis" />
      <p>… Giving our skin that radiant glow and suppleness.</p>
      <p>
        However, research indicates that hypodermic health declines over time as
        we age.
      </p>
      <p>And a HUGE contributor to this is:</p>
      <p>Our gut health.</p>
      <p>
        However, during menopause, gut health often declines as the low estrogen
        levels leads to higher chances of inflammation:
      </p>
      <h1 style={{ marginTop: 16 }}>
        Low Estrogen Levels = Gut Inflammation = Poor Absorption of Vitamins,
        Minerals &amp; Antioxidants Needed to Keep Skin Looking Healthy and
        Vibrant
      </h1>
      <img src={infographicThree} alt="Leaky gut equals sry saggy skin" />
      <p>
        This may lead to inflammation of the hypodermis — which in turn can
        cause:
      </p>
      <p>- Poor distribution of nutrients to the skin cells</p>
      <p>- Lower collagen production (leads to sagging)</p>
      <p>- Lower hyaluronic acid production (leads to dry skin)</p>
      <p>- Higher glycation (leads to wrinkles and uneven skin)</p>
      <p>
        … all of which makes the skin lose its vibrancy, firmness and
        youthfulness.
      </p>
    </div>
  );
};

export default ContentSix;
