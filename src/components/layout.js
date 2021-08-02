import React from 'react'
import { Helmet } from 'react-helmet'
import style from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Helmet>
        <html lang="en" />
        <title>Vaporized Claims</title>
        <link rel="stylesheet" href="https://use.typekit.net/cni2rpi.css"></link>
        <link rel="stylesheet" href="https://cloud.typography.com/7804816/6709192/css/fonts.css" />
      </Helmet>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout