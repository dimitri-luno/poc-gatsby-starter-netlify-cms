import React from 'react'

import Layout from '../../components/Layout'
import LandingPagesList from '../../components/LandingPagesList'

export default class LandingPagesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>
            List of Landing Pages
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <LandingPagesList />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
