import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import style from './ravage-spikes.module.css'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        plantImage: file(relativePath: { eq: "plant-01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        laImage: file(relativePath: { eq: "_DSF0455.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        drawingImage: file(relativePath: { eq: "10-sec-drawing-002.png" }) {
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
      <section className={ style.collageWrap }>
        <Img className={ style.plant } fluid={ data.plantImage.childImageSharp.fluid } alt="anxious about things" />
        <Img className={ style.scribble } fluid={data.drawingImage.childImageSharp.fluid } alt="10 second drawing" />
        <Img className={ style.echopark } fluid={data.laImage.childImageSharp.fluid } alt="echo park 2012" />
        <h1 className={ style.ravage }>Ravage</h1>
        <p className={ style.vaporized }>vaporized</p>
        <p className={ style.claims }>claims</p>
        <div className={ style.circle }></div>
        <div className={ style.barGreen }></div>
        <div className={ style.rectangle__copper }></div>
        <h2 className={ style.a }>A</h2>
      </section>
      <section className={ style.collageInfo }>
        <p className={ style.meta }>
          Ravage spikes
        </p>
       <p className={ style.meta }>
         Last updated: 01.03.2021
       </p>
      </section>
      </>
    )}
  />
)
