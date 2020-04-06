import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
export const Header = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(getSiteData)

  return (
    <div>
      <h1>title:{title}</h1>
      {/* <h1>author: {data}</h1> */}
      <h1>description: {description}</h1> */}
    </div>
  )
}
