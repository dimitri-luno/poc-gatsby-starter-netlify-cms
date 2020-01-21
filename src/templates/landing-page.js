import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LandingPageTemplate = ({
    content,
    contentComponent,
    description,
    headerimage,
    subtitle,
    title,
}) => {
    const LandingPageContent = contentComponent || Content

    return (
      <div className="content">
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!headerimage.childImageSharp ? headerimage.childImageSharp.fluid.src : headerimage
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
          >
            <div class="title">
              <h1>{title}</h1>
              <LandingPageContent content={subtitle} />
            </div>
            <div class="landing-page ln-signup-email">
              <h3>Sign up form</h3>
              <form action="https://staging.luno.com/en/signup" method="GET" _lpchecked="1">
                <div class="ln-input go-template-input-wrapper">
                  <label for="email" id="ln-email-label">Email
                    <div>
                      <input type="email" name="email" autofocus="" id="ln-email-input" placeholder="Email" required=""></input>
                    </div>
                  </label>
                </div>
                <button type="submit" class="form-button">Sign up</button>
              </form>
            </div>
          </div>
          <p>{description}</p>
          <LandingPageContent content={content} />
        </div>
    )
}

LandingPageTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    headerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    subtitle: PropTypes.string,
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
          headerimage={post.frontmatter.headerimage}
          subtitle={post.frontmatter.subtitle}
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
          subtitle
          headerimage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  `
  