import React from "react";
import "../../css/Common.css";
import "../../css/ContentOne.css";
import PhotoTestimony from "./PhotoTestimony";
import testimonyOne from "../../images/woman_1.jpg";
import testimonyTwo from "../../images/woman_2.jpg";
import testimonyThree from "../../images/woman_3.jpg";

const ContentOne: React.FC = (props) => {
  return (
    <>
      <h1>
        Why Women All Around The World Are Raving About This New
        Probiotic-Marine Collagen
      </h1>
      <div className="contentOneWrapper">
        <PhotoTestimony
          src={testimonyOne}
          alt="Testimony 1"
          name="Sharon Young"
          statement="Great for flakey skin!"
        />
        <PhotoTestimony
          src={testimonyTwo}
          alt="Testimony 2"
          name="Annette xx"
          statement="Finally a capsule! No more fishy smells"
        />
        <PhotoTestimony
          src={testimonyThree}
          alt="Testimony 3"
          name="Kate Harvey"
          statement="Time to say bye to the lines under my eyes &amp; around my mouth!"
        />
      </div>
    </>
  );
};

export default ContentOne;
