import React from 'react'
import '../../css/Common.css'
import '../../css/ContentThree.css'
import infographic from "../../images/infographic_cake_desktop.jpg"

const ContentThree: React.FC = (props) => {
  return (
    <div className="contentThreeWrapper">
      <h1>The Science Behind Menopausal Skin Issues - Why Some Ladies Look Older Than They Actually Are</h1>
      <p>The skin is made up of 3 main layers &amp; the health of each layer impacts the overall look and feel of our skin.</p>
      <p>During menopause, the fluctuating estrogen levels causes each layer to deteriorate over time:</p>
      <img src={infographic} alt="Skin layers comparison" />
    </div>
  )
}

export default ContentThree
