import React from "react"
import Layout from "../components/layout-en"
import SEO from "../components/seo"
import Slider from "../components/slider/slider"

const ProjectsPage = (props) => {
  
  return (
    <Layout location={props.location}>
      <SEO title="Projects" />
      <Slider lang={props} />
    </Layout>
  )
}

export default ProjectsPage