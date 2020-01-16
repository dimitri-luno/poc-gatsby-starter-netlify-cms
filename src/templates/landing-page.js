import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LandingPageTemplate = ({
    content,
    contentComponent,
    description,
    title,
}) => {
    const LandingPageContent = contentComponent || Content

    return (
        <section className="section">
            <h1>{title}</h1>
            <p>{description}</p>
            <LandingPageContent content={content} />
        </section>
    )
}

LandingPageTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
  }

  const LandingPage = ({ data }) => {
    const { markdownRemark: post } = data
  
    return (
      <Layout>
        <LandingPageTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          title={post.frontmatter.title}
        />
      </Layout>
    )
  }
  
  LandingPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  }
  
  export default LandingPage
  
  export const pageQuery = graphql`
    query LandingPageByID($id: String!) {
      markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  `
  