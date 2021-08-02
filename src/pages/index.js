import * as React from 'react'
import Layout from '../components/layout.js'
import style from './index.module.css'
import AnxiousTimes from '../components/collage/anxious-times.js'
import RavageSpikes from '../components/collage/ravage-spikes'
import TheHunterRuns from '../components/collage/the-hunter-runs'
import TransitionSteps from '../components/collage/transition-steps'

const IndexPage = () => {
  return (
    <Layout>
      <div className={ style.collageDisplay }>
        <div>
          <AnxiousTimes />
        </div>
        <div>
          <RavageSpikes />
        </div>
        <div>
          <TheHunterRuns />
        </div>
        <div>
          <TransitionSteps />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage