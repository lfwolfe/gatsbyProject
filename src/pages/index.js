import React from "react"
import { Layout } from "../components/Layout"
import { SimpleHero } from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import { About } from "../components/Home/About"
import { Services } from "../components/Home/Services"
import { Button2 } from "../components/examples/Button2"
export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="ndustry. Lorem Ipsum has been the industry's standard"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
    <Button2 label="Test Button" />
  </Layout>
)
