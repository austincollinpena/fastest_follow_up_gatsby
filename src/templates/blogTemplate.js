import React from "react"
import "./blogpage.scss"
import "./BlogCopy.scss"
import { graphql } from "gatsby"
import SEO from "../components/internals/SEO"
import { Nav } from "../components/shared-components/Nav"

export default function Template({ data, }) {
  const { markdownRemark } = data // data.markdown whatever holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.metaDescription}/>
      <Nav />
      <main>
        <div id="blog-header-style">
          <div id="blog-header-clippath" />
        </div>
        <div className="blog-shadow-provider">
          <div className="blog-title-container">
            <h1 id="blog-title" className="blog-title center white">
              {frontmatter.title}
            </h1>
            <div className="date-container">
              <p className="bold body-text orange center">
                Published:{" "}
                {frontmatter.date}
              </p>
              {frontmatter.dateUpdated ? (
                <p className="bold body-text orange center">
                  Last Updated:{" "}
                    {frontmatter.dateUpdated}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </>
  )
}
export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                metaDescription
                dateUpdated(formatString: "MMMM DD, YYYY")
            }
        }
    }
`
