import React from 'react'
import '../../css/Common.css'
import '../../css/ContentTwo.css'
import infographic from "../../images/infographic_1_2.jpg"

const ContentTwo: React.FC = (props) => {
  return (
    <div className="contentTwoWrapper">
      <h1>Ageing Gracefully Shouldn’t Be This Hard!</h1>
      <p>The subtle signs of aging skin can catch many ladies by surprise. Oftentimes, ladies only start to take their skincare routine more seriously after spotting their first wrinkle.</p>
      <p>By then the skin damage has already begun… and menopause amplifies the effects.</p>
      <p>The decline in estrogen levels can lead to a whole range of skin-related issues such as:</p>
      <img src={infographic} alt="Skin issues" />
    </div>
  )
}

export default ContentTwo
