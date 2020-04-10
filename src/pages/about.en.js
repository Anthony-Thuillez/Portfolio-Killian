import React from "react"
import Layout from "../components/layout-en"
import SEO from "../components/seo"
import styled from "styled-components"

const AboutPage = (props) => {
  
  return (
    <Layout location={props.location}>
        <SEO title="About" />
        <Wrapper>
          <Title
            data-sal="slide-left"
            data-sal-duration="400"
            data-sal-easing="ease"
          >
            About <span>me</span>
          </Title>
          <p
            className="text"
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease"
          >
            Based in the beautiful city of Paris, I'am currently exploring the beauties of 3D, I studied 2 years at <a href="https://www.esra.edu/formations/cinema-television/esra-bac-3-ecole-de-cinema/?utm_source=google_cpc&utm_campaign=search_esra_marque&gclid=CjwKCAjwpqv0BRABEiwA-TySwW9cWYVYHKB6Ylv86ep1j9CMjp2O5HpnhdzQ1cuDzZL3ABOehZyfehoC-isQAvD_BwE" target="_blank" rel="noopener noreferrer">Esra 3D</a>, currently studing 1 year at <a href="http://www.vfx-workshop.com/?gclid=CjwKCAjwpqv0BRABEiwA-TySwRo_80HJj5HWFjiNtKxgZFERuvQFbL-TpcRZLYhZXwo4_gLSGHvVdxoC8EcQAvD_BwE" target="_blank" rel="noopener noreferrer">VFX Workshop</a>.
          </p>
          <p
            className="text"
            data-sal="slide-left"
            data-sal-duration="1200"
            data-sal-easing="ease"
          >
            My training allowed me to develop my artistic sense, and to discover a passion for 3D modeling and video editing.
          </p>
          <Faq
            data-sal="slide-left"
            data-sal-duration="1400"
            data-sal-easing="ease"
          >
            <p className="question">- Why should you work with me ?</p>
            <p className="answer">I already worked in a team on projects, always in a good mood, professional and very attentive to the requests.</p>
            <p className="question">- Why am I different ?</p>
            <p className="answer">I love discovering and creating new things, on different new software.</p>
          </Faq>
          <p
            className="text contact"
            data-sal="slide-left"
            data-sal-duration="1600"
            data-sal-easing="ease"
          >
            <a
              href="mailto:killian.bot44@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
            >Contact me</a>
          </p>
        </Wrapper>
    </Layout>
  )
}

export default AboutPage

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 547px;
  @media screen and (max-width: 600px) {
    padding: 150px 24px;
    max-width: none;
  }
  .text {
    margin-bottom: 30px;
    line-height: 28px;
    font-size: 16px;
    &.contact {
      margin-top: 80px;
      text-align: right;
    }
    a {
      text-decoration: underline;
    }
  }
`

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  span {
    font-weight: 300;
  }
`

const Faq = styled.div`
  margin-top: 50px;
  .question {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 36px;
    color: #777777;
  }
  .answer {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 28px;
  }
`