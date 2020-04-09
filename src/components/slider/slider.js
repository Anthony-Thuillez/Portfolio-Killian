import React, { useState, useEffect, useReducer } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  SliderItem,
  SliderContainer,
  SliderWrapper,
  SlideContent,
  Navigation,
  NavigationItem,
  ControlLeft,
  ControlRight
} from "./styles"

import Project1 from "./project1"
import Project2 from "./project2"
import Project3 from "./project3"

const Slider = () => {

  const data = useStaticQuery(graphql`
    query Projects {
      project1: file(relativePath: {eq: "project/my_life.png"}) {
        id
        childImageSharp {
          fluid {
            src
          }
        }
      }
      project2: file(relativePath: {eq: "project/skeleton.png"}) {
        id
        childImageSharp {
          fluid {
            src
          }
        }
      }
      project3: file(relativePath: {eq: "project/cover_arts.png"}) {
        id
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mylife: allFile(filter: { relativeDirectory: { eq: "my_life" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      coverarts: allFile(filter: { relativeDirectory: { eq: "cover_arts" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      skeleton: allFile(filter: { relativeDirectory: { eq: "skeleton" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const [width, setWidth] = useState( typeof window !== 'undefined' &&  window.innerWidth )

  useEffect(() => {
    const handleResize = () => setWidth( typeof window !== "undefined" && window.innerWidth )
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    items: [
      { id: 1, title: "My Life", subtitle: "VFX VIDEO CLIP", background: data.project1.childImageSharp.fluid.src, images: data.mylife.nodes },
      { id: 2, title: "Skeleton", subtitle: "3D HORROR SEQUENCE", background: data.project2.childImageSharp.fluid.src, images: data.skeleton.nodes },
      { id: 3, title: "Cover Arts", subtitle: "CONCEPTION ART PRINTS", background: data.project3.childImageSharp.fluid.src, images: data.coverarts.nodes }
    ]
  })

  return (
    <SliderContainer className={"slider-instance"} height={"100vh"}>
      <SliderWrapper
        width={width * state.items.length}
        style={{
          transform: `translateX(${-(state.currentIndex * width)}px)`,
          transition: "transform 0.6s 0.4s ease-out",
          width: width * state.items.length + "px"
        }}
      >
        {state.items.map((i, index) => {
          return (
            <Slide
              key={i.id}
              last={index === state.items.length - 1}
              index={index}
              item={i}
              dispatch={dispatch}
              snap={state.snap}
              width={width}
              active={index === state.currentIndex}
            />
          )
        })}
      </SliderWrapper>
      <Navigation>
        {state.items.map((i, index) => {
          return (
            <NavigationItem
              active={index === state.currentIndex}
              onClick={() => dispatch({ type: "GOTO", index })}
              key={"nav" + i.id}
            >
              0{i.id}
            </NavigationItem>
          )
        })}
      </Navigation>
      <div>
        {state.currentIndex > 0 ? (
          <ControlLeft onClick={() => dispatch({ type: "PREV" })}>
            <span>←</span>
            <p>prev</p>
          </ControlLeft>
        ) : (
          ""
        )}

        {state.currentIndex < state.items.length - 1 ? (
          <ControlRight onClick={() => dispatch({ type: "NEXT" })}>
            <p>next</p>
            <span>→</span>
          </ControlRight>
        ) : (
          ""
        )}
      </div>
    </SliderContainer>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + (1 % state.items.length)
      }
    case "PREV":
      return {
        ...state,
        currentIndex: state.currentIndex - (1 % state.items.length)
      }
    case "GOTO":
      return {
        ...state,
        currentIndex: action.index
      }
    case "RESET":
      return { currentIndex: 0, currentPosition: 0 }

    default:
      return state
  }
}

const Slide = ({ item, width, active }) => {

  let slideID = item.id
  let slideContent

  if (slideID === 1) {
    slideContent = <Project1 images={item.images} />
  } else if (slideID === 2) {
    slideContent = <Project2 images={item.images} />
  } else if (slideID === 3) {
    slideContent = <Project3 images={item.images} />
  } else {
    return null
  }

  return (
    <SliderItem
      className={active ? 'active' : ''}
      width={width}
      background={item.background}
    >
      <div className="intro">
        <div className="intro-content">
          <h2 className="title">{item.title}</h2>
          <p className="subtitle">{item.subtitle}</p>
          <span className="info-scroll">scroll</span>
        </div>
      </div>
      <SlideContent>
        <div className="wrapper">
          {slideContent}
        </div>
      </SlideContent>
    </SliderItem>
  )
}

export default Slider