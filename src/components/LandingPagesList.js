import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class LandingPagesList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: landingPages } = data.allMarkdownRemark

    return (
      <ul>
        {landingPages &&
          landingPages.map(({ node: landingPage }) => (
            <li key={landingPage.id}>
              <p>
                <Link
                  className="title"
                  to={landingPage.fields.slug}
                >
                  {landingPage.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span>
                  {landingPage.frontmatter.date}
                </span>
              </p>
              <p>
                {landingPage.excerpt}
                <br />
                <br />
                <Link className="button" to={landingPage.fields.slug}>
                  Go To Landing Page →
                </Link>
              </p>
            </li>
          ))}
      </ul>
    )
  }
}

LandingPagesList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LandingPagesListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "landing-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <LandingPagesList data={data} count={count} />}
  />
)
