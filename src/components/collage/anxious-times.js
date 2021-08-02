import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import style from './anxious-times.module.css'

// Number 1
export default () => (
  <StaticQuery
    query={graphql`
      query {
        flowerImage: file(relativePath: { eq: "flower_001.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        drawingImage: file(relativePath: { eq: "10-sec-drawing-001.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bellevueImage: file(relativePath: { eq: "bellevue-beer.jpg" }) {
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
        <Img className={ style.bellevue } fluid={ data.bellevueImage.childImageSharp.fluid } alt="troubled monument" />
        <Img className={ style.drawingOne } fluid={ data.drawingImage.childImageSharp.fluid } alt="drawing" />
        <Img className={ style.flower } fluid={ data.flowerImage.childImageSharp.fluid } alt="flower" />
        <div className={ style.typeWrapper }>
          <h1 className={ style.top }>Anxious Times</h1>
          <h1 className={ style.bottom }>Anxious Times</h1>
        </div>
        <div className={ style.rectangle__copper }></div>
        <div className={ style.box__orange }></div>
        <div className={ style.box__blue }></div>
      </section>
      <section className={ style.collageInfo }>
        <p className={ style.meta }>
          Anxious times
        </p>
      </section>
      </>
    )}
  />
  
)
