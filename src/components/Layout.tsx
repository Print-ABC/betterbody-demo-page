import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../css/common.css'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <div className="layout">
        <NavBar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
