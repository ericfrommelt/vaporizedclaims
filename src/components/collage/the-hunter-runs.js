import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import style from './the-hunter-runs.module.css'

// Number 3
export default () => (
  <StaticQuery
    query={graphql`
      query {
        planeImage: file(relativePath: { eq: "the-cornfield-bomber-usaf-f106a-delta-dart.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        moonImage: file(relativePath: { eq: "26_s1m-1920.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <section className={style.collageWrap}>
        <Img className={ style.plane } fluid={ data.planeImage.childImageSharp.fluid } alt="lay down" />
        <Img className={ style.moon } fluid={ data.moonImage.childImageSharp.fluid } alt="0" />
        <div className={ style.orangeCircle }></div>
        <div className={ style.orangeCircleTwo }></div>
        <div className={ style.block }></div>
        <div className={ style.rectangle__copper }></div>
        <div className={ style.box__orange }></div>
        <div className={ style.box__blue }></div>
        <p className={ style.numbers }>number determines outcome</p>
        <h1 className={ style.exp }>exposure</h1>
      </section>
      <section className={ style.collageInfo }>
        <p className={ style.meta }>
          The hunter runs
        </p>
      </section>
      </>
    )}
  />

)
