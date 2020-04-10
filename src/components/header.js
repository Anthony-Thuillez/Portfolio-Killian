import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SelectLanguage from './selectLanguage'
import styled from "styled-components"
import Logo from "../images/logo_white.png"

export default function Header(props) {

  const [isToggled, setToggled] = useState(false)

  const toggleMenu = () => setToggled(!isToggled)

  return (
    <>
      <MainHeader>
        <AniLink className="logo" cover to={(props.langs[1].selected ? '/fr/' : '/')} duration={0.9} direction="left" bg="linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)">
          <img src={ Logo } alt="logo" />
        </AniLink>
        <div className={"burger-menu" + (isToggled ? ' active' : '')}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </MainHeader>
      <SelectLanguage langs={props.langs} />
      <Modal className={"modal-menu" + (isToggled ? ' active' : '')}>
          <AniLink cover to={(props.langs[1].selected ? '/fr/' : '/')} duration={0.9} direction="left" bg="linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)">
            {
              (props.langs[1].selected ? 'Accueil' : 'Home')
            }
          </AniLink>
          <AniLink cover to={(props.langs[1].selected ? '/fr/projects/' : '/projects/')} duration={0.9} direction="right" bg="linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)">
            {
              (props.langs[1].selected ? 'Projets' : 'Projects')
            }
          </AniLink>
          <AniLink cover to={(props.langs[1].selected ? '/fr/gallery/' : '/gallery/')} duration={0.9} direction="right" bg="linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)">
            {
              (props.langs[1].selected ? 'Gallerie' : 'Gallery')
            }
          </AniLink>
          <AniLink cover to={(props.langs[1].selected ? '/fr/about/' : '/about/')} duration={0.9} direction="right" bg="linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)">
            {
              (props.langs[1].selected ? 'À propos' : 'About')
            }
          </AniLink>
      </Modal>
    </>
  )
}

const MainHeader = styled.header`
  .logo {
    z-index: 10;
    position: fixed;
    top: 24px;
    left: 24px;
    height: 60px;
    img {
      height: 100%;
    }
  }
  .burger-menu {
    position: fixed;
    z-index: 10;
    top: 24px;
    right: 24px;
    width: 24px;
    height: 20px;
    cursor: pointer;
    &:hover,
    &:active {
      span:before {
        width: 100%;
      }
    }
    span {
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      &:before {
        width: 75%;
        top: 6px;
        content: '';
      }
      &:after {
        width: 100%;
        bottom: 6px;
        content: '';
      }
    }
    span,
    span:before,
    span:after {
      position: absolute;
      display: block;
      height: 1px;
      right: 0;
      background: #fff;
      transition: all .3s ease-in-out;
    }
    &.active span {
      background: rgba(0, 0, 0, .0);
      &:before {
        width: 100%;
        top: 0px;
        transform: rotate(45deg);
      }
      &:after {
        bottom: 0px;
        transform: rotate(-45deg);
      }
    }
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  user-select: none;
  transition: all 0.3s ease-in-out;
  a {
    opacity: 0.3;
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: #fff;
    text-decoration: none;
    user-select: none;
    transition: opacity 0.3s ease-in-out;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
    &:hover {
      opacity: 1;
    }
  }
  &.active {
    opacity: 1;
    visibility: visible;
    user-select: initial;
    transform: translateY(0);
  }
`