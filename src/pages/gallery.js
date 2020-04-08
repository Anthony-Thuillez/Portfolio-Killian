import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import MontagneVideo from "../images/Montagne.mp4"

const GalleryPage = () => {

    const data = useStaticQuery(graphql`
        query Images {
            image1: file(relativePath: {eq: "gallery/01.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image2: file(relativePath: {eq: "gallery/02.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image3: file(relativePath: {eq: "gallery/03.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image4: file(relativePath: {eq: "gallery/04.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image5: file(relativePath: {eq: "gallery/05.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image6: file(relativePath: {eq: "gallery/06.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image7: file(relativePath: {eq: "gallery/07.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image8: file(relativePath: {eq: "gallery/08.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image9: file(relativePath: {eq: "gallery/09.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image10: file(relativePath: {eq: "gallery/10.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image11: file(relativePath: {eq: "gallery/11.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image12: file(relativePath: {eq: "gallery/12.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image13: file(relativePath: {eq: "gallery/13.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image14: file(relativePath: {eq: "gallery/14.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image15: file(relativePath: {eq: "gallery/15.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image16: file(relativePath: {eq: "gallery/16.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image17: file(relativePath: {eq: "gallery/17.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image18: file(relativePath: {eq: "gallery/18.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image19: file(relativePath: {eq: "gallery/19.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image20: file(relativePath: {eq: "gallery/20.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image21: file(relativePath: {eq: "gallery/21.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image22: file(relativePath: {eq: "gallery/22.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image23: file(relativePath: {eq: "gallery/23.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const state = {
        gallery1: [
            {id: 1, img: data.image1.childImageSharp.fluid },
            {id: 3, img: data.image3.childImageSharp.fluid },
            {id: 5, img: data.image5.childImageSharp.fluid },
            {id: 7, img: data.image7.childImageSharp.fluid },
            {id: 9, img: data.image9.childImageSharp.fluid },
            {id: 11, img: data.image11.childImageSharp.fluid },
            {id: 13, img: data.image13.childImageSharp.fluid },
            {id: 15, img: data.image15.childImageSharp.fluid },
            {id: 17, img: data.image17.childImageSharp.fluid },
            {id: 19, img: data.image19.childImageSharp.fluid },
            {id: 21, img: data.image21.childImageSharp.fluid },
            {id: 23, img: data.image23.childImageSharp.fluid }
        ],
        gallery2: [
            {id: 2, img: data.image2.childImageSharp.fluid },
            {id: 4, img: data.image4.childImageSharp.fluid },
            {id: 6, img: data.image6.childImageSharp.fluid },
            {id: 8, img: data.image8.childImageSharp.fluid },
            {id: 10, img: data.image10.childImageSharp.fluid },
            {id: 12, img: data.image12.childImageSharp.fluid },
            {id: 14, img: data.image14.childImageSharp.fluid },
            {id: 16, img: data.image16.childImageSharp.fluid },
            {id: 18, img: data.image18.childImageSharp.fluid },
            {id: 20, img: data.image20.childImageSharp.fluid },
            {id: 22, img: data.image22.childImageSharp.fluid }
        ]
    }

    return (
        <Layout>
            <SEO title="Gallery" />
            <Wrapper>
                <div className="column">
                    {state.gallery1.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="image-container"
                                data-sal="slide-up"
                                data-sal-duration="500"
                                data-sal-delay="50"
                                data-sal-easing="ease-out-cubic"
                            >
                                <Img fluid={item.img} />
                            </div>
                        )
                    })}
                </div>
                <div className="column">
                    <div
                        className="image-container"
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-delay="50"
                        data-sal-easing="ease-out-cubic"
                    >
                        <video autoPlay loop muted>
                            <source src={MontagneVideo} type="video/mp4" />
                        </video>
                    </div>
                    {state.gallery2.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="image-container"
                                data-sal="slide-up"
                                data-sal-duration="500"
                                data-sal-delay="50"
                                data-sal-easing="ease-out-cubic"
                            >
                                <Img fluid={item.img} />
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
        </Layout>
    )
}

export default GalleryPage

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 140px 0;
    max-width: 886px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (max-width: 1024px) {
        padding: 160px 124px;
        max-width: none;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    @media screen and (max-width: 650px) {
        padding: 140px 80px;
    }
    @media screen and (max-width: 480px) {
        padding: 120px 24px;
    }
    .column {
        width: calc(50% - 5px);
        @media screen and (max-width: 768px) {
            width: 100%;
        }
        &:first-child {
            margin-right: 10px;
            @media screen and (max-width: 768px) {
                margin-right: 0;
                margin-bottom: 10px;
            }
        }
        .image-container {
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            img,
            video {
                width:100%;
            }
        }
    }
`