import React from 'react'
import '../css/common.css'


interface ContentProps {
  item: any;
}

const Content: React.FC<ContentProps> = (props) => {
  const { children } = props

  return (
    <div>
        <main>{children}</main>
    </div>
  )
}

export default Content
