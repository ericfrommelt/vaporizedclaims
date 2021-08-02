import React from 'react'
import { Helmet } from 'react-helmet'
import style from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Helmet>
        <html lang="en" />
        <title>Vaporized Claims</title>
        <link rel="stylesheet" href="https://cloud.typography.com/7804816/7505032/css/fonts.css" />
      </Helmet>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout