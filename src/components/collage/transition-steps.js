import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import style from './transition-steps.module.css'

// Number 1
export default () => (
  <StaticQuery
    query={graphql`
      query {
        drawImage: file(relativePath: { eq: "10-sec-drawing-003.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sketchImage: file(relativePath: { eq: "sketch.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        dormImage: file(relativePath: { eq: "runaway-dorm-exterior-01.jpg" }) {
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
        <h1 className={ style.runawayTwo }>Runaway</h1>
        <Img className={ style.draw } fluid={ data.drawImage.childImageSharp.fluid } alt="10 second drawing" />
        <Img className={ style.sketch } fluid={ data.sketchImage.childImageSharp.fluid } alt="a processing sketch" />
        <Img className={ style.dorm } fluid={ data.dormImage.childImageSharp.fluid } alt="hellfire" />
        <div className={ style.boxOne }></div>
        <ul>
          <li className={ style.runaway }>Runaway</li>
        </ul>
      </section>
      <section className={ style.collageInfo }>
        <p className={ style.meta }>
          Transition steps
        </p>
      </section>
      </>
    )}
  />
  
)
