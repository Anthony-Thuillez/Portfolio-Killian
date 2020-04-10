import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout-fr"
import ModelArea from "../components/modelArea"
import styled from "styled-components"

import img from "../images/brush.png"

const IndexPage = (props) => {

  return (
    <Layout location={props.location}>
      <SEO title="creation 3D / VFX" />
      <Wrapper>
        <div className="block-intro">
          <div className="content">
            <p
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >Salut</p>
            <h1
              className="title"
              data-sal="slide-left"
              data-sal-duration="1200"
              data-sal-easing="ease"
            >
              Je suis Killian Boucher,
              <br/>
              concepteur de 3D et d'effets spéciaux
            </h1>
          </div>
          <div className="presentation">
            <ModelArea />
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 160px 0;
  max-width: 1150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  @media screen and (max-width: 1198px) {
    padding: 160px 24px;
    max-width: none;
  }

  .block-intro {
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .content {
    margin: 90px 50px 0 114px;
    @media screen and (max-width: 940px) {
      margin: 0 0 0 60px;
    }
    @media screen and (max-width: 500px) {
      margin: 0;
    }

    .title {
      font-size: 20px;
      line-height: 36px;
    }

    p {
      margin-bottom: 20px;
      font-size: 60px;
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  .presentation {
    position: relative;
    width: 500px;
    height: 500px;
    background-image: url(${img});
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    @media screen and (max-width: 940px) {
      display: none;
    }
    &:before {
      z-index: -1;
      position: absolute;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      content: '';
      background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
    }
  }
`