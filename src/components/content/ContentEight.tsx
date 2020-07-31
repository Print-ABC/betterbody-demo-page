import React from "react";
import "../../css/Common.css";
import "../../css/ContentEight.css";
import photo from "../../images/radiancy_heroshot_1.2.jpg"
import ingredientOne from "../../images/ingredients_1.1.png";
import ingredientTwo from "../../images/ingredients_1.2.png";
import ingredientThree from "../../images/ingredients_1.3.png";
import ingredientFour from "../../images/ingredients_1.4.png";
import ingredientFive from "../../images/ingredients_1.5.png";
import ingredientSix from "../../images/ingredients_1.6.png";
import ingredientSeven from "../../images/ingredients_1.7.png";
import ingredientEight from "../../images/ingredients_1.8.png";
import ingredientNine from "../../images/ingredients_1.9.png";

const ContentEight: React.FC = (props) => {
  return (
    <div className="contentEightWrapper">
      <h1>We Got Your Back, Sister!</h1>
      <h1>Repair, Hydrate &amp; Glow At 50 With Radiancy</h1>
      <img src={photo} alt="Radiancy heroshot" />
      <h3>Triple Action, Skin Protection.</h3>
      <p>Meet Radiancy - a marine collagen &amp; probiotic supplement that ladies who want smooth &amp; supple skin love to add to their daily routine when they need the extra support to feel lovely again. With Cherry Blossom Extract for added smoothening effect, anyone can look and feel their best.</p>
      <div>
          <div>
            <h6>Low-molecular-weight, Type I Marine Collagen</h6>
            <p>Probably the most effective form of collagen for ladies who want to age gracefully. It’s 60x smaller and more easily absorbed than regular collagen peptides. Helps combat wrinkles and sagging.</p>
            <img src={ingredientOne} alt="Low-molecular-weight, Type I Marine Collagen" />
          </div>
          <div>
            <h6>Cherry Blossom Extract</h6>
            <p>A fantastic anti-glycation herb that keeps glycation at bay — ensuring collagen in the skin remains healthy and intact for smooth skin.</p>
            <img src={ingredientTwo} alt="Cherry Blossom Extract" />
          </div>
          <div>
            <h6>B. Coagulans</h6>
            <p>Studies suggest it promotes production anti-free radical chemicals &amp; supports production of ceramides — which combats sagging and wrinkles.</p>
            <img src={ingredientThree} alt="B. Coagulans" />
          </div>
          <div>
            <h6>L. Reuteri</h6>
            <p>Studies have shown that it can manage skin issues such as eczema, acne and spots.</p>
            <img src={ingredientFour} alt="L. Reuteri" />
          </div>
          <div>
            <h6>L. Lactis</h6>
            <p>Supports skin hydration and elasticity. Also promotes hypodermic (Skin base) health for better regulation of nutrients to skin cells.</p>
            <img src={ingredientFive} alt="L. Lactis" />
          </div>
          <div>
            <h6>Vitamin C</h6>
            <p>A potent antioxidant which aids in our skin’s natural regeneration process. Accelerates reparation of damaged cells by neutralising free radicals.</p>
            <img src={ingredientSix} alt="Vitamin C" />
          </div>
          <div>
            <h6>Vitamin E</h6>
            <p>Protects against the harmful effects of UV rays… slowing down the accumulation of free radicals in the skin</p>
            <img src={ingredientSeven} alt="Vitamin E" />
          </div>
          <div>
            <h6>Ceramides</h6>
            <p>Restores aging skin’s moisture retention ability for that fresh,dewy glow.</p>
            <img src={ingredientEight} alt="Ceramides" />
          </div>
          <div>
            <h6>Hyaluronic Acid</h6>
            <p>Known for it’s amazing capacity to hold onto 1000x its weight in moisture. Keeps skin bouncy and supple.</p>
            <img src={ingredientNine} alt="Hyaluronic Acid" />
          </div>
        </div>
    </div>
  );
};

export default ContentEight;
