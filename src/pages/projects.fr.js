import React from "react"
import Layout from "../components/layout-fr"
import SEO from "../components/seo"
import Slider from "../components/slider/slider"

const ProjectsPage = (props) => {
  
  return (
    <Layout location={props.location}>
      <SEO title="Projets" />
      <Slider lang={props} />
    </Layout>
  )
}

export default ProjectsPage