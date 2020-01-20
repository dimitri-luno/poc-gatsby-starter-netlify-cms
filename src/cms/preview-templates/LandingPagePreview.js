import React from 'react'
import PropTypes from 'prop-types'
import { LandingPageTemplate } from '../../templates/landing-page'

const LandingPagePreview = ({ entry, widgetFor }) => {
  return (
    <LandingPageTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LandingPagePreview
