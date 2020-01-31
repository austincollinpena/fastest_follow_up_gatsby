import React from "react"
import "./blogs.scss"
import backgroundRight from "../../media/angled-decoration.svg"
import backgroundLeft from "../../media/background-left.svg"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export const BlogList = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  snippet
                  title
                  icon {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="blogs">
          {console.log(
            data.allMarkdownRemark.edges.map(post => post.node.frontmatter.path)
          )}

          {data.allMarkdownRemark.edges.map((post, index) => (
            <Link id={post.node.id} to={post.node.frontmatter.path}>
              <div
                style={
                  index % 2 === 0
                    ? { backgroundImage: "url(" + backgroundLeft + ")" }
                    : { backgroundImage: "url(" + backgroundRight + ")" }
                }
                className="blog-list-container center"
              >
                <h3 className="secondary-title semi-bold ">
                  {post.node.frontmatter.title}
                </h3>
                <p className="body-text">READ THIS BLOG IF</p>
                <p className="subtitle semi-bold">
                  {post.node.frontmatter.snippet}
                </p>
                <div className="gatsby-image">
                <Img fluid={post.node.frontmatter.icon.childImageSharp.fluid} />
                </div>
                <p className="click-to-read body-text">Click To Read</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    />
  )
}
