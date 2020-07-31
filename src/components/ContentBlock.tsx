import React from 'react'
import '../css/Common.css'

const Content: React.FC = (props) => {
  const { children } = props

  return (
    <div className="contentBlockWrapper">
      {children}
    </div>
  )
}

export default Content
