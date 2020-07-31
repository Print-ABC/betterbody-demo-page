import React from "react"
import "../../css/ContentOne.css"

interface PhotoTestimonyProps {
  src?: string;
  alt?: string;
  name?: string;
  statement?: string;
}

const PhotoTestimony: React.FC<PhotoTestimonyProps> = (props) => {
  const { src, alt, name, statement } = props;

  return (
    <div className="testimony">
      <img src={src} alt={alt} />
      <p>{statement}</p>
      <p>- {name}</p>
    </div>
  );
};

export default PhotoTestimony;
