import React from 'react'
import NavBar from './NavBar'
// import Footer from './Footer'
import './common.css'

interface LayoutProps {
//   className?: string
//   title: string
//   onBackBtnClick?: () => void
//   navBar?: React.ComponentProps<typeof NavBar>
//   footer?: React.ComponentProps<typeof Footer>
//   showFooter?: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
//   const { className, title, onBackBtnClick, navBar, footer, children, showFooter = true } = props
  const { children } = props

  return (
    // <Box>
    //   <div className={clsx(classes.root, className)}>
    //     <Helmet>
    //       <title>{title}</title>
    //     </Helmet>
    //     <Box className={classes.main}>
    //       <NavBar onBackBtnClick={onBackBtnClick} {...navBar} />
    //       <main>{children}</main>
    //       {showFooter && <Footer {...footer} />}
    //     </Box>
    //   </div>
    // </Box>
    <div className="layout">
        <NavBar />
        <main>{children}</main>
    </div>
  )
}

export default Layout
