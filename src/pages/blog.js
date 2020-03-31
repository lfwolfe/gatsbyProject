import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/Layout"

export default function blog() {
  return (
    <Layout>
      hello from blog <Link to="/">back home</Link>
    </Layout>
  )
}
