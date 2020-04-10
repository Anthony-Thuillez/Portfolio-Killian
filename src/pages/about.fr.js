import React from "react"
import Layout from "../components/layout-fr"
import SEO from "../components/seo"
import styled from "styled-components"

const AboutPage = (props) => {
  
  return (
    <Layout location={props.location}>
        <SEO title="A propos" />
        <Wrapper>
          <Title
            data-sal="slide-left"
            data-sal-duration="400"
            data-sal-easing="ease"
          >
            À propos <span>de moi</span>
          </Title>
          <p
            className="text"
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease"
          >
            Basé dans la belle ville de Paris, j’explore actuellement les beautés de la 3D. J’ai étudié 2 ans à <a href="https://www.esra.edu/formations/cinema-television/esra-bac-3-ecole-de-cinema/?utm_source=google_cpc&utm_campaign=search_esra_marque&gclid=CjwKCAjwpqv0BRABEiwA-TySwW9cWYVYHKB6Ylv86ep1j9CMjp2O5HpnhdzQ1cuDzZL3ABOehZyfehoC-isQAvD_BwE" target="_blank" rel="noopener noreferrer">l'Esra 3D</a> de Paris et j’étudie actuellement depuis 1 an à l’école <a href="http://www.vfx-workshop.com/?gclid=CjwKCAjwpqv0BRABEiwA-TySwRo_80HJj5HWFjiNtKxgZFERuvQFbL-TpcRZLYhZXwo4_gLSGHvVdxoC8EcQAvD_BwE" target="_blank" rel="noopener noreferrer">VFX Workshop</a> de Paris.
          </p>
          <p
            className="text"
            data-sal="slide-left"
            data-sal-duration="1200"
            data-sal-easing="ease"
          >
            Mon entraînement m’a permis de développer mon sens artistique et à découvrir une passion pour le modeling 3D et l’édition vidéo.
          </p>
          <Faq
            data-sal="slide-left"
            data-sal-duration="1400"
            data-sal-easing="ease"
          >
            <p className="question">- Pourquoi travailler avec moi ?</p>
            <p className="answer">J’ai déjà travaillé en équipe toujours dans la bonne humeur et professionnellement très attentif et ouvert à toute demande.</p>
            <p className="question">- Pourquoi suis-je différent ?</p>
            <p className="answer">J'adore découvrir et créer de nouvelles choses sur différents nouveaux logiciels.</p>
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
            >Me contacter</a>
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